const hamburger = document.querySelector('.hamburger');
const container = document.querySelector('.container');
const scrollBtn = document.querySelector('.scroll-btn');
const html = document.querySelector('html');

window.onload = () => {
	setTimeout(() => {
		document.querySelector('body').classList.add('display');
	}, 4000);
};

hamburger.addEventListener('click', () => {
	container.classList.toggle('change');
});

scrollBtn.addEventListener('click', () => {
	html.style.scrollBehavior = 'smooth';

	setTimeout(() => {
		html.style.scrollBehavior = 'unset';
	}, 1000);
});
