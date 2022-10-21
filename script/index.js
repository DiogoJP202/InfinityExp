document.addEventListener('click', function(event){
    const element = event.target;
    if(element.classList.contains('material-symbols-sharp')){
        let menuLink = document.getElementById('links');
        if(menuLink.classList.contains('adicionar')){
            menuLink.classList.remove('adicionar');
            return menuLink.classList.add('remover');
        } 
        if(menuLink.classList.contains('remover')){
            menuLink.classList.remove('remover');
            return menuLink.classList.add('adicionar');
        } 
    }
})