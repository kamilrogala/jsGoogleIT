/*jshint esversion:6,browser:true,devel: true*/
const jsGoogleIT = function (sites) {
	const button = document.getElementById('next');
	let old, elements;
	elements = 5;

	function load(elements, old) {
		for (old; old < elements; old++) {
			window.open('https://www.google.pl/search?q="' + sites.urls[old]+'"', '_blank');
		}
	}
	
	button.addEventListener('click',() => {
		old = Number(document.getElementById('count').textContent);
		elements = old + 5;
		if (elements < sites.urls.length) {
			load(elements, old);
		} else {
			const modulo = sites.urls.length % old;
			load(old + modulo, old);
			button.remove();
			const finish = document.createElement('div');
			finish.innerHTML = "<h2>All items googled</h2>";
			document.getElementById('main').prepend(finish);
			console.log('All items googled');
		}
		document.getElementById('count').textContent = elements;
	});

};
