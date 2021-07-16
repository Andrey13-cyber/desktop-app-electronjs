let btn_load_file = document.getElementById('load-btn')
let input_btn = document.getElementById('file-input')

btn_load_file.addEventListener('click', function() {
    input_btn.click()
})

<<<<<<< HEAD
$(document).ready(function() {
    $("#load-btn").click(function() {
        $("#editor").load("test.txt", function(){
            alert("Done Loading");
        });
   }); 
}); 
=======
let rec = document.getElementById('btn-rec')

rec.addEventListener('click', function() {
    Add()
})
>>>>>>> 20f4148df382cb1c7423587d5ca93f56d61bcc22
