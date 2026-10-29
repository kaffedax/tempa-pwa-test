/* Generated into out/sw.js. Never cache user data or third-party requests. */
/* global self, caches */
const CACHE_PREFIX = "tempa-shell-20e61df81a4e-"
const CACHE_NAME = "tempa-shell-20e61df81a4e-8fe601de5d9e80ff3531"
const BASE_PATH = "/tempa-pwa-test"
const ASSETS = [{"url":"/tempa-pwa-test/__next.__PAGE__.txt","sha256":"ecc7a61ec2208cbd91bbf629b3b3e30e3348598ab24cc115ccbbef8628c19380"},{"url":"/tempa-pwa-test/__next._full.txt","sha256":"6bdeb08f652d821d399d64812ee2bd70560b76ebe2eab15f43b5a96bb8d5e717"},{"url":"/tempa-pwa-test/__next._head.txt","sha256":"f3e30f26343ab2a68e6cff6e1d9964240aceb6dbc290876a43d92fa4e8215328"},{"url":"/tempa-pwa-test/__next._index.txt","sha256":"22653e3e3b38b1e116db7f7f59e9ba610da065731b936ba7ec1cb4de034ff6cd"},{"url":"/tempa-pwa-test/__next._tree.txt","sha256":"66c9f76e672daedcc959a5ac90c0b4524a601ef2d365986b9ba647184b5d3dda"},{"url":"/tempa-pwa-test/_next/static/CnQ8FQAurlKBsEuWko9OX/_buildManifest.js","sha256":"9476e0afd3f9da68a64e6ec58631191fd3eaca62c9f5a377e7517fe9a89e59ea"},{"url":"/tempa-pwa-test/_next/static/CnQ8FQAurlKBsEuWko9OX/_clientMiddlewareManifest.json","sha256":"4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"},{"url":"/tempa-pwa-test/_next/static/CnQ8FQAurlKBsEuWko9OX/_ssgManifest.js","sha256":"678f6ce2cb80b1fe72fc67e7412be6e2ab6ada083111b64f7c40d35e3cba5e00"},{"url":"/tempa-pwa-test/_next/static/chunks/2b7eed52e72acf49.js","sha256":"fae88cae9233f42bf1ac05d96049fc4db2db81700d13f018b5cc31c033ddfe08"},{"url":"/tempa-pwa-test/_next/static/chunks/2f236954d6a65e12.js","sha256":"de98aefbea0cffbf2c3d5d266dfeabef219e5d805208e63bccf1fb65a875b012"},{"url":"/tempa-pwa-test/_next/static/chunks/4385180722be3a1c.js","sha256":"55bd8a429c929b9a918f6933b3f822bb11dd8349a68050b28796291fc3e5cdc8"},{"url":"/tempa-pwa-test/_next/static/chunks/a6dad97d9634a72d.js","sha256":"0973c1d64c88adc8e3c950410cb58b288f72118d5965b78049438deb8f2f9683"},{"url":"/tempa-pwa-test/_next/static/chunks/a6dad97d9634a72d.js.map","sha256":"b26c4f42daadc4b7985198660eb4eaf2f4aedb8d5f46e8111c0128cbc11298fc"},{"url":"/tempa-pwa-test/_next/static/chunks/ad4cf95c856c591c.js","sha256":"a4b458a2a7229966d4b376076f7c99c4553a7012e5f958471e5cbc5b410226dd"},{"url":"/tempa-pwa-test/_next/static/chunks/c3f7c53421ff9a6f.js","sha256":"c76c139cb9280cd38cbf96386424e30f566a6e0f58135ea35730b3735198def4"},{"url":"/tempa-pwa-test/_next/static/chunks/d514ddc00c8fe687.css","sha256":"c146f827831f744e90973ae6c1db9e74c9439482c6f1939ae762588265b93ed2"},{"url":"/tempa-pwa-test/_next/static/chunks/d79af90d81244925.js","sha256":"446a864c6d16f160b4c8081b9d7b8a24af6dee76bc2b366811c19f3321b37264"},{"url":"/tempa-pwa-test/_next/static/chunks/turbopack-9979cc93dbf0f2cd.js","sha256":"1bc72e1ed01a24f8a4f6bde221578d923658ef16dbaa588844f43ac7961a0a9b"},{"url":"/tempa-pwa-test/_next/static/media/favicon.0b3bf435.ico","sha256":"2b8ad2d33455a8f736fc3a8ebf8f0bdea8848ad4c0db48a2833bd0f9cd775932"},{"url":"/tempa-pwa-test/_not-found.txt","sha256":"c345769d37c508f9fdc5cb0a1a7b121b625217ee075b0d860c9d278719c98b98"},{"url":"/tempa-pwa-test/_not-found/__next._full.txt","sha256":"c345769d37c508f9fdc5cb0a1a7b121b625217ee075b0d860c9d278719c98b98"},{"url":"/tempa-pwa-test/_not-found/__next._head.txt","sha256":"8696280a4879c55bce3fbf6011012caed2ba4d19daf539808ffa1851ab669f57"},{"url":"/tempa-pwa-test/_not-found/__next._index.txt","sha256":"22653e3e3b38b1e116db7f7f59e9ba610da065731b936ba7ec1cb4de034ff6cd"},{"url":"/tempa-pwa-test/_not-found/__next._not-found.__PAGE__.txt","sha256":"d75f6d28b8d9883db9f2b5279ff5b7fee3329c385031b83b4cecdf97149ac921"},{"url":"/tempa-pwa-test/_not-found/__next._not-found.txt","sha256":"23f172e5836e02ee90280e38b3f4050b8cdf5615fefdff9bf0e5302bdb0d5eb6"},{"url":"/tempa-pwa-test/_not-found/__next._tree.txt","sha256":"e23fc3f755cfd51fe591f1c2af7585e27887cae9f003093d4977b01da994fe50"},{"url":"/tempa-pwa-test/apple-touch-icon.png","sha256":"a10c176265781fa0c217d34d6601ac9df2916360e0854eb543690bf4847257c0"},{"url":"/tempa-pwa-test/favicon.ico","sha256":"2b8ad2d33455a8f736fc3a8ebf8f0bdea8848ad4c0db48a2833bd0f9cd775932"},{"url":"/tempa-pwa-test/icon-192-maskable.png","sha256":"1d19d6b269ad1bdc0cc4b70ce8e9d65fc8ebb7f3f831f9aa60053e17e78071f6"},{"url":"/tempa-pwa-test/icon-192.png","sha256":"6faa7b6c814e5504cd54d7b3119b9a5dcd74a89a9b9276308d6759238704b7c7"},{"url":"/tempa-pwa-test/icon-512.png","sha256":"3875be5b710d4b2a31f286d34d866ac52cac220e195a69ff6ab0e28b3b6a36e7"},{"url":"/tempa-pwa-test/index.html","sha256":"d9919a9a652b468fe70fa6f208156ffd7dd734bb4331fc63179a1316a23cd0df"},{"url":"/tempa-pwa-test/index.txt","sha256":"6bdeb08f652d821d399d64812ee2bd70560b76ebe2eab15f43b5a96bb8d5e717"},{"url":"/tempa-pwa-test/manifest.json","sha256":"1c1d5b555bf53345c2e9f9fa1e2704c5a1e42d8b49a1c0039ac2dfc8139a2db8"}]

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
