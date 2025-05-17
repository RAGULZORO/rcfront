document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = document.querySelector("button[type='submit']");
    submitBtn.disabled = true;

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;
    const people = document.querySelector("#people").value;

    // Basic validation
    if (!email.includes("@") || !phone.match(/^\d{10}$/)) {
        alert("Invalid email or phone!");
        submitBtn.disabled = false;
        return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, date, time, people }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Booking successful!");
        form.reset(); // Clear form
      } else {
        alert("Booking failed: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      alert("Server error! Check console.");
      console.error(err);
    } finally {
      submitBtn.disabled = false;
    }
  });
});