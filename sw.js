/* Generated into out/sw.js. Never cache user data or third-party requests. */
/* global self, caches */
const CACHE_PREFIX = "tempa-shell-20e61df81a4e-"
const CACHE_NAME = "tempa-shell-20e61df81a4e-bd74c46b5250c20aafd9"
const BASE_PATH = "/tempa-pwa-test"
const ASSETS = [{"url":"/tempa-pwa-test/__next.__PAGE__.txt","sha256":"4997893fc72ec84100185bd2358085b3f7833a02accdf8737ffa18ba9cb30ad3"},{"url":"/tempa-pwa-test/__next._full.txt","sha256":"bec154edd66305eeeac759c542a9ba4e54bfbfa7a4b03f31b146b5ad42b78de2"},{"url":"/tempa-pwa-test/__next._head.txt","sha256":"b4a1db5c9bb6c184eaa3f4267e0597947e67e19eaf9c56f0dd5c174d4fa9bcad"},{"url":"/tempa-pwa-test/__next._index.txt","sha256":"d5fffd8b5e5441792e45fbfd95a6edb651bf16334bb10a0f4ccdb97e785e7a31"},{"url":"/tempa-pwa-test/__next._tree.txt","sha256":"de47fa254c2db1a84a8a15fcb55755c4599e2c2c4436ef22650a8323833a2f5e"},{"url":"/tempa-pwa-test/_next/static/S0a7gOScdXgYv9vJ8HYbu/_buildManifest.js","sha256":"9476e0afd3f9da68a64e6ec58631191fd3eaca62c9f5a377e7517fe9a89e59ea"},{"url":"/tempa-pwa-test/_next/static/S0a7gOScdXgYv9vJ8HYbu/_clientMiddlewareManifest.json","sha256":"4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"},{"url":"/tempa-pwa-test/_next/static/S0a7gOScdXgYv9vJ8HYbu/_ssgManifest.js","sha256":"678f6ce2cb80b1fe72fc67e7412be6e2ab6ada083111b64f7c40d35e3cba5e00"},{"url":"/tempa-pwa-test/_next/static/chunks/2b7eed52e72acf49.js","sha256":"fae88cae9233f42bf1ac05d96049fc4db2db81700d13f018b5cc31c033ddfe08"},{"url":"/tempa-pwa-test/_next/static/chunks/2f236954d6a65e12.js","sha256":"de98aefbea0cffbf2c3d5d266dfeabef219e5d805208e63bccf1fb65a875b012"},{"url":"/tempa-pwa-test/_next/static/chunks/7b8d781806368632.js","sha256":"1f451320a3cb0eb4733d4536adf725afa70e5a059fd76a3363eb11a303884e6a"},{"url":"/tempa-pwa-test/_next/static/chunks/a6dad97d9634a72d.js","sha256":"0973c1d64c88adc8e3c950410cb58b288f72118d5965b78049438deb8f2f9683"},{"url":"/tempa-pwa-test/_next/static/chunks/a6dad97d9634a72d.js.map","sha256":"b26c4f42daadc4b7985198660eb4eaf2f4aedb8d5f46e8111c0128cbc11298fc"},{"url":"/tempa-pwa-test/_next/static/chunks/ad4cf95c856c591c.js","sha256":"a4b458a2a7229966d4b376076f7c99c4553a7012e5f958471e5cbc5b410226dd"},{"url":"/tempa-pwa-test/_next/static/chunks/c3f7c53421ff9a6f.js","sha256":"c76c139cb9280cd38cbf96386424e30f566a6e0f58135ea35730b3735198def4"},{"url":"/tempa-pwa-test/_next/static/chunks/d79af90d81244925.js","sha256":"446a864c6d16f160b4c8081b9d7b8a24af6dee76bc2b366811c19f3321b37264"},{"url":"/tempa-pwa-test/_next/static/chunks/e1a1650170c9616c.css","sha256":"b14558f4ce29e70572546e04f71a4e65a0979b1395dc709f9b222420db1bc8b8"},{"url":"/tempa-pwa-test/_next/static/chunks/turbopack-9979cc93dbf0f2cd.js","sha256":"1bc72e1ed01a24f8a4f6bde221578d923658ef16dbaa588844f43ac7961a0a9b"},{"url":"/tempa-pwa-test/_next/static/media/favicon.0b3bf435.ico","sha256":"2b8ad2d33455a8f736fc3a8ebf8f0bdea8848ad4c0db48a2833bd0f9cd775932"},{"url":"/tempa-pwa-test/_not-found.txt","sha256":"37269a0c2eae7c6adee4b0c0fc01c41888021068a737a7a0b258289552c76dc8"},{"url":"/tempa-pwa-test/_not-found/__next._full.txt","sha256":"37269a0c2eae7c6adee4b0c0fc01c41888021068a737a7a0b258289552c76dc8"},{"url":"/tempa-pwa-test/_not-found/__next._head.txt","sha256":"d03323fdfd52bf20d949eea0226b3636995f7f354c48adee03c1705bf87b3629"},{"url":"/tempa-pwa-test/_not-found/__next._index.txt","sha256":"d5fffd8b5e5441792e45fbfd95a6edb651bf16334bb10a0f4ccdb97e785e7a31"},{"url":"/tempa-pwa-test/_not-found/__next._not-found.__PAGE__.txt","sha256":"534ad33619b36b8d4885eb0dd61368a54634f20dc5c9c30b2b631be1f5655828"},{"url":"/tempa-pwa-test/_not-found/__next._not-found.txt","sha256":"5e698d1778ee8f332544e1ad42c7f560c49f943929743dda1b4bfd64c15dfd7f"},{"url":"/tempa-pwa-test/_not-found/__next._tree.txt","sha256":"1f3a5c02cef1a62addcdc5ec0b6724f5d08469d43e3f239e3760c9669a2f6b2f"},{"url":"/tempa-pwa-test/apple-touch-icon.png","sha256":"a10c176265781fa0c217d34d6601ac9df2916360e0854eb543690bf4847257c0"},{"url":"/tempa-pwa-test/favicon.ico","sha256":"2b8ad2d33455a8f736fc3a8ebf8f0bdea8848ad4c0db48a2833bd0f9cd775932"},{"url":"/tempa-pwa-test/icon-192-maskable.png","sha256":"1d19d6b269ad1bdc0cc4b70ce8e9d65fc8ebb7f3f831f9aa60053e17e78071f6"},{"url":"/tempa-pwa-test/icon-192.png","sha256":"6faa7b6c814e5504cd54d7b3119b9a5dcd74a89a9b9276308d6759238704b7c7"},{"url":"/tempa-pwa-test/icon-512.png","sha256":"3875be5b710d4b2a31f286d34d866ac52cac220e195a69ff6ab0e28b3b6a36e7"},{"url":"/tempa-pwa-test/index.html","sha256":"588e11fffa63d02ff06cdd6731e80defecd746304fee2a7e6bcd87868dde7745"},{"url":"/tempa-pwa-test/index.txt","sha256":"bec154edd66305eeeac759c542a9ba4e54bfbfa7a4b03f31b146b5ad42b78de2"},{"url":"/tempa-pwa-test/manifest.json","sha256":"2d054ea8327eeb04e195a0f346531a18e44718c4bb203166eaaf69bda99d3c0c"}]

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME)
    try {
      for (const asset of ASSETS) {
        const response = await fetch(asset.url, { cache: 'reload' })
        if (!response.ok) throw new Error(`Failed to cache ${asset.url}`)
        const bytes = await response.clone().arrayBuffer()
        const digest = await crypto.subtle.digest('SHA-256', bytes)
        const actual = Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('')
        if (actual !== asset.sha256) throw new Error(`Asset mismatch: ${asset.url}`)
        await cache.put(asset.url, response)
      }
    } catch (error) {
      await caches.delete(CACHE_NAME)
      throw error
    }
  })())
})

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys()
    await Promise.all(keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME).map(key => caches.delete(key)))
  })())
})

self.addEventListener('fetch', event => {
  const request = event.request
  const url = new URL(request.url)
  const scope = `${BASE_PATH}/`
  if (request.method !== 'GET' || url.origin !== self.location.origin || !url.pathname.startsWith(scope)) return
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME)
    if (request.mode === 'navigate' && (url.pathname === scope || url.pathname === `${BASE_PATH}/index.html`)) {
      return (await cache.match(`${scope}index.html`)) ?? fetch(request)
    }
    return (await cache.match(request, { ignoreSearch: true })) ?? fetch(request)
  })())
})
