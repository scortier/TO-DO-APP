//alert('asfao');

// $('li').click(function(){
//     if($(this).css("color")==="rgb(128,128,128)"){
//         $(this).css({
//             color:"black",
//             textDecoration:"none"

//         });
//     }
//     else{
//         $(this).css({
//             color:"gray",
//             textDecoration:"line-through"

//         });
//     }
// //if(li is gray ) then it black
// //else turn it gray

//     $(this).css({
//         color:"gray",
//         textDecoration:"line-through"
//     })
// });
$("ul").on("click" ,"li" ,function(){
    $(this).toggleClass("completed");
});

//to select  span section
$("ul").on("click","span",function(event){              //here event is an object
//    $(this).remove();  //to remove on cicking the x.
    $(this).parent().fadeOut(500,function(){            //here this refer to span.
        $(this).remove();                               //here this refr to line not span
    });                         //to remove on cicking the x.parent is used to remive complete line not only x    
    event.stopPropagation();     //to stop further triggering of an 
})

//to add new work
$("input[type='text'").keypress(function(event){
    if(event.which===13){                               // 13 is character code for enter key.
        var todo = $(this).val();
        $(this).val("");
        //create new li and add in ul
        $("ul").append(" <li><span><i class='fa fa-trash'></i></span> " + todo + "</li>")
    }
    })

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle(); 
})