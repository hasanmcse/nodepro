function main(input) {

    let radius = input.split(' ');
    const area = Math.PI * radius * radius;
    return area;


    // Display the result
    console.log(`The area of the circle is ${area.toFixed(2)}`);
}

// Call the main function
main();