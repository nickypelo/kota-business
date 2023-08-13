const occurances = (list) =>{
    const digitcount = {};

    for(const item of list){
        const digit = String(item).split('');
        digit.forEach(dig => {
            digitcount[dig] = (digitcount[dig] || 0) +1;
        });
    }
    return digitcount;
}
const ordersList = (listOfOrders) =>{
    const list = listOfOrders.map((item)=> (item.id !== undefined ?  item.id : undefined))
    return list;
}
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

console.log(occurances(ordersList(menuItems)))