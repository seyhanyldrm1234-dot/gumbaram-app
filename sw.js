self.addEventListener('push', function(event) {
    const options = {
        body: 'ZAMAN GELDİ! UNUTMADAN YATIRIMINI YAP',
        icon: 'https://i.hizliresim.com/3wlhjf8.jpeg',
        vibrate: [200, 100, 200],
        tag: 'yatirim-bildirim', // Bildirimlerin üst üste binmesini engeller
        renotify: true // Her seferinde sesi/titreşimi zorlar
    };
    event.waitUntil(self.registration.showNotification('GUMBARAM', options));
});

// iPhone'u uyanık tutmak için ekleme
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(clients.openWindow('/'));
});
