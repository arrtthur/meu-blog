function expandPost(postElement) {
    // Esconde todas as outras notas
    document.querySelectorAll('.post .content').forEach(content => {
        if (content !== postElement.querySelector('.content')) {
            content.style.display = 'none';
        }
    });

    // Alterna a exibição do conteúdo da nota clicada
    const content = postElement.querySelector('.content');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}
