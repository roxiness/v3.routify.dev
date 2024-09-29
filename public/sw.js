self.addEventListener('install', (event) => {
    self.skipWaiting();
  });
  
  self.addEventListener('activate', (event) => {
    event.waitUntil(
      self.registration.unregister().then(() => {
        return caches.keys().then((cacheNames) => {
          return Promise.all(
            cacheNames.map((cacheName) => caches.delete(cacheName))
          );
        });
      })
    );
  });
  