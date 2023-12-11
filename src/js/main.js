document.documentElement.classList.add('js-enabled');


const stickyNav = {
    posititionTopNav : document.getElementById('main').offsetTop,
    init(){
       // console.log(posititionTopNav);
        window.addEventListener('scroll', ()=>{
            if (window.scrollY >= this.posititionTopNav){
                document.body.classList.add('fixed-nav');
            } else{
                document.body.classList.remove('fixed-nav');
            }
        });
    }
}
stickyNav.init();



