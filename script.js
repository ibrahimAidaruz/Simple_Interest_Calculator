var rangeslider = document.getElementById("rate");
const prncpl = document.querySelector("p .principal");
const intrst = document.querySelector("p .interest");
const total_amount = document.querySelector("p .amount");
const form = document.querySelector("form");
let amount;

function compute() {
  principal = document.getElementById("principal").value;
  interest = rangeslider.value;
  no_of_years = document.getElementById("years").value;

  if (principal == "" || no_of_years == "") {
    alert("Please enter number");
  } else if (parseInt(principal) < 0 || parseInt(no_of_years) < 0) {
    alert("alert Positive Number");
  } else {
    prncpl.innerHTML = principal;
    intrst.innerHTML = interest;

    amount =
      ((parseInt(principal) * parseFloat(interest)) / 100) *
      parseInt(no_of_years);

    total_amount.innerHTML = amount;
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
