const pix_icon = document.getElementById("pix_icon");
const icons = document.querySelectorAll("input[name=pagamento_tipo]");
const forms = document.getElementById("hidden_forms");
const button = document.querySelector('button[type="submit"]');
const qrcode = document.querySelector(".qrcode");
const spinner = document.querySelector(".spinner");
const forms_cartao = document.getElementById("forms_cartao");
const forms_boleto = document.getElementById("forms_boleto");

icons.forEach(radio => {
radio.addEventListener("change", (event) => {

    if(event.target.checked){
        console.log(event.target.id);

        switch(event.target.id){
            case "pix_icon":
                forms.style.display = "flex";
                forms_cartao.style.display = "none";
                forms_boleto.style.display = "none";
                qrcode.style.display = "none";
                forms.style.opacity = "1";
                spinner.style.opacity = '0';
                button.style.display = "flex";
                break;

            case "cartao_icon":
                forms.style.display = "none";
                forms_cartao.style.display = "flex";
                forms_boleto.style.display = "none";
                qrcode.style.display = "none";
                forms.style.opacity = "1";
                spinner.style.opacity = '0';
                button.style.display = "flex";
                break;

            case "boleto_icon":
                forms.style.display = "none";
                forms_cartao.style.display = "none";
                forms_boleto.style.display = "flex";
                qrcode.style.display = "none";
                forms.style.opacity = "1";
                spinner.style.opacity = '0';
                button.style.display = "flex";
                break;
        }
        
    }
    
})
})

forms.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = forms.nome.value;
    const cpf = forms.cpf.value;

    console.log(nome + " " + cpf);
    
    if(icons[0].checked){
        qrcode.style.display = "flex";
        forms.style.opacity = "0.5";
        spinner.style.opacity = '1';
        button.style.display = "none";
    }
    
    
});

forms_cartao.addEventListener("submit", (event) => {
    event.preventDefault();
})

forms_boleto.addEventListener("submit", (event) => {
    event.preventDefault();
})
