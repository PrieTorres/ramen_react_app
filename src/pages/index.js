import React from "react";
import "./css/style.css";
import "./css/rodape.css";
import "./css/carousel.css";
import "./css/cabecalho.css";
import "./css/home/descrisao-ramen.css";
import "./css/home/conteudo-principal_ramens.css";
import "./css/home/conteudo-principal-topo.css";
import "./css/home/conteudo-principal__populares.css";
import "./css/home/conteudo-principal__populares.css";
// scripts
import "./js/ramens_json.js";
import "./js/adicionarAoCarrinho.js";
import "./js/manipuladorObjeto.js";

import { combosRamen } from "./js/ramens_json.js";
import { ramensJson } from "./js/ramens_json.js";
import { carregarObjeto } from "./js/manipuladorObjeto.js";
import { trocarImagem } from "./js/troca_imagem_timer";
import { movedorCarrousel } from "./js/carousel";
import { comprarRamen } from "./js/adicionarAoCarrinho.js";
import { salvarObjeto } from "./js/manipuladorObjeto.js";
import { redirect } from "./js/manipuladorObjeto.js";

const InitialPage = () => {
    let carrinho = [];
    let ramensJson_personalizado=[];

    return (
        <>
            <html lang="pt-br">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Tá afim de um Ramen?</title>
                </head>
                {carregarObjeto(carrinho)}
                {trocarImagem()}
                <body >
                    <main class="conteudo-principal">
                        <section class="conteudo-principal-topo">
                            <div class="conteudo-principal-topo__container-bg">
                                <div class="conteudo-principal-topo__container">
                                    <div class="conteudo-principal-topo__container--caixa-texto">
                                        <h1 class="conteudo-principal-topo__container--texto">A melhor loja online de lámen</h1>
                                        <a href="menu.html"><button class="conteudo-principal-topo__container--botao">Estou com fome!</button></a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="conteudo_principal_ramens">
                            <h1 class="conteudo_principal_ramens-titulo">Mais Pedidos</h1>
                            <div class="conteudo_principal_ramens-container">
                                <script src="js/montarCarroselItens.js"></script>
                            </div>
                            <div class="scrollbar">
                                <button class="botao-carousel esquerda ativo" onclick={()=>movedorCarrousel('esquerda')}></button>
                                <button class="botao-carousel meio" onclick={()=>movedorCarrousel('meio')}></button>
                                <button class="botao-carousel direita" onclick={()=>movedorCarrousel('direita')}></button>
                            </div>
                        </section>
                        <section class="conteudo-principal__ofertas">
                            <div class="conteudo-principal__ofertas-oferta--principal">
                            </div>
                            <div class="conteudo-principal__ofertas-oferta--secundaria cima">
                                <h3 class="conteudo-principal__ofertas-oferta--secundaria-texto">Noodle brinde por apenas mais <strong class="preco-destaque">R$25,29</strong></h3>
                            </div>
                            <div class="conteudo-principal__ofertas-oferta--secundaria">
                                <h3 class="conteudo-principal__ofertas-oferta--secundaria-texto">Noodle brinde por apenas mais <strong class="preco-destaque">R$25,29</strong></h3>
                            </div>
                        </section>
                        <section class="conteudo-principal__populares">

                            <div class="conteudo-principal__populares-container"
                                onclick={() => {comprarRamen(2); salvarObjeto(carrinho); redirect()}}>
                                <img
                                    class="conteudo-principal__populares-container-imagem"
                                    src="./img/ramens/ramen-tradicional.jpg"
                                    alt="ramen sabor tradicional" />
                                <div class="conteudo-principal__populares-container__caixa-texto">
                                    <h2 class="conteudo-principal__populares-container__caixa-texto-titulo">Ramen tradicional</h2>
                                    <p class="onteudo-principal__populares-container__caixa-texto-texto">
                                        Uma descrição bem legal e interessante a respeito desse ramen, incluindo um pouco do sabor dele, caracteristicas e afins, vender o produto, essas coisas
                                    </p>
                                </div>
                            </div>

                            <div class="conteudo-principal__populares-container"
                                onclick={() => {comprarRamen(1); salvarObjeto(carrinho); redirect()}}>
                                <img class="conteudo-principal__populares-container-imagem"
                                    src="img/ramens/ramen-picante.jpg"
                                    alt="ramen sabor picante" />
                                <div class="conteudo-principal__populares-container__caixa-texto">
                                    <h2 class="conteudo-principal__populares-container__caixa-texto-titulo">Ramen Spicy</h2>
                                    <p class="onteudo-principal__populares-container__caixa-texto-texto">
                                        Uma descrição bem legal e interessante a respeito desse ramen, incluindo um pouco do sabor dele, caracteristicas e afins, vender o produto, essas coisas
                                    </p>
                                </div>
                            </div>

                            <div class="conteudo-principal__populares-container"
                                onclick={() => {comprarRamen(0); salvarObjeto(carrinho); redirect()}}>
                                <img class="conteudo-principal__populares-container-imagem"
                                    src="img/ramens/ramen-vegetariano.jpg"
                                    alt="ramen vegetariano" />
                                <div class="conteudo-principal__populares-container__caixa-texto">
                                    <h2 class="conteudo-principal__populares-container__caixa-texto-titulo">Ramen Vegetariano</h2>
                                    <p class="onteudo-principal__populares-container__caixa-texto-texto">
                                        Uma descrição bem legal e interessante a respeito desse ramen, incluindo um pouco do sabor dele, caracteristicas e afins, vender o produto, essas coisas
                                    </p>
                                </div>
                            </div>

                        </section>
                        <section class="descrisao-ramen">
                            <div class="descrisao-ramen__container">
                                <h1 class="descrisao-ramen__container-titulo">O que é Rámen?</h1>
                                <div class="descrisao-ramen__container-caixa-texto">
                                    <div class="descrisao-ramen__container-imagem" ></div>
                                    <h3 class="descrisao-ramen__container-texto">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a justo odio. Sed pellentesque pharetra magna, eget convallis tellus sagittis et. Donec consectetur felis sed ex tempus, eget pharetra tellus commodo. Integer eget odio iaculis erat finibus lobortis. Cras ac risus vel risus pellentesque consectetur ac eu arcu. Proin aliquet, sapien vel laoreet posuere, massa erat elementum quam, id tristique erat velit sed diam. Vestibulum nunc dolor, mattis eget cursus non, eleifend ut dolor.
                                        In interdum libero diam, sed facilisis erat condimentum nec. Duis auctor mi felis, sit amet consectetur elit hendrerit sit amet. Vivamus euismod risus a ullamcorper tincidunt. Maecenas finibus mollis est, id sollicitudin nisi malesuada ac. Pellentesque vitae accumsan urna, id luctus leo. Pellentesque vel condimentum est. Quisque ut justo sed nunc mattis efficitur eget interdum erat. Mauris sagittis, lectus eget suscipit mattis, dolor turpis fringilla mi, id malesuada nibh tortor et nisl.
                                    </h3>
                                </div>
                            </div>
                        </section>
                    </main>
                    <footer class="rodape-principal">
                        <p class="rodape-principal__texto">&copy;Todos os direitos reservados 2022</p>
                    </footer>
                </body>
            </html>
        </>
    )
}

export default InitialPage;
