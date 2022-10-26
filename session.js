// Get date of last activity on any pages
const lastActivity = localStorage.getItem("lastActivity");
// Check date of last activity on any pages
if (lastActivity) {
  const currentTime = new Date(); // Get current time
  const lastActivityDate = new Date(localStorage.getItem("lastActivity")); // Get time of last activity
  const diffTime = Math.abs(currentTime - lastActivityDate); // Check session in milliseconds
  const diffHours = Math.ceil(diffTime / (1000 * 60 * 60)); // Convert session to hours
  console.log("diffHours: ", diffHours); // Log
  if (diffHours > 12) { // Clear localStorage if last activity was more than 12 hours ago
    localStorage.clear(); // Clear localStorage
    window.location.reload(); // Reload page
  } else {
    // Update session with current time
    localStorage.setItem("lastActivity", currentTime);
  }
} else {
  // Set session for first load
  localStorage.setItem("lastActivity", new Date());
}
