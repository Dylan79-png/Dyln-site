const slides=document.querySelectorAll(".slide");
let currentSlideIndex =0;

function showNextSlide(){
    if(slides.length===0) return;

    slides[currentSlideIndex].classList.remove('active');

    currentSlideIndex = (currentSlideIndex + 1)% slides.length;

    slides[currentSlideIndex].classList.add('active');
}

setInterval(showNextSlide,3000);

console.log("Total slides found:", slides.length)

document.addEventListener('click', function(event){
    if(event.target.classList.contains('add')){
        let qtySpan=event.target.parentElement.querySelector('.number');
        let currentQty=parseInt(qtySpan.innerText);
        qtySpan.innerText=currentQty + 1;
    }
    if(event.target.classList.contains('minus')){
        let qtySpan=event.target.parentElement.querySelector('.number');
        let currentQty=parseInt(qtySpan.innerText);
        if(currentQty>0){
            qtySpan.innerText=currentQty - 1;
        }
    }

    if(event.target.innerText.includes('Add to cart'))
    {
        let itemContainer=event.target.closest('.item');
        let qtySpan=itemContainer.querySelector('.number');
        let finalQty=qtySpan.innerText;

        if(parseInt(finalQty) >0){
            alert("Success!"  +  finalQty  +  "items added to your order.");
            qtySpan.innerText="0";
        } else{
            alert("Please select quantity first.");
        }
    }
    
});

