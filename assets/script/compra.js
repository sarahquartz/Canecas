const pix_icon = document.getElementById("pix_icon");
const icons = document.querySelectorAll("input[name=pagamento_tipo]");
const forms = document.getElementById("hidden_forms");

icons.forEach(radio => {
radio.addEventListener("change", (event) => {
    if(event.target.checked){
        console.log(event.target.id);
        if(event.target.id == "pix_icon"){
            forms.style.display = "flex";
        }
        else{
            forms.style.display = "none"
        }
        
    }
    
})
})
