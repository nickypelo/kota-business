let menuItems = [
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

function display(list) {
    let answer = []
    const newList = list.map(item => answer.push(item[0]))
    return answer
}


// console.log(display(check(menuItems)))
// console.log((check(menuItems)))

function counting(item, list){
    const menu = list.filter(i=>item === i[0].id)
    
    if(menu[0]){
        return menu[0].length
    }
    return 0
}

function removing(myId,myList){
    const wanted = myList.filter(item => myId === item[0].id)

    if(wanted.length>0){
        const remove = menuItems.indexOf(wanted[0][0])
        const newMenu = menuItems
        newMenu.splice(remove, 1)
        menuItems = newMenu

        return menuItems
    }
   
}

// console.log(counting(5,(check(menuItems))))
// console.log(menuItems)
console.log(removing(3, check(menuItems)))
console.log(removing(3, check(menuItems)))