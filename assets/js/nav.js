(function() {
  document.getElementById('menu-button').addEventListener('click', function() {
		let expanded = this.getAttribute('aria-expanded') === 'true' || false;
  	this.setAttribute('aria-expanded', !expanded);
		document.getElementById('menu').classList.toggle('hidden');
	});
})();