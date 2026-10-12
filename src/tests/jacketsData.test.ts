import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { JACKET_STYLES, INDUSTRIES, FAQS, SIZE_CHART } from '../data/jacketsData.ts';

describe('Jacket Catalog Data Integrity', () => {
  test('should have exactly 20 jacket styles', () => {
    assert.equal(JACKET_STYLES.length, 20);
  });

  test('all 20 jacket styles should have unique IDs and SKUs', () => {
    const ids = new Set(JACKET_STYLES.map((j) => j.id));
    const skus = new Set(JACKET_STYLES.map((j) => j.sku));
    assert.equal(ids.size, 20);
    assert.equal(skus.size, 20);
  });

  test('every jacket style should have required fields and colors', () => {
    for (const j of JACKET_STYLES) {
      assert.ok(j.name.length > 0, `Style ${j.id} missing name`);
      assert.ok(j.sku.startsWith('JD-'), `Style ${j.id} invalid SKU format`);
      assert.ok(j.moq > 0, `Style ${j.id} MOQ should be > 0`);
      assert.ok(j.availableColours.length >= 2, `Style ${j.id} should have at least 2 colours`);
      assert.ok(j.brandingMethods.length >= 1, `Style ${j.id} should have at least 1 branding method`);
      assert.ok(j.fabricSpecs.length > 0, `Style ${j.id} missing fabric specs`);
    }
  });

  test('should have exactly 8 industries as specified', () => {
    assert.equal(INDUSTRIES.length, 8);
    const expected = [
      'Corporate & Office Teams',
      'Logistics & Transport',
      'Security & Operational Teams',
      'Schools & Education',
      'Tourism & Hospitality',
      'Sports & Events',
      'Construction, Mining & Engineering',
      'Healthcare & Care Teams',
    ];
    for (const expectedName of expected) {
      const found = INDUSTRIES.some((ind) => ind.name === expectedName);
      assert.ok(found, `Expected industry "${expectedName}" not found`);
    }
  });

  test('should have 9 comprehensive FAQ items', () => {
    assert.equal(FAQS.length, 9);
    for (const faq of FAQS) {
      assert.ok(faq.question.length > 10);
      assert.ok(faq.answer.length > 20);
    }
  });

  test('size chart should cover XS to XXXL', () => {
    const sizes = SIZE_CHART.map((s) => s.size);
    assert.deepEqual(sizes, ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']);
  });
});
