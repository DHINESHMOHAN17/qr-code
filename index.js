// const xhr=new XMLHttpRequest();
// xhr.addEventListener('load',()=>{
//     console.log(xhr.response);
// })
// xhr.open('GET','https://supersimplebackend.dev/products');
// xhr.send();
function getURL() {
    let url_value = document.querySelector(".input-url-link").value;
    let qrContainer = document.querySelector(".qr-image");

    // Clear previous QR code
    qrContainer.innerHTML = "";

    if (url_value.trim() === "") {
        alert("Please enter a valid URL");
        return;
    }

    // Generate QR code
    new QRCode(qrContainer, {
        text: url_value,
        width: 200,
        height: 200
    });
    document.querySelector(".input-url-link").value="";
}

