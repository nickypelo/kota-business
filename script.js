const menuItems = [
    {
        id: 1,
        name: "CHIP ROLL KOTA",
        price: "R40",
    },
    {
        id: 2,
        name: "THE LOVIE WAM KOTA",
        price: "R70",
    },
    {
        id:2,
        name: 'Palesa'
    },
    {
        id: 3,
        name: "THE BAE KOTA",
        price: "R90",
    },
    {
        id: 4,
        name: "VEGGIE MONATE KOTA",
        price: "R105",
    },
    {
        id: 4,
        name: 'Sima'
    }
]

function check(list){

    let answer = []

    for(let i = 1; i<list.length; i++){
        const newList = list.filter(item=> item.id===i)
        answer.push(newList)
    }
    const hey = answer.filter(item=> item.length>0)
   
    return hey
}

function needed(list) {
    let answer = []
    const newList = list.map(item => answer.push(item[0]))
    return answer
}


console.log(needed(check(menuItems)))
console.log((check(menuItems)))

function yep(item, list){
    const menu = list.filter(i=>item === i[0].id)
    
    return menu
}

console.log(yep(4,(check(menuItems))))