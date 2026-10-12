import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { formatOrderWhatsAppMessage, buildWhatsAppUrl } from '../utils/whatsapp.ts';
import { JACKET_STYLES } from '../data/jacketsData.ts';

describe('WhatsApp Deep Link & Order Formatting', () => {
  const dummyOrder = {
    businessName: 'Apex Logistics Ltd',
    contactPerson: 'David Mwangi',
    email: 'ops@apex.co.ke',
    whatsappNumber: '+254711223344',
    industry: 'Logistics & Transport',
    deliveryCity: 'Mombasa',
    deliveryCountry: 'Kenya',
    requiredDate: '2026-11-01',
    jacketStyleId: 'technical-softshell',
    sizes: { XS: 0, S: 10, M: 25, L: 20, XL: 10, XXL: 5, XXXL: 0 },
    selectedColourName: 'Royal Fleet',
    customPantoneHex: 'PMS 286 C',
    brandingMethod: 'High-Density Multi-Thread Embroidery',
    logoPlacements: ['Left Chest', 'Back Center'],
    artworkFileName: 'Apex_Fleet_Logo.ai',
    specialInstructions: 'Need reflective safety piping on sleeves.',
  };

  const dummyJacket = JACKET_STYLES.find((j) => j.id === 'technical-softshell')!;

  test('generates formatted message with company and size breakdown', () => {
    const message = formatOrderWhatsAppMessage(dummyOrder, dummyJacket, 'JDX-99001');
    assert.ok(message.includes('Apex Logistics Ltd'));
    assert.ok(message.includes('David Mwangi'));
    assert.ok(message.includes('Royal Fleet'));
    assert.ok(message.includes('70 units')); // 10+25+20+10+5
    assert.ok(message.includes('M: 25 units'));
    assert.ok(message.includes('High-Density Multi-Thread Embroidery'));
    assert.ok(message.includes('Left Chest, Back Center'));
  });

  test('builds valid wa.me URL with sanitized phone number and encoded payload', () => {
    const url = buildWhatsAppUrl('+254 (700) 000-000', 'Hello JD Jackets!');
    assert.ok(url.startsWith('https://wa.me/254700000000?text='));
    assert.ok(url.includes('Hello%20JD%20Jackets!'));
  });
});
