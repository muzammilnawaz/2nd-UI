


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
