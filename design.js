const inputs = document.querySelectorAll('.controls input');
const frame = document.getElementById("frame");
function handleInput(){
const suffix = this.dataset.sizing || "";
    // console.log(suffix);
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix)
}

inputs.forEach(input => input.addEventListener('change',handleInput));
// inputs.forEach(input => input.addEventListener("mousemove", handleInput));
frame.addEventListener("change",design);
function design()
{
    document.documentElement.style.setProperty(`--${this.name}`,this.value)


}