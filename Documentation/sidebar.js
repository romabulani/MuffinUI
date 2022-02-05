let hamburgerIcon = document.querySelector('.hamburger');
let sidebar = document.querySelector('.sidebar');

hamburgerIcon.addEventListener('click',() => {
    if (hamburgerIcon.classList.contains('fa-bars')){
        // sidebar.style.transition = 'all 2s'
        sidebar.style.display = 'block';
        sidebar.style.minWidth = '100%'
        hamburgerIcon.classList.remove('fa-bars');  
        hamburgerIcon.classList.add('fa-times');  
    }
    else{
        sidebar.style.display = 'none';
        hamburgerIcon.classList.remove('fa-times');  
        hamburgerIcon.classList.add('fa-bars'); 
    }
    
});