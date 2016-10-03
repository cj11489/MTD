/*google map using js API*/
function initMap() {
  var mylatlng = {lat: 52.489471, lng: -1.898575};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: mylatlng,
    zoom: 10
  });

  var marker = new google.maps.Marker({
  	position: mylatlng,
  	map: map,
  	animation: google.maps.Animation.DROP,
  	title: "Birmingham"
  });

  marker.setMap(map);
}

<!--Tooltips jQuery start here-->
function () {
	('#date').tooltip();
};

function () {
	('[data-toggle="tooltip"]').tooltip();
});

function () {
	('#work').tooltip();
});

<!--Tooltips jQuery end-->