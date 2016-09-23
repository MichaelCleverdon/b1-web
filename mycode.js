$(document).ready(function() {
	
		$(".hide").hide();
		$("#aboutmeinfo").hide();
		$("#hidebutton").click(function() {
			$(".hide").fadeToggle(600);
			
			
		});
		$("#aboutmebutton").click(function() {
			$("#aboutmeinfo").slideToggle(400);
			
		});
});

