let btnClose = document.querySelector('.btn-close');
btnClose.addEventListener('click', onCrossClick);

function onCrossClick(){
    this.parentNode.style.display= 'none';
}