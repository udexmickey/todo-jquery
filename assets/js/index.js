//the section that marks through each list item when clicked upon.
$("ul").on("click", "li", function(){
     $(this).toggleClass("complete");

});

//this is the code behind deleting your Todos from the list.
// $("li").on("click", "span", function(event){
//     $(this).parent().fadeOut(function(){
//         $(this).remove();
//     });
//     event.stopPropagation();
// });

// $("input[type='text']").on("keypress", function(event){
//    var scores = $(this).val();
   
//    if(event.which === 13){
//     $(this).val("");
//     $("ul").append(`<li><span>X</span> ${scores} </li>`)
//    }
// });


if(!localStorage.folder){
    localStorage.folder = "[]";
}
function addTodo(){

    var folder = JSON.parse(localStorage.folder);
    folder.push(input.value);
    localStorage.folder = JSON.stringify(folder);
};

function getTodos(){
    var folder = JSON.parse(localStorage.folder);
    folder.map( (files) => {

        const ul = $("ul").html();
        $("ul").html (`${ul} <li> ${files} <span><strong>🗑</strong></span></li>`)
    });
};

$("button").on("click", function(){
    localStorage.clear();
});

$("ul").on("click", "span", function(e){
    event.stopPropagation();
   
    var folder = JSON.parse(localStorage.folder);

        var filtered = $(this).filter(function(value, index, arr){
            //this is the code👇👇that is running the remove function the todo App  
            $(this).parent().remove();

             //this is the code👆👆that is running the remove function the todo App  
            localStorage.getItem(JSON.parse(localStorage.folder));
           var eShockAm = localStorage.removeItem(index);
           console.log(arr);

           });
           
    //        const index = folder.indexOf($(this));
    //        if (index > -1) {
    //            folder.splice(index, 1);
    //        };
    // // });
});



