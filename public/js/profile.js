$('.editReviewForm').on('submit', (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    const body = $('#editBody').val().trim();

    fetch(`/api/reviews/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ id, body }),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    window.location.reload();
    window.location.replace('/profile');
});