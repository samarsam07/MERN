const productCard=document.querySelectorAll(".product-card");
console.log(productCard);

productCard.forEach((el)=>{
    console.log(el);
});

const laptopPriceEl=document.querySelectorAll('[data-category="laptop"] .product-price');
laptopPriceEl.forEach((el)=>{
    console.log(el.textContent);
    
});

const highestRatedEl=document.querySelectorAll("[data-rating='4.7'], [data-rating='4.8']");
console.log(highestRatedEl);

highestRatedEl.forEach(el=>console.log(el.textContent));
