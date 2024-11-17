

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const headerTitle = document.querySelector('header h1');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    headerTitle.classList.toggle('hidden');
});