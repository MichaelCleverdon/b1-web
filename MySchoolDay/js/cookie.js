var buttonClickedTimes = 0;
var cookies = 0;


$(document).ready(function() {
	$("#cookie").click(function() {
	
	$("#cookieTimes").text(function() {
			buttonClickedTimes += 1;
			return "This button has been clicked " + buttonClickedTimes + " times";
		});
		$("#totalCookies").text(function(){
			cookies += 10;
			return "You have " + cookies + " cookies";
		});
		
	});
