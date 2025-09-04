let colorInput = document.getElementById("favcolor");
let schemeInput = document.getElementById("scheme");
let submitBtn = document.getElementById("submit-btn");
let colorBoxes = document.getElementById("color-boxes");
let colorValues = document.querySelector(".color-number-container")

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let color = colorInput.value.slice(1);
    let scheme = schemeInput.value;
    let url = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}&count=5&format=json`

    fetch(url, { method: "GET" })
        .then(response => response.json())
        .then(data => {
            colorBoxes.innerHTML = ""
            colorValues.innerHTML = ""

            data.colors.forEach((colorObj, index ) => {
                let colorBox = document.createElement("div")
                colorBox.id = "color-" + (index + 1)
                colorBox.className = "color-container"
                colorBox.style.backgroundColor = colorObj.hex.value
                colorBoxes.appendChild(colorBox)

                let colorValue = document.createElement("span")
                colorValue.className="color-values"
                colorValue.id = "color-value-" + (index + 1)
                colorValue.textContent = colorObj.hex.value
                colorValues.appendChild(colorValue)
            })
        })
})

{/* <div id="color-2" class="color-container"></div>
            <div id="color-3" class="color-container"></div>
            <div id="color-4" class="color-container"></div>
            <div id="color-5" class="color-container"></div> */}


{/* <span class="color-values" id="color-value-1"></span>
        <span class="color-values" id="color-value-2"></span>
        <span class="color-values" id="color-value-3"></span>
        <span class="color-values" id="color-value-4"></span>
        <span class="color-values" id="color-value-5"></span>*/}
