const form = document.querySelector("form");
const commentsContainer = document.getElementById("comments");
const comments = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.querySelector("#username").value;
  const commentInput = document.querySelector("#comment").value;

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
