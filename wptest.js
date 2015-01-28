<div id="map"></div>
<script type="text/javascript">
var map = L.map('map');
var Esri_WorldTopoMap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
});.addTo(map);
function onLocationFound(e) {
var radius = e.accuracy / 2;
L.marker(e.latlng).addTo(map)
.bindPopup("You are within " + radius + " meters from this point").openPopup();
L.circle(e.latlng, radius).addTo(map);
}
function onLocationError(e) {
alert(e.message);
}
map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);
map.locate({setView: true, maxZoom: 16});
</script>
