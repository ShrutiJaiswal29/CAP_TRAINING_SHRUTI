var Calculator = /** @class */ (function () {
    function Calculator() {
        this.display = document.getElementById("display");
        this.addEventListeners();
    }
    Calculator.prototype.addEventListeners = function () {
        var _this = this;
        var buttons = document.querySelectorAll("button");
        buttons.forEach(function (button) {
            button.addEventListener("click", function () {
                var value = button.textContent;
                if (value === "C") {
                    _this.clear();
                }
                else if (value === "=") {
                    _this.calculate();
                }
                else {
                    _this.append(value);
                }
            });
        });
    };
    Calculator.prototype.append = function (value) {
        this.display.value += value;
    };
    Calculator.prototype.clear = function () {
        this.display.value = "";
    };
    Calculator.prototype.calculate = function () {
        try {
            this.display.value = eval(this.display.value);
        }
        catch (_a) {
            this.display.value = "Error";
        }
    };
    return Calculator;
}());
new Calculator();
