$( document ).ready(function(){
	new WOW().init();
	$('.button-collapse').sideNav();
	$('.parallax').parallax();
	$('.carousel.carousel-slider').carousel({full_width: true});
	
	var options = [
		{selector: '.round-log', offset: 0, callback: function(el) {
			var roundLogEl = el;
			setInterval(function(){$(".content").show();},2800);
			anime({
			  targets: roundLogEl,
			  innerHTML: [0, 100],
			  easing: 'linear',
			  round: 10, // Will round the animated value to 1 decimal
			  delay: 2800	
			});
			
		} }
	  ];
	Materialize.scrollFire(options);
				
	var wow = new WOW(
	  {
	    boxClass:     'wow',      // 要套用WOW.js縮需要的動畫class(預設是wow)
	    animateClass: 'typing', // 要"動起來"的動畫(預設是animated, 因此如果你有其他動畫library要使用也可以在這裡調整)
	    offset:       0,          // 距離顯示多遠開始顯示動畫 (預設是0, 因此捲動到顯示時才出現動畫)
	    mobile:       true,       // 手機上是否要套用動畫 (預設是true)
	    live:         true,       // 非同步產生的內容是否也要套用 (預設是true, 非常適合搭配SPA)
	    scrollContainer: null // 可以設定成只套用在某個container中捲動才呈現, 不設定就是整個視窗
	  }
	);

	var wow = new WOW(
	  {
	    boxClass:     'wow',      // 要套用WOW.js縮需要的動畫class(預設是wow)
	    animateClass: 'show', // 要"動起來"的動畫(預設是animated, 因此如果你有其他動畫library要使用也可以在這裡調整)
	    offset:       0,          // 距離顯示多遠開始顯示動畫 (預設是0, 因此捲動到顯示時才出現動畫)
	    mobile:       true,       // 手機上是否要套用動畫 (預設是true)
	    live:         true,       // 非同步產生的內容是否也要套用 (預設是true, 非常適合搭配SPA)
	    scrollContainer: null // 可以設定成只套用在某個container中捲動才呈現, 不設定就是整個視窗
	  }
	);
	
})

	const typedTextSpan = document.querySelector(".typed-text");
	const cursorSpan = document.querySelector(".cursor");
	
	const textArray = ["hard", "fun", "a journey", "LIFE"];
	const typingDelay = 200;
	const erasingDelay = 100;
	const newTextDelay = 2000;
	let textArrayIndex = 0;
	let charIndex = 0;
	
	function type() {
	  if (charIndex < textArray[textArrayIndex].length) {
	    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
	    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
	    charIndex++;
	    setTimeout(type, typingDelay);
	  } 
	  else {
	    cursorSpan.classList.remove("typing");
	  	setTimeout(erase, newTextDelay);
	  }
	}
	
	function erase() {
		if (charIndex > 0) {
	    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
	    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
	    charIndex--;
	    setTimeout(erase, erasingDelay);
	  } 
	  else {
	    cursorSpan.classList.remove("typing");
	    textArrayIndex++;
	    if(textArrayIndex>=textArray.length) textArrayIndex=0;
	    setTimeout(type, typingDelay + 1100);
	  }
	}
	
	document.addEventListener("DOMContentLoaded", function() {
	  if(textArray.length) setTimeout(type, newTextDelay + 250);
	});
	
	
	
