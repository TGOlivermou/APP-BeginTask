
   
   function toggleDesc(el) {
      const box = el.querySelector('.desc-box');
      const arrow = el.querySelector('.arrow');
      box.classList.toggle('show');
      arrow.style.transform = box.classList.contains('show') ? 'rotate(90deg)' : 'rotate(0deg)';
    }