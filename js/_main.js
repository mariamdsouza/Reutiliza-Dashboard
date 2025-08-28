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

    function renderGrafico() {
    const content = document.getElementById("content");

    content.innerHTML = `
      <div class="chart-container">
        <canvas id="demandaChart"></canvas>
      </div>
    `;

    const ctx = document.getElementById('demandaChart').getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Ago','Set','Out','Nov','Dez','Jan',
                 'Fev','Mar','Abr','Mai','Jun','Jul'],
        datasets: [
          {
            label: 'Solicitações',
            data: [120, 150, 180, 200, 250, 300, 280, 320, 340, 360, 370, 400],
            borderColor: 'rgba(220, 20, 60, 1)',
            borderWidth: 3,
            pointBackgroundColor: 'rgba(220, 20, 60, 1)',
            pointRadius: 5,
            pointHoverRadius: 8,
            tension: 0.4
          },
          {
            label: 'Entregas',
            data: [100, 140, 160, 180, 220, 270, 260, 290, 310, 330, 340, 370],
            borderColor: 'rgba(30, 60, 150, 1)',
            borderWidth: 3,
            pointBackgroundColor: 'rgba(30, 60, 150, 1)',
            pointRadius: 5,
            pointHoverRadius: 8,
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Solicitações x Entregas por Mês (2024-2025)',
            font: { size: 22, weight: 'bold' },
            color: '#333'
          }
        }
      }
    });
  }

  document.getElementById("btnDashboard").addEventListener("click", (e) => {
    console.log("oi");
    renderGrafico();
  });

});

(function () {
  const sidebar = document.getElementById('sidebar');
  const menuBtn = document.getElementById('menu-toggle');
  const searchBtn = document.getElementById('search-toggle');
  const searchBox = document.getElementById('search-box');

  if (searchBtn && searchBox) {
    searchBtn.addEventListener('click', () => {
      searchBox.classList.toggle('open');
      const input = searchBox.querySelector('input');
      if (searchBox.classList.contains('open') && input) input.focus();
    });
  }
})();
