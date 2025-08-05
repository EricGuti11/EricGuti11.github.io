function loadHome() {
    document.getElementById('mainContent').innerHTML = `
      <div class="text">
        <p>
          Hi, I'm Eric Gutierrez — a Computer Science graduate from Appalachian State University.
          My academic focus was in web and software development, as well as systems programming.
          This site is my personal space to showcase the projects I've built and the work I'm proud of.
        </p>
      </div>
      <div class="image">
        <!-- Add a home image if you like -->
      </div>
    `;
  }
  
  function loadPortfolio() {
    document.getElementById('mainContent').innerHTML = `
    <div class="text">
      <h2>My Projects</h2>
      <div id="projectsContainer">Loading projects...</div>
    </div>
    <div class="image">
      <!-- Optional: image for portfolio section -->
    </div>
  `;
  
  fetch('projects.json')
    .then(res => res.json())
    .then(projects => {
      const container = document.getElementById('projectsContainer');
      container.innerHTML = projects.map(p => `
        <div class="project">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <a href="${p.link}" target="_blank">View on GitHub</a>
        </div>
      `).join('');
    })
    .catch(err => {
      document.getElementById('projectsContainer').textContent = 'Failed to load projects.';
      console.error(err);
    });
  }
  
  windown.onload = loadHome;
  window.addEventListener('DOMContentLoaded', loadHome);