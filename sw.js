/* Generated into out/sw.js. Never cache user data or third-party requests. */
/* global self, caches */
const CACHE_PREFIX = "tempa-shell-20e61df81a4e-"
const CACHE_NAME = "tempa-shell-20e61df81a4e-7b6a772e6c173d5fef4d"
const BASE_PATH = "/tempa-pwa-test"
const ASSETS = [{"url":"/tempa-pwa-test/__next.__PAGE__.txt","sha256":"15e315ef2c70b88f02bfaf1ece4e275c46ff9ae3f26e59e8689b96b357725e13"},{"url":"/tempa-pwa-test/__next._full.txt","sha256":"d8b69afbda99474fc20ec77f5d10000c7f920270afcee2873c4d070928e728aa"},{"url":"/tempa-pwa-test/__next._head.txt","sha256":"ee55bd4a5cbe0fa59f0f11d4ba88a421bce344edc52ff8efacf2d210afa2a73d"},{"url":"/tempa-pwa-test/__next._index.txt","sha256":"18144b9607d393351bce4b1846ad7e12c01834a0a286844bd71c54567181c313"},{"url":"/tempa-pwa-test/__next._tree.txt","sha256":"91decd0b12205fe736821e0ab0411fd5c7257299089347a2dd8db8357b847656"},{"url":"/tempa-pwa-test/_next/static/Ju0KeibGqaSGHOwClN-Le/_buildManifest.js","sha256":"9476e0afd3f9da68a64e6ec58631191fd3eaca62c9f5a377e7517fe9a89e59ea"},{"url":"/tempa-pwa-test/_next/static/Ju0KeibGqaSGHOwClN-Le/_clientMiddlewareManifest.json","sha256":"4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"},{"url":"/tempa-pwa-test/_next/static/Ju0KeibGqaSGHOwClN-Le/_ssgManifest.js","sha256":"678f6ce2cb80b1fe72fc67e7412be6e2ab6ada083111b64f7c40d35e3cba5e00"},{"url":"/tempa-pwa-test/_next/static/chunks/2b7eed52e72acf49.js","sha256":"fae88cae9233f42bf1ac05d96049fc4db2db81700d13f018b5cc31c033ddfe08"},{"url":"/tempa-pwa-test/_next/static/chunks/2f236954d6a65e12.js","sha256":"de98aefbea0cffbf2c3d5d266dfeabef219e5d805208e63bccf1fb65a875b012"},{"url":"/tempa-pwa-test/_next/static/chunks/4cb1264e0a6cfc17.js","sha256":"20eb753b2c475f3bce563f6f2d6ee82ade7e48a0d96cf0a0aec978ad65dcc478"},{"url":"/tempa-pwa-test/_next/static/chunks/a6dad97d9634a72d.js","sha256":"0973c1d64c88adc8e3c950410cb58b288f72118d5965b78049438deb8f2f9683"},{"url":"/tempa-pwa-test/_next/static/chunks/a6dad97d9634a72d.js.map","sha256":"b26c4f42daadc4b7985198660eb4eaf2f4aedb8d5f46e8111c0128cbc11298fc"},{"url":"/tempa-pwa-test/_next/static/chunks/ad4cf95c856c591c.js","sha256":"a4b458a2a7229966d4b376076f7c99c4553a7012e5f958471e5cbc5b410226dd"},{"url":"/tempa-pwa-test/_next/static/chunks/b95e2aa0fe3aca21.css","sha256":"d030c7137fcb96113ac678008eedc95c76f2f53f7828a9fa6bdc208323cecb33"},{"url":"/tempa-pwa-test/_next/static/chunks/c3f7c53421ff9a6f.js","sha256":"c76c139cb9280cd38cbf96386424e30f566a6e0f58135ea35730b3735198def4"},{"url":"/tempa-pwa-test/_next/static/chunks/d79af90d81244925.js","sha256":"446a864c6d16f160b4c8081b9d7b8a24af6dee76bc2b366811c19f3321b37264"},{"url":"/tempa-pwa-test/_next/static/chunks/turbopack-9979cc93dbf0f2cd.js","sha256":"1bc72e1ed01a24f8a4f6bde221578d923658ef16dbaa588844f43ac7961a0a9b"},{"url":"/tempa-pwa-test/_next/static/media/favicon.0b3bf435.ico","sha256":"2b8ad2d33455a8f736fc3a8ebf8f0bdea8848ad4c0db48a2833bd0f9cd775932"},{"url":"/tempa-pwa-test/_not-found.txt","sha256":"c5eee6f5ef39004d62f813e343adc3b13834b48ecdf5f7911a5b58046cab9d95"},{"url":"/tempa-pwa-test/_not-found/__next._full.txt","sha256":"c5eee6f5ef39004d62f813e343adc3b13834b48ecdf5f7911a5b58046cab9d95"},{"url":"/tempa-pwa-test/_not-found/__next._head.txt","sha256":"2fe6ac91579e17a7be9715a150cc9e64df3a5af360caed11357f6de1022e3e8d"},{"url":"/tempa-pwa-test/_not-found/__next._index.txt","sha256":"18144b9607d393351bce4b1846ad7e12c01834a0a286844bd71c54567181c313"},{"url":"/tempa-pwa-test/_not-found/__next._not-found.__PAGE__.txt","sha256":"9693201ba1290e9ba079a54b096b4a8a861fe45292d6563f1ef1e10bf31a5ac3"},{"url":"/tempa-pwa-test/_not-found/__next._not-found.txt","sha256":"ab083d460fa4ea7143733336262949f3f80f44d033c69d247c304c6eaafb19f8"},{"url":"/tempa-pwa-test/_not-found/__next._tree.txt","sha256":"21f6afbdaff57cbb4f95bd69e3b432062ad62567389b5c6de69c02298d050b19"},{"url":"/tempa-pwa-test/apple-touch-icon.png","sha256":"a10c176265781fa0c217d34d6601ac9df2916360e0854eb543690bf4847257c0"},{"url":"/tempa-pwa-test/favicon.ico","sha256":"2b8ad2d33455a8f736fc3a8ebf8f0bdea8848ad4c0db48a2833bd0f9cd775932"},{"url":"/tempa-pwa-test/icon-192-maskable.png","sha256":"1d19d6b269ad1bdc0cc4b70ce8e9d65fc8ebb7f3f831f9aa60053e17e78071f6"},{"url":"/tempa-pwa-test/icon-192.png","sha256":"6faa7b6c814e5504cd54d7b3119b9a5dcd74a89a9b9276308d6759238704b7c7"},{"url":"/tempa-pwa-test/icon-512.png","sha256":"3875be5b710d4b2a31f286d34d866ac52cac220e195a69ff6ab0e28b3b6a36e7"},{"url":"/tempa-pwa-test/index.html","sha256":"51554b77b62a689ef33f24d1c4efbbbb179941336076a6791dc6a72bb2ee849b"},{"url":"/tempa-pwa-test/index.txt","sha256":"d8b69afbda99474fc20ec77f5d10000c7f920270afcee2873c4d070928e728aa"},{"url":"/tempa-pwa-test/manifest.json","sha256":"2d054ea8327eeb04e195a0f346531a18e44718c4bb203166eaaf69bda99d3c0c"}]

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
