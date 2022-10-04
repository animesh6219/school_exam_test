self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/school_exam_test/',
      '/school_exam_test/index.html',
      '/school_exam_test/index.js',
      '/school_exam_test/style.css',
      '/school_exam_test/images/fox1.jpg',
      '/school_exam_test/images/fox2.jpg',
      '/school_exam_test/images/fox3.jpg',
      '/school_exam_test/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
