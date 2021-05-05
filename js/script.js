function getOriginal() {
	$(".block").css("background-color", "#B54A37");
	$("#block1").css("opacity", "0.0");
	$("#block2").css("opacity", "0.0");
	$("#block3").css("opacity", "0.0");
	$("#block4").css("opacity", "0.0");
	$("#block5").css("opacity", "0.0");
	anime({
		targets: "#status-block2",
		translateX: 0,
		translateY: 0
	});
	anime({
		targets: "#status-block3",
		translateX: 0,
		translateY: 0
	});
	anime({
		targets: "#status-block4",
		translateX: 0,
		translateY: 0
	});
	anime({
		targets: "#status-block5",
		translateX: 0,
		translateY: 0
	});
}

function getExpanded() {
	$(".block").css("background-color", "#B54A37");
	$("#block1").css("opacity", "0.0");
	$("#block2").css("opacity", "0.0");
	$("#block3").css("opacity", "0.0");
	$("#block4").css("opacity", "0.0");
	$("#block5").css("opacity", "0.0");
	anime({
		targets: "#status-block2",
		translateX: -200,
		translateY: 0
	});		
	anime({
		targets: "#status-block3",
		translateX: -150,
		translateY: 0
	});
	anime({
		targets: "#status-block4",
		translateX: -100,
		translateY: 0
	});
	anime({
		targets: "#status-block5",
		translateX: -50,
		translateY: 0
	});
}

function getPortfolio() {
	$(".block").css("background-color", "#58B7E0");
	$("#block1").css("opacity", "1.0");
	$("#block2").css("opacity", "1.0");
	$("#block3").css("opacity", "1.0");
	$("#block4").css("opacity", "1.0");
	$("#block5").css("opacity", "1.0");
	anime({
		targets: "#status-block2",
		translateX: 0,
		translateY: 50
	});
	anime({
		targets: "#status-block3",
		translateX: 0,
		translateY: 100
	});
	anime({
		targets: "#status-block4",
		translateX: 0,
		translateY: 150
	});
	anime({
		targets: "#status-block5",
		translateX: 0,
		translateY: 200
	});
}

$(document).ready(function(){
	ScrollReveal().reveal("#section-portfolio-box", { delay: 500}, { duration: 1000 }, { cleanup: true });
	var portfolioDist = $("#section-portfolio").offset().top;
	var skillsDist = $("#section-skills").offset().top;
	var experiencesDist = $("#section-experiences").offset().top;
	console.log(portfolioDist);
	console.log(skillsDist);
	console.log(experiencesDist);
	$(window).on("resize", function(){
		portfolioDist = $("#section-portfolio").offset().top;
		skillsDist = $("#section-skills").offset().top;
		experiencesDist = $("#section-experiences").offset().top;
	});
	var hour = new Date().getHours();
	var original = true;
	var expanded = false;
	var portfolio = false;
	var skills = false;
	var experiences = false;
	if (0 <= hour && hour < 12) {
		$("#section-about-box h1").text("Good Morning,");
	} else if (12 <= hour && hour < 18) {
		$("#section-about-box h1").text("Good Afternoon,");
	} else {
		$("#section-about-box h1").text("Good Evening,");
	}
	$("#taskbar").css("background", "rgba(255, 255, 255, 0.0)");
	
	$(window).scroll(function(){
		if ($(window).scrollTop() >= 50) {
			$("#taskbar").css("background", "rgba(255, 255, 255, 1.0)");
		} else {
			$("#taskbar").css("background", "rgba(255, 255, 255, 0.0)");
		}
		if ($(window).scrollTop() >= portfolioDist - 100 && $(window).scrollTop() < skillsDist - 100) {
			if (portfolio == false) {
				getPortfolio();
			}
			portfolio = true;
			original = false;
		} else if ($(window).scrollTop() >= skillsDist - 100 && $(window).scrollTop() < experiencesDist - 100) {
			if (portfolio == false) {
				getPortfolio();
			}
			portfolio = true;
			original = false;
		} else {
			if (original == false) {
				getOriginal();
				original == true;
			}
			if (expanded == true) {
				getExpanded();
			}
			portfolio = false;
			skills = false;
			experiences = false;
		}
	});
	$("#section-about-box input").on('input', function(){
		var str = $("#section-about-box input").val();
		if (str){
			$("#section-about-box h2").text("Hello " + str + ", my name is Tim!");
			if (expanded == false) {
				getExpanded();
				expanded = true;
			}
		} else {
			$("#section-about-box h2").text("Hello, my name is Tim!");
			getOriginal();
			expanded = false;
		}
	});
});


