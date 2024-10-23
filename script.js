const resultTable = document.querySelector(".resultTable");
const input = document.querySelector(".leftpart input");

setInterval(() => {
  const currentTimeInSeconds = document.querySelector("#timeInSeconds");
  const currentTime = document.querySelector("#currentTime");
  const myDate = Date.now();
  currentTimeInSeconds.innerHTML = Math.floor(myDate / 1000);
  currentTime.innerHTML = new Date().toLocaleTimeString();
}, 1000);

// // test
// const d = Math.floor(Date.now() / 1000);
// console.log(d.valueOf());

function convertBtn() {
  const inputVal = Number(input.value.trim());
  if (isNaN(inputVal)) {
    alert("Please enter a valid number!");
    return;
  }

  let timestamp;
  let format;
  if (inputVal >= 1e12) {
    timestamp = inputVal / 1e6; // Nanoseconds to milliseconds
    format = "Nanoseconds";
  } else if (inputVal >= 1e10) {
    timestamp = inputVal; // Already in milliseconds
    format = "Milliseconds";
  } else {
    timestamp = inputVal * 1000; // Seconds to milliseconds
    format = "Seconds";
  }

  const date = new Date(timestamp);
  const now = Date.now();
  const relativeTime = Math.floor(
    (now - timestamp) / (1000 * 60 * 60 * 24 * 365)
  );

  resultTable.style.display = "block";
  resultTable.innerHTML = `
     <div class="row1">
          <h2>Format</h2>
          <p>${format}</p>
      </div>
      <div class="row2">
          <h2>GMT</h2>
          <p>${date.toUTCString()}</p>
      </div>
      <div class="row3">
          <h2>Your Time Zone</h2>
          <p>${date}</p>
      </div>
      <div class="row4">
          <h2>Relative</h2>
          <p>${relativeTime}</p>
      </div>
    `;
}
