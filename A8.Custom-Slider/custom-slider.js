const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
]
const silderArea = document.getElementById('slider');
let imgIndex = 0;
setInterval(() => {
        if(imgIndex===images.length){
            imgIndex = 0
        }
        let imgUrl = images[imgIndex];
        silderArea.setAttribute('src', `images/${imgUrl}`);
        imgIndex++;
}, 1000)