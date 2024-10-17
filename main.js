let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    })
});

/*slider*/

var counter= 1;
setInterval(function(){
    document.getElementById('radio' + counter ).checked = true;
    counter++;
    if(counter > 4){
       counter = 1;
    }
}, 7000)
