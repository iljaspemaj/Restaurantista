let metaCharset = document.createElement("meta");
metaCharset.setAttribute("charset", "UTF-8");

let metaHttpEquiv = document.createElement("meta");
metaHttpEquiv.setAttribute("http-equiv", "X-UA-Compatible");
metaHttpEquiv.setAttribute("content", "IE=edge");

let metaName = document.createElement ("meta");
metaName.setAttribute ("name", "view");
metaName.setAttribute ("content", "width=device-width, initial-scale=1.0");

let titleTag = document.createElement("title");
titleTag.textContent = "Restaurantista";

let cssStyle = document.createElement("link");
cssStyle.setAttribute("rel", "stylesheet");
cssStyle.setAttribute("href", "./styles/style.css");

let cssRoboto = document.createElement("link");
cssRoboto.setAttribute("href", "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
cssRoboto.setAttribute("rel", "stylesheet")

document.head.appendChild(metaCharset);
document.head.appendChild(metaHttpEquiv);
document.head.appendChild(metaName);
document.head.appendChild(titleTag);
document.head.appendChild(cssStyle);
document.head.appendChild(cssRoboto);


let bodyTag = document.createElement("body");

let header = document.createElement("header");