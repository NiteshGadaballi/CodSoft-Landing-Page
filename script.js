// Optional interactivity (e.g., scroll animations, future features)
document.querySelector('.cta-button').addEventListener('click', () => {
    window.location.href = '#products';
  });
  
  
  const cards = document.querySelectorAll('.card');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalText = document.getElementById('modal-text');
  const closeBtn = document.querySelector('.close-btn');

  const content = {
    "Edible Bowls": {
      img: "images/edible-bowl.jpg",
      text: "<strong>Edible bowls</strong> that <b>decompose naturally</b>.<br>Perfect for <span style='color:green; font-weight:bold;'>feeding animals sustainably</span>.<br><strong>No waste</strong>, just nature."
    },
    "Eco Treat Plates": {
      img: "images/edible-plates.jpg",
      text: "<strong>Eco-friendly treat plates</strong>.<br><span style='color:green; font-weight:bold;'>100% biodegradable</span> and safe for animals.<br>A <b>guilt-free feeding</b> solution."
    },
    "Compostable Food Trays": {
      img: "images/compostable.jpg",
      text: "<strong>Compostable food trays</strong> made with <b>love for nature</b>.<br><span style='color:green; font-weight:bold;'>Ideal for clean</span>, responsible feeding outdoors."
    }
  };
  

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('p').innerText;
      modalImg.src = content[title].img;
      modalText.innerHTML = content[title].text;
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

