// debounce -> do something only if user is idle for some time interval.

let timeoutId;
function debounceCalculateSum() {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(function () {
    calculateSum();
  }, 100);
}

function calculateSum() {
  fetch("api call to cal sum");
  // and render on screen
}

// call debounceCalculateSum() in the logic.
