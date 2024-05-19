
function setFavicon() {
let aIcon = [
    "src/static/icon/finnIcon.png",
    "src/static/icon/pbIcon.png",
    "src/static/icon/orgalorkIcon.png",
    "src/static/icon/marcelineIcon.png",
    "src/static/icon/lspIcon.png",
    "src/static/icon/jakeIcon.png",
    "src/static/icon/icekingIcon.png",
    "src/static/icon/flameprincessIcon.png",
    ];
    let numArr = Math.floor(Math.random() * 8);
    let iconPath;
  iconPath = aIcon[numArr];
  let favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.href = iconPath;
    favicon.type = "image/png";

  document.head.appendChild(favicon);   
}
window.onload = setFavicon;      
