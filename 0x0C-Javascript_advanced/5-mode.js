function changeMode(size, weight, transform, background, color) {
 return function(){
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
 }
}

function main() {
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    const pp = document.createElement("p");
    pp.textContent = "Welcome Holberton!";
    document.body.append(pp);
    

    const spookyButton = document.createAttribute("Button");
    spookyButton.textContent = "Spooky";
    document.body.append(spookyButton);


    const darkButton = document.createAttribute("Button");
    darkButton.textContent = "Dark mode";
    document.body.append(darkButton);

    const screamButton = document.createAttribute("Button");
    screamButton.textContent = "Screame mode";
    document.body.append(screamButton);

  
    spookyButton.addEventListener("click", spooky);
    darkButton.addEventListener("click", darkMode);
    screamButton.addEventListener("click", screamMode);
}

main();