/* Generated into out/sw.js. Never cache user data or third-party requests. */
/* global self, caches */
const CACHE_PREFIX = "tempa-shell-20e61df81a4e-"
const CACHE_NAME = "tempa-shell-20e61df81a4e-fad444aa4ca972562793"
const BASE_PATH = "/tempa-pwa-test"
const ASSETS = [{"url":"/tempa-pwa-test/__next.__PAGE__.txt","sha256":"e1418f927cca51c37015e3a4d42ab11ebda94ae4323bea154f9fb2b67fb6c474"},{"url":"/tempa-pwa-test/__next._full.txt","sha256":"c536d98b39a4ecf9935d5635b3433090475fd293425713cd97a1d57876ea5b36"},{"url":"/tempa-pwa-test/__next._head.txt","sha256":"cd26e058e56337b89a44958984706c0496036b12244dcbe86e99b41421e65f0d"},{"url":"/tempa-pwa-test/__next._index.txt","sha256":"989fa6992383466632fb7f87d7336d0f55a5e64e11f945aca5c843b07b891c68"},{"url":"/tempa-pwa-test/__next._tree.txt","sha256":"83b6982281064a53cf3cf0d9f3bff03188554ad704ee628ea14d9c5aa460818d"},{"url":"/tempa-pwa-test/_next/static/9-7cMXinVv3PXepGQZXpY/_buildManifest.js","sha256":"9476e0afd3f9da68a64e6ec58631191fd3eaca62c9f5a377e7517fe9a89e59ea"},{"url":"/tempa-pwa-test/_next/static/9-7cMXinVv3PXepGQZXpY/_clientMiddlewareManifest.json","sha256":"4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"},{"url":"/tempa-pwa-test/_next/static/9-7cMXinVv3PXepGQZXpY/_ssgManifest.js","sha256":"678f6ce2cb80b1fe72fc67e7412be6e2ab6ada083111b64f7c40d35e3cba5e00"},{"url":"/tempa-pwa-test/_next/static/chunks/18fe3980ca6db382.js","sha256":"5a5f95bffd62b31249b8c16a50d9463a258a9cf17d480968a9392960b70095e3"},{"url":"/tempa-pwa-test/_next/static/chunks/2b7eed52e72acf49.js","sha256":"fae88cae9233f42bf1ac05d96049fc4db2db81700d13f018b5cc31c033ddfe08"},{"url":"/tempa-pwa-test/_next/static/chunks/2f236954d6a65e12.js","sha256":"de98aefbea0cffbf2c3d5d266dfeabef219e5d805208e63bccf1fb65a875b012"},{"url":"/tempa-pwa-test/_next/static/chunks/a6dad97d9634a72d.js","sha256":"0973c1d64c88adc8e3c950410cb58b288f72118d5965b78049438deb8f2f9683"},{"url":"/tempa-pwa-test/_next/static/chunks/a6dad97d9634a72d.js.map","sha256":"b26c4f42daadc4b7985198660eb4eaf2f4aedb8d5f46e8111c0128cbc11298fc"},{"url":"/tempa-pwa-test/_next/static/chunks/ad4cf95c856c591c.js","sha256":"a4b458a2a7229966d4b376076f7c99c4553a7012e5f958471e5cbc5b410226dd"},{"url":"/tempa-pwa-test/_next/static/chunks/c3f7c53421ff9a6f.js","sha256":"c76c139cb9280cd38cbf96386424e30f566a6e0f58135ea35730b3735198def4"},{"url":"/tempa-pwa-test/_next/static/chunks/d79af90d81244925.js","sha256":"446a864c6d16f160b4c8081b9d7b8a24af6dee76bc2b366811c19f3321b37264"},{"url":"/tempa-pwa-test/_next/static/chunks/e1a1650170c9616c.css","sha256":"b14558f4ce29e70572546e04f71a4e65a0979b1395dc709f9b222420db1bc8b8"},{"url":"/tempa-pwa-test/_next/static/chunks/turbopack-9979cc93dbf0f2cd.js","sha256":"1bc72e1ed01a24f8a4f6bde221578d923658ef16dbaa588844f43ac7961a0a9b"},{"url":"/tempa-pwa-test/_next/static/media/favicon.0b3bf435.ico","sha256":"2b8ad2d33455a8f736fc3a8ebf8f0bdea8848ad4c0db48a2833bd0f9cd775932"},{"url":"/tempa-pwa-test/_not-found.txt","sha256":"ca8a1bdb9b9fbda71abd84da8ab36452bf47df7c91b7c605ceead40569c7ff44"},{"url":"/tempa-pwa-test/_not-found/__next._full.txt","sha256":"ca8a1bdb9b9fbda71abd84da8ab36452bf47df7c91b7c605ceead40569c7ff44"},{"url":"/tempa-pwa-test/_not-found/__next._head.txt","sha256":"3d9bbc046259475c1085775ee5ea6954c3a0eb476b9fc68b3bb8f6839d15de18"},{"url":"/tempa-pwa-test/_not-found/__next._index.txt","sha256":"989fa6992383466632fb7f87d7336d0f55a5e64e11f945aca5c843b07b891c68"},{"url":"/tempa-pwa-test/_not-found/__next._not-found.__PAGE__.txt","sha256":"6bbc60d4530d1a56ea41b1421813f8878553a175a876fad77d420b18c56a1427"},{"url":"/tempa-pwa-test/_not-found/__next._not-found.txt","sha256":"5fadd469d75b72bae8ad1fbae146c0a283066ccae348a21358c7d52de956a326"},{"url":"/tempa-pwa-test/_not-found/__next._tree.txt","sha256":"b9880b7ff9fb0bc44e2b33c84fb70f499aef0f1e91f0ffabc56c1108e47a0232"},{"url":"/tempa-pwa-test/apple-touch-icon.png","sha256":"a10c176265781fa0c217d34d6601ac9df2916360e0854eb543690bf4847257c0"},{"url":"/tempa-pwa-test/favicon.ico","sha256":"2b8ad2d33455a8f736fc3a8ebf8f0bdea8848ad4c0db48a2833bd0f9cd775932"},{"url":"/tempa-pwa-test/icon-192-maskable.png","sha256":"1d19d6b269ad1bdc0cc4b70ce8e9d65fc8ebb7f3f831f9aa60053e17e78071f6"},{"url":"/tempa-pwa-test/icon-192.png","sha256":"6faa7b6c814e5504cd54d7b3119b9a5dcd74a89a9b9276308d6759238704b7c7"},{"url":"/tempa-pwa-test/icon-512.png","sha256":"3875be5b710d4b2a31f286d34d866ac52cac220e195a69ff6ab0e28b3b6a36e7"},{"url":"/tempa-pwa-test/index.html","sha256":"270b4753fa563cf215ff032779c4c6137be7547159e05d6a8e535dea2eb040d7"},{"url":"/tempa-pwa-test/index.txt","sha256":"c536d98b39a4ecf9935d5635b3433090475fd293425713cd97a1d57876ea5b36"},{"url":"/tempa-pwa-test/manifest.json","sha256":"2d054ea8327eeb04e195a0f346531a18e44718c4bb203166eaaf69bda99d3c0c"}]

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
