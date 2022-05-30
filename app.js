const button = document.querySelector('.button');

button.addEventListener('click', function(e) {
    alert('Coming Soon!');
    e.preventDefault();
    button.style.backgroundColor = 'red'
})