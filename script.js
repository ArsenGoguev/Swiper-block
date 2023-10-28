/*let slider = document.querySelector('.brands');

function mobileSlider () {
	if (window.innerWidth < 768 && slider.dataset.mobile == 'false') {
		mySwaper = new Swiper(slider, {
			direction: 'horizontal',
			slidesPerView: 'auto',
			spaceBetween: 20,
			slideClass: 'brands__brand',
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
		if (slider.classList.contains('brands-initialized')) {
			mySwiper.destroy();
		}
	}
}


mobileSlider();


window.addEventListener('DOMContentLoaded', () => {
  mobileSlider();
});*/


let openMoreButton = document.querySelector('.open-more');
let brandCards = document.querySelector('.swiper-wrapper');
let disabledElements = brandCards.querySelectorAll('.brands__brand--hidden');
let buttonName = openMoreButton.querySelector('.open-more__text');


openMoreButton.addEventListener('click', function (evt) {
	evt.preventDefault();
	let cardList = brandCards.children;
	openMoreBrands(cardList, disabledElements, buttonName);
});


function openMoreBrands (elements, hiddenElements, button) {
	if (button.innerText === 'Показать все') {
		for (let i = 0; i < elements.length; i++) {
			if ( elements[i].classList.contains('brands__brand--hidden') ) {
				elements[i].classList.remove('brands__brand--hidden');
			}
		}
		button.innerText = 'Скрыть';
	} else {
		if (window.innerWidth >= 1120) {
			for (let i = 2; i < hiddenElements.length; i++) {
				hiddenElements[i].classList.add('brands__brand--hidden');
			}
		} else {
			for (let i = 0; i < hiddenElements.length; i++) {
				hiddenElements[i].classList.add('brands__brand--hidden');
			}
		}
		button.innerText = 'Показать все';
	}
}


if (window.innerWidth >= 1120) {
	let cardList = brandCards.children;

	for (let i = 6; i < 8; i++) {
		let disabledElement = cardList[i];
		disabledElement.classList.remove('brands__brand--hidden');
	}
}