import { AsyncLocalStorage } from 'async_hooks';

export const asyncLocalStorage = new AsyncLocalStorage<Map<string, string>>();

export const CORRELATION_ID_KEY = 'correlationId';

export const CorrelationIdService = {
  getId(): string | undefined {
    const store = asyncLocalStorage.getStore();
    return store?.get(CORRELATION_ID_KEY);
  },
  runWithId(id: string, callback: () => void) {
    const store = new Map<string, string>();
    store.set(CORRELATION_ID_KEY, id);
    asyncLocalStorage.run(store, callback);
  },
};
