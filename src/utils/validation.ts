/**
 * Input validation helpers for user-supplied fields in the order flow.
 * Pure functions — no side effects, fully unit-testable.
 */

export const MAX_NAME_LENGTH = 100;
export const MAX_MESSAGE_LENGTH = 500;
export const MAX_QUANTITY = 10000;
export const MIN_QUANTITY = 1;

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

export function validateFullName(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return 'Full name is required';
  if (trimmed.length > MAX_NAME_LENGTH)
    return `Full name must be ${MAX_NAME_LENGTH} characters or fewer`;
  if (!/^[\p{L}\p{M}\s'.-]+$/u.test(trimmed)) return 'Full name contains invalid characters';
  return null;
}

export function validateEmail(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return 'Email is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return 'Email is not valid';
  if (trimmed.length > 254) return 'Email is too long';
  return null;
}

export function validatePhone(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return null;
  const digits = trimmed.replace(/[^\d]/g, '');
  if (digits.length < 7 || digits.length > 15) return 'Phone number must be 7–15 digits';
  return null;
}

export function validateQuantity(value: number): string | null {
  if (!Number.isFinite(value)) return 'Quantity must be a number';
  if (!Number.isInteger(value)) return 'Quantity must be a whole number';
  if (value < MIN_QUANTITY) return `Minimum order is ${MIN_QUANTITY}`;
  if (value > MAX_QUANTITY) return `Maximum order is ${MAX_QUANTITY}`;
  return null;
}

export function validateMessage(value: string): string | null {
  if (value.length > MAX_MESSAGE_LENGTH)
    return `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer`;
  return null;
}

export function validateOrderForm(input: {
  fullName: string;
  email: string;
  phone?: string;
  quantity: number;
  message?: string;
}): ValidationResult {
  const errors: Record<string, string> = {};
  const nameErr = validateFullName(input.fullName);
  if (nameErr) errors.fullName = nameErr;
  const emailErr = validateEmail(input.email);
  if (emailErr) errors.email = emailErr;
  const phoneErr = validatePhone(input.phone ?? '');
  if (phoneErr) errors.phone = phoneErr;
  const qtyErr = validateQuantity(input.quantity);
  if (qtyErr) errors.quantity = qtyErr;
  const msgErr = validateMessage(input.message ?? '');
  if (msgErr) errors.message = msgErr;
  return { valid: Object.keys(errors).length === 0, errors };
}

/** Strip HTML/script tags from free-text before use in messages or storage. */
export function sanitizeText(value: string): string {
  return value.replace(/<[^>]*>/g, '').trim();
}
