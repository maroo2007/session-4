function pingServer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isOnline = Math.random() > 0.7; 
      isOnline ? resolve("Server is online") : reject("Server is offline");
    }, 1000);
  });
}

async function monitorServer() {
  let attempts = 0;
  const maxAttempts = 5;
  
  while (attempts < maxAttempts) {
    attempts++;
    console.log(`Attempt ${attempts}...`);
    
    try {
      const result = await pingServer();
      console.log(result);
      return;
    } catch (error) {
      console.error(error);
      if (attempts === maxAttempts) {
        console.error("cannot reach!!. Giving up.");
      }
    }
  }
}

monitorServer();
