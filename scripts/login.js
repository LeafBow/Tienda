let isOnline = false;
const JsonOnline = JSON.stringify(isOnline);

localStorage.setItem("login", JsonOnline);

let $cart = document.getElementById("cart");
let $loggedIn = document.getElementById("loggin");
$cart.style.display = "none";
function onLine() {
  let isloggedInStr = localStorage.getItem("login");
  let isloggedIn = JSON.parse(isloggedInStr);
  if (isloggedIn == false) {
    isOnline = true;
    let newIsOnlineStr = JSON.stringify(isOnline);
    localStorage.setItem("login", newIsOnlineStr);
    $loggedIn.innerHTML = `<i class="fa-solid fa-user"></i>`;
    $cart.style.display = "flex";
  } else {
    isOnline = false;

    let newIsOnlineStr = JSON.stringify(isOnline);
    localStorage.setItem("login", newIsOnlineStr);
    $loggedIn.innerHTML = `<i class="fa-solid fa-right-to-bracket"></i>`;
    $cart.style.display = "none";
  }
}

$loggedIn.addEventListener("click", () => onLine());
