let homemap = L.map('homemap').setView([51.19089, 4.39942], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(homemap);

let logoicon = L.icon({
    iconUrl: './assets/images/logo.png',
    iconSize:     [30, 30]
});

L.marker([51.19089, 4.39942], {icon: logoicon}).addTo(homemap).bindPopup("Antwerpen");