let reviewCount = 0;
const buttons = document.querySelectorAll('.btn');
let img = document.querySelector(".review-section img");
let personName = document.querySelector("#name");
let job = document.querySelector("#job");
let info = document.querySelector("#info");
let randomBtn = document.querySelector("#random-button");
// console.log(buttons)

var showPerson = (person) => {
    const item = reviews[person];
    img.src = item.img;
    personName.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

buttons.forEach((btn, key) => {
    btn.addEventListener('click', (evt) => {
        let scrollBtn = evt.currentTarget.id;
        if(scrollBtn.includes('next-button')){
            reviewCount = (reviewCount < reviews.length - 1) ? reviewCount + 1 : 0;
        }else if( scrollBtn.includes('prev-button')) {
            reviewCount = (reviewCount < 1) ? reviews.length - 1 : reviewCount - 1;
        }else{
            reviewCount = Math.floor(Math.random() * reviews.length);
        }
        showPerson(reviewCount);
    });
});

/* randomBtn.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
}); */






