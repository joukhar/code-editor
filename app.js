document.querySelector("title").innerHTML = "MyEditor";
var codes = document.getElementById("codes");
var reset = document.getElementById("reset");
var play = document.getElementById("play");
var result = document.getElementById("result");

var mode = document.getElementById("mode");

play.innerHTML = "play";
reset.innerHTML = "reset";
codes.innerHTML = "";


var html = `<!DOCTYPE html>
<html>
<head>

</head>
<body>
    <h1>hello world</h1>
    .
    .
    .
</body>
</html>`;

codes.innerText = html;

play.addEventListener("click", () => { 
    result.innerHTML = codes.value;
     //.replace(/script/g,"")
    localStorage.setItem("codes", codes.value);
    codes.value = localStorage.getItem("codes");
    // location.assign("result.html")
});


reset.addEventListener("click", () => {
    result.innerHTML = "";
    codes.value = html;
    localStorage.removeItem("codes")
});


mode.addEventListener("click",()=>{
    
    document.body.classList.toggle("active");
    result.classList.toggle("active");
    document.querySelector("header").classList.toggle("active");
    document.querySelector("article").classList.toggle("active");

    if (mode.getAttribute("name")==="sunny-outline") {
        mode.setAttribute("name","moon-outline");
    } else {
        mode.setAttribute("name","sunny-outline");
    }
    
    localStorage.setItem("mode",mode.getAttribute("name"));
});



// document.body.addEventListener("scroll",()=>{
// document.getElementById("up").style.opacity = "1";
// });

onload = () => {
    codes.value = localStorage.getItem("codes");
    if (localStorage.getItem("codes") != null || undefined || "") {
        codes.value = localStorage.getItem("codes");
    } else {
        codes.value = html;
    };
    if (localStorage.getItem("codes") == "") {
        codes.value = html;
    };

    if (localStorage.getItem("mode")==="moon-outline") {
        mode.click();
    };

}











// codes.addEventListener("keydown",test =>{
//     console.log(test);
//     if (test.key == ">") {
//         alert("You can't use "+ test.key);
//         test.preventDefault();
//     }
// })



// if (codes.value == "script") {
    
// }