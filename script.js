// Função para abrir e fechar o menu
function toggleMenu() {
  document.body.classList.toggle('menu-open');
}

function abrirCarta() {
    document.getElementById("carta").style.display = "flex"; // Mostra o fundo escuro
    document.getElementById("carta-conteudo").style.display = "block"; // Exibe o conteúdo
}
function fecharCarta() {
    document.getElementById("carta").style.display = "none"; // Esconde o fundo escuro
    document.getElementById("carta-conteudo").style.display = "none"; // Esconde o conteúdo
}