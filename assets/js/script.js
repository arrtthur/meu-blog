function openModal(postId) {
    // Busca o conteúdo da postagem pelo ID
    var modal = document.getElementById("modal");
    var modalBody = document.getElementById("modal-body");

    // Carregar conteúdo do post com base no ID
    var post = document.querySelector(`.post[data-id='${postId}']`);
    var title = post.querySelector('h2').innerText;
    var excerpt = post.querySelector('p').innerText;

    modalBody.innerHTML = `
        <h2>${title}</h2>
        <p>${excerpt}</p>
        <a href="${post.querySelector('a').href}" target="_blank">Leia mais...</a>
    `;

    modal.style.display = "block";
}

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
