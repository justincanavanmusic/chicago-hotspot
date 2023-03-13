// submit new reivew:
const submitButton = document.getElementById("submit-button");
 submitButton.addEventListener("click", function (event) {

   event.preventDefault();
   const id = event.target.dataset.id;
   const commentInput = document.getElementById("comment-input").value.trim();

   fetch(`/api/reviews/${id}`, {
     method: 'POST',
     body: JSON.stringify({ commentInput }),
     headers: { 'Content-Type': 'application/json' },
   })
   .then(res=>res.json())
     .then(data => {
       console.log(data);
         if (data) {
           document.location.replace('/profile');
    
       } else {
         alert('Failed to create review');
       }
  })
 });