document.addEventListener("DOMContentLoaded", function() {


  $(document).ready(function() {


    //Promo check

    var oldItems = localStorage.getItem('closedPromo');
    if (oldItems) {
      $('#promo-banner').removeClass('hidden');
      $('#promo-modal').addClass('hidden');
    } else {
      $('#promo-banner').addClass('hidden');
      $('#promo-modal').removeClass('hidden');
      localStorage.setItem('closedPromo', true);
    }

  
    $('#show-list li').each(function(){
      var date = new Date($(this).find('.date')[0].innerText);
      var today = new Date();
      if (date > today) {
        console.log('active')
        $(this).addClass('active');
        $('#events').addClass('show');
      } 
    });
  });
  

});

