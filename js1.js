
function toggleTheme(){
  document.body.classList.toggle("light-theme");
}

function selectTicket(el) {
  document.querySelectorAll('.ticket-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  el.querySelector('.ticket-radio').checked = true;
}

function handleBooking() {
  const name = document.getElementById('inputName').value.trim();
  if (!name) {
    alert('Please fill in your name to continue.');
    return;
  }
  alert('Booking confirmed! We\'ll send your tickets to your email shortly. 🏁');
}

const raceDate = new Date("Mar 28, 2026 6:00:00").getTime();
const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = raceDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("raceTimer").innerHTML =days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}, 1000);
