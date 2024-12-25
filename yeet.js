var url = window.location.href;
var yeet = '&udm=14';
if ( ! url.includes( yeet )) {
	window.location.href = url + yeet;
} else {
	console.log( 'ai garbage yeeted' );
}
