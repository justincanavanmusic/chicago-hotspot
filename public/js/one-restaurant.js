const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const username = document.querySelector('#username').value;
  const comment = document.querySelector('#comment').value;

  // TODO: Handle form submission (e.g. send data to server)
        // DELETE BUTTON STUFF 
  const deleteButton = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to delete post');
      }
    }
  };
              // DELETE BUTTON
 var buttonEls = document
  .querySelectorAll('.review-list')
  for (let i = 0; i < buttonEls.length; i++) {
  buttonEls[i].addEventListener('click', deleteButton);
  }

  // Optional: clear input fields after form submission
  document.querySelector('#username').value = '';
  document.querySelector('#comment').value = '';
});