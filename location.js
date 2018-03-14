let showSatelliteImage = function(info) {
  let div = jQuery("#location");
  let google_image_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + info.coords.latitude.toFixed(4) + "," + info.coords.longitude.toFixed(4) + "&zoom=15&size=600x400&maptype=road&key=AIzaSyBrLfaqBHZNoiI8463XDdy57fJHiwA8vy4"
  div.html('<img src="' + google_image_url + '" width = 600>')
};

let handlePosition = function(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showSatelliteImage);
}

let link = jQuery("#get_location")
link.on("click", handlePosition);
