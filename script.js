

let equalTo = document.querySelector(".equal-to")
let input = document.querySelector(".display")

equalTo.addEventListener("click", () => {
    input.value = eval(input.value)

})




