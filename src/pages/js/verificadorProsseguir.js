const botaoProsseguir = document.body.querySelector('.prosseguir-compra-botao');

export function verificadorProsseguir(form){
    let botao = document.body.querySelector('.prosseguir-compra-botao');
    let formulario = form;

    if(!form){
        formulario = window.localStorage.getItem("formulario");
        formulario = JSON.parse(formulario);
    }

    if(formulario.pagamento == 'entrega'){

        if(formulario.entrega.pagamento.length > 0 && formulario.entrega.troco.length > 0 && formulario.entrega.cartao.length > 0)
        {
            botao.classList.remove('botao-desativado');
            botao.classList.add('botao-ativado');
            botao.addEventListener('click', prosseguirFormulario);
        }else{
            botao.classList.add('botao-desativado');
            botao.classList.remove('botao-ativado');
            botao.removeEventListener('click', prosseguirFormulario);
        }


    }else if(formulario.pagamento == 'online'){

        if(formulario.online.titular_cartao.length > 0 && 
            formulario.online.numero_cartao.length > 0 &&
            formulario.online.validade_cartao.length > 8 &&
            formulario.online.cod_seguranca.length > 0)
        {
            ativarBotaoProsseguir();
        }else{
           desativarBotaoProsseguir();
        }

    }
}

export function ativarBotaoProsseguir(){
    let botao = botaoProsseguir;
    botao.classList.remove('botao-desativado');
    botao.classList.add('botao-ativado');
    botao.addEventListener('click', prosseguirFormulario);
}

export function desativarBotaoProsseguir(){
    let botao = botaoProsseguir;
    botao.classList.add('botao-desativado');
    botao.classList.remove('botao-ativado');
    botao.removeEventListener('click', prosseguirFormulario);
}