//collapsible
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//wishlist
const addIn = document.querySelector('#add');
addIn.addEventListener('click', function(){
  alert("Added In");
  return;
});
//apply form
var isRegister = false;
var isInputPasswordAgain = document.querySelector("#inputPasswordAgain");
var isRealName = document.querySelector("#realName");
var title = document.querySelector("#title");
var sign_up = document.querySelector("#sign-up");
var submit = document.querySelector("#submit");
var numb = document.querySelector("#numb");
var remember = document.querySelector("#remember-me");

sign_up.addEventListener("click", function(){
    isRegister = !isRegister;
    if(isRegister){
        title.innerText = 'SIGN UP';
        sign_up.innerText = 'Log In';
        submit.innerText = 'Sign Up';
        isRealName.style.display = 'block';
        isInputPasswordAgain.style.display = 'block';
        numb.style.display = 'block';
        remember.style.display = 'block';
    }

    else{
        title.innerText = 'LOG IN';
        sign_up.innerText = 'Create Account';
        submit.innerText = 'Log In';
        isRealName.style.display = 'none';
        isInputPasswordAgain.style.display = 'none';
        numb.style.display = 'none';
        remember.style.display = 'none';
    }

})
//submit form
const form = document.getElementById("sign-in-form");
const wishList = document.querySelector(".wishlist");
const planet = document.querySelector('.bg');
const allForm = document.querySelector('.log-in');
form.addEventListener("submit", function(event){
  event.preventDefault();

  const isInputPasswordAgain = document.querySelector("#pass2");
  const fullName = form.fullName.value;
  const phoneNumber = form.phoneNumber.value;
  const email = form.email.value;
  const password1 = form.pass1.value;

  if( !phoneNumber || !fullName || !email || !password1 || !isInputPasswordAgain) {
      alert("Fill out the information");
      return;
  }

  if(isNaN(phoneNumber) || fullName >= 0){
      alert("Input are not valid");
      return;
  }
    
  alert("Successed");
  allForm.style.display = 'none';
  wishList.style.display = 'block';
  planet.style.display = 'none';
});

var pass1 = document.querySelector('#pass1');
var pass2 = document.querySelector("#pass2");
var result = document.querySelector('#result');
function checkPassword () {
    result.innerText = pass1.value == pass2.value ? 'Matching' : 'Not Matching';
}
pass1.addEventListener('keyup', () => {
    if (pass2.value.length != 0) checkPassword();
})
pass2.addEventListener('keyup', checkPassword);

// slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}