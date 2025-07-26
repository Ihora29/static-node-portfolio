document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open')
})



document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('.burger').classList.remove('active');
        document.querySelector('.nav').classList.remove('open');
    });
});