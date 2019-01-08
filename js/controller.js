window.addEventListener("load", bindEvents);

function bindEvents() {
  document.querySelector("#compute").addEventListener("click", doCompute);
}

function doCompute() {
  var bs = document.querySelector("#basicsalary").value;
  salaryOperations.takeSalary(bs);
  print();
}

function createTag(key, val) {
  var div = document.querySelector("#result");
  var p = document.createElement("p");
  p.innerText = key + " " + val;
  div.appendChild(p);
}

function print() {
  for (let key in salaryOperations) {
    if (key === "basicSalary" || key === "takeSalary") {
      continue;
    }
    if (typeof salaryOperations[key] === "function") {
      let val = salaryOperations[key]();
      createTag(key, val);
    }
  }
}
