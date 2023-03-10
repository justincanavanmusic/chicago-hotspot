const form = document.querySelector("form");
const commentsContainer = document.getElementById("comments");
const comments = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

<<<<<<< HEAD
  const username = document.querySelector("#username").value;
  const commentInput = document.querySelector("#comment").value;
=======
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
>>>>>>> main

  // Save the comment in an array
  comments.push({ username, comment: commentInput });

  // Clear input fields after form submission
  document.querySelector("#username").value = "";
  document.querySelector("#comment").value = "";

  // Create a new div for the comment and append it to the comments container
  const commentDiv = document.createElement("div");
  commentDiv.innerHTML = `<h3>${username}</h3><p>${commentInput}</p>`;
  commentsContainer.appendChild(commentDiv);
});
