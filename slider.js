function slider(slideIndex,slides,prev,next,dotsWrap,dots){
	showSlides(slideIndex);
	//показать n-ый слайд, остальные скрыть
	function showSlides(n){

		if (n > slides.length){
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}

		slides.forEach(function(item){
			item.style.display = 'none';
		});

		dots.forEach((item)=> item.classList.remove('dot-active'));
		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
	}
	//листает слайды
	function plusSlides(n){
		showSlides(slideIndex += n);
	}
	//активный слайд
	function currentSlide(n){
		showSlides(slideIndex = n);
	}
	//кнопка следующий слайд
	prev.addEventListener('click', function(){
		plusSlides(-1);
	});
	//кнопка предыдущий слайд
	next.addEventListener('click', function(){
		plusSlides(1);
	});
	//навигация точками
	dotsWrap.addEventListener('click', function(e){ //делегирование
		for (let i=0; i < dots.length + 1;i++){ //перебираем  точки + 1, тк отсчет от 0
			if (e.target.classList.contains('dot') && e.target == dots[i-1]){ //проверка клика на точку
				currentSlide(i);
			}
		}
	});
}