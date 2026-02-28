const display = document.getElementById("display") as HTMLInputElement;
const buttons = document.querySelectorAll("button");

buttons.forEach((button: HTMLButtonElement) => {
    button.addEventListener("click", () => {
        const value: string = button.textContent || "";

        if (value === "C") {
            display.value = "";
        } 
        else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } 
        else {
            display.value += value;
        }
    });
});0