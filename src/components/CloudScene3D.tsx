import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Eye, EyeOff, RotateCw, Layers, Sparkles } from 'lucide-react';

interface CloudScene3DProps {
  darkMode: boolean;
}

export const CloudScene3D: React.FC<CloudScene3DProps> = ({ darkMode }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isControlsOpen, setIsControlsOpen] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(1.0);
  const [explodedRatio, setExplodedRatio] = useState(0.0);
  const [activePreset, setActivePreset] = useState<'cloud' | 'server' | 'orbit'>('cloud');

  // Mutable refs for Three.js state without tearing down WebGL
  const animStateRef = useRef({
    rotationSpeed: 1.0,
    explodedRatio: 0.0,
    targetExploded: 0.0,
  });

  useEffect(() => {
    animStateRef.current.rotationSpeed = rotationSpeed;
  }, [rotationSpeed]);

  useEffect(() => {
    animStateRef.current.targetExploded = explodedRatio;
  }, [explodedRatio]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL as prescribed by the Three.js skill
    const isSoftwareGl = (() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(4.5, 3.2, 5.0);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = darkMode ? 1.2 : 1.0;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 3. Studio Environment Reflection via RoomEnvironment
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // 4. Lighting Rig (Warm Key Light + Cool Hemisphere Fill)
    const keyLight = new THREE.DirectionalLight(0xfff5e6, 2.8);
    keyLight.position.set(5, 8, 4);
    keyLight.castShadow = !isSoftwareGl;
    if (!isSoftwareGl) {
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      keyLight.shadow.bias = -0.0005;
      keyLight.shadow.normalBias = 0.02;
    }
    scene.add(keyLight);

    const hemiLight = new THREE.HemisphereLight(0x4361ee, 0x1e1e2f, darkMode ? 1.4 : 1.0);
    scene.add(hemiLight);

    const blueRimLight = new THREE.PointLight(0x38bdf8, 3.0, 10);
    blueRimLight.position.set(-4, 2, -3);
    scene.add(blueRimLight);

    // 5. Procedural Texture for Server Blades (Zero 404 dependencies)
    const createServerBladeTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 128;
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, 256, 128);

      // Grill patterns
      ctx.fillStyle = '#1e293b';
      for (let x = 10; x < 180; x += 10) {
        ctx.fillRect(x, 15, 6, 98);
      }

      // Status indicator lights
      ctx.fillStyle = '#10b981'; // Green status LED
      ctx.fillRect(200, 25, 12, 12);
      ctx.fillStyle = '#38bdf8'; // Blue activity LED
      ctx.fillRect(200, 48, 12, 12);
      ctx.fillStyle = '#6366f1'; // Violet data link LED
      ctx.fillRect(200, 71, 12, 12);
      ctx.fillStyle = '#f59e0b'; // Amber warning LED
      ctx.fillRect(200, 94, 12, 12);

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      return texture;
    };

    const bladeTexture = createServerBladeTexture();

    // 6. Composite 3D Procedural Model (Group of 3-12 parts)
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // (A) Grounding Radial Contact Shadow Plane
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const sCtx = shadowCanvas.getContext('2d')!;
    const grad = sCtx.createRadialGradient(64, 64, 10, 64, 64, 60);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0.45)');
    grad.addColorStop(0.5, 'rgba(0, 0, 0, 0.2)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    sCtx.fillStyle = grad;
    sCtx.fillRect(0, 0, 128, 128);
    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);

    const shadowGeo = new THREE.PlaneGeometry(5, 5);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -1.5;
    scene.add(shadowMesh);

    // (B) Central Cloud Infrastructure Tower / Server Rack Blades
    const serverBlades: THREE.Mesh[] = [];
    const bladeGeometry = new THREE.BoxGeometry(1.6, 0.22, 1.2);
    const bladeMaterial = new THREE.MeshStandardMaterial({
      map: bladeTexture,
      roughness: 0.25,
      metalness: 0.85,
    });

    const rackChassisGeo = new THREE.BoxGeometry(1.7, 1.8, 1.3);
    const rackChassisMat = new THREE.MeshStandardMaterial({
      color: 0x090d16,
      roughness: 0.6,
      metalness: 0.9,
      wireframe: true,
    });
    const chassisMesh = new THREE.Mesh(rackChassisGeo, rackChassisMat);
    chassisMesh.position.y = -0.3;
    masterGroup.add(chassisMesh);

    const bladeCount = 5;
    for (let i = 0; i < bladeCount; i++) {
      const blade = new THREE.Mesh(bladeGeometry, bladeMaterial);
      const baseY = -0.9 + i * 0.32;
      blade.position.set(0, baseY, 0);
      blade.castShadow = !isSoftwareGl;
      blade.receiveShadow = !isSoftwareGl;
      blade.userData = { baseY, index: i };
      serverBlades.push(blade);
      masterGroup.add(blade);
    }

    // (C) Cloud Compute Glowing Core (Orb of data)
    const coreGeo = new THREE.IcosahedronGeometry(0.5, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x4f46e5,
      emissive: 0x4338ca,
      emissiveIntensity: 0.9,
      roughness: 0.15,
      metalness: 0.95,
      wireframe: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.y = 1.1;
    masterGroup.add(coreMesh);

    // (D) Concentric Orbital Rings (Representing Cloud Availability Zones)
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.3,
      metalness: 0.9,
    });
    const ringGeo1 = new THREE.TorusGeometry(2.2, 0.025, 16, 100);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    masterGroup.add(ring1);

    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0x818cf8,
      roughness: 0.3,
      metalness: 0.9,
    });
    const ringGeo2 = new THREE.TorusGeometry(2.6, 0.02, 16, 100);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 6;
    masterGroup.add(ring2);

    // (E) Satellite Microservice Nodes (Representing EC2 & Database clusters)
    const satelliteGroup = new THREE.Group();
    masterGroup.add(satelliteGroup);

    const satelliteGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const satelliteMat = new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
    });

    const satellites: THREE.Mesh[] = [];
    const numSatellites = 4;
    for (let i = 0; i < numSatellites; i++) {
      const sat = new THREE.Mesh(satelliteGeo, satelliteMat);
      sat.userData = { angle: (i * Math.PI * 2) / numSatellites, distance: 2.4, speed: 0.8 + i * 0.2 };
      satellites.push(sat);
      satelliteGroup.add(sat);
    }

    // 7. Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = !isSoftwareGl;
    controls.dampingFactor = 0.05;
    controls.minDistance = 3.5;
    controls.maxDistance = 9;
    controls.maxPolarAngle = Math.PI / 2 + 0.1; // Don't flip below ground

    // 8. Animation Loop
    let frameId = 0;
    let clock = new THREE.Clock();

    function afterDraw(cb: () => void) {
      const gl = renderer.getContext() as WebGL2RenderingContext;
      const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
      gl.flush();
      const poll = () => {
        const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
        if (state === gl.UNSIGNALED) {
          frameId = window.setTimeout(poll, 5);
        } else {
          if (sync) gl.deleteSync(sync);
          frameId = window.setTimeout(cb, 80);
        }
      };
      frameId = window.setTimeout(poll, 5);
    }

    function tick() {
      const delta = clock.getDelta();
      const state = animStateRef.current;

      // Exponential damping towards target exploded ratio
      state.explodedRatio = THREE.MathUtils.damp(
        state.explodedRatio,
        state.targetExploded,
        4.0,
        delta
      );

      // Rotate group smoothly
      masterGroup.rotation.y += delta * 0.4 * state.rotationSpeed;
      ring1.rotation.z += delta * 0.3 * state.rotationSpeed;
      ring2.rotation.z -= delta * 0.25 * state.rotationSpeed;
      coreMesh.rotation.x += delta * 0.5 * state.rotationSpeed;
      coreMesh.rotation.y += delta * 0.7 * state.rotationSpeed;

      // Animate satellite nodes orbiting
      satellites.forEach((sat) => {
        sat.userData.angle += delta * sat.userData.speed * state.rotationSpeed;
        sat.position.x = Math.cos(sat.userData.angle) * sat.userData.distance;
        sat.position.z = Math.sin(sat.userData.angle) * sat.userData.distance;
        sat.position.y = Math.sin(sat.userData.angle * 2) * 0.4;
      });

      // Update exploded server blades
      serverBlades.forEach((blade) => {
        const idx = blade.userData.index;
        const spreadOffset = (idx - 2) * 0.45 * state.explodedRatio;
        blade.position.y = blade.userData.baseY + spreadOffset;
        blade.position.z = Math.sin(idx * 1.5) * 0.3 * state.explodedRatio;
      });

      controls.update();
      renderer.render(scene, camera);

      if (isSoftwareGl) {
        afterDraw(tick);
      } else {
        frameId = requestAnimationFrame(tick);
      }
    }

    tick();

    // Resize handling
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(frameId);
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      bladeTexture.dispose();
      shadowTexture.dispose();
      bladeGeometry.dispose();
      bladeMaterial.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      satelliteGeo.dispose();
      satelliteMat.dispose();
      rackChassisGeo.dispose();
      rackChassisMat.dispose();
      shadowGeo.dispose();
      shadowMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [darkMode]);

  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900/60 to-slate-950/90 border border-slate-800/80 shadow-2xl flex flex-col items-center justify-center">
      {/* 3D WebGL Canvas Container */}
      <div 
        ref={mountRef} 
        className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing" 
        data-testid="cloud-3d-canvas"
      />

      {/* Floating Info Tag at Top Left */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/60 text-slate-200 text-xs font-mono backdrop-blur-sm pointer-events-none">
        <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
        <span>AWS Cloud Node 3D Simulator</span>
      </div>

      {/* Collapsible Bottom Control Dock as mandated by threejs skill */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-[92%] max-w-[500px]">
        {/* Toggle bar */}
        <div className="flex justify-center mb-1">
          <button
            onClick={() => setIsControlsOpen(!isControlsOpen)}
            className="px-3 py-1 rounded-t-lg bg-slate-900/90 border-t border-x border-slate-700 text-[11px] font-medium text-slate-300 hover:text-white flex items-center gap-1.5 shadow-md active:scale-95 transition-transform"
          >
            {isControlsOpen ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{isControlsOpen ? '▾ Hide 3D Controls' : '▴ 3D Scene Controls'}</span>
          </button>
        </div>

        {/* Controls Body */}
        {isControlsOpen && (
          <div className="p-3 rounded-xl bg-slate-900/95 border border-slate-700/80 shadow-2xl text-white space-y-3">
            <div className="grid grid-cols-2 gap-3 text-xs">
              {/* Rotation Speed Slider */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-slate-300">
                  <span className="flex items-center gap-1">
                    <RotateCw className="w-3 h-3 text-sky-400" /> Orbit Speed
                  </span>
                  <span className="font-mono text-sky-400">{rotationSpeed.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="2.5"
                  step="0.1"
                  value={rotationSpeed}
                  onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
                  className="w-full accent-indigo-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              {/* Exploded Blade Inspection Slider */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-slate-300">
                  <span className="flex items-center gap-1">
                    <Layers className="w-3 h-3 text-indigo-400" /> Exploded View
                  </span>
                  <span className="font-mono text-indigo-400">{Math.round(explodedRatio * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={explodedRatio}
                  onChange={(e) => setExplodedRatio(parseFloat(e.target.value))}
                  className="w-full accent-indigo-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800">
              <span>Drag to rotate 3D view</span>
              <span>Scroll to zoom</span>
              <button
                onClick={() => {
                  setRotationSpeed(1.0);
                  setExplodedRatio(0.0);
                }}
                className="text-indigo-400 hover:text-indigo-300 underline font-mono"
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
