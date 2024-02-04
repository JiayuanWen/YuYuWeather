// Function by David & dtasev, source: https://stackoverflow.com/a/11508164
// Function by Alex Ball & Ed The "Pro", source: https://stackoverflow.com/a/11868159
export function brightnessCatagory(color_hex) {
    // Parse hex code to rgb values
    var bigint = parseInt(color_hex.substring(1), 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    // Use rgb values to determine whether the color is bright or dark.
    // Ex. Red and Blue is consider dark, Yellow and Green is consider bright.
    const brightness = Math.round(((parseInt(r) * 299) +
                      (parseInt(g) * 587) +
                      (parseInt(b) * 114)) / 1000);
    const catagory = (brightness > 125) ? 'bright' : 'dark';

    // Return color catagory
    return catagory;
}