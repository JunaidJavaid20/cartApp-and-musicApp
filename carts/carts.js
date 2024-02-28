//show real products
let  products = [
    {name:"LED Bulb", headline:"like sun", price:"8000", image:"https://i.pinimg.com/564x/71/84/c2/7184c2510a346394f7042fc08407ab33.jpg"},
    {name:"Black Mamba", headline:"Father of Comfortable", price:"10000", image:"https://i.pinimg.com/564x/b0/bd/23/b0bd23b6918d0c7030005ffec83493a0.jpg"},
    {name:"HeadPhone", headline:"Super bass", price:"5000", image:"https://i.pinimg.com/564x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg"},
    {name:"Black Watch", headline:"Easy to life", price:"15000", image:"https://i.pinimg.com/236x/3f/95/d3/3f95d3dc4988a7b91a7ad1b9a83e2652.jpg"},
    {name:"LED Bulb", headline:"like sun", price:"8000", image:"https://i.pinimg.com/564x/71/84/c2/7184c2510a346394f7042fc08407ab33.jpg"},
    {name:"Blue watch", headline:"Easy to life", price:"15000", image:"https://i.pinimg.com/236x/7b/d0/d7/7bd0d7b0ac60fcce9d4f7f458feaca71.jpg"}
];
let popular = [
    {name:"Apple", headline:"The fruit of paradise.", price:"200", image:"https://i.pinimg.com/564x/45/fd/d3/45fdd38b20a18b1fe3308158b9e8ea70.jpg"},
    {name:"Mango", headline:"The fruit of king.", price:"500", image:"https://i.pinimg.com/564x/c3/90/19/c390196a1aa96ee07617fd23f4a27da5.jpg"},
    {name:"Peach", headline:"The fruit of queen.", price:"600", image:"https://i.pinimg.com/564x/3e/3c/96/3e3c961d6acff38d58e6a16acd83061c.jpg"}
];
let mostPopular = [
    {name:"Carrot", headline:"Red Vegetable", price:"100", image:"https://i.pinimg.com/564x/3f/7d/92/3f7d921b5679a50b4fbb7926416fd6d3.jpg"},
    {name:"Patato", headline:"Most Demandable vegetable", price:"90", image:"https://i.pinimg.com/564x/1f/36/91/1f36913da5015eb8ca9a4312c926f591.jpg"},
    {name:"Chilli", headline:"Hot Spicy", price:"200", image:"https://i.pinimg.com/564x/85/43/25/854325127210edd13f4a97abba0465f3.jpg"}
];
let carts = [];

function addProduct(){
    let clutter = "";
    products.forEach(function(product, index){
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
            <img class="w-full h-full object-cover" src="${product.image}" />
        </div>
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                    <h3 class="font-semibold opacity-20">${product.headline}</h3>
                    <h4 class="font-semibold mt-2">&#8377; ${product.price}</h4>
                </div>
                <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
                    <i data-index="${index}" class="add ri-add-line"></i>
                </button>
            </div>
        </div>
    </div>`;
    });
    document.querySelector(".products").innerHTML = clutter;
};

function addPopularProduct(){
    let clutter = "";
    popular.forEach(function(product){
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${product.image}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${product.price}</h4>
        </div>
    </div>`
    });
    document.querySelector(".populars").innerHTML = clutter;
};

function addMostPopularProduct(){
    let clutter  = "";
    mostPopular.forEach(function(product){
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${product.image}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${product.price}</h4>
        </div>
    </div>`
    });
    document.querySelector(".populares").innerHTML = clutter;
};

function addToCart(){
    document.querySelector(".products").addEventListener("click", function(details){
        if(details.target.classList.contains("add")){
            carts.push(products[details.target.dataset.index])
            alert("Cart is added");
        }
    });
};

function showCart(){
    document.querySelector(".carticon").addEventListener("click", function(){
        document.querySelector(".cartexpnd").style.display = "block";
        let clutter = "";
        carts.forEach(function(prod, index){
            clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                <img class="w-full h-full object-cover" src="${prod.image}" />
            </div>
            <div>
                <h3 class="font-semibold">${prod.name}</h3>
                <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>`
        });
        document.querySelector(".cartexpnd").innerHTML = clutter;
    });
};
function removeCart(){
    document.querySelector(".carticon").addEventListener( "mouseleave", function(){
        document.querySelector(".cartexpnd").style.display = "none";
    });

};

removeCart();
showCart();
addToCart();
addProduct();
addPopularProduct();
addMostPopularProduct();

