const name='Alfaz'
const userAge=21

const user={
    name,     //object shorthand
    age:userAge,
    address: 'Goa'
}
console.log(user);


const product={
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.7
}

const {label,price,stock,salePice,rating=5}=product //object destructuring

console.log(label);
console.log(price);
console.log(rating);


//destructuring in function
let transaction=(type,{label, price}={})=>{
    console.log(type,label,price);
}

transaction('cash',product)