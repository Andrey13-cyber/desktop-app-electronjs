let btn_load_file = document.getElementById('load-btn')
let input_btn = document.getElementById('file-input')

btn_load_file.addEventListener('click', function() {
    input_btn.click()
})

let rec = document.getElementById('btn-rec')

rec.addEventListener('click', function() {
    Add(1)
})

let ellipse = document.getElementById('btn-ellip')

ellipse.addEventListener('click', function() {
    Add(2)
})

let hex = document.getElementById('btn-hex')

hex.addEventListener('click', function() {
    Add(3)
})

let romb = document.getElementById('btn-romb')
romb.addEventListener('click', function() {
    Add(4)
})

let ellip = document.getElementById('btn-paral')
ellip.addEventListener('click', function() {
    Add(5)
})