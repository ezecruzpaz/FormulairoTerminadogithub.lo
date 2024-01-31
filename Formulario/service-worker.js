// service-worker.js
self.addEventListener('install', function(event) {
  event.waitUntil(
      caches.open('my-cache').then(function(cache) {
          return cache.addAll([
           '/',
                'index.html',
                'js/forumulario.js', /
          ]);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
      caches.match(event.request).then(function(response) {
          return response || fetch(event.request);
      })
  );
});
