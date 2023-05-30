// edit review modal
// $('.editReviewForm').on('submit', (e) => {
//     e.preventDefault();
//     const id = e.target.dataset.id;
//     const body = $(`#editBody${id}`).val().trim();

//     fetch(`/api/reviews/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify({ id, body }),
//         headers: { 'Content-Type': 'application/json' },
//     })
//     .then(res => res.json())
//     window.location.reload();
//     // window.location.replace('/profile');
// });

const editBtn = async (e) => {
  if (e.target.hasAttribute(data - id)) {
    const id = e.target.hasAttribute("data-id");

    const res = await fetch(`api/reviews/${id}`, {
      method: "PUT",
      body: JSON.stringify({ id, body }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
    window.location.reload();
  }
};

// delete review
const deleteButton = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/reviews/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      window.location.reload();
    } else {
      alert("Failed to delete post");
    }
  }
};

const saveHandler = async (e) => {
  e.preventDefault();
  if (e.target.hasAttribute("data-id")) {

    console.log(e.target)

  // const id = document.querySelector(".form-input").getAttribute("data-id");
  const id = e.target.getAttribute('data-id')

  console.log(id);

  // const body = document.querySelector(".form-input").value;
  const body = document.querySelector(`#editBody${id}`).value;

  console.log("body = " + body);

  const res = await fetch(`/api/reviews/${id}`, {
    method: "PUT",
    body: JSON.stringify({ id, body }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
  console.log(res);

  window.location.reload();
}
};

let editBtns = document.querySelectorAll(".edit-post");
editBtns.forEach((btn) => btn.addEventListener("click", editBtn));

// DELETE BUTTON
var buttonEls = document.querySelectorAll(".del-button");
for (let i = 0; i < buttonEls.length; i++) {
  buttonEls[i].addEventListener("click", deleteButton);
}

let saveBtns = document.querySelectorAll(".save-btn");
saveBtns.forEach((btn) => btn.addEventListener("click", saveHandler));
