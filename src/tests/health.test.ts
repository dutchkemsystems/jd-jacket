import { test } from 'node:test';
import assert from 'node:assert/strict';
import { healthPayload } from '../server/health.js';

test('healthPayload returns ok status', () => {
  const p = healthPayload();
  assert.equal(p.status, 'ok');
  assert.ok(typeof p.ts === 'string');
  assert.ok(typeof p.uptime === 'number');
});
