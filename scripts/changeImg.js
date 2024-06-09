function changeMini(event) {
  let img = document.getElementById("bigIMG");
  let $miniImg = event.target.src;

  img.src = $miniImg;
}
