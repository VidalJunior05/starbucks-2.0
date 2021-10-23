showMenu();
function showMenu(){
    var iconeMenu = document.querySelector('.header--menu');
    var menu = document.querySelector('nav.menu ul');
    var linkMenu = document.querySelectorAll('nav.menu ul li a');

    iconeMenu.addEventListener('click', ()=>{
        if(menu.style.display == 'none'){
            menu.style.display = 'block';   
                for(var i = 0; i < linkMenu.length; i++){
                    linkMenu[i].addEventListener('click', () =>{
                        menu.style.display = 'none';
                    });
                }  
        }else{
            menu.style.display = 'none';
        }
    });
}
