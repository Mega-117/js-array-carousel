const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];
//recupero contenitore
let containerBigSlide = document.querySelector(".img-slide-big");

let currentIndex = 2;
//ciclo gli items
for (let i = 0; i < items.length; i++) {
    let urlImgSlide = items[i];
    let titleSlide = title[i];
    let textSlide = text[i];

    //per rendere visibile un elemento creo una variabile classactive vuota
    let classActive = "";
    if (i === currentIndex) {
        //io voglio visualizzare la prima img
        //quindi se la i (indice array) è 0 mi resituische la variabile active con valore stringa active
        //che poi applico al tag img nelle classi
        classActive = "active";
    }


    console.log(urlImgSlide);
    //scrivo gli item nel tag img con la variabile active , src del arry e la i per l alt
    let tagImg = `<img class="w-100 img-slide ${classActive}" src="${urlImgSlide}" alt="Slide ${i}">`;
    let tagTitleSlide = `<h1>${titleSlide}</h1>`;
    let tagTextSlide = `<p>${textSlide}</p>`;

    //riporto tutti i tag img nel html
    containerBigSlide.innerHTML += tagImg;
/*     console.log(tagTitleSlide);
    console.log(tagTextSlide);
 */}

currentIndex--;

//frecce

let arrowtop = document.querySelector(".arrow-top");
let arrowbottom = document.querySelector(".arrow-bottom");


arrowtop.addEventListener("click", function () {
    //seleziono elemento che ha la classe active e tolgo la classe active
    let activeSlide = document.querySelector(".active");
    activeSlide.classList.remove("active");


});