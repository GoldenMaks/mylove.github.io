let a = document.getElementById("yes")

let b = document.getElementById("no")

//let c = btn.setAttribute("disabled", true);

let be = 0
    
function onclickk() {
    be++
};

b.onclick = onclickk()



for (let i = 0; i < 4; i++) {
    if(be = 1) continue;
    if(i = 1) {
        alert("Ти тютю? Спробуй ще.)
    }
    if(be = 2) continue
    if(i = 2) {
        alert("Так ану гарно подумай!);
    }
    if(be = 3) continue;
    if(i = 3) {
        btn.removeAttribute('disabled');
    }
}
