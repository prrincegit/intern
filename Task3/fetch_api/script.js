document.getElementById("loadBtn").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => displayUsers(data))
    .catch(err => {
      console.error("Error fetching users:", err);
    });
});

function displayUsers(users) {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  users.forEach(user => {
    const div = document.createElement("div");
    div.className = "user-card";
    div.innerHTML = `
      <strong>${user.name}</strong><br />
      Email: ${user.email}<br />
      City: ${user.address.city}
    `;
    userList.appendChild(div);
  });
}
