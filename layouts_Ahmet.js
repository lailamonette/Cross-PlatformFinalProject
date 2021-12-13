const favButton1 = document.querySelector('.btn_favorite_1');
const favButton2 = document.querySelector('.btn_favorite_2');

favButton1.addEventListener('click', function(){
    favButton1.classList.toggle('btn_favorite_clicked');
})
favButton2.addEventListener('click', function(){
    favButton2.classList.toggle('btn_favorite_clicked');
});