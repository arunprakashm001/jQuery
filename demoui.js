$(document).ready(function(){

    $(function() {
        $( "#accordion01" ).accordion({
            collapsible: true
        });
        $( "#draggable" ).draggable();
        $( "#resizable" ).resizable();
        $( "#sortable" ).sortable();
        $( "#slider" ).slider();
        
     });

     console.log("hello")

     $('#btn').click(function(){
       var get =$("#number").val()

       $( "#progressbar" ).progressbar({
        value:parseInt( get )
      });
     });

     $( function() {
        var state = true;
        $( "#button" ).on( "click", function() {
          if ( state ) {
            console.log("if"+state)
            $( "#effect" ).animate({
              backgroundColor: "red",
             
              width: 500
            }, 1000 );
          } else {
            console.log("else"+state)
            $( "#effect" ).animate({
                
              backgroundColor: "#white",
              color: "#000",
              width: 240
            }, 1000 );
          }
          state = !state;
          console.log(state)
         
        });
      } );


});