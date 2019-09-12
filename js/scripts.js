$(document).ready(function() {
	$(".slug1").click(function() {
		$(".img1").animate( {
			right: '150px',
			width: '180px',
			height: '180px'
			});
		$(".sloth1").slideToggle(1000);
		});
	$(".slug2").click(function() {
		$(".img2").animate( {
			left: '150px',
			width: '180px',
			height: '180px'
			});
		$(".sloth2").slideToggle(1000);
	});
	$(".slug3").click(function() {
		$(".img3").animate( {
			right: '150px',
			width: '180px',
			height: '180px'
			});
		$(".sloth3").fadeToggle(1000);
	});
	$(".slug4").click(function() {
		$(".img4").animate( {
			left: '150px',
			width: '180px',
			height: '180px'
			});
		$(".sloth4").fadeToggle(1000);
	});
	$(".slug5").click(function() {
		$(".img5").animate( {
			right: '150px',
			width: '180px',
			height: '180px'
			});
		$(".sloth5").slideToggle();
	});
	$(".slug6").click(function() {
		$(".img6").animate( {
			right: '150px',
			width: '180px',
			height: '180px'
			});
		$(".sloth6").slideToggle();
	});
			
});
