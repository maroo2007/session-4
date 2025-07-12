function sendVerificationEmail(email) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Verification email sent to ${email}`);
      resolve();
    }, 2000);
  });
}

async function registerUser(name, email) {
  try {
    if (!name || !email) {
      throw new Error("Name and email are required");
    }
    
    console.log("Registering user...");
    await sendVerificationEmail(email);
    console.log("Registration successful!");
  } catch (error) {
    console.error("Registration failed:", error.message);
  }
}

registerUser("John Doe", "john@example.com"); // haytala3 success
registerUser("", "john@example.com"); // haytala3 error
