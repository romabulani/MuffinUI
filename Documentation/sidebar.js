const hamburgerIcon = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const navIcons = Array.from(document.querySelectorAll('.nav-icon'));

window.onresize = () => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    if(vw > 640){
        sidebar.style.display = 'block';
        sidebar.style.minWidth = '14rem'
        hamburgerIcon.style.visibility = 'hidden';
        navIcons.map(navIcon => navIcon.style.display = 'inline-block');
    }
    else{
        sidebar.style.display = 'none';
        hamburgerIcon.classList.remove('fa-times');  
        hamburgerIcon.classList.add('fa-bars');
        hamburgerIcon.style.visibility = 'visible';
        navIcons.map(navIcon => navIcon.style.display = 'none');
    }
};

hamburgerIcon.addEventListener('click',() => {
    if (hamburgerIcon.classList.contains('fa-bars')){
        sidebar.style.display = 'block';
        sidebar.style.minWidth = '100%'
        hamburgerIcon.classList.remove('fa-bars');  
        hamburgerIcon.classList.add('fa-times');  
    }
    else{
        sidebar.style.display = 'none';
        sidebar.style.minWidth = '14rem'
        hamburgerIcon.classList.remove('fa-times');  
        hamburgerIcon.classList.add('fa-bars'); 
    }   
});
