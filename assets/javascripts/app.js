const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo');
const logoFirstName = document.querySelector('.first-logo-name');
const logoSecondName = document.querySelector('.second-logo-name');
const navbarHolder = document.querySelector('.navbar-holder');
const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach(link => {
	link.addEventListener('mouseover', function (e) {
		iconContainer = e.target.querySelector('.icon-container');
		iconContainer.innerHTML = '&rarr;'
	});
	link.addEventListener('mouseout', function(e) {
		iconContainer.innerHTML = ''
	})
})


// window.addEventListener('scroll', function (e) {
// 	if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
// 		navbarHolder.style.display = 'block';
// 		navbar.classList.add('sticky');
// 		logo.style.width = '100px';
// 		logoFirstName.style.fontSize = '16px';
// 		logoSecondName.style.fontSize = '10px';
		

// 	} else {
// 		navbar.classList.remove('sticky')
// 		logo.style.width = '200px';
// 		logoFirstName.style.fontSize = '24px';
// 		logoSecondName.style.fontSize = '14px';
// 		navbarHolder.style.display = 'none';
// 	}
// });
