function generateShades({ hue, saturation, lightness }, colorName) {
  // Define the lightness differences
  const lightnessDifferences = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  // Generate shades
  let diff = 0;
  const shades = lightnessDifferences.map(() => {
    diff = diff + 5;
    return `hsl(${hue}, ${saturation}%, ${lightness + diff}%)`;
  });

  // Create an object with color name as key and shades as value
  const colorShades = {
    ["--clr-" + colorName + "-100"]: shades[0],
    ["--clr-" + colorName + "-200"]: shades[1],
    ["--clr-" + colorName + "-300"]: shades[2],
    ["--clr-" + colorName + "-400"]: shades[3],
    ["--clr-" + colorName + "-500"]: shades[4],
    ["--clr-" + colorName + "-600"]: shades[5],
    ["--clr-" + colorName + "-700"]: shades[6],
    ["--clr-" + colorName + "-800"]: shades[7],
    ["--clr-" + colorName + "-900"]: shades[8],
  };

  return colorShades;
}

// Example usage
// const baseColor = "hsl(210, 50%, 9%)"; // Example base color (blue)
// const colorName = "blue"; // Example color name

const generatedShades = generateShades(
  { hue: 210, saturation: 50, lightness: 9 },
  "blue"
);
console.log(generatedShades);
