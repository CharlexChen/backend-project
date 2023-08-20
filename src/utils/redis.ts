import { createClient } from 'redis';

const DEFAULT_EXPIRE = 1000 * 10;

export async function getFromRedis(key: string) {
  const client = createClient();
  client.on('error', (err) => console.log('Redis Client Error', err));
  await client.connect();
  const value = await client.get(key);
  if (!value) {
    return null;
  }
  const resp = JSON.parse(value);
  if (resp.expire < Date.now()) {
    await client.set(key, ''); // TODO:需要remove数据
    return null;
  }
  await client.disconnect();
  return value;
}
export async function setFromRedis(key: string, value: string) {
  try {
    const client = createClient();
    client.on('error', (err) => console.log('Redis Client Error', err));
    await client.connect();
    await client.set(
      key,
      JSON.stringify({
        value: value,
        expire: Date.now() + DEFAULT_EXPIRE, // 1692540309000
      }),
    );
    await client.disconnect();
    return true;
  } catch (error) {
    return false;
  }
}
