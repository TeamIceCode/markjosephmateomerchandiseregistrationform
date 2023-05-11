const endpoint = 'https://example.com/api/register';
const form = document.getElementById('registration-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Show success message to user
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    // Show error message to user
  });
});
