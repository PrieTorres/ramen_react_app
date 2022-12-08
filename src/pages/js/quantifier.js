export function alterarQuantidade(operacao, id){
    let quantidade_box = document.body.querySelector(`#ramen-container-${id}`);//
    let num = carrinho[id].quantidade;

    if(operacao=='mais' && num < 20){
        num++;
        quantidade_box.innerHTML = num;
        carrinho[id].quantidade = num;
    }else
    if(operacao=='menos' && num > 1){
        num--;
        quantidade_box.innerHTML = num;
        carrinho[id].quantidade = num;  
    }

    salvarObjeto(carrinho);
    montarTotal();
}