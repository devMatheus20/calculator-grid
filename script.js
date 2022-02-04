function insertValue(num) {
   const input = document.getElementById("input-value").innerHTML
   document.getElementById("input-value").innerHTML = input + num
}

function calculate() {
    const input = document.getElementById("input-value").innerHTML
    document.getElementById("input-value").innerHTML = eval(input)
}

function clearInput() {
    document.getElementById("input-value").innerHTML = ""
}

function invertValue() {
    const input = document.getElementById("input-value").innerHTML
    document.getElementById("input-value").innerHTML = input * -1
}



