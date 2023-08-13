class Counting{
    constructor(value){
        this.value = value;
    }
}

let answer = [];
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;


const counting1 = new Counting(count1);
const counting2 = new Counting(count2);
const counting3 = new Counting(count3);
const counting4 = new Counting(count4);

const menuItems = [
    {
        id: 2,
        name: "THE LOVIE WAM KOTA",
        price: "R70",
        ingredients: "Deep fried chips with our special seasoning, mango atchaar, fried viennas and fried polony with cheddar cheese on toasted buns with our assorted secret sauces.",
        img: "../src/assets/lovie_wam.jpg"
    },
    {
        id: 2,
        name: "THE LOVIE WAM KOTA",
        price: "R70",
        ingredients: "Deep fried chips with our special seasoning, mango atchaar, fried viennas and fried polony with cheddar cheese on toasted buns with our assorted secret sauces.",
        img: "../src/assets/lovie_wam.jpg"
    },
    {
        id: 2,
        name: "THE LOVIE WAM KOTA",
        price: "R70",
        ingredients: "Deep fried chips with our special seasoning, mango atchaar, fried viennas and fried polony with cheddar cheese on toasted buns with our assorted secret sauces.",
        img: "../src/assets/lovie_wam.jpg"
    },
    {
        id: 3,
        name: "THE BAE KOTA",
        price: "R90",
        ingredients: "Deep fried chips with our special seasoning, mango atchaar, fried viennas and fried polony. Fashioned with our sizzling honey glazed rashers and seared rib burger. Garnished with the finest of cheddar cheese topped with our assorted secret sauces.",
        img: "../src/assets/bae.jpg"
    },
    {
        id: 4,
        name: "VEGGIE MONATE KOTA",
        price: "R105",
        ingredients: "Deep fried chips with our special seasoning and atchaar. Fashioned with an assortment of vegan sausage, patty and bacon bits. Garnished with the best vegan cheese, topped with our assorted vegan sauces on toasted buns.",
        img: "../src/assets/veggie_monate.jpg"
    },
    {
        id: 3,
        name: "THE BAE KOTA",
        price: "R90",
        ingredients: "Deep fried chips with our special seasoning, mango atchaar, fried viennas and fried polony. Fashioned with our sizzling honey glazed rashers and seared rib burger. Garnished with the finest of cheddar cheese topped with our assorted secret sauces.",
        img: "../src/assets/bae.jpg"
    }
]

const returnValue = (selectedKota) =>{
    if(selectedKota===1){
        return counting1.value;
    }else if(selectedKota===2){
        return counting2.value
    }else if(selectedKota===3){
        return counting3.value
    }else if(selectedKota===4){
        return counting4.value
    }
}

//Creates a list of Ids from the orders list
const getIds = (listOfOrders) =>{
    const list = listOfOrders.map((item)=> (item.id !== undefined ?  item.id : undefined))
    return list
}   

//Ensures that the cart does not have duplicate items
const uniqueIds = (list) =>{
    return [...new Set(list)]
}
const countCartOrders = (orders) =>{
    let i = 0;
    let count = orders.length
    let ids = uniqueIds(getIds(orders));
    let d = ids.length
    console.log(ids)
    while(count > 0){
        console.log(ids)

        if(ids.includes(orders[i].id)){
            let firstOrder = orders[i].id;
            let firstOrderIndex = ids.indexOf(firstOrder);
            ids.splice(firstOrderIndex,1)

            answer.push(orders[i])
            if(orders[i].id === 1){
                counting1.value+=1;
            }
            else if(orders[i].id === 2){
                counting2.value+=1;
            }
            else if(orders[i].id === 3){
                counting3.value+=1;
            }
            else if(orders[i].id === 4){
                counting4.value+=1;
            }
            i++;
            count--;
            continue;
        }

        if(orders[i].id === 1){
            counting1.value+=1;
        }
        else if(orders[i].id === 2){
            counting2.value+=1;
        }
        else if(orders[i].id === 3){
            counting3.value+=1;
        }
        else if(orders[i].id === 4){
            counting4.value+=1;
        }
        i++;
        count--;
    }
    return answer;
}

console.log(countCartOrders(menuItems))
console.log(returnValue(1))
console.log(returnValue(2))
console.log(returnValue(3))
console.log(returnValue(4))
