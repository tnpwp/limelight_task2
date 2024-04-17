let text = document.getElementById("text");
let palmtree = document.getElementById("palm-tree");
let lefttree = document.getElementById("left-tree");
let bird = document.getElementById("bird");

let upLeftFlower = document.getElementById("up-left-flower");
let pinkBou = document.getElementById("pink-bou");
let upRightFlower = document.getElementById("corner-pink-flower");
let rightLeaf = document.getElementById("right-leaf");

let deer = document.getElementById("deer");
let fox = document.getElementById("fox");
let text2 = document.getElementById("text2");
let sunLight = document.getElementById("sun-light");

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  //fhskdjlf
  let scrollDirection = value > lastScrollTop ? "down" : "up";
  lastScrollTop = value <= 0 ? 0 : value;

  //ggggs
  if (scrollDirection === "up") {
    upLeftFlower.style.transform = "scale(" + (1 + value / 1000) + ")";
    upLeftFlower.style.right = value / 2 + "px";

    pinkBou.style.transform = "scale(" + (1 + value / 1000) + ")";
    pinkBou.style.bottom = value / 2 + "px";
  } else if (scrollDirection === "down") {
    upLeftFlower.style.transform = "translateX(-80px)";
    upLeftFlower.style.right = "0";
    upLeftFlower.style.transition = "transform 0.3s ease-in-out";

    pinkBou.style.transform = "translateX(-100px)";
    pinkBou.style.bottom = "0";
    pinkBou.style.transition = "transform 0.3s ease-in-out";
  }

  text.style.marginTop = value * 2.5 + "px";
  lefttree.style.left = value * -1.5 + "px";
  palmtree.style.left = value * 1.5 + "px";

  bird.style.transform = "scale(" + (1 + value / 1000) + ")";
  bird.style.top = value / 2 + "px";
});
