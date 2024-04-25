function captureText()
{
    console.log("capturado")
}
let searchSelector = document.querySelector("#search");
searchSelector.addEventListener("keyup",event =>captureText(event));

