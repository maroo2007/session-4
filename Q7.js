function deleteAccount(confirm) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (confirm) {
        resolve("Account deleted successfully");
      } else {
        reject(new Error("Account deletion cancelled"));
      }
    }, 1000);
  });
}

deleteAccount(true)
  .then(message => console.log(message))
  .catch(error => console.error(error.message));

deleteAccount(false)
  .then(message => console.log(message))
  .catch(error => console.error(error.message));
