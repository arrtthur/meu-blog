function expandPost(postElement) {
    document.querySelectorAll('.content').forEach(content => {
        if (content !== postElement.querySelector('.content')) {
            content.style.display = 'none';
        }
    });

    const content = postElement.querySelector('.content');
    content.style.display = content.style.display === 'none' || !content.style.display
        ? 'block'
        : 'none';
}
