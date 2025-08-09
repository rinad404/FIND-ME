// Handle form submission and redirect to map page with location
document.getElementById('reportForm').addEventListener('submit', function(e) {
  e.preventDefault();

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      // Store coordinates for use in map.html
      localStorage.setItem('lat', lat);
      localStorage.setItem('lon', lon);

      // Redirect to confirmation/map page
      window.location.href = 'map.html';
    },
    () => {
      alert('Unable to retrieve your location. Please allow location access.');
    }
  );
});

// Optional: Alert nearby users (in the same page)
function notifyNearbyUsers() {
  document.getElementById("notification").textContent =
    "Alert sent to users nearby! Someone might be missing close to your location.";
}
