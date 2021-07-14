let btn_load_file = document.getElementById('load-btn')
let input_btn = document.getElementById('file-input')

btn_load_file.addEventListener('click', function() {
    input_btn.click()
})

$(document).ready(function() {
    $("#load-btn").click(function() {
        $("#editor").load("test.txt", function(){
            alert("Done Loading");
        });
   }); 
}); 