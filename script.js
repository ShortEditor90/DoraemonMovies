
const movies = [
  { name: "Nobita in Ichi Mera Dost", poster: "IchiMeraDost.jpg", id: "19h3LBxYFMRSQNu6_hE2PFhUNYrlgdgpl", size: "1.2GB", desc: "Nobita befriends a gentle giant who teaches courage." },
  { name: "Nobita's Diary on the Creation of the World", poster: "dairyoncreationoftheworld.jpg", id: "1X70nCnXfrAxQPLOi6FK6JGxdbY95kOud", size: "1.02GB", desc: "Nobita builds a new world using Doraemon’s gadgets." },
  { name: "Nobita's Great Adventure in the South Seas", poster: "greatadventureinsouthseas.jpg", id: "1YDBmCXEwdxrj3p2KjB1AEMb5fkK1flFB", size: "1.02GB", desc: "A thrilling pirate journey across the deep sea." },
  { name: "Nobita Ki Universe Yatra", poster: "universeyatra.jpg", id: "1zDKH3A2Cadc0mp1nPYtWJCqVHdkzDtKP", size: "1 GB", desc: "Nobita travels through galaxies to save the universe." },
  { name: "Jadoo Mantar Aur Jahnoom", poster: "jadoomantaraurjahnoom.jpg", id: "1bUKqeo73el6ERUqniH9_SmfhB83XcAOg", size: "901 MB", desc: "Nobita battles dark powers in a magical world." },
  { name: "Nobita's Dorabian Nights", poster: "doraebiannights.jpg", id: "13nL-Z4MGSEviTXOPyHOg6fkKM62Cky5B", size: "972 MB", desc: "An Arabian adventure filled with treasure and mystery." },
  { name: "Nobita's Dinosaur", poster: "nobitasdinosaur.jpg", id: "1-PdvdeqX9i7GYf9-WSUZc0ReKc2ZXpIy", size: "894 MB", desc: "Nobita befriends a dinosaur from prehistoric times." },
  { name: "Nobita's Secret Gadget Museum", poster: "gadgetmuseum.jpg", id: "10-ZYAuaxYglMRlZzAGvbX0r_8bIjHXGI", size: "861MB", desc: "A mystery unfolds in Doraemon’s lost gadget museum." },
  { name: "Nobita the Explorer Bow Bow", poster: "explorerbowbow.jpg", id: "1kWyhKvluu6sbo5nnHa0fqXCEfmVIRzHG", size: "860 MB", desc: "Nobita explores hidden jungles and lost lands." },
  { name: "Galaxy Super Express", poster: "galaxysuperexpress.jpg", id: "1B-xNQ1w527Dd9UKzDd6JIR3ha_VQ5UCE", size: "851 MB", desc: "An interstellar train ride full of cosmic surprises." },
  { name: "Legend of the Sun King", poster: "legendofsunking.jpg", id: "1XBEG7gGU_qK1x2DZUdlccpyFkyjLZddY", size: "843 MB", desc: "Nobita uncovers an ancient civilization of the Sun." },
  { name: "Three Visionary Swordsmen", poster: "threevisionaryswordsmen.jpg", id: "100aH0NW0XQUjv6hFwBUVl-k0JLHxUxRU", size: "819 MB", desc: "A fantasy where Nobita becomes a heroic swordsman." },
  { name: "Knights on Dinosaurs", poster: "knightsondinosaur.jpg", id: "1lkRmqCSHoPWqs4qRBLiC7V7csf_2b0N6", size: "684 MB", desc: "Nobita meets knights in a land of dinosaurs." },
  { name: "Adventure of Koya Koya Planet", poster: "ilandofmiracles.jpg", id: "1S68mow1U7EnUK6oX7L6FXE2mQs5iF5KY", size: "502 MB", desc: "Nobita visits a mysterious alien planet of hope." },
  { name: "Little Space Wars", poster: "littlespacewars.jpg", id: "1e_Bi-xd3AjKqpRHeLtfDIcreVjW61r0P", size: "448 MB", desc: "An epic battle in space to save a tiny world." },
  { name: "Toofani Adventure", poster: "toofaniadventure.jpg", id: "1-ckRx_P-uaw2FZRYYqfVbiEqr8ThrImK", size: "397 MB", desc: "A stormy rescue mission testing friendship and courage." },
  { name: "Nobita Aur Jadooi Tapu", poster: "junglemeindangal.jpg", id: "1XPVhTtxJV-zewimwj2oZjRYkoJWVZLje", size: "314 MB", desc: "A mysterious island full of magic and danger." },
  { name: "Nobita and the Animal Planet", poster: "spaceblazer.jpg", id: "1f0dRQuhTMq00gtMZK0OMhm910aw-eRQk", size: "268 MB", desc: "Animals rule the world, and Nobita must protect them." },
  { name: "Underwater Adventure", poster: "UnderwaterAdventure.jpg", id: "1fEaCokr915leZSDP0HL8ahF9JxZWjBEQ", size: "219 MB", desc: "An underwater journey to uncover ocean secrets." },
  { name: "Nobita and the Steel Troops", poster: "steeltroops.jpg", id: "1IHn1WAWavADoWuybpRD3rqtnaLeJnzz6", size: "218 MB", desc: "Robots rise, and Nobita must defend humanity." },
  { name: "Antarctic Kachi Kochi", poster: "antartickachikochi.jpg", id: "1Ez4gE8U14yvPGjw-ckw63GEafYZRi4To", size: "483 MB", desc: "Frozen mysteries unfold in Antarctica’s icy world." }
];

