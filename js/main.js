// In HTML: Create an element to display the map, make sure to give add a width and height so there is space for the map.

// In HTML: Add a script to include the Google Maps API.

// 6. In JS: Create a function to add the map,
// with one variable for map properties.
// Update the location to your favorite place on Earth.
function initMap(){
	var mapProp = {
		center: new google.maps.LatLng(37.773972, -122.431297),
		zoom: 13,
// In JS: Disable the default controls on the map
		disableDefaultUI: true
	};
// 7. In JS: Using the google.maps.event.addDomListener method,
// select the window and when it loads run the function to add the map.

// In JS: Add the map to the screen using the google.maps.Map method.
	var map = new google.maps.Map(document.getElementById("map"), mapProp);

// In JS: Create a marker and set the position to mapProp.center.
// Add the marker to the map using the Google setMap method.
	var marker = new google.maps.Marker(
		{
			position: mapProp.center,
			animation: google.maps.Animation.BOUNCE
		});
	marker.setMap(map);

// In JS: Using the google.maps.event.addListener method,
// add an event so when you click on the marker it zooms in on the map marker.
	google.maps.event.addListener(marker, "click", function(){
		map.setZoom(15);
		map.setCenter(marker.getPosition());
	});
}




// In W3Schools: Move to the next seciton Maps Controls.



