importScripts("/precache-manifest.f7b25e9d8831225d3270fe879ab155f6.js", "/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/workbox-v3.6.3"});
workbox.core.setCacheNameDetails({prefix: "fapp"});
  
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg|css|js|html)$/,
  
  workbox.strategies.cacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  new RegExp('http://faranto.esn-germany.de/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'api',
  }),
);

workbox.routing.registerRoute(
  new RegExp('/'),
  workbox.strategies.cacheFirst({
    cacheName: 'faranto',
  }),
);

workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'googleapis',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
      }),
    ],
  }),
);
