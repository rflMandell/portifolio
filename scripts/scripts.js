function scrollToTop() {
    window.scrollTo({
        top: 0,
    });
}

window.addEventListener('scroll', function(){
    var scrollTopButton = document.querySelector('.scrol-top');
    if (this.window.pageYOffset > 200){
        scrollToButton.style.display = 'block';
    } else{
        scrollTopButton.style.display = 'none';
    }
});