// JavaScript for like counter and comments
document.addEventListener('DOMContentLoaded', () => {
    const likeBtns = document.querySelectorAll('.like-btn');
    const commentBtns = document.querySelectorAll('.comment-btn');
    const commentSections = document.querySelectorAll('.comments');

    // Initialize like counts from localStorage or set to 0
    likeBtns.forEach((btn, index) => {
        let count = localStorage.getItem(`blog-${index + 1}-likes`) || 0;
        btn.nextElementSibling.textContent = count;
    });

    // Increment like count and save to localStorage
    likeBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            let count = parseInt(btn.nextElementSibling.textContent);
            count++;
            btn.nextElementSibling.textContent = count;
            localStorage.setItem(`blog-${index + 1}-likes`, count);
        });
    });

    // Toggle comments visibility
    commentBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            commentSections[index].classList.toggle('show');
        });
    });
    // JavaScript for dark mode toggle
    document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggleBtn = document.getElementById('dark-mode-toggle');

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });
    });

});
