function expandPost(post) {
    // Verifica se a nota já está expandida
    const isExpanded = post.classList.contains("expanded");

    // Recolhe todas as notas antes
    document.querySelectorAll(".post").forEach((p) => {
        p.classList.remove("expanded");
    });

    // Expande a nota se ela não estava expandida
    if (!isExpanded) {
        post.classList.add("expanded");
    }
}
