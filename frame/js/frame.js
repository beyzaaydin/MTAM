$('input[type="radio"]').on('click change', function(e) {
  var radioVal = $(this).val();  
  if(radioVal == 'yes'){
    $('#subParts').show();
     $('.progress-bar').css('width','0%').text('0%');
  }
  if(radioVal == 'no'){
     $('#subParts').hide();
    $('.progress-bar').css('width','10%').text('10%');
  }
  
if($('input[name="radioHireMe"]') && $('input[name="radioTesting"]').is(':checked')) {
       $('.progress-bar').css('width','10%').text('10%');
    }   
});
