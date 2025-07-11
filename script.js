function markAttendance() {
  const date = new Date().toLocaleString();
  document.getElementById('message').innerText = 'Attendance marked at: ' + date;
}
