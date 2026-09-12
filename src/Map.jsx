import { useEffect, useRef, useState } from 'react'
import * as maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import LocationPanel from './LocationPanel'
import locations from './data/locations'

function Map() {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [selectedLocation, setSelectedLocation] = useState(null)

  useEffect(() => {
    if (map.current) return

       map.current = new maplibregl.Map({
      container: mapContainer.current,
     style: 'https://tiles.openfreemap.org/styles/dark',
      center: [16.92839, 45.28033],
      zoom: 10,
    })

    map.current.on('load', () => {
  console.log('MAPA JE UCITANA')

  map.current.resize()

  setTimeout(() => {
    map.current?.resize()
  }, 300)
})

map.current.on('error', (event) => {
  console.error('MAPLIBRE GRESKA:', event.error)
})

    map.current.addControl(
      new maplibregl.NavigationControl(),
      'top-right'
    )
    const markers = []

    locations.forEach((location) => {
      const popup = new maplibregl.Popup({
        offset: 30,
        closeButton: true,
      }).setHTML(`
        <div class="location-popup">
          <div class="popup-category">
            ${location.category}
          </div>

          <h3>${location.name}</h3>

          <p>
            Локација повезана са страдањем током
            Другог светског рата.
          </p>

          <button
            class="open-location-button"
            data-location-id="${location.id}"
          >
            ОТВОРИ ДОСИЈЕ →
          </button>
        </div>
      `)

      /*
       * КРУЖНИ ФОТО MARKER
       */

      const markerElement = document.createElement('div')

      markerElement.className = 'location-marker'

      if (location.photos?.length > 0) {
        markerElement.style.backgroundImage =
          `url("${location.photos[0].image}")`
      }

      const marker = new maplibregl.Marker({
        element: markerElement,
        anchor: 'center',
      })
        .setLngLat(location.coordinates)
        .setPopup(popup)
        .addTo(map.current)

      markers.push(marker)

      /*
       * ОТВАРАЊЕ ДОСИЈЕ
       */

      popup.on('open', () => {
        const button = document.querySelector(
          `.open-location-button[data-location-id="${location.id}"]`
        )

        if (button) {
          button.onclick = () => {
            setSelectedLocation(location)
            popup.remove()
          }
        }
      })
    })

    return () => {
      markers.forEach((marker) => marker.remove())

      map.current?.remove()

      map.current = null
    }
  }, [])

  /*
   * ПРИКАЖИ ЛОКАЦИЈУ НА МАПИ
   */

  const showOnMap = () => {
    if (!selectedLocation || !map.current) return

    map.current.flyTo({
      center: selectedLocation.coordinates,
      zoom: 12,
      pitch: 0,
      bearing: 0,
      duration: 1800,
    })

    setSelectedLocation(null)
  }

  return (
    <div className="map-wrapper">

      <div
        ref={mapContainer}
        className="map-container"
      />

      {selectedLocation && (
        <LocationPanel
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
          onShowOnMap={showOnMap}
        />
      )}

    </div>
  )
}

export default Map