import { generateQRCode } from './qrGenerator.js';

const generateBtn = document.getElementById('generate-btn');
const qrInput = document.getElementById('qr-input');
const qrImage = document.getElementById('qr-image');
const preloader = document.getElementById('preloader');
const placeholderText = document.getElementById('placeholder-text');

generateBtn.addEventListener('click', handleGenerateClick);

function handleGenerateClick() {
    const inputValue = qrInput.value.trim();
    if(!inputValue) return;
    placeholderText.style.display = 'none';
    preloader.style.display = 'flex';
    qrImage.style.display = 'none';

    generateQRCode(inputValue, handleQrCodeGenerated);
}
function handleQrCodeGenerated(error, qrCodeDataUrl){
    preloader.style.display = 'none';
    if(error){
        console.error('Error in generating QR Code:', error);
        placeholderText.style.display = 'block';
    }else{
        qrImage.src = qrCodeDataUrl;
        qrImage.style.display = 'block';
    }
} 