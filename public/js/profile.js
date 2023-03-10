$('.editReviewForm').on('submit', (e) => {
    e.preventDefault();
    console.log(e.target.dataset.id);
});