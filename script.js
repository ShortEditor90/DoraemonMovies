const movies = [
  {
    name: "Nobita in Ichi Mera Dost",
    poster: "IchiMeraDost.jpg",
    link: "https://drive.usercontent.google.com/download?id=19h3LBxYFMRSQNu6_hE2PFhUNYrlgdgpl&export=download",
    size: "1.2GB",
    desc: "Nobita meets a mysterious friend who changes his life forever."
  },
  {
    name: "Nobita's Diary on the Creation of the World",
    poster: "dairyoncreationoftheworld.jpg",
    link: "https://drive.usercontent.google.com/download?id=1X70nCnXfrAxQPLOi6FK6JGxdbY95kOud&export=download",
    size: "1.02 GB",
    desc: "Nobita and Doraemon explore the origins of a newly created world."
  },
  {
    name: "Nobita's Great Adventure in the South Seas",
    poster: "greatadventureinsouthseas.jpg",
    link: "https://drive.usercontent.google.com/download?id=1YDBmCXEwdxrj3p2KjB1AEMb5fkK1flFB&export=download",
    size: "1.02 GB",
    desc: "A thrilling voyage where Doraemon and friends face pirates at sea."
  },
  {
    name: "Nobita Ki Universe Yatra",
    poster: "universeyatra.jpg",
    link: "https://drive.usercontent.google.com/download?id=1zDKH3A2Cadc0mp1nPYtWJCqVHdkzDtKP&export=download",
    size: "1004 MB",
    desc: "Nobita travels across galaxies in an epic cosmic journey."
  },
  {
    name: "Jadoo Mantar Aur Jahnoom",
    poster: "jadoomantaraurjahnoom.jpg",
    link: "https://drive.usercontent.google.com/download?id=1bUKqeo73el6ERUqniH9_SmfhB83XcAOg&export=download",
    size: "991 MB",
    desc: "A magical world where Doraemon’s gadgets meet real sorcery."
  },
  {
    name: "Nobita's Dorabian Nights",
    poster: "doraebiannights.jpg",
    link: "https://drive.usercontent.google.com/download?id=13nL-Z4MGSEviTXOPyHOg6fkKM62Cky5B&export=download",
    size: "972 MB",
    desc: "An Arabian adventure filled with treasures and mysteries."
  },
  {
    name: "Nobita's Dinosaur",
    poster: "nobitasdinosaur.jpg",
    link: "https://drive.usercontent.google.com/download?id=1-PdvdeqX9i7GYf9-WSUZc0ReKc2ZXpIy&export=download",
    size: "894 MB",
    desc: "Nobita befriends a baby dinosaur in a prehistoric world."
  },
  {
    name: "Nobita's Secret Gadget Museum",
    poster: "gadgetmuseum.jpg",
    link: "https://drive.usercontent.google.com/download?id=10-ZYAuaxYglMRlZzAGvbX0r_8bIjHXGI&export=download",
    size: "861 MB",
    desc: "A heist to recover Doraemon’s lost gadgets from a secret museum."
  },
  {
    name: "Nobita the Explorer Bow Bow",
    poster: "explorerbowbow.jpg",
    link: "https://drive.usercontent.google.com/download?id=1kWyhKvluu6sbo5nnHa0fqXCEfmVIRzHG&export=download",
    size: "860 MB",
    desc: "A jungle expedition that tests courage and friendship."
  },
  {
    name: "Galaxy Super Express",
    poster: "galaxysuperexpress.jpg",
    link: "https://drive.usercontent.google.com/download?id=1B-xNQ1w527Dd9UKzDd6JIR3ha_VQ5UCE&export=download",
    size: "851 MB",
    desc: "A thrilling intergalactic train ride full of surprises."
  },
  {
    name: "Legend of the Sun King",
    poster: "legendofsunking.jpg",
    link: "https://drive.usercontent.google.com/download?id=1XBEG7gGU_qK1x2DZUdlccpyFkyjLZddY&export=download",
    size: "843 MB",
    desc: "Nobita and team uncover an ancient civilization of the Sun."
  },
  {
    name: "Three Visionary Swordsmen",
    poster: "threevisionaryswordsmen.jpg",
    link: "https://drive.usercontent.google.com/download?id=100aH0NW0XQUjv6hFwBUVl-k0JLHxUxRU&export=download",
    size: "819 MB",
    desc: "A fantasy land where Nobita becomes a brave swordsman."
  },
  {
    name: "Knights on Dinosaurs",
    poster: "knightsondinosaur.jpg",
    link: "https://drive.usercontent.google.com/download?id=1lkRmqCSHoPWqs4qRBLiC7V7csf_2b0N6&export=download",
    size: "684 MB",
    desc: "A time-travel mission into the land of dinosaurs and knights."
  },
  {
    name: "Adventure of Koya Koya Planet",
    poster: "ilandofmiracles.jpg",
    link: "https://drive.usercontent.google.com/download?id=1S68mow1U7EnUK6oX7L6FXE2mQs5iF5KY&export=download",
    size: "502 MB",
    desc: "A mysterious alien planet where new friendships bloom."
  },
  {
    name: "Little Space Wars",
    poster: "littlespacewars.jpg",
    link: "https://drive.usercontent.google.com/download?id=1e_Bi-xd3AjKqpRHeLtfDIcreVjW61r0P&export=download",
    size: "448 MB",
    desc: "An epic battle in outer space to save a miniature world."
  },
  {
    name: "Toofani Adventure",
    poster: "toofaniadventure.jpg",
    link: "https://drive.usercontent.google.com/download?id=1-ckRx_P-uaw2FZRYYqfVbiEqr8ThrImK&export=download",
    size: "397 MB",
    desc: "A stormy quest where teamwork saves the day."
  },
  {
    name: "Nobita Aur Jadooi Tapu",
    poster: "junglemeindangal.jpg",
    link: "https://drive.usercontent.google.com/download?id=1XPVhTtxJV-zewimwj2oZjRYkoJWVZLje&export=download",
    size: "314 MB",
    desc: "A mysterious island adventure full of magic and danger."
  },
  {
    name: "Nobita and the Animal Planet",
    poster: "spaceblazer.jpg",
    link: "https://drive.usercontent.google.com/download?id=1f0dRQuhTMq00gtMZK0OMhm910aw-eRQk&export=download",
    size: "268 MB",
    desc: "Animals rule the world, and Nobita must protect their home."
  },
  {
    name: "Underwater Adventure",
    poster: "UnderwaterAdventure.jpg",
    link: "https://drive.usercontent.google.com/download?id=1fEaCokr915leZSDP0HL8ahF9JxZWjBEQ&export=download",
    size: "219 MB",
    desc: "A breathtaking journey to the ocean’s hidden world."
  },
  {
    name: "Nobita and the Steel Troops",
    poster: "steeltroops.jpg",
    link: "https://drive.usercontent.google.com/download?id=1IHn1WAWavADoWuybpRD3rqtnaLeJnzz6&export=download",
    size: "218 MB",
    desc: "Robots rise and it’s up to Nobita and Doraemon to save Earth."
  },
  {
    name: "Antarctic Kachi Kochi",
    poster: "antartickachikochi.jpg",
    link: "https://drive.usercontent.google.com/download?id=1Ez4gE8U14yvPGjw-ckw63GEafYZRi4To&export=download",
    size: "483 MB",
    desc: "A frozen adventure in Antarctica with hidden secrets."
  }
];

const container = document.getElementById("movie-container");

function renderMovies(list) {
  container.innerHTML = "";
  list.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="posters/${movie.poster}" alt="${movie.name}">
      <div class="overlay">
        <h3>${movie.name}</h3>
        <p>${movie.desc}</p>
      </div>
      <div class="card-content">
        <a href="${movie.link}" target="_blank" class="download-btn">Download</a>
        <span class="size-label">${movie.size}</span>
      </div>
    `;
    container.appendChild(card);
  });
}
renderMovies(movies);

document.getElementById("search").addEventListener("keyup", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = movies.filter(m => m.name.toLowerCase().includes(keyword));
  renderMovies(filtered);
});
