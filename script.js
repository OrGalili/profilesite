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
            
            $(document).ready(function() {
                $('#hi').remove();
            });
            
            
        }, 3000);
        
        
        /*good explanation for on scroll animation:*/
        /*https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/*/
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    document.querySelector("#wpfskill").classList.add("bar","wpf");
                    document.querySelector("#csharpskill").classList.add("bar","csharp");
                    document.querySelector("#jsskill").classList.add("bar","js");
                    document.querySelector("#cssskill").classList.add("bar","css");
                    document.querySelector("#sqlskill").classList.add("bar","sql");
                    return;
                }
            });
        });
        
        observer.observe(document.querySelector('#skills'));
