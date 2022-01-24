const titel = document.getElementById("title");
const foto = document.getElementById("foto");
const myInput = document.getElementById("myInput")

let lokaties = [
    {
        "titel": "plaats 0",
        "image": "IMG/02.jpg"
    },
    {
        "titel": "plaats 1",
        "image": "IMG/05.jpg"
    },
    {
        "titel": "plaats 2",
        "image": "IMG/03.jpg"
    },
    {
        "titel": "plaats 3",
        "image": "img/3.jpg"
    },
    {
        "titel": "plaats 4",
        "image": "img/4.jpg"
    },
    {
        "titel": "plaats 5",
        "image": "img/5.jpg"
    },
    {
        "titel": "plaats 6",
        "image": "img/6.jpg"
    },
    {
        "titel": "plaats 7",
        "image": "img/7.jpg"
    },
    {
        "titel": "plaats 8",
        "image": "img/8.jpg"
    },
    {
        "titel": "plaats 9",
        "image": "img/9.jpg"
    },
    {
        "titel": "plaats 10",
        "image": "img/10.jpg"
    },
    {
        "titel": "plaats 11",
        "image": "img/11.jpg"
    },
]

//myTitle.innerHTML = "dit is door het script toegevoegd";
//myImage.src = "img/1.jpg";

function show(index) {
    myTitle.innerHTML = lokaties[index].titel;
    myImage.src = lokaties[index].image;

}

function getInput() {
    show(myInput.value);
    //console.log(myInput.value)
    myInput.value = "";
    myInput.focus();
}

show(0);