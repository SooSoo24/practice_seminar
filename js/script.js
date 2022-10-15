'use strict';

{
  // Intersection Observer API

  const toTop = document.getElementById('to_top');
  const target = document.getElementById('target');



  toTop.addEventListener('click', e => {
    e.preventDefault();


    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });





  function onScrollCallback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        toTop.classList.add('show');
        console.log("ee");

      } else {
        toTop.classList.remove('show');
      }


    });
  }



  const onScrollObserver = new IntersectionObserver(onScrollCallback);
  onScrollObserver.observe(target);
}