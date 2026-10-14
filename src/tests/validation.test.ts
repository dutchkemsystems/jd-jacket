import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  validateFullName,
  validateEmail,
  validateQuantity,
  validateMessage,
  validateOrderForm,
  sanitizeText,
} from '../utils/validation.js';

test('validateFullName accepts normal names', () => {
  assert.equal(validateFullName('Adebowale Adetule'), null);
  assert.equal(validateFullName("Mary-Jane O'Brien"), null);
});

test('validateFullName rejects empty and oversized', () => {
  assert.notEqual(validateFullName(''), null);
  assert.notEqual(validateFullName('a'.repeat(101)), null);
  assert.notEqual(validateFullName('<script>'), null);
});

test('validateEmail accepts valid and rejects invalid', () => {
  assert.equal(validateEmail('user@example.com'), null);
  assert.notEqual(validateEmail('not-an-email'), null);
  assert.notEqual(validateEmail(''), null);
});

test('validateQuantity enforces min, max, integer', () => {
  assert.equal(validateQuantity(10), null);
  assert.notEqual(validateQuantity(0), null);
  assert.notEqual(validateQuantity(10001), null);
  assert.notEqual(validateQuantity(1.5), null);
});

test('validateMessage enforces length only', () => {
  assert.equal(validateMessage('hello'), null);
  assert.notEqual(validateMessage('x'.repeat(501)), null);
});

test('validateOrderForm aggregates errors', () => {
  const result = validateOrderForm({
    fullName: '',
    email: 'bad',
    quantity: 0,
  });
  assert.equal(result.valid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.quantity);
});

test('sanitizeText strips tags', () => {
  assert.equal(sanitizeText('<b>hi</b>'), 'hi');
  assert.equal(sanitizeText('  hello  '), 'hello');
});
