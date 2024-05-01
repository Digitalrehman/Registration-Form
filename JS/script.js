let signIn = document.getElementById("signin");
let signUp = document.getElementById("signup");
let Title = document.getElementById("title");
let Input = document.getElementById("inputName");

signIn.addEventListener("click", () => {
  Input.style.maxHeight = 0;
  Title.innerText = "sign In";
  signUp.classList.add("disable");
  signIn.classList.remove("disable");
});

signUp.addEventListener("click", () => {
  Input.style.maxHeight = "50px";
  Title.innerText = "sign Up";
  signUp.classList.remove("disable");
  signIn.classList.add("disable");
});



gsap.from(".form",{
  x : "-100%",
  duration  : 1,
  opacity : 0
})