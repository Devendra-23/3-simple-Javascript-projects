const Devil = document.querySelector('.Devil')
const Smiling = document.querySelector('.Blessed')

//Add event Listener

Devil.addEventListener('click',()=>{
    if(Smiling.classList.contains('Blessed')) {
        Smiling.classList.add('Devil');
        Devil.classList.remove("Blessed");
    }
});

Smiling.addEventListener('click',()=>{
    if(Devil.classList.contains('Devil')){
       Devil.classList.add('Blessed');
       Smiling.classList.remove("Devil");
    }
});


