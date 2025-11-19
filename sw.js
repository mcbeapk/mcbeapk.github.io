const CACHE_NAME = 'idktoast-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/account.html',
  '/beta.html',
  '/mojangles.ttf',
  '/icons/192.png',
  '/icons/512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
