import { test } from 'node:test';
import assert from 'node:assert/strict';
import { logger } from '../server/logger.js';

test('logger.info writes JSON to stdout', () => {
  const original = process.stdout.write.bind(process.stdout);
  let captured = '';
  process.stdout.write = ((chunk: string | Uint8Array) => {
    captured += typeof chunk === 'string' ? chunk : Buffer.from(chunk).toString();
    return true;
  }) as typeof process.stdout.write;

  try {
    logger.info('hello', { user: 'test' });
  } finally {
    process.stdout.write = original;
  }

  const parsed = JSON.parse(captured.trim());
  assert.equal(parsed.level, 'info');
  assert.equal(parsed.message, 'hello');
  assert.equal(parsed.user, 'test');
  assert.ok(parsed.ts);
});

test('logger.error writes JSON to stderr', () => {
  const original = process.stderr.write.bind(process.stderr);
  let captured = '';
  process.stderr.write = ((chunk: string | Uint8Array) => {
    captured += typeof chunk === 'string' ? chunk : Buffer.from(chunk).toString();
    return true;
  }) as typeof process.stderr.write;

  try {
    logger.error('boom');
  } finally {
    process.stderr.write = original;
  }

  const parsed = JSON.parse(captured.trim());
  assert.equal(parsed.level, 'error');
  assert.equal(parsed.message, 'boom');
});
