{/* <div class="col-md-4 col-sm-6 col-lg-3 m-auto mt-4 imgs">
<img src="https://picsum.photos/230/300?random=1" alt="1">
</div> */}

// let number = 12;
// let number = document.getElementById("number").value;

function loadImages(number) {
    let a = document.getElementById("loadimg")
    for (let i = 0; i < number; i++) {
        a.innerHTML += `
        
<div class="col-md-4 col-sm-6 col-lg-3 m-auto mt-4 imgs">
<img src="https://picsum.photos/230/300?random=${i}" alt="${i}">
</div>
`
    }
}

// loadImages(number)

$(
    function () {
        $("#header").load("header.html")
        $("#footer").load("footer.html")
        $("#carousel").load("carousel.html")

    }
)

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-190px";
    }
    prevScrollpos = currentScrollPos;
}

function thanks(){
    swal("Thank You!", "Hope you enjoyed !!!","success");

}