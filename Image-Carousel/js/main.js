const theImages = document.querySelectorAll('.carrousel-image');
const nxtBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.previous');

nxtBtn.addEventListener('click',function() {
    let activeImageID = -3;
    let nxtImg;
    for (let x = 0; x < theImages.length; x++) {
        const chkImg = theImages[x];
        if (chkImg.classList.contains('active')) {
            activeImageID = x;
            nxtImg = activeImageID + 1;
        }
        
        if (nxtImg >= theImages.length)  {
            nxtImg = 0;
        }
    }

    theImages[activeImageID].classList.remove('active');
    theImages[nxtImg].classList.add('active');
});

prevBtn.addEventListener('click', function() {
    let activeImageID = -3;
    let nxtImg;
    for (let x = 0; x < theImages.length; x++) {
        const chkImg = theImages[x];
        if (chkImg.classList.contains('active')) {
            activeImageID = x;
            nxtImg = activeImageID - 1;
    }
    if (nxtImg < 0 ) {
        nxtImg = theImages.length - 1;
    }
    }
    console.log(nxtImg);
    console.log(activeImageID);
    theImages[activeImageID].classList.remove('active');
    theImages[nxtImg].classList.add('active');
});

