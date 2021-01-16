function randomColorGenerator() {

    var r = Math.round(Math.random() * 255) //memberikan rgb random angka yang keluar 0 sd 255
    var g = Math.round(Math.random() * 255)
    var b = Math.round(Math.random() * 255)

    return 'rgb(' + r + ', ' + g + ', ' + b + ')' //concatebate

}

//*mengacak warna
function randomColor(el) {

    var arr = []

    for (var i = 0; i < el; i++) {
        arr.push(randomColorGenerator()) //masukin ke array
    }
    return arr
}


//menampilkan angka random 0 sd 6
function pickColor() {
    var random = Math.floor(Math.random() * color.length) //color lenght bisa 3 dan 6 tergantung kondisi
    //random isinya angka 0 sd 6
    return color[random]//akan menghasilkan 1 warna dari acak warna via color = randomColor(numSquare)
}


//setiap refresh akan reset
function reset() {
    h1.style.backgroundColor = 'yellow' //pas play again kembali biru
    resetButton.innerHTML = 'New Color' //pas play again tulisan jadi new color
    result.innerHTML = "" //pas play again result hilang

    color = randomColor(numSquare) //mengambil numSquare sebelumnya, defult 6, maka akan mengacak 6 warna
    pickedColor = pickColor()
    colorDisplay.innerHTML = pickedColor

    //for di bawah untuk game mode easy hilang 3
    // dan ketika hard mode muncul 6 lagi
    for (var i = 0; i < square.length; i++) { //square lenght 6
        if (color[i]) { //cek apakah ada color di index for easy mode
            square[i].style.display = "block" //jika ada color maka semua di block
            square[i].style.backgroundColor = color[i] ///supaya warna macem2 pas opening
        } else {
            square[i].style.display = "none"; //jika tidak ada color maka display none
        }
    }

    
}



//function untuk timpa warna pada semua kotak, warna yang bener
function correctColor(el) {
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = el
    }
}

function setupSquare(){

    for (var i = 0; i < square.length; i++) {

        square[i].addEventListener('click', function () {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor
            console.log(clickedColor)

            //compare color to picked color dari function reset
            if (clickedColor === pickedColor) {
                result.innerHTML = 'CORRECT'
                result.style.color = 'green'
                correctColor(pickedColor)
                h1.style.backgroundColor = (pickedColor)
                resetButton.innerHTML = 'Play Again ?'
            } else {
                result.innerHTML = 'FALSE'
                result.style.color = 'red'
                this.style.backgroundColor = 'white' // pas false hilang square nya
            }

        })
    }

}

function setupButtonMode(){
    //for dibawah untuk memberika event pada setiap tombol
    for (var i = 0; i < modeButton.length; i++) {
    
           modeButton[i].addEventListener('click', function () {
    
            modeButton[0].classList.remove('selected') //menghilangkan selected easy
            modeButton[1].classList.remove('selected') //menghilangkan selected har
            this.classList.add('selected')
            this.textContent === 'Easy' ? numSquare = 3 : numSquare = 6 //ternary operator
       
            reset();
        })
    
    }
    
    }


var numSquare = 6 //merekam atau mendefinisikan setiap mode
var color = []
var pickedColor;
var square = document.querySelectorAll('.square')
var result = document.getElementById('result')
var h1 = document.querySelector('h1')
var resetButton = document.querySelector('#resetButton')
var modeButton = document.querySelectorAll('.modeButton')
var colorDisplay = document.getElementById('colorDisplay')





function init() {

    setupButtonMode();
    setupSquare();
    reset();
}

init();



resetButton.addEventListener('click', function () {

    reset();
})