var mapOptions = {
    center: [ 13.060027592555944, 80.22105486620737],
    zoom: 11
 }
 
 var map = new L.map('map', mapOptions);
 
 var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
 
 map.addLayer(layer);