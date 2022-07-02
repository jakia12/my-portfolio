

//creating portfolio image gallery 
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("col");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("btn-container");
var btns = btnContainer.getElementsByClassName("gall-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("activ");
    current[0].className = current[0].className.replace(" activ", "");
    this.className += " activ";
  });
}



// creating client content slider 

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("client-slides");
  let dots = document.getElementsByClassName("bullet");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


//fixed header
 /*const navbar = document.getElementById("nav-sec");

const height = navbar.offsetTop;

window.addEventListener("scroll", function(){

});*/

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("fixed");


function myFunction() {
  if (window.pageYOffset >= 200) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//scroll to top button


//appearing scroll button
const scrollBtn = document.querySelector(".scroll-btn");

const btnVisibility = () => {
  if (window.scrollY > 400) {
      scrollBtn.style.visibility = "visible";
  } else {
      scrollBtn.style.visibility = "hidden";
  }
};

document.addEventListener("scroll", () => {
  btnVisibility();
});


// scroll to top when clicking the button


scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
});


//contact form
function sendEmail(){
  

    Email.send({
      Host : "smtp.gmail.com",
      Username : "owasi110@gmail.com",
      Password : "*owasi*ISLAM123*",
      To : 'owasi110@gmail.com',
      From :document.getElementById("email").value,
      Subject : document.getElementById("subject").value,
      Body : "Name :" + document.getElementById("name").value+ "</br>"+
            "Email:" + document.getElementById("email").value+ "</br>"+
            "Phone:" + document.getElementById("phone").value+ "</br>"+
            "Subject :" + document.getElementById("subject").value+ "</br>"+
            "Messege :" + document.getElementById("messege").value+ "</br>"
  }).then(
    message => alert(message)
  );
}


//skill bar 



 

function move() {
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.querySelector(".mybar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 80) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        
        elem.innerHTML = width  + "%";
      }
    }
    //
    var elem2 = document.querySelector(".mybar2");
    var width = 10;
    var id2 = setInterval(frame2, 10);
    function frame2() {
      if (width >= 80) {
        clearInterval(id2);
        i = 0;
      } else {
        width++;
        elem2.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
    //
    var elem3 = document.querySelector(".mybar3");
    var width = 10;
    var id3 = setInterval(frame3, 10);
    function frame3() {
      if (width >= 71) {
        clearInterval(id3);
        i = 0;
      } else {
        width++;
        
        elem3.innerHTML = width  + "%";
      }
    }
    //
    var elem4 = document.querySelector(".mybar4");
    var width = 10;
    var id4 = setInterval(frame4, 10);
    function frame4() {
      if (width >= 71) {
        clearInterval(id4);
        i = 0;
      } else {
        width++;
        elem4.style.width = width + "%";
        
      }
    }


  }
}

window.addEventListener('scroll',move());