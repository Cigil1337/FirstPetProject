// скрипт с секреткой
console.log('text');
const $secret = document.querySelector('.secret');
const $secretImg = document.querySelector('.timer-box');

$secret.addEventListener('dblclick', function() {
    $secretImg.style.background = 'url("https://hypestar.ru/wp-content/uploads/2021/09/img_20210902_184402.jpg") no-repeat';
});
