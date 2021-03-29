$(document).ready(function() {

	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})

	$('.specific-tip').tooltip({
  		placement: 'top',
		html:true,
		title:"<strong><u>Dark roast coffee</u></strong> is a dark brown color and often has an oily surface. These coffees have a low acidity, heavy body, and tend to reveal deeper, darker flavors."
	});

	$('[data-toggle="popover"]').on('show.bs.popover', function () {
		$("#follow-btn").css("background-color", "#deb98a");
	})

	$('[data-toggle="popover"]').on('hide.bs.popover', function () {
		$("#follow-btn").css("background-color", "#f8f9fa");
	})

	$('[data-toggle="popover"]').popover({
		html:true,
		title:"Follow us on",
		content: '<div id="follow">\
			<a href=""><i class="fab fa-twitter"></i> Twitter <br></a>\
			<a href=""><i class="fab fa-youtube"></i> Youtube <br></a>\
			<a href=""><i class="fab fa-facebook-f"></i> Facebook</a>\
		</div>',
		trigger: 'focus'
		
	});

});
