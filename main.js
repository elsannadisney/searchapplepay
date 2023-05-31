
const container = document.getElementById('map')

const position = [37.558982017431876, 126.97770312881485]

const tileServer = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

const mymap = L.map(container).setView(position, 13)

L.tileLayer(tileServer, { attribution: 'OpenStreetMap' }).addTo(mymap)

const restaurants = [
  { name: '짜장면', lat: 37.558502017431876, lon: 126.97590312881485 },
  { name: '된장찌개', lat: 37.556122017431876, lon: 126.97790312881485 },
  { name: '김치찌개', lat: 37.560002017431876, lon: 126.97320312881485 },
]

restaurants.forEach(restaurant => {
  const marker = L.marker([restaurant.lat, restaurant.lon]).addTo(mymap)
  marker.bindPopup(restaurant.name)
})
