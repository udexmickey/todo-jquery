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
    ///console.log(folder);
    folder.push(input.value);
    localStorage.folder = JSON.stringify(folder);
};

function getTodos(){
    var folder = JSON.parse(localStorage.folder);
    folder.map( (files) => {
        //console.log(files);
        const ul = $("ul").html();
        $("ul").html (`${ul} <li> ${files} <span><strong>🗑</strong></span></li>`)
    });
};

$("button").on("click", function(){
    localStorage.clear();
});

$("ul").on("click", "span", function(e){
    event.stopPropagation();
    // $(this).parent().fadeOut(function(){
    //             // $(this).remove();
    //             window.localStorage.removeItem();
    //         });
    $(this).parent().remove();
    // $("li").remove($(this).val());
    // $("ul").remove(`<li><span>X</span> $(this).val() </li>`)
    // var spanVal = '$(this).val()';
    // localStorage.removeItem();
    // // $("ul").localStorage.removeItem(`<li><span>X</span> ${scores} </li>`)
    // const ul = $("ul").html();
    // $("ul").localStorage.removeItem(`${ul} <li> ${files} <span>X</span></li>`)
    // $(this).style.display = "none";
});


