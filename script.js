document.addEventListener('DOMContentLoaded', function() {
    const playlistButtons = document.querySelectorAll('.playlist-button');
    const playlistFrame = document.getElementById('playlist-frame');
    
    playlistButtons.forEach(function(button) {
      button.addEventListener('click', function(event) {
        event.preventDefault();
        const playlistUrl = this.getAttribute('data-playlist-url');
        playlistFrame.innerHTML = `<iframe style="border-radius:12px" src="${playlistUrl}" width="100%" height="405" frameborder="0" allowtransparency="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
      });
    });
  });

  function toggleArticle(event) {
    const articleContent = event.target.parentElement.querySelector('.article-content');
    articleContent.classList.toggle('show');
}