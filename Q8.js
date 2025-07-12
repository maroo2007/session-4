function checkPasswordStrength(password) {
  return new Promise((resolve, reject) => {
    if (password.length >= 6) {
      resolve("Password is strong enough");
    } else {
      reject(new Error("Password must be at least 6 characters"));
    }
  });
}
checkPasswordStrength("password123")
  .then(message => console.log(message))
  .catch(error => console.error(error.message));

checkPasswordStrength("123")
  .then(message => console.log(message))
  .catch(error => console.error(error.message));
