const convertButton = document.getElementById("convert-btn");
const inputNumber = document.getElementById("number");
const output = document.getElementById("output");

function convertToRoman(num) {
    const romanNumerals = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" }
    ];

    let result = "";
    for (let { value, numeral } of romanNumerals) {
        while (num >= value) {
            result += numeral;
            num -= value;
        }
    }
    return result;
}

convertButton.addEventListener("click", () => {
    const num = parseInt(inputNumber.value);

    if (!inputNumber.value || isNaN(num)) {
        output.textContent = "Please enter a valid number";
    } else if (num < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
    } else if (num > 3999) {
        output.textContent = "Please enter a number less than or equal to 3999";
    } else {
        output.textContent = convertToRoman(num);
    }

    if (!inputNumber.value || isNaN(num) || num < 1 || num > 3999) {
        output.style.border = "2px solid red";
        output.style.backgroundColor = "rgba(255, 99, 71, 0.6)";
        output.style.color = "black";
    } else {
        output.style.border = "2px solid white";
        output.style.backgroundColor = "rgb(50, 20, 100)";
        output.style.color = "white";
    }

    output.style.padding = "10px";
    output.style.textAlign = "center";
});