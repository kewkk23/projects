const wrapper = document.querySelector('.wrapper'),
qrInput = wrapper.querySelector('.form input'),
GenerateBTN = wrapper.querySelector('.form button'),
qrIMG = wrapper.querySelector('.qr-code img');


GenerateBTN.addEventListener("click", () => {
    let qrValue=qrInput.value;
    if(!qrValue)
    {
        alert("Nie możesz zostawić pustego pola");
        return;
    }
    GenerateBTN.innerText = "Generowanie kodu QR...";
    qrIMG.src =`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrIMG.addEventListener("load", () => {
        wrapper.classList.add("active");
        GenerateBTN.innerText = "Generuj QR Kod";
    });
})


qrInput.addEventListener("keyup", () => {
    if(!qrInput.value)
    {
        wrapper.classList.remove("active");
    }
})