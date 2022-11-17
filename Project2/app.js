let data =[
    {
        name:'Fred',
        age: '29'

    },
    {
        name:'Harry Maguire',
        age: '29'

    },
    {
        name:'Alex Telles',
        age: '28'

    },
    {
        name:'Garnacho',
        age: '18'

    },
    {
        name:'Eriksen',
        age: '30'

    },
    {
        name:'David',
        age: '32'

    }

];

const info = document.querySelector('#info')

let details = data.map(function(item){
    return'<div>' + item.name+'  '+  'is  ' +  item.age + ' years old'+'</div>';
    

});


info.innerHTML = details.join("\n");
