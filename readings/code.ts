document.querySelector("#check")!.addEventListener("click", check);

function check() {
   const day = document.querySelector<HTMLInputElement>("#day")!.value.to;

    if (day === "tuesday" || day === "thursday") {
        console.log("YOU HAVE CLASS");
    } else if (day === "saturday" || day === "sunday") {
        console.log("Its The Weekend");
    } else {
        console.log("BORING");
    }
}