let slider = document.querySelector('.brands-block');

function mobileSlider () {
	if (window.innerWidth < 768 && slider.dataset.mobile == 'false') {
		mySwaper = new Swiper(slider, {
			direction: 'horizontal',
			slidesPerView: 'auto',
			spaceBetween: 20,
			slideClass: 'brand-cards__brand',
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			}
		});
		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth >= 768) {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('brands-block-initialized')) {
			mySwiper.destroy();
		}
	}
}


mobileSlider();


window.addEventListener('resize', () => {
  mobileSlider();
});


let openMoreButton = document.querySelector('.open-more');
let brandCards = document.querySelector('.swiper-wrapper');
let disabledElements = brandCards.querySelectorAll('.brand-cards__brand--hidden');
let buttonName = openMoreButton.querySelector('.open-more__text');


openMoreButton.addEventListener('click', function (evt) {
	evt.preventDefault();
	let cardList = brandCards.children;
	openMoreBrands(cardList, disabledElements, buttonName);
});


function openMoreBrands (elements, hiddenElements, button) {
	if (button.textContent === 'Показать все') {
		for (let i = 0; i < elements.length; i++) {
			if ( elements[i].classList.contains('brand-cards__brand--hidden') ) {
				elements[i].classList.remove('brand-cards__brand--hidden');
			}
		}
		button.textContent = 'Скрыть';
	} else {
		if (window.innerWidth >= 1120) {
			for (let i = 2; i < hiddenElements.length; i++) {
				hiddenElements[i].classList.add('brand-cards__brand--hidden');
			}
		} else {
			for (let i = 0; i < hiddenElements.length; i++) {
				hiddenElements[i].classList.add('brand-cards__brand--hidden');
			}
		}
		button.textContent = 'Показать все';
	}
}


if (window.innerWidth >= 1120) {
	let cardList = brandCards.children;

	for (let i = 6; i < 8; i++) {
		let disabledElement = cardList[i];
		disabledElement.classList.remove('brand-cards__brand--hidden');
	}
}