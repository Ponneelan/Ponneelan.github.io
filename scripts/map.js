fetch('http://localhost:3000/mapbox')
    .then((res) => res.json())
    .then(data => {
        mapboxgl.accessToken = data['apikey'];
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [80.22105486620737, 13.060027592555944],
            zoom: 11,
            navigationControl: {
                showCompass: true,
                showZoom: true
            }
        });

        // Add a pinpoint at your location
        var marker = new mapboxgl.Marker({ color: 'red' })
            .setLngLat([80.22105486620737, 13.060027592555944])
            .addTo(map);
    })



