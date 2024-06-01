// java progress circular bar 
let javaProgress = document.querySelector(".java"),
  javaValue = document.querySelector(".java-progress");

let javaStartValue = 0,
  javaEndValue = 80,
  javaspeed = 30;

let progressjava = setInterval(() => {
  javaStartValue++;

  javaValue.textContent = `${javaStartValue}%`;
  javaProgress.style.background = `conic-gradient(#fca61f ${
    javaStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javaStartValue == javaEndValue) {
    clearInterval(progressjava);
  }
}, javaspeed);

// pthon progress circular bar 
let pythonProgress = document.querySelector(".python"),
  pythonValue = document.querySelector(".python-progress");

let pythonStartValue = 0,
  pythonEndValue = 65,
  pythonspeed = 30;

let progresspython = setInterval(() => {
  pythonStartValue++;

  pythonValue.textContent = `${pythonStartValue}%`;
  pythonProgress.style.background = `conic-gradient(#7d2ae8 ${
    pythonStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (pythonStartValue == pythonEndValue) {
    clearInterval(progresspython);
  }
}, pythonspeed);

// sql progress circular bar 
let sqlProgress = document.querySelector(".sql"),
  sqlValue = document.querySelector(".sql-progress");

let sqlStartValue = 0,
  sqlEndValue = 60,
  sqlspeed = 30;

let progresssql = setInterval(() => {
  sqlStartValue++;

  sqlValue.textContent = `${sqlStartValue}%`;
  sqlProgress.style.background = `conic-gradient(#20c997 ${
    sqlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (sqlStartValue == sqlEndValue) {
    clearInterval(progresssql);
  }
}, sqlspeed);

// html progress circular bar 
let htmlProgress = document.querySelector(".html"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 80,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#3f396d ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);
// javascript progress circular bar 
let jsProgress = document.querySelector(".js"),
  jsValue = document.querySelector(".js-progress");

let jsStartValue = 0,
  jsEndValue = 55,
  jsspeed = 30;

let progressjs = setInterval(() => {
  jsStartValue++;

  jsValue.textContent = `${jsStartValue}%`;
  jsProgress.style.background = `conic-gradient(#f33a7e ${
    jsStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (jsStartValue == jsEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);
// dsa progress circular bar 
let dsaProgress = document.querySelector(".dsa"),
  dsaValue = document.querySelector(".dsa-progress");

let dsaStartValue = 0,
  dsaEndValue = 80,
  dsaspeed = 30;

let progressdsa = setInterval(() => {
  dsaStartValue++;

  dsaValue.textContent = `${dsaStartValue}%`;
  dsaProgress.style.background = `conic-gradient(#7d2ae8 ${
    dsaStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (dsaStartValue == dsaEndValue) {
    clearInterval(progressdsa);
  }
}, dsaspeed);
// filter using python
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// python for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});