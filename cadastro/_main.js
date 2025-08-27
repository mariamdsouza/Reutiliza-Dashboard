(function () {
  const sidebar = document.getElementById('sidebar');
  const menuBtn = document.getElementById('menu-toggle');
  const searchBtn = document.getElementById('search-toggle');
  const searchBox = document.getElementById('search-box');

  // Colapsa/apresenta a sidebar (o main ajusta via CSS)
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });
  }

  // Abre/fecha a caixa de busca na topbar
  if (searchBtn && searchBox) {
    searchBtn.addEventListener('click', () => {
      searchBox.classList.toggle('open');
      const input = searchBox.querySelector('input');
      if (searchBox.classList.contains('open') && input) input.focus();
    });
  }
})();
