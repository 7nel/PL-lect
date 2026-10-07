/* Service worker de PL-lect’ : garde en mémoire les fichiers de la voix naturelle (dossier voix/)
   pour qu'elle fonctionne hors ligne. Il ne touche à aucune autre requête.
   Si un fichier de voix/ change, changer aussi le nom du cache ici et dans voix/vendor/piper-tts-web.js. */
const CACHE = 'pl-lect-voix-v1';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== self.location.origin || !u.pathname.includes('/voix/')) return;
  e.respondWith((async () => {
    const c = await caches.open(CACHE);
    const hit = await c.match(e.request.url);
    if (hit) return hit;
    const r = await fetch(e.request);
    if (r.ok && r.status === 200) { try { await c.put(e.request.url, r.clone()); } catch (err) {} }
    return r;
  })());
});
