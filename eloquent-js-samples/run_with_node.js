// load dependencies
require("./code/load")("code/journal.js", "code/chapter/04_data.js");

for (let event of journalEvents(JOURNAL)) {
  let correlation = phi(tableFor(event, JOURNAL));
  if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ":", correlation);
  }
}
// → brushed teeth: -0.3805211953
// → work:          -0.1371988681
// → reading:        0.1106828054

let capitalize = "whoa";
capitalize.toLocaleLowerCase

document?.querySelector("#check").addEventListener("click", check);

console.log(typeof document.querySelector("#day"));

function check() {
   const day = document?.querySelector("#day").value.toLowerCase();

    if (day === "tuesday" || day === "thursday") {
        console.log("YOU HAVE CLASS");
    } else if (day === "saturday" || day === "sunday") {
        console.log("Its The Weekend");
    } else {
        console.log("BORING");
    }
}