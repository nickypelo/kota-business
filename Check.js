// // // const checkRepeat = (list) =>{
// // //     const set = new Set(list)
// // //     return set.size !== list.length;
// // // } 

// // const uniK = (list) =>{
// //     return [...new Set(list)]
// // }

// // // const unique = (list) =>{
// // //     const l = uniK(ordersList(list))
// // //     const list = list.map((item)=> (item.id !== undefined ?  item.id : undefined))
// // //     // return [...new Set(list)]
// // //     return 
// // // }



// // // const myList = [3, 1, 2, 1, 5, 2, 6, 1]
// // // console.log(checkRepeat(myList));
// // // console.log(unique(myList));

// const occurances = (list) =>{
//     const digitcount = {};

//     for(const item of list){
//         const digit = String(item).split('');
//         digit.forEach(dig => {
//             digitcount[dig] = (digitcount[dig] || 0) +1;
//         });
//     }
//     return digitcount;
// }

// // // const myList = [3, 1, 2, 1, 5, 2, 6, 1]
// // // console.log(occurances(myList)['1'])

// // // const myList = [3, 1, 2, 1, 5, 2, 6, 1]
// // // const newList = [...myList, 78]

// // // console.log(myList);

// const menuItems = [
//     {
//         id: 2,
//         name: "THE LOVIE WAM KOTA",
//         price: "R70",
//         ingredients: "Deep fried chips with our special seasoning, mango atchaar, fried viennas and fried polony with cheddar cheese on toasted buns with our assorted secret sauces.",
//         img: "../src/assets/lovie_wam.jpg"
//     },
//     {
//         id: 3,
//         name: "THE BAE KOTA",
//         price: "R90",
//         ingredients: "Deep fried chips with our special seasoning, mango atchaar, fried viennas and fried polony. Fashioned with our sizzling honey glazed rashers and seared rib burger. Garnished with the finest of cheddar cheese topped with our assorted secret sauces.",
//         img: "../src/assets/bae.jpg"
//     },
//     {
//         id: 4,
//         name: "VEGGIE MONATE KOTA",
//         price: "R105",
//         ingredients: "Deep fried chips with our special seasoning and atchaar. Fashioned with an assortment of vegan sausage, patty and bacon bits. Garnished with the best vegan cheese, topped with our assorted vegan sauces on toasted buns.",
//         img: "../src/assets/veggie_monate.jpg"
//     },
//     {
//         id: 3,
//         name: "THE BAE KOTA",
//         price: "R90",
//         ingredients: "Deep fried chips with our special seasoning, mango atchaar, fried viennas and fried polony. Fashioned with our sizzling honey glazed rashers and seared rib burger. Garnished with the finest of cheddar cheese topped with our assorted secret sauces.",
//         img: "../src/assets/bae.jpg"
//     }
// ]
// // const ids = [1,2,3,4]

// // let count1 = 1;
// // let count2 = 1;
// // let count3 = 1;
// // let count4 = 1;



// // const cook = (values) =>{
// //     for(let i =0; i< values.length; i++){
// //         if(ids.includes(values[i].id)){
// //             let r = values[i].id
// //             ids.indexOf(r);
// //             ids.splice(r, 1)
// //             continue;
// //         }
// //         else if(values[i].id === 1){
// //             count1++;
// //         }
// //         else if(values[i].id === 2){
// //             count2++;
// //         }
// //         else if(values[i].id === 3){
// //             count3++;
// //         }
// //         else if(values[i].id === 4){
// //             count4++;
// //         }
// //     }
// // }


// const ordersList = (listOfOrders) =>{
//     const list = listOfOrders.map((item)=> (item.id !== undefined ?  item.id : undefined))
//     return list;
// }   
// // let i = 0;
// // let j = 1;
// // let count = menuItems.length
// // let me = [];
// // while(count > 0){
// //     let eish = menuItems[i].id;
// //     let yoh = ids.indexOf(eish);
// //     ids.splice(yoh,1)
// //     // console.log(ids)
// //     if(i<4){
// //         me.push(menuItems[i])
// //     }

// //     if(i>3){
// //         if(menuItems[i].id === 1){
// //             count1++;
// //         }
// //         else if(menuItems[i].id === 2){
// //             count2++;
// //         }
// //         else if(menuItems[i].id === 3){
// //             count3++;
// //         }
// //         else if(menuItems[i].id === 4){
// //             count4++;
// //         }
// //     }
// //     i++;
// //     count--;
// // }

// // // ids.splice(0,1)
// // // console.log(ids.indexOf(menuItems[1].id))

// const hey = (occurances(ordersList(menuItems)));
// // // console.log(unique((menuItems)));

// // // console.log(ids.includes(menuItems[0].id));
// // // console.log(ids.includes(menuItems[1].id));
// // // console.log(ids.includes(menuItems[2].id));
// // // console.log(ids.includes(menuItems[3].id));


// // // cook(menuItems)
// // // console.log(i)
// // // console.log(count)
// // // console.log(count1);
// // // console.log(count2);
// // // console.log(count3);
// // // console.log(count4);
// console.log(hey)

const hey = [2,5,3,2]
console.log(hey.indexOf(2))