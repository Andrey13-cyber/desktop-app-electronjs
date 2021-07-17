let btn_load_file = document.getElementById('load-btn')
let input_btn = document.getElementById('file-input')

btn_load_file.addEventListener('click', function() {
    input_btn.click()
})

let rec = document.getElementById('btn-rec')

rec.addEventListener('click', function() {
    Add()
})