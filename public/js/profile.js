// edit review modal
$('.editReviewForm').on('submit', (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    const body = $(`#editBody${id}`).val().trim();

    fetch(`/api/reviews/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ id, body }),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    window.location.reload();
    window.location.replace('/profile');
});

// delete review 
const deleteButton = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        window.location.reload();
      } else {
        alert('Failed to delete post');
      }
    }
  };
              // DELETE BUTTON
 var buttonEls = document
  .querySelectorAll('.del-button')
  for (let i = 0; i < buttonEls.length; i++) {
  buttonEls[i].addEventListener('click', deleteButton);
  }
