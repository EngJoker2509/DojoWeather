var cookie = document.querySelector('#third-part')
function HideCookie() {
    cookie.remove();
}

var largelist = document.querySelectorAll('#large')
var smalllist = document.querySelectorAll('#small')

function Convert() {
    largelist.forEach(element => {
        element.innerText = parseInt(parseInt(element.innerText) * (1.8) + 32);
    });
    smalllist.forEach(element => {
        element.innerText = parseInt(parseInt(element.innerText) * (1.8) + 32);
    });
}


