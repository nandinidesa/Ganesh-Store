window.dataLayer = {
    'event':'pageview',
    'pageTitle':document.title,
    'pagePath':window.location.pathname
}
console.log(window.dataLayer);
function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
}
