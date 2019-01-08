const salaryOperations = {
  basicSalary: 0,
  takeSalary(bs) {
    this.basicSalary = parseInt(bs);
    console.log("Basic Salary", this.basicSalary);
  },
  hra() {
    return this.basicSalary * 0.3;
  },
  da() {
    return this.basicSalary * 0.2;
  },
  ta() {
    return this.basicSalary * 0.1;
  },
  pf() {
    return this.basicSalary * 0.05;
  },
  gs() {
    return this.basicSalary + this.hra() + this.da() + this.ta() - this.pf();
  },
  tax() {
    let tax = parseFloat(this.basicSalary);
    // return this.basicSalary * 0.1;
    if (this.basicSalary <= 100000) {
      return tax * 0.0;
    } else {
      return tax * 0.1;
    }
  }
};
