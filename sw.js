self.addEventListener('push', function(event) {
    const options = {
        body: 'ZAMAN GELDİ SEYHAN! UNUTMADAN YATIRIMINI YAP',
        icon: 'https://i.hizliresim.com/3wlhjf8.jpeg',
        vibrate: [200, 100, 200]
    };
    event.waitUntil(self.registration.showNotification('GUMBARAM', options));
});
