import { OrderState } from '../components/OrderFormModal';
import { JacketStyle } from '../data/jacketsData';

/**
 * Formats order state into a clean, markdown-formatted WhatsApp briefing.
 */
export function formatOrderWhatsAppMessage(order: OrderState, jacket: JacketStyle, orderId = 'JDX-78421'): string {
  const sizeLines = Object.entries(order.sizes)
    .filter(([_, qty]) => qty > 0)
    .map(([sz, qty]) => `   • ${sz}: ${qty} units`)
    .join('\n');

  const placements =
    order.logoPlacements.length > 0
      ? order.logoPlacements.join(', ')
      : 'Left Chest (Standard)';

  const totalQuantity = Object.values(order.sizes).reduce((sum, val) => sum + (val || 0), 0);

  return `🧥 *NEW CUSTOM JACKET ORDER BRIEF — ${orderId}*

🏢 *ORGANIZATION DETAILS*
• Company / Client: ${order.businessName || 'Not specified'}
• Contact Person: ${order.contactPerson || 'Not specified'}
• Industry Sector: ${order.industry}
• Delivery Destination: ${order.deliveryCity || 'Not specified'}, ${order.deliveryCountry}
• Target Delivery Date: ${order.requiredDate || 'Standard production timeline (7–10 days)'}

🧥 *JACKET SPECIFICATION*
• Style Model: ${jacket.name} (${jacket.sku})
• Category: ${jacket.category}
• Color Preference: ${order.selectedColourName}${
    order.customPantoneHex ? ` (Custom Code: ${order.customPantoneHex})` : ''
  }

📊 *SIZES & QUANTITY BREAKDOWN*
• Total Order Quantity: ${totalQuantity} units
${sizeLines || '   • Sizing to be finalized'}

🧵 *BRANDING & DECORATION*
• Branding Method: ${order.brandingMethod}
• Logo Placements: ${placements}
• Artwork Attached: ${order.artworkFileName || 'Attaching files directly in this chat'}
${order.specialInstructions ? `• Additional Notes: ${order.specialInstructions}` : ''}

👉 *REQUEST:* Please confirm quotation and provide our digital mock-up proof for sign-off.`;
}

/**
 * Builds a direct wa.me link with encoded message.
 */
export function buildWhatsAppUrl(phoneNumber: string, message: string): string {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}
