// A $( document ).ready() block.
$( document ).ready(function() {
    //alert("My Alert");
  //Change blur according to size t-size
  $(document).on('change', '#t-size', chkSize);
  
  function chkSize() {
    
    var t_size = $('#t-size').val();
    
    if (t_size == 'other') {
      //alert(t_size);
      
      $('#other').removeAttr('disabled');
    } //end if
    else{
      $('#other').attr('disabled', true);
      $('#other').val('');
    }
    
  } //end function
  
});


 