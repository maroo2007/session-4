function getUserProfile(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("User not found");
      }
      return response.json();
    });
}

getUserProfile(1)
  .then(user => {
    console.log("User Profile:");
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
  })
  .catch(error => console.error("Error:", error.message));

getUserProfile(999)
  .then(user => {
    console.log("User Profile:");
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
  })
  .catch(error => console.error("Error:", error.message));
