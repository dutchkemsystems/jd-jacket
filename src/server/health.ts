/**
 * Framework-agnostic health check.
 * Returns a plain object any HTTP layer (Express, Vercel, Fastify, etc.) can serialize.
 */

export interface HealthPayload {
  status: 'ok';
  ts: string;
  uptime: number;
}

export function healthPayload(): HealthPayload {
  return {
    status: 'ok',
    ts: new Date().toISOString(),
    uptime: process.uptime(),
  };
}
