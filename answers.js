async function fetchData() {
    try {
        let response = await fetch('https://msu-webdev.github.io/api/start.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        let data = await response.text();
        
        console.log(data);

        // in kilometers
        let distance = 384400; 
        let moonDiameter = 3475;

        // calculate number of moons 
        let moonNum = distance / moonDiameter;
        // floor it to remove fractional moon
        moonNum = Math.floor(moonNum);
        // display number of moons
        console.log("You can fit the following number of moons between Earth and Moon: ", moonNum);

        response = await fetch(`https://msu-webdev.github.io/api/${moonNum}.json`);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        data = await response.text();
        console.log(data);

        let fall2023Enrollment = 51316;
        let fall2024Enrollment = 52089;

        let percentChange = ((fall2024Enrollment - fall2023Enrollment) / fall2023Enrollment) * 100;
        percentChange = percentChange.toFixed(1);

        console.log("Total percent change in enrollment is: ", percentChange);

        // Using percentChange * 10 because 1.5.json doesn't lead anywhere
        // So, I found the 3rd riddle using the GitHub repo at https://github.com/msu-webdev/api/blob/main/15.json
        response = await fetch(`https://msu-webdev.github.io/api/${percentChange*10}.json`);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        data = await response.text();
        console.log(data);

        let nintendoBits = 8;
        let superNintendoBits = 16;

        let product = nintendoBits * superNintendoBits;
        console.log("The product of the bits is: ", product)

        response = await fetch(`https://msu-webdev.github.io/api/${product}.json`);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        data = await response.text();
        console.log(data);

    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

fetchData();
