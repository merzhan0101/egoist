$(document).ready(function() {
    $('.menu--btn').click(function() {
        var menu = document.querySelector('.menu');
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });
});
