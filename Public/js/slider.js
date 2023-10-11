var sliderImages, btnImgPrev, btnImgPost;

window.addEventListener("load", function(){
    sliderImages = document.getElementsByClassName("slider-image");
    btnImgPrev = document.getElementById("slider-decrease");
    btnImgPost = document.getElementById("slider-increase");

    btnImgPrev.addEventListener("click", showImgPrev);
    btnImgPost.addEventListener("click", showImgPost);
});

var position = 0;
function showImgPrev() {
    changeImg(-1);
}

function showImgPost() {
    changeImg(1);
}

function changeImg(change) {
    position += change;
    if (position < 0) {
        position = sliderImages.length - 1;
    } else if (position >= sliderImages.length) {
        position = 0;
    }

    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.transform = "translateX(" + -position * 100 + "%)";
    }
}