window.addEventListener('scroll', function(){
  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;
  const boxes = document.querySelectorAll('.inner');
  
  boxes.forEach(function(box) {
    const distanceToBox = box.offsetTop;
    if(scroll + windowHeight > distanceToBox) {
      box.classList.add('is-active');
    }
  });
});