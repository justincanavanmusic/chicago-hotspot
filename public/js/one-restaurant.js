const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const username = document.querySelector('#username').value;
  const comment = document.querySelector('#comment').value;

  // TODO: Handle form submission (e.g. send data to server)

  // Optional: clear input fields after form submission
  document.querySelector('#username').value = '';
  document.querySelector('#comment').value = '';
});