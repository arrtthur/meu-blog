// Função para abrir o modal e exibir o conteúdo do post
function openModal(postId) {
    var modal = document.getElementById("modal");
    var modalBody = document.getElementById("modal-body");

    // Obter as informações do post usando o ID
    var post = document.querySelector(`.post[data-id='${postId}']`);
    var title = post.querySelector('h2').innerText;
    var excerpt = post.querySelector('p').innerText;

    // Exibir as informações do post no modal
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

// Fechar o modal ao clicar fora do conteúdo
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
    }
}
