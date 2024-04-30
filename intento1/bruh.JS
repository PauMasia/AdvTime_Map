document.getElementById('desierto').addEventListener('click', function() {
    var image = document.getElementById('desierto_img');
    image.style.width = (parseFloat(window.getComputedStyle(image).width) * 1.2) + 'px';
    image.style.height = (parseFloat(window.getComputedStyle(image).height) * 1.2) + 'px';

  });