var rangeslider = document.getElementById("rate");
// const prncpl = document.querySelector("p .principal");
// const intrst = document.querySelector("p .interest");
// const total_amount = document.querySelector("p .amount");
const form = document.querySelector("form");
const p = document.createElement("p");
const section = document.querySelector(".section");
let amount;

//errors

const principal_error = document.querySelector(".principal_error");
const years_error = document.querySelector(".years_error");

function error_display(element, message) {
  setTimeout(() => {
    element.textContent = message;
    element.classList.add("showError");
    setTimeout(() => {
      element.textContent = "";
      element.classList.remove("showError");
    }, 2000);
  }, 100);
}
function compute() {
  principal = document.getElementById("principal").value;
  interest = rangeslider.value;
  no_of_years = document.getElementById("years").value;

  if (principal == "") {
    error_display(principal_error, "Please Enter a Number");
  } else if (no_of_years == "") {
    error_display(years_error, "Please Enter a Number");
  } else if (parseInt(principal) <= 0) {
    error_display(principal_error, "Please Enter Positive Number");
  } else if (parseInt(no_of_years) <= 0) {
    error_display(years_error, "Please Enter Positive Number");
  } else {
    // prncpl.innerHTML = principal;
    // intrst.innerHTML = interest;

    amount =
      parseInt(principal) *
      (parseFloat(interest) / 100) *
      parseInt(no_of_years);

    // total_amount.innerHTML = amount;

    p.innerHTML = `

          If You deposit: <span class="principal">$${parseInt(
            principal
          )}</span><br />
          at interset rate Of: <span class="interest">$${
            parseFloat(interest) / 100
          }</span><br />
          You will recieve an amout of: <span class="amount">$${Math.round(
            amount
          )}</span><br />
        
    `;
    section.appendChild(p);

    console.log(section);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  compute();
});

var output = document.querySelector(".output");
output.innerHTML = rangeslider.value + "%";

console.log(rangeslider.value);
rangeslider.oninput = function () {
  output.innerHTML = this.value + "%";
};
