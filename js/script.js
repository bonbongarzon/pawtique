document.addEventListener('DOMContentLoaded', function() {
    var accordionItems = document.querySelectorAll('.accordion-item');
  
    accordionItems.forEach(function(item) {
      var toggleButton = item.querySelector('.accordion-toggle');
      var content = item.querySelector('.accordion-content');
  
      toggleButton.addEventListener('click', function() {
        content.classList.toggle('show');
      });
    });
  });
  