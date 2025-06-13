import { createLogger, format, transports } from 'winston';
import { CorrelationIdService } from '../common/correlation-id.service';

export const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(
      ({
        level,
        message,
        timestamp,
      }: {
        level: string;
        message: string;
        timestamp: string;
      }) => {
        const correlationId = CorrelationIdService.getId();
        return `[${timestamp}] [${level.toUpperCase()}] [CID: ${correlationId ?? 'N/A'}] ${message}`;
      },
    ),
  ),
  transports: [new transports.Console()],
});
