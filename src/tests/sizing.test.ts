import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { calculateTotalUnits, checkMoqCompliance } from '../utils/sizing.ts';

describe('Sizing & MOQ Calculation', () => {
  test('calculates correct total units across all size bins', () => {
    const counts = {
      XS: 2,
      S: 5,
      M: 10,
      L: 8,
      XL: 4,
      XXL: 2,
      XXXL: 1,
    };
    assert.equal(calculateTotalUnits(counts), 32);
  });

  test('validates MOQ compliance properly', () => {
    const moq = 15;
    const passing = checkMoqCompliance(20, moq);
    assert.equal(passing.compliant, true);
    assert.equal(passing.shortfall, 0);

    const failing = checkMoqCompliance(8, moq);
    assert.equal(failing.compliant, false);
    assert.equal(failing.shortfall, 7);
  });
});
