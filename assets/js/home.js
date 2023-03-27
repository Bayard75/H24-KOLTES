var myLatlng = new google.maps.LatLng(48.866924,2.363339);
var mapOptions = {
    zoom: 15,
    center: myLatlng
}
var map = new google.maps.Map(document.getElementById("map"),mapOptions);

var marker = new google.maps.Marker({
    position: myLatlng,
    title: "Hello World!"
});

marker.setMap(map);

