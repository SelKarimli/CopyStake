document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const copyrightCards = document.querySelectorAll('.copyright-card');

    if (categoryButtons.length > 0 && copyrightCards.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove 'active' class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                // Add 'active' class to the clicked button
                button.classList.add('active');

                const filterCategory = button.dataset.category;

                copyrightCards.forEach(card => {
                    const cardCategory = card.dataset.category;
                    if (filterCategory === 'all' || cardCategory === filterCategory) {
                        card.style.display = 'block'; // Show card
                    } else {
                        card.style.display = 'none'; // Hide card
                    }
                });
            });
        });
    }
    const heartIcons = document.querySelectorAll('.heart-icon');

    if (heartIcons.length > 0) {
        heartIcons.forEach(iconButton => {
            iconButton.addEventListener('click', () => {
                const icon = iconButton.querySelector('i');
                if (icon.classList.contains('far')) { // Is empty heart (Font Awesome Regular)
                    icon.classList.remove('far');
                    icon.classList.add('fas'); // Change to solid heart (Font Awesome Solid)
                    icon.style.color = '#E94560'; // Set accent color
                } else { // Is solid heart
                    icon.classList.remove('fas');
                    icon.classList.add('far'); // Change back to empty heart
                    icon.style.color = ''; // Reset color
                }
            });
        });
    }
    const authForms = document.querySelectorAll('.auth-form-section form');
    if (authForms.length > 0) {
        authForms.forEach(form => {
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                console.log('Form submitted!');
                alert('Form submitted! (This is a frontend-only example. No backend functionality.)');
            });
        });
    }
});