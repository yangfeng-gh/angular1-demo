var app = angular.module("demo2", ["finance"]);

app.filter('number', function(precision) {
  return function(text) {
    return text.toFixed(precision);
  }
})

app.controller("InvoiceController", [
  "currencyConverter",
  function(currencyConverter) {
    this.qty = 1;
    this.cost = 2;
    this.inCurr = "EUR";
    this.currencies = currencyConverter.currencies;

    this.total = function total(outCurr) {
      return currencyConverter.convert(
        this.qty * this.cost,
        this.inCurr,
        outCurr
      );
    };
    this.pay = function pay() {
      window.alert("谢谢！");
    };
  }
]);
