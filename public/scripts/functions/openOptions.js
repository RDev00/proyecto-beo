export default function openOptions(options) {
	options.classList.remove('hideMenu');
	options.classList.add('showMenu');
	options.style.display = 'flex';
}