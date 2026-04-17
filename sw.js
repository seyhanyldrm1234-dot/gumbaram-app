self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(clients.openWindow('/'));
});

// Bu kısım arka planda bildirim gelmesini zorlar
self.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'SCHEDULE_NOTIFICATION') {
        const options = {
            body: 'ZAMAN GELDİ! UNUTMADAN YATIRIMINI YAP',
            icon: 'https://i.hizliresim.com/3wlhjf8.jpeg',
            badge: 'https://i.hizliresim.com/3wlhjf8.jpeg',
            vibrate: [200, 100, 200],
            tag: 'yatirim-vakti',
            renotify: true
        };

        // 10 saniye sonra bildirim gönder
        setTimeout(() => {
            self.registration.showNotification('GUMBARAM', options);
        }, 10000); 
    }
});
