const formulario = document.querySelector("[data-botao-formulario]");
const camposFormulario = document.querySelectorAll("[required]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();    
    
})

camposFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
});

const tiposDeErro = [
    'valueMissing',
    'typeMisMatch',
    'patternMismatch',
    'tooShort',
    'customError',
    'tooLong'
];

const mensagensDeErro = {
    nome:{
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido.",
        tooLong: "Você ultrapassou o limite de caracteres permitidos"
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        patternMismatch: "Por favor, preencha um email válido."
        
    },
    assunto: {
        valueMissing: "Por favor, insira um assunto",
        tooLong: "Você ultrapassou o limite de caracteres permitidos"
        
    },
    mensagem: { 
        valueMissing: "Ops! Você se esqueceu de digitar sua mensagem"
    }
};

function verificaCampo(campo) { 
    let mensagem = "";
    campo.setCustomValidity(""); 

    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagensDeErro[campo.name][erro]; 
            console.log(erro)
        }        
    })

   const mensagemErro = campo.parentNode.querySelector(".campo-mensagem-erro");
   const campoInput = campo.parentNode.querySelector("[data-campo-input]");
   const validadorDeInput = campo.checkValidity();

    if(!validadorDeInput) {
        mensagemErro.textContent = mensagem;
        campoInput.style.borderBottom = "2px solid red";
        
    } else { 
        mensagemErro.textContent = ""; 
        campoInput.style.borderBottom = "2px solid #C8C8C8";
    }
   
}

