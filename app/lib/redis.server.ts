import Redis from "ioredis"

let redis: Redis | null = null

function getConnectionString() {
  const value = process.env.REDIS_URL
  if (value) return value
  throw new Error("Missing Redis connection string. Set REDIS_URL.")
}

export function getRedis(): Redis {
  if (!redis) {
    redis = new Redis(getConnectionString(), {
      maxRetriesPerRequest: 3,
      lazyConnect: true,
    })

    redis.on("error", (err) => {
      console.error("[Redis] Connection error:", err.message)
    })
  }

  return redis
}
