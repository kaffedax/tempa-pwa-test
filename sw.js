/* Generated into out/sw.js. Never cache user data or third-party requests. */
/* global self, caches */
const CACHE_PREFIX = "tempa-shell-20e61df81a4e-"
const CACHE_NAME = "tempa-shell-20e61df81a4e-13bffd5167a0d3cd84bb"
const BASE_PATH = "/tempa-pwa-test"
const ASSETS = [{"url":"/tempa-pwa-test/__next.__PAGE__.txt","sha256":"2d2c66951964df4bd067411f579ae22c1920957782235f32291b2aa80d5bb71a"},{"url":"/tempa-pwa-test/__next._full.txt","sha256":"414531f1e49f41f946070077e02f51ea553d6a6321632f9d2f306ae3d7a746e4"},{"url":"/tempa-pwa-test/__next._head.txt","sha256":"6f406a87f9bfec7a16d776ca8f698c576f6744a28c3c9c55d304be3fe4f6ce1a"},{"url":"/tempa-pwa-test/__next._index.txt","sha256":"b8fd6a8e350cbfc2001f6e7298433ee49d6ce697fad8671513435b103dbbce04"},{"url":"/tempa-pwa-test/__next._tree.txt","sha256":"c8dd0d055659833e0a98213bb3b97ca78ecd7b8e43b595d9d11a513bbf7bdd0c"},{"url":"/tempa-pwa-test/_next/static/chunks/2b7eed52e72acf49.js","sha256":"fae88cae9233f42bf1ac05d96049fc4db2db81700d13f018b5cc31c033ddfe08"},{"url":"/tempa-pwa-test/_next/static/chunks/2f236954d6a65e12.js","sha256":"de98aefbea0cffbf2c3d5d266dfeabef219e5d805208e63bccf1fb65a875b012"},{"url":"/tempa-pwa-test/_next/static/chunks/34eb496d481f7b2d.js","sha256":"c84cabaaffbdebc54db78e1b3b09a84be003f4e2d0fb37ab7b12996b15b4e43f"},{"url":"/tempa-pwa-test/_next/static/chunks/a6dad97d9634a72d.js","sha256":"0973c1d64c88adc8e3c950410cb58b288f72118d5965b78049438deb8f2f9683"},{"url":"/tempa-pwa-test/_next/static/chunks/a6dad97d9634a72d.js.map","sha256":"b26c4f42daadc4b7985198660eb4eaf2f4aedb8d5f46e8111c0128cbc11298fc"},{"url":"/tempa-pwa-test/_next/static/chunks/ad4cf95c856c591c.js","sha256":"a4b458a2a7229966d4b376076f7c99c4553a7012e5f958471e5cbc5b410226dd"},{"url":"/tempa-pwa-test/_next/static/chunks/c3f7c53421ff9a6f.js","sha256":"c76c139cb9280cd38cbf96386424e30f566a6e0f58135ea35730b3735198def4"},{"url":"/tempa-pwa-test/_next/static/chunks/d514ddc00c8fe687.css","sha256":"c146f827831f744e90973ae6c1db9e74c9439482c6f1939ae762588265b93ed2"},{"url":"/tempa-pwa-test/_next/static/chunks/d79af90d81244925.js","sha256":"446a864c6d16f160b4c8081b9d7b8a24af6dee76bc2b366811c19f3321b37264"},{"url":"/tempa-pwa-test/_next/static/chunks/turbopack-9979cc93dbf0f2cd.js","sha256":"1bc72e1ed01a24f8a4f6bde221578d923658ef16dbaa588844f43ac7961a0a9b"},{"url":"/tempa-pwa-test/_next/static/media/favicon.0b3bf435.ico","sha256":"2b8ad2d33455a8f736fc3a8ebf8f0bdea8848ad4c0db48a2833bd0f9cd775932"},{"url":"/tempa-pwa-test/_next/static/sEA45U7OnQvjIEWDKdy5Y/_buildManifest.js","sha256":"9476e0afd3f9da68a64e6ec58631191fd3eaca62c9f5a377e7517fe9a89e59ea"},{"url":"/tempa-pwa-test/_next/static/sEA45U7OnQvjIEWDKdy5Y/_clientMiddlewareManifest.json","sha256":"4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"},{"url":"/tempa-pwa-test/_next/static/sEA45U7OnQvjIEWDKdy5Y/_ssgManifest.js","sha256":"678f6ce2cb80b1fe72fc67e7412be6e2ab6ada083111b64f7c40d35e3cba5e00"},{"url":"/tempa-pwa-test/_not-found.txt","sha256":"70c3871dd792cb7289ac34c932230ffa0df717ae40ee5077f0e2efc347a60bef"},{"url":"/tempa-pwa-test/_not-found/__next._full.txt","sha256":"70c3871dd792cb7289ac34c932230ffa0df717ae40ee5077f0e2efc347a60bef"},{"url":"/tempa-pwa-test/_not-found/__next._head.txt","sha256":"1f965e69075d5a79c30f4e4d648e678bb8f490534eb4e9db30748c22806c738d"},{"url":"/tempa-pwa-test/_not-found/__next._index.txt","sha256":"b8fd6a8e350cbfc2001f6e7298433ee49d6ce697fad8671513435b103dbbce04"},{"url":"/tempa-pwa-test/_not-found/__next._not-found.__PAGE__.txt","sha256":"e5304de3fd532627ee7ba69a64597fc47c41fa8ea91d4debd7feac21e43ba203"},{"url":"/tempa-pwa-test/_not-found/__next._not-found.txt","sha256":"cea47e3761d7e12d2e34c77c54b4063da355c06fb891d7dcad7cada198f6d397"},{"url":"/tempa-pwa-test/_not-found/__next._tree.txt","sha256":"fed9fac209970d30deb0b2c513a13348ef2266ba45a3deb0a33fa8c7528b82bb"},{"url":"/tempa-pwa-test/apple-touch-icon.png","sha256":"a10c176265781fa0c217d34d6601ac9df2916360e0854eb543690bf4847257c0"},{"url":"/tempa-pwa-test/favicon.ico","sha256":"2b8ad2d33455a8f736fc3a8ebf8f0bdea8848ad4c0db48a2833bd0f9cd775932"},{"url":"/tempa-pwa-test/icon-192-maskable.png","sha256":"1d19d6b269ad1bdc0cc4b70ce8e9d65fc8ebb7f3f831f9aa60053e17e78071f6"},{"url":"/tempa-pwa-test/icon-192.png","sha256":"6faa7b6c814e5504cd54d7b3119b9a5dcd74a89a9b9276308d6759238704b7c7"},{"url":"/tempa-pwa-test/icon-512.png","sha256":"3875be5b710d4b2a31f286d34d866ac52cac220e195a69ff6ab0e28b3b6a36e7"},{"url":"/tempa-pwa-test/index.html","sha256":"47ccc50c7cbc6bad1544ee2fda180c12a630ad12e2fb126b147bf0d3ce788e63"},{"url":"/tempa-pwa-test/index.txt","sha256":"414531f1e49f41f946070077e02f51ea553d6a6321632f9d2f306ae3d7a746e4"},{"url":"/tempa-pwa-test/manifest.json","sha256":"2d054ea8327eeb04e195a0f346531a18e44718c4bb203166eaaf69bda99d3c0c"}]

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
