
    // Your WhatsApp Number (include country code, no + or spaces)
    const whatsappNumber = "918071737880";

    // Select all buttons with the 'whatsapp-btn' class
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');

    whatsappButtons.forEach(button => {
      button.addEventListener('click', () => {
        const message = encodeURIComponent(button.dataset.message);
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(whatsappURL, '_blank'); // Opens in new tab or WhatsApp app
      });
    });







 const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
    const openPopupBtn = document.getElementById('openPopupBtn');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const popupOverlay = document.getElementById('popupOverlay');


    setTimeout(() => {
        popupOverlay.classList.remove('hidden');
    }, 4000)

    openPopupBtn.addEventListener('click', () => {
      popupOverlay.classList.remove('hidden');
    });

    closePopupBtn.addEventListener('click', () => {
      popupOverlay.classList.add('hidden');
    });

    popupOverlay.addEventListener('click', (e) => {
      if (e.target === popupOverlay) {
        popupOverlay.classList.add('hidden');
      }
    });
    // Handle form submission
    const form = document.getElementById('enquiryForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Form submitted successfully!');
      popupOverlay.classList.add('hidden');
      form.reset();
    });
