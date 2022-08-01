const prev_btn=document.querySelector('.prev-btn'),
next=document.querySelector('.next-btn'),
author=document.querySelector('#author'),
job=document.querySelector('#job'),
info=document.querySelector('#info'),
person_img=document.querySelector('#person-img'),
random_btn=document.querySelector('.random-btn');
const reviews=[
    {
        id:1,
        author:"mechel jones",
        jop:"ux designer",
        src:"team/team3.webp",
        info:"Ab, est obcaecati deserunt provident quos sit dolorum, blanditiis non labore, quidem esse veritatis accusantium placeat reprehenderit tempore cupiditate. Voluptatum, eveniet. Ad adipisci consequatur laboriosam labore. Eos pariatur nam repudiandae temporibus provident?"
    },
    {
        id:2,
        author:" mark jones",
        src:'team/team2.webp',
        jop:"web designer",
        info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias asperiores quo beatae optio dolores accusamus delectus porro excepturi sapiente atque dolorum at illum cupiditate accusantium eligendi soluta fugit, ab magnam labore maiores voluptatem. Vero pariatur aliquid animi necessitatibus totam"
    },
    {
        id:3,
        author:"jones doe",
        src:"team/team1.webp",
        jop:"web developer",
        info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eum atque magnam sunt tempore facilis quis eaque voluptates vero vel sed cupiditate officiis commodi corrupti, maxime deleniti minus placeat, quo libero ad. Nostrum delectus minus aperiam temporibus quo iure error."
    }
]

// set startin
let currentItem = 0;
window.addEventListener("DOMContentLoaded",()=>{
    showData(currentItem);
});
function showData(person){
    const item = reviews[person];
    person_img . src = item . src;
    job.innerHTML = item . jop;
    author.innerHTML = item . author;
    info.innerHTML = item . info
}

next.addEventListener("click",()=>{
    currentItem++;
    
    if (currentItem > reviews.length-1) {
        currentItem=0; 
    }
    showData(currentItem);
});
prev_btn.addEventListener("click",()=>{
    currentItem--;
    
    if (currentItem < 0) {
        currentItem=reviews.length-1; 
    }
    showData(currentItem);
});
random_btn.addEventListener("click",()=>{
    currentItem=Math.floor(Math.random()*reviews.length);
    showData(currentItem);
});







