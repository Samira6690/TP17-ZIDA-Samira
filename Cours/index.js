alert("test");
//SELECTEURS
// 
// const baliseHTML =document.querySelector('h4');
// console.log(baliseHTML);
// baliseHTML.style.background ="yellow";
// Click event
const questionContainer = document.querySelector
(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector('p')
// console.log(response);
// console.log(btn1, btn2);
// 
// questionContainer.addEventListener("click", () => {
    // console.log("Click !");
    // questionContainer.style.background = "red";
    // questionContainer.style.border = "3px solid teal";
    // questionContainer.classList.add("question-clicked");
// });
questionContainer.addEventListener("click", () => {
    questionContainer.classList.toggle("question-clicked");
})
btn1.addEventListener('click', () =>{
    // 
    // response.style.visibility ="visible";
    response.classList.add("show-response");
    response.style.background ="green";
})
btn2.addEventListener('click', () =>{
    // console.log("click !");
    // response.style.visibility ="visible";
    response.classList.add("show-response");
    response.style.background ="red";
});
{/* <div> > #id > .class > baliseHTML */}
//-------------------------------------------------
//Mouse Events
const mousemove = document.querySelector(".mousemove");
// console.log(mousemove);
// window.addEventListener('mousemove', () => {
//     // console.log("MOUSEMOVE !!!");
// });
window.addEventListener('mousemove', (e) => {
// console.log(e);
mousemove.style.left = e.pageX + "px";
mousemove.style.top = e.pageY + "px";
// console.log(e);
});
window.addEventListener("mousedown", () => {
    // console.log("test");
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {

    mousemove.style.transform = "scale(2) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener('mouseenter', () => {
    questionContainer.style.background ="rgba(0,0,0,0.6)";
});
questionContainer.addEventListener("mouseout", () => {
    // console.log("mouseout !");
    questionContainer.style.background = "pink";
});
response.addEventListener("mouseover", () => {
    response.style.transform ="rotate(2deg)";
});

//------------------------------------------------------------------
//KeyPress event

const keypressContainer = document.querySelector(".keypress");
// console.log(keypressContainer);
const key = document.getElementById("key");
// console.log(key);
document.addEventListener("keypress", () => {
    console.log("yes !!");
});
const ring = (key) => {
    const audio = new Audio();
    audio.src = key + ".mp3";
    console.log(audio.src);
    audio.play();
};
    document.addEventListener("keypress", (e) => {
        // console.log(e.key);
        // key.textContent ="voici du texte";
        key.textContent = e.key;
        if (e.key === "j") {
            keypressContainer.style.background ="pink";
        } else if (e.key === "h") {
            keypressContainer.style.background = "teal";
        } else{
            keypressContainer.style.background = "red"
        }
if (e.key === "z") ring(e.key);
        
});
//-------------------------------------------
//Scroll Event
const nav = document.querySelector("nav");
// console.log(nav);
// window.addEventListener("scroll", () => {
//     console.log("Test !");
// })
window.addEventListener("scroll",  () => {
console.log(window.scrollY);
if (window.scrollY > 120) {
    nav.style.top =0;
} else{
    nav.style.top = "-50px";
}
});
//------------------------------------
const inputName = document.querySelector('input[type="text"]');
console.log(inputName);
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language ="";
console.log(form);
console.log(select);
inputName.addEventListener("input", (e) => {
    console.log(e.target.value);
    pseudo = e.target.value;
    console.log(pseudo);
});
select.addEventListener('input', (e) => {
    console.log(e.target.value);
});
select.addEventListener("input", (e) => {
    pseudo = e.target.value;
});
// form.addEventListener('', () => { 
//     e.preventDefault();
    // console.log("yes !");
    form.addEventListener("submit", (e) => {;
        language = e.target.value;
e.preventDefault();
console.log(cgv.checked);
    if  (cgv.checked) {
// Affiche le contenu des variables
document.querySelector("form > div").innerHTML = `
<h3>Pseudo : ${pseudo}</h3>
<h4>Langage préféré : ${language}</h4>
`;
    } else  {
alert('Veuillez accepter les CGV');
    }
    });
//------------------------------------------------
//Load event
window.addEventListener("load", () => {
    console.log("Document Chargé !");
});

//----------------------------------------------
//forEach
// const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");

console.log(boxes);
boxes.forEach((box) => {
box.addEventListener("click", (e) => {
    // console.log(e.target);
    e.target.style.transform = "scale(0.7";
});
});

//---------------------------------------------------
//addEventListener vs on onclick
// document.body.onclick = () => {
// console.log("click !");
// };
// document.body.onclick= function  () => {
//     console.log("Scroll ! ");
// };

//Bubbling => fin (de base l'eventListener est paramètré en mode bubbling)
document.body.addEventListener("click", 
() => {
    console.log("click 1 !");
});
//Usecapture
document.body.addEventListener("click",
 () => {
    console.log("click 2 !");
},
true
);
//htpps://gomakethings.com/what-is-that-third-argument-on-the-vanilla-js-addeventlistener-method-and-when-do-you-need-it/
//--------------------------------------------------------------

//Stop propagation
// questionContainer.addEventListener("click", (e) => {
//     alert("test !");
// e.stopPropagation();
// });
//removeEventListener
//--------------------------------------------------------
//BOM

// console.log(window.innerHeight);
// console.log(window.scrolly);
// window.open("http://google.com", "cours js","height=600,width=800");
// window.close()
//Evènements adossés à window
// 
//confine
btn2.addEventListener("click", () => {
    confirm("voulez vous vraiment vous trompez ?");
});

// let answer;
//prompt
btn1.addEventListener("click", () => {
     let answer = prompt("Entrez votre nom !");
     questionContainer.innerHTML += "<h3>Bravo " + answer +"</h3>";
});
//Timer, compte à rébours
setTimeout(() => {
    //logique à exécuter
    questionContainer.style.borderRadius = "300px";
}, 2000);

// let interval = setInterval(() => {
//     document.body.innerHTML +=`
//     <div class= 'box'>
//     <h2>Nouvelle Boite !</h2>
//     </div>`;
// }, 1000);

// document.body.addEventListener("click", (e) => {
//     // console.log(e.target);
//     e.target.remove();
//     clearInterval(interval);
// });

// Location
//  location.replace("http://lequipe.fr");

// window.onload =() => {
//     location.href = "http://twitter.fr";
// };
// Navigator
// console.log(navigator.userAgent);

// http://developper.morizilla.org/fr/docs/web/API/Geolocation/getCurrent

// var options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
//   };
  
//   function success(pos) {
//     var crd = pos.coords;
  
//     console.log('Votre position actuelle est :');
//     console.log(`Latitude : ${crd.latitude}`);
//     console.log(`Longitude : ${crd.longitude}`);
//     console.log(`La précision est de ${crd.accuracy} mètres.`);
//   }
  
//   function error(err) {
//     console.warn(`ERREUR (${err.code}): ${err.message}`);
//   }
  
//   navigator.geolocation.getCurrentPosition(success, error, options);


// History
// console.log(history);
// window.history.back();
// history.go(-2);

//-------------------------------------------------
//SetProperty

// const after = document.querySelector(".nav::after");
// console.log(after);
// window.addEventListener("mousemove", (e) => {
//     nav.style.setProperty("--x", e.layerX +"px");
//     nav.style.setProperty("--y", e.layerY + "px");
// });




