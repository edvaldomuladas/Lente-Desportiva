function mostrar(){
    let menu= document.querySelector('.mobile-nav-list');
    if(menu.classList.contains('open'))
    {
        menu.classList.remove('open');
        document.querySelector('.icon').src="img/icon-menu.png";
    }
    else{
        menu.classList.add('open');
        document.querySelector('.icon').src="img/icon-fechar.png";
    }
}