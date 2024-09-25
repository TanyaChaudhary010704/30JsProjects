
let imgBox = document.getElementById("imgBox");
let QRimage = document.getElementById("QRimage");
let url = document.getElementById("url");
function generateQR() {
  QRimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + url.ariaValueMax;
}