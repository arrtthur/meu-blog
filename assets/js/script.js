// Função para abrir o modal e exibir o conteúdo do post
function openModal(postId) {
    // Busca o conteúdo da postagem com o id correspondente
    var modal = document.getElementById("modal");
    var modalBody = document.getElementById("modal-body");

    // Aqui você pode buscar e definir o conteúdo do post
    // Estou usando conteúdo fixo como exemplo, mas você pode buscar o conteúdo de cada post de forma dinâmica
    var post = document.querySelector(`.post[data-id='${postId}']`);
    var title = post.querySelector('h2').innerText;
    var excerpt = post.querySelector('p').innerText;

    modalBody.innerHTML = `
        <h2>${title}</h2>
        <p>${excerpt}</p>
        <a href="${post.querySelector('a').href}" target="_blank">Leia mais...</a>
    `;

    // Exibe o modal
    modal.style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Fecha o modal se o usuário clicar fora do conteúdo
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
