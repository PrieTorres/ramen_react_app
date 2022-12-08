const Header = () => {
    return (
        <header class="cabecalho-principal">
            <h1 class="cabecalho-principal__titulo"><span class="cabecalho-principal__titulo-content">Ramen-lhama</span></h1>
            <nav class="cabecalho-principal__nav">
                <ul class="cabecalho-principal__nav-lista">
                    <li class="cabecalho-principal__nav-lista-item"><a class="cabecalho-principal__nav-lista-link ativo" href="index.html">Home</a></li>
                    <li class="cabecalho-principal__nav-lista-item"><a class="cabecalho-principal__nav-lista-link" href="montagem.html">Monte o seu Rámen!</a></li>
                    <li class="cabecalho-principal__nav-lista-item"><a class="cabecalho-principal__nav-lista-link" href="menu.html">Menu <p class="texto-invisivel">cardápio com todos os rámens e combos</p></a></li>
                    <li class="cabecalho-principal__nav-lista-item"><a class="cabecalho-principal__nav-lista-link" href="meus_pedidos.html">Meus Pedidos</a></li>
                </ul>
            </nav>
        </header>
    )
}