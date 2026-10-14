/**
 * Minimal structured JSON logger.
 * Emits one JSON object per line for easy ingestion by log collectors.
 */

type Level = 'debug' | 'info' | 'warn' | 'error';

interface LogFields {
  [key: string]: unknown;
}

function emit(level: Level, message: string, fields?: LogFields): void {
  const entry = {
    ts: new Date().toISOString(),
    level,
    message,
    ...(fields ?? {}),
  };
  const line = JSON.stringify(entry);
  if (level === 'error') {
    process.stderr.write(line + '\n');
  } else {
    process.stdout.write(line + '\n');
  }
}

export const logger = {
  debug: (msg: string, fields?: LogFields) => emit('debug', msg, fields),
  info: (msg: string, fields?: LogFields) => emit('info', msg, fields),
  warn: (msg: string, fields?: LogFields) => emit('warn', msg, fields),
  error: (msg: string, fields?: LogFields) => emit('error', msg, fields),
};
