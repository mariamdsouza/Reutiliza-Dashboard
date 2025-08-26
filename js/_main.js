document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const userAvatar = document.getElementById('user-avatar');
    const searchToggle = document.getElementById('search-toggle');
    const searchBox = document.querySelector('.search-box');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });

    searchToggle.addEventListener('click', () => {
        searchBox.classList.toggle('active');
        if (searchBox.classList.contains('active')) {
            searchBox.querySelector('input').focus();
        }
    });

    userAvatar.onerror = () => {
        const userIconDiv = userAvatar.parentElement;
        userAvatar.style.display = 'none';
        const genericIcon = document.createElement('i');
        genericIcon.classList.add('material-icons');
        genericIcon.textContent = 'person';
        userIconDiv.appendChild(genericIcon);
    };
});