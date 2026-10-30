import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateContactForm,
  filterSkills,
  getPacketPath,
  ARCHITECTURE_HOPS,
  generateResumePlainText
} from './rules';
import { SKILLS_DATA, PERSONAL_INFO } from '../data/portfolioData';

test('validateContactForm rejects empty inputs', () => {
  const result = validateContactForm({ name: '', email: '', message: '' });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.message);
});

test('validateContactForm validates email format', () => {
  const invalidEmail = validateContactForm({
    name: 'Vinay',
    email: 'invalid-email',
    message: '9849370611'
  });
  assert.equal(invalidEmail.isValid, false);
  assert.ok(invalidEmail.errors.email);

  const valid = validateContactForm({
    name: 'Vinay Marni',
    email: 'marnivinaye@gmail.com',
    message: 'Hello, looking forward to discussing cloud roles.'
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('filterSkills filters by category and search term correctly', () => {
  const allSkills = filterSkills(SKILLS_DATA, 'All', '');
  assert.equal(allSkills.length, SKILLS_DATA.length);

  const cloudSkills = filterSkills(SKILLS_DATA, 'Cloud', '');
  assert.ok(cloudSkills.some(s => s.name === 'AWS'));
  assert.ok(cloudSkills.some(s => s.name === 'MS Azure'));
  assert.equal(cloudSkills.every(s => s.category === 'Cloud'), true);

  const pythonSearch = filterSkills(SKILLS_DATA, 'All', 'Python');
  assert.equal(pythonSearch.length, 1);
  assert.equal(pythonSearch[0].name, 'Python');
});

test('architecture hops sequence matches AWS flow requirements', () => {
  assert.deepEqual(ARCHITECTURE_HOPS, ['internet', 'alb', 'asg', 'ec2', 'rds']);
  assert.equal(getPacketPath(0), 'internet');
  assert.equal(getPacketPath(1), 'alb');
  assert.equal(getPacketPath(2), 'asg');
  assert.equal(getPacketPath(3), 'ec2');
  assert.equal(getPacketPath(4), 'rds');
});

test('generateResumePlainText generates complete candidate details', () => {
  const resume = generateResumePlainText(PERSONAL_INFO);
  assert.ok(resume.includes('MARNI VEERA VENKATA VINAY'));
  assert.ok(resume.includes('6.98'));
  assert.ok(resume.includes('2027'));
  assert.ok(resume.includes('Stock Market Dashboard'));
  assert.ok(resume.includes('NYERAS EDU-TECH'));
});
