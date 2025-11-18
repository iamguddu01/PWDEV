// TASK 1
const dropdown = document.getElementById("dropdown");
const output = document.getElementById("output");
const statusText = document.getElementById("statusText");
function populateUsers() {
  statusText.textContent = "Loading users....";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const users = JSON.parse(xhr.responseText);
        dropdown.innerHTML = '<option value="">-- Choose a user --</option>';

        // Iterated all users and populated in dropdown
        users.forEach((user) => {
          const opt = document.createElement("option");
          opt.textContent = user.name;
          opt.value = user.id;
          dropdown.appendChild(opt);
        });
        statusText.textContent = "Users Loaded !";
        output.textContent = "Choose a user from dropdown.";
      } catch (error) {
        statusText.textContent = "Invalid JSON response.";
        output.textContent = "ERROR : Something went wrong, please try again";
      }
    } else {
      statusText.textContent = `Failed to load users (status : ${xhr.status})`;
      output.textContent = `Error loading users : HTTP ${xhr.status}`;
    }
  };
  xhr.send();
}
// TASK 2
dropdown.onchange = () => {
    const id = dropdown.value;
    if (!id){
        statusText.textContent = "No user selected !!"
        output.textContent = "Select a user to see JSON response !";
        return;
    }
    statusText.textContent = "Fetching the user details...";
    output.textContent = "";

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://jsonplaceholder.typicode.com/users/${id}`);
    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300){
            try{
                const obj = JSON.parse(xhr.responseText);
                output.textContent = JSON.stringify(obj);
                statusText.textContent = `Loaded user ${obj.id} - ${obj.name}`;
            }catch(error){
                statusText.textContent = "Invalid JSON response!"
                output.textContent = "ERROR : Unable to parse the JSON response"
            }

        }else{ // If api fails else part will execute
            statusText.textContent = `Request failed (Status : ${xhr.status})`;
            output.textContent = `HTTP error : ${xhr.status}`;

        }
    }
    xhr.onerror = () => {
        statusText.textContent =  "Network ERROR !"
        output.textContent = "Network error while fetching details !!"
    }
    xhr.ontimeout = () => {
        statusText.textContent = "Request Timeout !!"
        output.textContent = "Request timeout while fetching details !!"
    }
    xhr.send();
}
populateUsers();

