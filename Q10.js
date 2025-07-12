function getUserPosts(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      return response.json();
    });
}


getUserPosts(1)
  .then(posts => {
    console.log(`Posts by user ${1}:`);
    posts.forEach(post => console.log(`- ${post.title}`));
  })
  .catch(error => console.error("Error:", error.message));

getUserPosts(999)
  .then(posts => {
    console.log(`Posts by user ${999}:`);
    posts.forEach(post => console.log(`- ${post.title}`));
  })
  .catch(error => console.error("Error:", error.message));
