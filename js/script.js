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

// 1 recupero il contenitore
let sectionLeft = document.querySelector(".section-left");
let sectionRight = document.querySelector(".section-right");

//2 voglio selezionare un img da visualizzare per farlo creo una variabile per dare l indice dell img che voglio
let currentIndex = 2;
//1 faccio un ciclo dell array delle img per creare l' indirizzo src delle immagini e salvo in una variabile
for (let i = 0; i < items.length; i++) {
    let urlImgBig = items[i];
    let imgTitle = title[i];
    let imgText = text[i];
    //1 creo una variabile per creare il codice html cambiando l src delle img usando il ciclo
    //2 creo variabile vuota per la classe che visualizza le img 
    let classActive = "";
    let classText = "d-none";
    //2 per visualizzare l img con indice 2 faccio un if nel ciclo e do il nome della classe che visualizza l img in stringa 
    //alla variabile che visalizza l img
    if (i === currentIndex) {
        classActive = "active";
        classText = "d-block";
    }
    let tagsImgBig = `<div class="img-section-left-container">
                        <img class="${classActive}" src="${urlImgBig}" alt="img-${i + 1}">
                        <div class="${classText} text-section-left ps-5">
                            <h1>${imgTitle}</h1>
                            <p>${imgText}</p>
                        </div>
                    </div>`;
    //1 prendo la variabile del container dove inserire le img e inserisco tutto nell html creato dalla variabile tagimgbig
    sectionLeft.innerHTML += tagsImgBig;

    let imgSectionRight = `<img class="${classActive}" src="${urlImgBig}" alt="img-${i + 1}">`;
    let sectionRight = document.querySelector(".img-section-right-contaier");
    sectionRight.innerHTML += imgSectionRight;
}


//frecce
let arrowTop = document.querySelector(".arrow-top");
let arrowBottom = document.querySelector(".arrow-bottom");

//dichiaro una variabile per una freccia

//freccia su
//1 metto la freccia in ascolto
arrowTop.addEventListener("click", function () {
    //1 creo variabile che seleziona l'elemento con la classe active
    let activeImg = document.querySelector(".active");
    console.log(activeImg);
    //1 tolgo la classe active
    activeImg.classList.remove("active");

    let activeText = document.querySelector(".d-block");
    console.log("textbox" + activeText);
    activeText.classList.remove("d-block");
    activeText.classList.add("d-none");

    let ActiveImgPreview = sectionRight.querySelector(".active");
    console.log(ActiveImgPreview);
    ActiveImgPreview.classList.remove("active");




    //1 sottaggo -1 alla variabile con l indice del img attiva
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = (items.length - 1);
    }

    //1 per selezionare la nuova img da visualizzare con indice -1 

    //1 creo una variabile che seleziona tutti gli elementi del arrey
    let imgTag = sectionLeft.querySelectorAll("img");
    console.log(imgTag);
    //1 per selezionare la nuova img con indice -1 faccio una nuova var e applico la classe active
    let newActiveImg = imgTag[currentIndex];
    newActiveImg.classList.add("active");

    let textBox = document.querySelectorAll(".text-section-left");
    console.log("textbox" + textBox);
    newActiveText = textBox[currentIndex];
    newActiveText.classList.remove("d-none");
    newActiveText.classList.add("d-block");

    let imgPreview = sectionRight.querySelectorAll("img");
    console.log("new" + imgPreview);
    newActiveImgPreview = imgPreview[currentIndex];
    newActiveImgPreview.classList.add("active");


});;

//freccia giu

arrowBottom.addEventListener("click", function () {
    activeImg = document.querySelector(".active");
    activeImg.classList.remove("active");

    let activeText = document.querySelector(".d-block");
    console.log("textbox" + activeText);
    activeText.classList.remove("d-block");
    activeText.classList.add("d-none");

    let ActiveImgPreview = sectionRight.querySelector(".active");
    console.log(ActiveImgPreview);
    ActiveImgPreview.classList.remove("active");


    currentIndex++;
    if (currentIndex > items.length - 1) {
        currentIndex = 0;
    }
    imgTag = sectionLeft.querySelectorAll("img");
    newActiveImg = imgTag[currentIndex];
    newActiveImg.classList.add("active");

    let textBox = document.querySelectorAll(".text-section-left");
    console.log("textbox" + textBox);
    newActiveText = textBox[currentIndex];
    newActiveText.classList.remove("d-none");
    newActiveText.classList.add("d-block");

    let imgPreview = sectionRight.querySelectorAll("img");
    console.log("new" + imgPreview);
    newActiveImgPreview = imgPreview[currentIndex];
    newActiveImgPreview.classList.add("active");

});