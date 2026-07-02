document.querySelector(".hero-btn")
.addEventListener("click", function () {
    document.querySelector("#products")
    .scrollIntoView({
        behavior: "smooth"
    });
});

document.querySelector(".shop-btn")
.addEventListener("click", function () {
    alert("Selamat datang di Lumora Beauty ✨");
});