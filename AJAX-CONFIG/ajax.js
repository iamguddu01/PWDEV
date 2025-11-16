// AJAX => Asynchronous Javascript and XML
// AJAX send the request to server without reloading the page
function getpost() {
  // Step 1 = Created an instance of XMLhttpRquest
  const xhr = new XMLHttpRequest();
  //Step 2 = Defined the method and endpoint of api
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

  // Listening to the response
  xhr.onload = () => {
    div.innerText = xhr.responseText;
  };
  // Finally sending the request
  xhr.send();
}

const btn = document.getElementById("btn");
const div = document.getElementById("post");

btn.addEventListener('click', getpost);
