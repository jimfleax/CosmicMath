const CACHE_NAME = 'cosmicmath-cache-v1';
const CACHE_EXPIRATION = 14 * 24 * 60 * 60 * 1000; // 14 days in milliseconds

const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/App.js',
  '/CosmicMath.db.js',
  '/interface.js',
  '/HappyDisplay-Bold.woff2',
  '/HappyDisplay-Regular.woff2',
  '/HappyDisplay-SemiBold.woff2',
  '/icons/apple-touch-icon.png',
  '/icons/favicon.ico',
  '/icons/og-image.png',
  '/icons/structured-data-image.png',
  '/icons/twitter-image.png',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(FILES_TO_CACHE)
          .catch((error) => {
            console.error('Failed to cache:', error);
          });
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });
          return response;
        });
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      caches.open(CACHE_NAME).then((cache) => {
        cache.keys().then((keys) => {
          keys.forEach((key) => {
            cache.match(key).then((response) => {
              if (response) {
                const dateHeader = response.headers.get('Date');
                if (dateHeader) {
                  const date = new Date(dateHeader);
                  if (Date.now() - date.getTime() > CACHE_EXPIRATION) {
                    cache.delete(key);
                  }
                }
              }
            });
          });
        });
      });
    })
  );
});
