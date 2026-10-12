import { OrderState } from '../components/OrderFormModal';
import { JacketStyle, COMPANY_INFO } from '../data/jacketsData';

/**
 * Formats order state into a clean, markdown-formatted WhatsApp briefing.
 */
export function formatOrderWhatsAppMessage(order: OrderState, jacket: JacketStyle, orderId = 'JDX-78421'): string {
  const sizeLines = Object.entries(order.sizes)
    .filter(([_, qty]) => qty > 0)
    .map(([sz, qty]) => `   • ${sz}: ${qty} units`)
    .join('\n');

  const brandingList = order.brandingOptions && order.brandingOptions.length > 0
    ? order.brandingOptions.join(', ')
    : order.brandingMethod;

  const placements =
    order.logoPlacements.length > 0
      ? order.logoPlacements.join(', ')
      : 'Left Chest (Standard)';

  const totalQuantity = Object.values(order.sizes).reduce((sum, val) => sum + (val || 0), 0);

  return `🧥 *NEW CUSTOM JACKET ORDER BRIEF — ${orderId}*
*To: JD Jackets by JD & Co BW*

🏢 *ORGANIZATION DETAILS*
• Company / Client: ${order.businessName || 'Not specified'}
• Contact Person: ${order.contactPerson || 'Not specified'}
• Industry Sector: ${order.industry}
• Delivery Location: ${order.deliveryCity || 'Not specified'}, ${order.deliveryCountry || 'Botswana'}
• Target Delivery Date: ${order.requiredDate || 'Standard production schedule'}

🧥 *JACKET SPECIFICATION*
• Style Model: ${jacket.name} (${jacket.sku})
• Collection: ${jacket.collection ? jacket.collection.toUpperCase() + ' PRO™' : jacket.category}
• Color Preference: ${order.selectedColourName}${
    order.customPantoneHex ? ` (Custom Code: ${order.customPantoneHex})` : ''
  }

📊 *SIZES & QUANTITY BREAKDOWN*
• Total Order Quantity: ${totalQuantity} units
${sizeLines || '   • Sizing quantities to be confirmed'}
${order.customMeasurements ? `• Custom Fitting Notes: ${order.customMeasurements}` : ''}

🧵 *BRANDING & EMBROIDERY*
• Branding Required: ${brandingList}
• Placements: ${placements}
• Names / Text to Add: ${order.namesOrText || 'Company logo'}
• Artwork Filenames: ${order.artworkFileName || 'Attaching files directly in this chat'}
${order.specialInstructions ? `• Additional Instructions: ${order.specialInstructions}` : ''}

👉 *REQUEST:* Please confirm quotation and provide our digital mockup proof for sign-off.`;
}

/**
 * Builds a direct wa.me link with encoded message.
 */
export function buildWhatsAppUrl(phoneNumber = COMPANY_INFO.whatsappRaw, message = COMPANY_INFO.defaultWhatsAppMessage): string {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message);
  return cleanNumber ? `https://wa.me/${cleanNumber}?text=${encodedText}` : `https://wa.me/?text=${encodedText}`;
}
