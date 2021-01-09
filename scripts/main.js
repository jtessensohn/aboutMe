let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/aboutjt2.png') {
        myImage.setAttribute('src','images/allie2.jpg');
    } else {
        myImage.setAttribute('src','images/aboutjt2.png');
    }
}
let wordClick = document.querySelector('p class="last"')

