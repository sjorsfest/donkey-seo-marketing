// Redis-based cache with TTL
// All blog data is cached in Redis to avoid unnecessary database queries

import { getRedis } from "~/lib/redis.server"

const CACHE_PREFIX = "donkeyseo:blog:"

/**
 * Get cached data from Redis
 */
async function get<T>(key: string): Promise<T | null> {
  try {
    const redis = getRedis()
    const data = await redis.get(`${CACHE_PREFIX}${key}`)
    if (!data) return null
    return JSON.parse(data) as T
  } catch (error) {
    console.error(`[Cache] Redis GET failed for key "${key}":`, error)
    return null
  }
}

/**
 * Set data in Redis with TTL in seconds
 */
async function set<T>(key: string, data: T, ttlSeconds: number): Promise<void> {
  try {
    const redis = getRedis()
    await redis.set(
      `${CACHE_PREFIX}${key}`,
      JSON.stringify(data),
      "EX",
      ttlSeconds
    )
  } catch (error) {
    console.error(`[Cache] Redis SET failed for key "${key}":`, error)
  }
}

/**
 * Delete a specific cache key
 */
async function del(key: string): Promise<void> {
  try {
    const redis = getRedis()
    await redis.del(`${CACHE_PREFIX}${key}`)
  } catch (error) {
    console.error(`[Cache] Redis DEL failed for key "${key}":`, error)
  }
}

/**
 * Delete all cache keys matching a pattern
 */
async function delByPattern(pattern: string): Promise<void> {
  try {
    const redis = getRedis()
    const keys = await redis.keys(`${CACHE_PREFIX}${pattern}`)
    if (keys.length > 0) {
      await redis.del(...keys)
    }
  } catch (error) {
    console.error(`[Cache] Redis DEL pattern failed for "${pattern}":`, error)
  }
}

export const cache = { get, set, del, delByPattern }

/**
 * Helper function to cache the result of an async function
 */
export async function withCache<T>(
  key: string,
  ttlSeconds: number,
  fn: () => Promise<T>
): Promise<T> {
  const cached = await cache.get<T>(key)
  if (cached !== null) {
    console.log(`[Cache] HIT  "${key}" — served from Redis`)
    return cached
  }

  console.log(`[Cache] MISS "${key}" — fetching from database`)
  const result = await fn()

  await cache.set(key, result, ttlSeconds)

  return result
}
