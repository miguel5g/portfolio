import LRU from 'lru-cache';

type Options = {
  interval?: number;
  uniqueTokenPerInterval?: number;
  limit?: number;
};

export class RateLimit {
  readonly limit: number;

  private cache: LRU<string, number>;

  constructor({ interval, uniqueTokenPerInterval, limit }: Options) {
    this.limit = limit || 1;
    this.cache = new LRU({
      max: uniqueTokenPerInterval || 500,
      ttl: interval || 60_000, // Default to 1 minute
    });
  }

  async check(token: string): Promise<number> {
    return new Promise<number>((resolve) => {
      const count = this.cache.get(token) || 0;

      if (count >= this.limit) {
        return resolve(0);
      }

      this.cache.set(token, count + 1);

      resolve(this.limit - count);
    });
  }
}
