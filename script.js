document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = this.name.value;
    const email = this.email.value;
    const slot = this.slot.value;
  
    // For now, just show a message
    const msg = `Thanks ${name}! Your slot on ${new Date(slot).toLocaleString()} is booked. We'll email you at ${email}.`;
    document.getElementById('booking-msg').innerText = msg;
  
    this.reset();
    
  });
  