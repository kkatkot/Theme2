/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ded183559868639491f2f6ba129115f6"
  },
  {
    "url": "assets/css/0.styles.b1d17a86.css",
    "revision": "b1ef71af7a7640e59e5a7f4a92cf25bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.17dc7fc0.js",
    "revision": "235105471074525d1d2bdc9d1186bdf9"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.f4d805b2.js",
    "revision": "45a0f424731485e8513dbf3f52453817"
  },
  {
    "url": "assets/js/13.b369ab95.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.4fd45c58.js",
    "revision": "2826a1bfcbbdf9810af87b4f633a8390"
  },
  {
    "url": "assets/js/15.81d2a2d6.js",
    "revision": "7d91fa04347e2b72649ed339c0394961"
  },
  {
    "url": "assets/js/16.1520ccf4.js",
    "revision": "f5196a105737db5230e5b8fabd095f49"
  },
  {
    "url": "assets/js/17.f829100a.js",
    "revision": "8dceb00f63fb206ccfb8c7c505caca82"
  },
  {
    "url": "assets/js/18.393dbd29.js",
    "revision": "4dc9878951689875f62f246a270470a7"
  },
  {
    "url": "assets/js/19.d9264299.js",
    "revision": "69183e74e1240e02d805b0978db4dfb8"
  },
  {
    "url": "assets/js/2.43d75a1a.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.cfbcd27b.js",
    "revision": "927e6bfe3771635bf8d70a7d14ffa7dc"
  },
  {
    "url": "assets/js/21.e3d5f43b.js",
    "revision": "77b7fbc9bafed322ce0bcf514d934e00"
  },
  {
    "url": "assets/js/22.c606fd39.js",
    "revision": "3a31629957ff84ce2060a72a9dfa96f7"
  },
  {
    "url": "assets/js/23.9c9cf32f.js",
    "revision": "ababb98b2fce59099380a5d4ca80a377"
  },
  {
    "url": "assets/js/24.cd851a4d.js",
    "revision": "330deba4103122cf7083f5c2abba2b76"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.33d6b42d.js",
    "revision": "808ea9f2d864b4467fe90f16175227a8"
  },
  {
    "url": "assets/js/4.5d00dd71.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.659aa560.js",
    "revision": "1e64aadea8db82000000ca9b866cb5ff"
  },
  {
    "url": "assets/js/6.73f22f79.js",
    "revision": "65c87ea66ae3b2e4b676cfecaec56395"
  },
  {
    "url": "assets/js/7.a2994458.js",
    "revision": "817c1a9fc1e6f84583934d814a9ab3f5"
  },
  {
    "url": "assets/js/8.e8761b22.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.b29300bb.js",
    "revision": "e8e90271937b3b6453511208f4d6c4bc"
  },
  {
    "url": "conclusion/index.html",
    "revision": "602d318859fbce06e061a776b7d3ce2a"
  },
  {
    "url": "design/index.html",
    "revision": "af6b9f93e53d18c98af6560413fb02d0"
  },
  {
    "url": "index.html",
    "revision": "e069f59728fb75773449836d2ae3ed2f"
  },
  {
    "url": "intro/index.html",
    "revision": "87d057b1803525645d51022385a517b6"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "d761b0746185249a482365654ec5d83e"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "ea4da0dec1798ebe5ab00be0e9f42100"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "4a96a9b62ac71b5614d1a3df4e41932d"
  },
  {
    "url": "software/index.html",
    "revision": "755f24a774f20ddf70fd1944c220f6c2"
  },
  {
    "url": "test/index.html",
    "revision": "37045bca281cff26018a01427fca68e3"
  },
  {
    "url": "use cases/index.html",
    "revision": "2a2ffc6de09d5f7f8a484df18e1d30e3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
