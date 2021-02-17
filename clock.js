function displayDate() {
  const display = document.getElementById('time');
  const currentDate = new Date();
  const hour = addLeadingZero(currentDate.getHours());
  const minutes = addLeadingZero(currentDate.getMinutes());
  const seconds = addLeadingZero(currentDate.getSeconds());
  display.innerHTML = hour + ':' + minutes + ':' + seconds;
}
function addLeadingZero(n) {
  return (n < 10 ? '0' : '') + n;
}

displayDate();
setInterval(displayDate, 1000);
