window.dataLayer = {
    event:'pageview',
    pageTitle: document.title,
    pagePath: window.location.pathname,
    customerID : '2d08FB17EE273F4'
}
console.log(window.dataLayer);
function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
}
