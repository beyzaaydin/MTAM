$('input[type="radio"]').on('click change', function(e) {
  var radioVal = $(this).val();  
  if(radioVal == 'yes'){
    $('kayit_form').show();
    <a href="frame/normalkullanici.html" target="kayit"></a>
  }
  if(radioVal == 'no'){
     $('kayit_form').show();
    <a href="frame/mezarci.html" target="kayit"></a>
  }
  

});
