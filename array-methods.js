const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];
//1. map will return the specific property
const brands = products.map(product => product.brand);
console.log(brands);
const prices = products.map(product => product.price);
console.log(prices);

//2. forEach doesn't return value 
products.forEach(product => console.log(product))
products.forEach(product => console.log(product.color))
products.forEach(product => {

})

// 3. filter will return the output based on specific condition
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);

//4. includes will return the output who inclues the given words/etc.
const specificName = products.filter(p => p.name.includes('n'));
console.log(specificName);
//4. find will return only the first output who inclues the given...
const special = products.find(p => p.name.includes('n'));
console.log(special);