// ---------------- DOM references ----------------
const container = document.getElementById("movie-container");
const searchInput = document.getElementById("search");
const modal = document.getElementById("videoModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const frame = document.getElementById("videoFrame");
const playerTitle = document.getElementById("playerTitle");
const closeBtn = document.getElementById("closeBtn");

// ---------------- Render movies ----------------
function renderMovies(list) {
  container.innerHTML = "";
  if (!list.length) {
    container.innerHTML = `<p style="color:#9fbfdf;text-align:center;width:100%;">No movies found.</p>`;
    return;
  }

  list.forEach(movie => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <img src="posters/${movie.poster}" alt="${escapeHtml(movie.name)} poster" loading="lazy">
      <div class="card-content">
        <h3>${escapeHtml(movie.name)}</h3>
        <p class="desc">${escapeHtml(movie.desc)}</p>
        <div class="buttons">
          <button class="watch-btn" data-id="${movie.id}" data-name="${escapeHtml(movie.name)}">Watch Online</button>
          <a class="download-btn" href="https://drive.usercontent.google.com/download?id=${movie.id}&export=download" target="_blank" rel="noopener">Download</a>
        </div>
        <span class="size-label">${movie.size}</span>
      </div>
    `;
    container.appendChild(card);
  });

  // attach watch button handlers
  container.querySelectorAll(".watch-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.id;
      const name = e.currentTarget.dataset.name;
      openPlayer(id, name);
    });
  });
}
renderMovies(movies);

// ---------------- Search ----------------
searchInput.addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  const filtered = movies.filter(m => m.name.toLowerCase().includes(q));
  renderMovies(filtered);
});

// ---------------- Player controls ----------------
function openPlayer(videoId, movieName) {
  // set title and src
  playerTitle.textContent = `Now Playing: ${movieName}`;
  frame.src = `https://drive.google.com/file/d/${videoId}/preview`;

  // open modal & lock scroll
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  // focus for accessibility
  closeBtn.focus();
}

function closePlayer() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  // clear src to stop playback
  frame.src = "";
  document.body.style.overflow = "";
}

// close on close button
closeBtn.addEventListener("click", closePlayer);

// close when clicking outside player-container (on backdrop)
modalBackdrop.addEventListener("click", closePlayer);

// close on ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) closePlayer();
});

// helper: escape HTML to avoid injection (good practice even for local)
function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

