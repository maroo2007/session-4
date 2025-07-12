const bookedSlots = ["a1", "b2", "c3"];

function bookAppointment(slot) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (slot === "b3" || slot === "a1") {
        reject(new Error("Slot not available"));
      } else if (bookedSlots.includes(slot)) {
        reject(new Error("Slot already booked"));
      } else {
        bookedSlots.push(slot);
        resolve(`Slot ${slot} booked successfully`);
      }
    }, 1000);
  });
}

async function tryBooking(slot) {
  try {
    const result = await bookAppointment(slot);
    console.log(result);
  } catch (error) {
    console.error("Booking failed:", error.message);
  }
}

tryBooking("a1"); // mafeesh makan already booked
tryBooking("b3"); // Not available
tryBooking("d4"); // sha8all
