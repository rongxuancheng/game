import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

export default {
  async fetch(request, env, ctx) {
    try {
      return await getAssetFromKV({ request, env });
    } catch (err) {
      // 如果找不到资源，就返回自定义 404 页面或默认错误
      return new Response('Not Found', { status: 404 });
    }
  }
}
