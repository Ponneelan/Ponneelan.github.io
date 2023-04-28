var link = document.getElementsByClassName('nav-link');
link.addEventListener('click', function(event) {
    event.preventDefault();
    let href = link.getAttribute('href')
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  });