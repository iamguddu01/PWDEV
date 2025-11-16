let currentPostId = 1   ;
const div = document.getElementById('comments');
function getComments(postId) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET',`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);

  xhr.onload = () => {
    div.innerText = xhr.responseText;

    if(postId >= 3)
        clearInterval(stopVal);
  };

  xhr.send();
}

let stopVal = setInterval(() => {
    getComments(currentPostId);
    currentPostId++;
}, 5000);
