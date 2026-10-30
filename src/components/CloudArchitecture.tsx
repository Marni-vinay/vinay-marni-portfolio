import React, { useState } from 'react';
import { 
  Cloud, 
  Globe, 
  Network, 
  Cpu, 
  Server, 
  Database, 
  Shield, 
  Key, 
  Activity, 
  Layers, 
  ArrowRight, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Info,
  Code2,
  Terminal,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { CLOUD_NODES } from '../data/portfolioData';
import { CloudArchitectureNode } from '../types/portfolio';
import { ARCHITECTURE_HOPS } from '../utils/rules';

interface CloudArchitectureProps {
  darkMode: boolean;
}

export const CloudArchitecture: React.FC<CloudArchitectureProps> = ({ darkMode }) => {
  const [selectedNode, setSelectedNode] = useState<CloudArchitectureNode>(CLOUD_NODES[1]); // Default to ALB
  const [activeTab, setActiveTab] = useState<'diagram' | 'cloudformation'>('diagram');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedHopIndex, setSimulatedHopIndex] = useState<number>(-1);
  const [simulationLog, setSimulationLog] = useState<string>('Ready to simulate inbound HTTPS traffic request.');
  const [copiedCode, setCopiedCode] = useState(false);

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulatedHopIndex(0);
    setSimulationLog('1/5 [Internet]: Client sends HTTPS GET /api/v1/stocks request via Route 53 & IGW.');

    const timeouts = [
      setTimeout(() => {
        setSimulatedHopIndex(1);
        setSimulationLog('2/5 [ALB]: Application Load Balancer terminates TLS, evaluates health checks, routes to target group.');
      }, 1000),
      setTimeout(() => {
        setSimulatedHopIndex(2);
        setSimulationLog('3/5 [Auto Scaling]: ASG balances request distribution across active healthy EC2 instances.');
      }, 2000),
      setTimeout(() => {
        setSimulatedHopIndex(3);
        setSimulationLog('4/5 [EC2 App Node]: Containerized API processes JWT auth & constructs parameterized SQL query.');
      }, 3000),
      setTimeout(() => {
        setSimulatedHopIndex(4);
        setSimulationLog('5/5 [RDS Multi-AZ]: Query executed on primary DB instance (10.0.100.x) in private DB subnet. 200 OK returned!');
      }, 4000),
      setTimeout(() => {
        setIsSimulating(false);
        setSimulationLog('Simulation completed successfully! Round-trip latency: 34ms • Response: HTTP 200 OK.');
      }, 5500),
    ];

    return () => timeouts.forEach(clearTimeout);
  };

  const sampleCloudFormationYaml = `AWSTemplateFormatVersion: '2010-09-09'
Description: AWS High-Availability Architecture - Vinay Marni Portfolio
Parameters:
  VpcCIDR:
    Type: String
    Default: 10.0.0.0/16
  EnvironmentName:
    Type: String
    Default: Production

Resources:
  # 1. Custom VPC
  VPC:
    Type: AWS::EC2::VPC
    Properties:
      CidrBlock: !Ref VpcCIDR
      EnableDnsSupport: true
      EnableDnsHostnames: true
      Tags:
        - Key: Name
          Value: !Sub \${EnvironmentName}-VPC

  # 2. Internet Gateway
  InternetGateway:
    Type: AWS::EC2::InternetGateway
  AttachGateway:
    Type: AWS::EC2::VPCGatewayAttachment
    Properties:
      VpcId: !Ref VPC
      InternetGatewayId: !Ref InternetGateway

  # 3. Application Load Balancer (Public Subnets)
  ApplicationLoadBalancer:
    Type: AWS::ElasticLoadBalancingV2::LoadBalancer
    Properties:
      Type: application
      Scheme: internet-facing
      SecurityGroups: [!Ref ALBSecurityGroup]
      Subnets: [!Ref PublicSubnetA, !Ref PublicSubnetB]

  # 4. Auto Scaling Group & Launch Template
  AppAutoScalingGroup:
    Type: AWS::AutoScaling::AutoScalingGroup
    Properties:
      MinSize: '2'
      MaxSize: '6'
      DesiredCapacity: '2'
      TargetGroupARNs: [!Ref ALBTargetGroup]
      VPCZoneIdentifier: [!Ref PrivateSubnetA, !Ref PrivateSubnetB]

  # 5. Amazon RDS Multi-AZ Database
  MultiAZDatabase:
    Type: AWS::RDS::DBInstance
    Properties:
      DBInstanceClass: db.t3.medium
      Engine: mysql
      MultiAZ: true
      AllocatedStorage: 50
      VPCSecurityGroups: [!Ref DatabaseSecurityGroup]
      DBSubnetGroupName: !Ref DBSubnetGroup`;

  const copyYamlToClipboard = () => {
    navigator.clipboard.writeText(sampleCloudFormationYaml);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const getNodeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-5 h-5 text-sky-400" />;
      case 'Network': return <Network className="w-5 h-5 text-indigo-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Database': return <Database className="w-5 h-5 text-cyan-400" />;
      case 'Shield': return <Shield className="w-5 h-5 text-purple-400" />;
      case 'Key': return <Key className="w-5 h-5 text-yellow-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-rose-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-blue-400" />;
      default: return <Cloud className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section 
      id="cloud" 
      className={`py-20 relative ${
        darkMode ? 'bg-[#0B132B] text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-500 dark:text-amber-400 border border-amber-500/20">
            <Cloud className="w-3.5 h-3.5" />
            <span>AWS Cloud Systems Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Cloud Engineering & Infrastructure
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Production reference architecture: <span className="font-mono text-indigo-500 font-semibold">Internet → ALB → Auto Scaling → EC2 → RDS</span> with segregated VPC subnets, IAM least-privilege, CloudFormation automation, and CloudWatch telemetry.
          </p>

          {/* View Toggle */}
          <div className="pt-2 flex items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('diagram')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'diagram'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              <Network className="w-3.5 h-3.5" />
              <span>Interactive Architecture Diagram</span>
            </button>
            <button
              onClick={() => setActiveTab('cloudformation')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'cloudformation'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>CloudFormation Template (YAML)</span>
            </button>
          </div>
        </div>

        {activeTab === 'diagram' ? (
          <div className="space-y-6">
            {/* Simulation Toolbar */}
            <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={runSimulation}
                  disabled={isSimulating}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                    isSimulating
                      ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                      : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md active:scale-95'
                  }`}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isSimulating ? 'Simulating Traffic...' : 'Simulate Traffic Request'}</span>
                </button>
                <button
                  onClick={() => {
                    setIsSimulating(false);
                    setSimulatedHopIndex(-1);
                    setSimulationLog('Ready to simulate inbound HTTPS traffic request.');
                  }}
                  className="p-2 rounded-xl border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800"
                  title="Reset simulation"
                  aria-label="Reset simulation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Simulation Terminal Log */}
              <div className="w-full sm:flex-1 max-w-2xl font-mono text-xs px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-none" />
                <span>{simulationLog}</span>
              </div>
            </div>

            {/* Architecture Canvas: VPC Container */}
            <div className={`p-6 sm:p-8 rounded-3xl border relative overflow-hidden ${
              darkMode 
                ? 'bg-gradient-to-b from-[#090e1a] to-[#0c1322] border-slate-800' 
                : 'bg-slate-100/70 border-slate-200'
            }`}>
              {/* VPC Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-6 border-b border-slate-800/60 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <Shield className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-mono flex items-center gap-2">
                      AWS Custom VPC
                      <span className="text-xs px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                        10.0.0.0/16
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400">
                      Multi-Tier High Availability across 2 Availability Zones (AZ-a & AZ-b)
                    </p>
                  </div>
                </div>

                {/* Management Pill Group: IAM, CloudFormation, CloudWatch */}
                <div className="flex items-center gap-2">
                  {['iam', 'cloudformation', 'cloudwatch'].map((nodeId) => {
                    const node = CLOUD_NODES.find((n) => n.id === nodeId)!;
                    const isSelected = selectedNode?.id === nodeId;
                    return (
                      <button
                        key={nodeId}
                        onClick={() => setSelectedNode(node)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium flex items-center gap-1.5 border transition-all ${
                          isSelected
                            ? 'bg-indigo-600 text-white border-indigo-500 shadow-md'
                            : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-600'
                        }`}
                      >
                        {getNodeIcon(node.iconName)}
                        <span>{node.title.split(' ')[0]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Main Visual Pipeline: Internet → ALB → Auto Scaling → EC2 → RDS */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-stretch relative">
                
                {/* Node 1: Internet & Users */}
                {(() => {
                  const node = CLOUD_NODES.find(n => n.id === 'internet')!;
                  const isHopActive = simulatedHopIndex === 0;
                  const isSelected = selectedNode?.id === 'internet';
                  return (
                    <div
                      onClick={() => setSelectedNode(node)}
                      className={`cursor-pointer p-4 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
                        isHopActive
                          ? 'ring-2 ring-sky-400 bg-sky-950/40 border-sky-400 scale-105 shadow-xl'
                          : isSelected
                            ? 'border-indigo-500 bg-indigo-950/30'
                            : darkMode
                              ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                              : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20">
                            <Globe className="w-5 h-5 text-sky-400" />
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-400">
                            Step 1
                          </span>
                        </div>
                        <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                          Internet Gateway
                        </h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          Route 53 & Public IGW
                        </p>
                      </div>
                      <div className="mt-4 pt-2 border-t border-slate-800/60 text-[10px] font-mono text-slate-400">
                        CIDR: 0.0.0.0/0
                      </div>
                    </div>
                  );
                })()}

                {/* Node 2: ALB (Public Subnet) */}
                {(() => {
                  const node = CLOUD_NODES.find(n => n.id === 'alb')!;
                  const isHopActive = simulatedHopIndex === 1;
                  const isSelected = selectedNode?.id === 'alb';
                  return (
                    <div
                      onClick={() => setSelectedNode(node)}
                      className={`cursor-pointer p-4 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
                        isHopActive
                          ? 'ring-2 ring-indigo-400 bg-indigo-950/40 border-indigo-400 scale-105 shadow-xl'
                          : isSelected
                            ? 'border-indigo-500 bg-indigo-950/30'
                            : darkMode
                              ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                              : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                            <Network className="w-5 h-5 text-indigo-400" />
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400">
                            Step 2
                          </span>
                        </div>
                        <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                          App Load Balancer
                        </h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          Public Subnets (AZ-a/b)
                        </p>
                      </div>
                      <div className="mt-4 pt-2 border-t border-slate-800/60 text-[10px] font-mono text-indigo-400">
                        Port 80/443 SSL Termination
                      </div>
                    </div>
                  );
                })()}

                {/* Node 3: Auto Scaling */}
                {(() => {
                  const node = CLOUD_NODES.find(n => n.id === 'asg')!;
                  const isHopActive = simulatedHopIndex === 2;
                  const isSelected = selectedNode?.id === 'asg';
                  return (
                    <div
                      onClick={() => setSelectedNode(node)}
                      className={`cursor-pointer p-4 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
                        isHopActive
                          ? 'ring-2 ring-amber-400 bg-amber-950/40 border-amber-400 scale-105 shadow-xl'
                          : isSelected
                            ? 'border-indigo-500 bg-indigo-950/30'
                            : darkMode
                              ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                              : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20">
                            <Cpu className="w-5 h-5 text-amber-400" />
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400">
                            Step 3
                          </span>
                        </div>
                        <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                          Auto Scaling (ASG)
                        </h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          Target Tracking (65% CPU)
                        </p>
                      </div>
                      <div className="mt-4 pt-2 border-t border-slate-800/60 text-[10px] font-mono text-amber-400">
                        Capacity: Min 2 / Max 6
                      </div>
                    </div>
                  );
                })()}

                {/* Node 4: EC2 Instances (Private Subnet) */}
                {(() => {
                  const node = CLOUD_NODES.find(n => n.id === 'ec2')!;
                  const isHopActive = simulatedHopIndex === 3;
                  const isSelected = selectedNode?.id === 'ec2';
                  return (
                    <div
                      onClick={() => setSelectedNode(node)}
                      className={`cursor-pointer p-4 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
                        isHopActive
                          ? 'ring-2 ring-emerald-400 bg-emerald-950/40 border-emerald-400 scale-105 shadow-xl'
                          : isSelected
                            ? 'border-indigo-500 bg-indigo-950/30'
                            : darkMode
                              ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                              : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                            <Server className="w-5 h-5 text-emerald-400" />
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
                            Step 4
                          </span>
                        </div>
                        <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                          EC2 Instances
                        </h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          Private App Subnet (No Public IP)
                        </p>
                      </div>
                      <div className="mt-4 pt-2 border-t border-slate-800/60 text-[10px] font-mono text-emerald-400">
                        IAM Role Attached
                      </div>
                    </div>
                  );
                })()}

                {/* Node 5: Amazon RDS (Multi-AZ) */}
                {(() => {
                  const node = CLOUD_NODES.find(n => n.id === 'rds')!;
                  const isHopActive = simulatedHopIndex === 4;
                  const isSelected = selectedNode?.id === 'rds';
                  return (
                    <div
                      onClick={() => setSelectedNode(node)}
                      className={`cursor-pointer p-4 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
                        isHopActive
                          ? 'ring-2 ring-cyan-400 bg-cyan-950/40 border-cyan-400 scale-105 shadow-xl'
                          : isSelected
                            ? 'border-indigo-500 bg-indigo-950/30'
                            : darkMode
                              ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                              : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                            <Database className="w-5 h-5 text-cyan-400" />
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400">
                            Step 5
                          </span>
                        </div>
                        <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                          Amazon RDS
                        </h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          Multi-AZ Standby Replica
                        </p>
                      </div>
                      <div className="mt-4 pt-2 border-t border-slate-800/60 text-[10px] font-mono text-cyan-400">
                        Isolated DB Subnets
                      </div>
                    </div>
                  );
                })()}

              </div>

              {/* Subnet Legend Banner */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-indigo-500" />
                    <span>Public Subnet (ALB, IGW)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-emerald-500" />
                    <span>Private App Subnet (ASG, EC2)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-cyan-500" />
                    <span>Isolated DB Subnet (RDS Multi-AZ)</span>
                  </div>
                </div>
                <span className="text-[11px] text-slate-500">
                  Tip: Click any component to inspect its architecture specifications
                </span>
              </div>
            </div>

            {/* Cloud Architect Component Inspector Drawer */}
            {selectedNode && (
              <div className={`p-6 rounded-2xl border transition-all ${
                darkMode ? 'bg-slate-900/90 border-slate-800 shadow-xl' : 'bg-white border-slate-200 shadow-md'
              }`}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                      {getNodeIcon(selectedNode.iconName)}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white font-mono">
                        {selectedNode.title}
                      </h4>
                      <p className="text-xs text-indigo-500 dark:text-indigo-400 font-mono">
                        AWS Service: {selectedNode.awsService}
                      </p>
                    </div>
                  </div>

                  {selectedNode.cidrOrConfig && (
                    <div className="px-3 py-1.5 rounded-lg font-mono text-xs bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                      Config: {selectedNode.cidrOrConfig}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  {/* Left: Description & Key Responsibilities */}
                  <div className="space-y-3">
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {selectedNode.description}
                    </p>
                    <div className="space-y-2">
                      <h5 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
                        Architectural Responsibilities:
                      </h5>
                      <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                        {selectedNode.keyResponsibilities.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: CloudWatch Metrics & Security Guardrails */}
                  <div className="space-y-3">
                    <h5 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-rose-400" />
                      Monitored CloudWatch Metrics:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedNode.metricsMonitored.map((metric) => (
                        <span
                          key={metric}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-indigo-600 dark:text-indigo-300"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-indigo-500/5 border border-indigo-500/15 text-xs text-slate-600 dark:text-slate-300">
                      <strong className="text-indigo-500 dark:text-indigo-400 block mb-0.5">
                        AWS Well-Architected Alignment:
                      </strong>
                      Configured for the Reliability & Security Pillars with automated failover and least-privilege IAM security groups.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* CloudFormation YAML Tab */
          <div className={`p-6 rounded-2xl border ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
                <Code2 className="w-4 h-4 text-indigo-400" />
                <span>aws-architecture-stack.yaml (CloudFormation Template)</span>
              </div>
              <button
                onClick={copyYamlToClipboard}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 flex items-center gap-1.5 transition-all"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Copied YAML!' : 'Copy Code'}</span>
              </button>
            </div>
            <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 font-mono text-xs overflow-x-auto leading-relaxed">
              <code>{sampleCloudFormationYaml}</code>
            </pre>
          </div>
        )}

      </div>
    </section>
  );
};
