//https://blog.logrocket.com/storing-retrieving-javascript-objects-localstorage/

export function salvarObjeto(item){
    window.localStorage.setItem("carrinho", JSON.stringify(item));
}
export function carregarObjeto(carrinho){
    if(window.localStorage.getItem("carrinho").length == 0) return;
    let newObject = window.localStorage.getItem("carrinho");
    let item = JSON.parse(newObject);
    carrinho.push(...item);//porque item é um array
}

export function redirect(){ window.location.href = 'carrinho.html' }