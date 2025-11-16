export function setupUi (generateQRCode){
    const input = document.getElementById('qr-input');
    const generateBtn = document.getElementById('generate-btn');
    const qrImage = document.getElementById('qr-image')

    generateBtn.addEventListener('click', () => {
        const text = input.value.trim();
        if (text){
            generateQRCode(text, (error, imageUrl) => {
                if(error){
                    alert('Error in generating QR Code, please try again later')
                }else{
                    qrImage.src = imageUrl;
                    qrImage.style.display = 'block';
                }
            });
        }else{
            alert('Please enter some text or URL')
        }
    });
}