// Creation of DataLayer 
window.dataLayer = {
    'userType': Guest,
    'pageTitle':document.title,
    'pagePath':window.location.pathname
}

function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
}
