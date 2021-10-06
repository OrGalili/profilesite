$(document).ready(function() {
    $('.start').removeClass('start');  
});

setTimeout(
    function() 
    {
        $(document).ready(function() {
            $( "#hand, #hiWord" ).addClass( "disappear"); 
        });
        
    }, 1500);
    
setTimeout(
    function() 
    {
        $(document).ready(function() {
            $( '.hide' ).removeClass( 'hide'); 
        });
        
    }, 3000);