/* Generated into out/sw.js. Never cache user data or third-party requests. */
/* global self, caches */
const CACHE_PREFIX = "tempa-shell-20e61df81a4e-"
const CACHE_NAME = "tempa-shell-20e61df81a4e-bdb912e0604bebaede7e"
const BASE_PATH = "/tempa-pwa-test"
const ASSETS = [{"url":"/tempa-pwa-test/__next.__PAGE__.txt","sha256":"6fbb7b1d00282cdfe312adb26080733a6a114c9ef33aa7dc3bd7d9f9606c50eb"},{"url":"/tempa-pwa-test/__next._full.txt","sha256":"7c0f5527906f0baceebfe7487d3b83189690b6d30622876c52c1dad4bcf2ccfc"},{"url":"/tempa-pwa-test/__next._head.txt","sha256":"46e499b7b9c24869533cfb07ba4b915ae30abe4d43aa21dd3a9aa40a522e0ee7"},{"url":"/tempa-pwa-test/__next._index.txt","sha256":"15c7f9e8d024dfb95977d1527e663356c7cfae8059d748caaaebb670aaa1737e"},{"url":"/tempa-pwa-test/__next._tree.txt","sha256":"7a2092db326171fd659c0c4bd248f0436446fcaa7ac2404aef7c005340de0679"},{"url":"/tempa-pwa-test/_next/static/chunks/2b7eed52e72acf49.js","sha256":"fae88cae9233f42bf1ac05d96049fc4db2db81700d13f018b5cc31c033ddfe08"},{"url":"/tempa-pwa-test/_next/static/chunks/2f236954d6a65e12.js","sha256":"de98aefbea0cffbf2c3d5d266dfeabef219e5d805208e63bccf1fb65a875b012"},{"url":"/tempa-pwa-test/_next/static/chunks/33b8c34cf9a16e94.css","sha256":"a00baa0fcfc81bd2aeb64faa971bbb57a0128bd153b9518aef058dfcd4eca6e7"},{"url":"/tempa-pwa-test/_next/static/chunks/a6dad97d9634a72d.js","sha256":"0973c1d64c88adc8e3c950410cb58b288f72118d5965b78049438deb8f2f9683"},{"url":"/tempa-pwa-test/_next/static/chunks/a6dad97d9634a72d.js.map","sha256":"b26c4f42daadc4b7985198660eb4eaf2f4aedb8d5f46e8111c0128cbc11298fc"},{"url":"/tempa-pwa-test/_next/static/chunks/ad4cf95c856c591c.js","sha256":"a4b458a2a7229966d4b376076f7c99c4553a7012e5f958471e5cbc5b410226dd"},{"url":"/tempa-pwa-test/_next/static/chunks/c115a5a43ada6ea7.js","sha256":"4fe48c6019d5b536a1e2e0589fc8b9f403726110d5b617df6f0f6aa032b55ebc"},{"url":"/tempa-pwa-test/_next/static/chunks/c3f7c53421ff9a6f.js","sha256":"c76c139cb9280cd38cbf96386424e30f566a6e0f58135ea35730b3735198def4"},{"url":"/tempa-pwa-test/_next/static/chunks/d79af90d81244925.js","sha256":"446a864c6d16f160b4c8081b9d7b8a24af6dee76bc2b366811c19f3321b37264"},{"url":"/tempa-pwa-test/_next/static/chunks/turbopack-9979cc93dbf0f2cd.js","sha256":"1bc72e1ed01a24f8a4f6bde221578d923658ef16dbaa588844f43ac7961a0a9b"},{"url":"/tempa-pwa-test/_next/static/media/favicon.0b3bf435.ico","sha256":"2b8ad2d33455a8f736fc3a8ebf8f0bdea8848ad4c0db48a2833bd0f9cd775932"},{"url":"/tempa-pwa-test/_next/static/xXVnOSotQdP3IDNMI1ESq/_buildManifest.js","sha256":"9476e0afd3f9da68a64e6ec58631191fd3eaca62c9f5a377e7517fe9a89e59ea"},{"url":"/tempa-pwa-test/_next/static/xXVnOSotQdP3IDNMI1ESq/_clientMiddlewareManifest.json","sha256":"4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"},{"url":"/tempa-pwa-test/_next/static/xXVnOSotQdP3IDNMI1ESq/_ssgManifest.js","sha256":"678f6ce2cb80b1fe72fc67e7412be6e2ab6ada083111b64f7c40d35e3cba5e00"},{"url":"/tempa-pwa-test/_not-found.txt","sha256":"4fba831e658562be6a25aa9e30df0af61164b71b8f99ebc3fdc4aaee9529e8f2"},{"url":"/tempa-pwa-test/_not-found/__next._full.txt","sha256":"4fba831e658562be6a25aa9e30df0af61164b71b8f99ebc3fdc4aaee9529e8f2"},{"url":"/tempa-pwa-test/_not-found/__next._head.txt","sha256":"d151b0e82a9a70b4b68351a373085ce94c93cec150a53cb6e1c252754e61cb3d"},{"url":"/tempa-pwa-test/_not-found/__next._index.txt","sha256":"15c7f9e8d024dfb95977d1527e663356c7cfae8059d748caaaebb670aaa1737e"},{"url":"/tempa-pwa-test/_not-found/__next._not-found.__PAGE__.txt","sha256":"e765e330c1f9590a2956dcf4eb4c881662c6d7b1c79a5d3ae1f7434344af8813"},{"url":"/tempa-pwa-test/_not-found/__next._not-found.txt","sha256":"47570c3f9bfc57379479732ba5689f2e9b7390ff4f6dc194eec0372f0e3929d8"},{"url":"/tempa-pwa-test/_not-found/__next._tree.txt","sha256":"db60cc423b481ac2e0245dff06644f5e5ccaef9e6bf88259f6e41ea653578594"},{"url":"/tempa-pwa-test/apple-touch-icon.png","sha256":"a10c176265781fa0c217d34d6601ac9df2916360e0854eb543690bf4847257c0"},{"url":"/tempa-pwa-test/favicon.ico","sha256":"2b8ad2d33455a8f736fc3a8ebf8f0bdea8848ad4c0db48a2833bd0f9cd775932"},{"url":"/tempa-pwa-test/icon-192-maskable.png","sha256":"1d19d6b269ad1bdc0cc4b70ce8e9d65fc8ebb7f3f831f9aa60053e17e78071f6"},{"url":"/tempa-pwa-test/icon-192.png","sha256":"6faa7b6c814e5504cd54d7b3119b9a5dcd74a89a9b9276308d6759238704b7c7"},{"url":"/tempa-pwa-test/icon-512.png","sha256":"3875be5b710d4b2a31f286d34d866ac52cac220e195a69ff6ab0e28b3b6a36e7"},{"url":"/tempa-pwa-test/index.html","sha256":"c6c0c083d688525873eca17515fd19aa379da9110e8935d6f78a5132e0983d18"},{"url":"/tempa-pwa-test/index.txt","sha256":"7c0f5527906f0baceebfe7487d3b83189690b6d30622876c52c1dad4bcf2ccfc"},{"url":"/tempa-pwa-test/manifest.json","sha256":"2d054ea8327eeb04e195a0f346531a18e44718c4bb203166eaaf69bda99d3c0c"}]

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
