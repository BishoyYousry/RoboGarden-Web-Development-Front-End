function calculateGPA(arr) {
    // Define the mapping of alphabetic grades to numeric grades
    const gradeMapping = {
        'A': 100,
        'B': 80,
        'C': 70
    };

    // Initialize the sum of numeric grades
    let sum = 0;

    // Loop through the array and sum the numeric values of the grades
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'A') {
            sum += gradeMapping['A'];
        } else if (arr[i] === 'B') {
            sum += gradeMapping['B'];
        } else if (arr[i] === 'C') {
            sum += gradeMapping['C'];
        } else {
            console.log('Invalid grade found: ' + arr[i]);
        }
    }

    // Calculate the average numeric GPA
    let average = sum / arr.length;

    // Convert the average numeric GPA to an alphabetized GPA value
    let alphabeticAverage;
    if (average >= 90) {
        alphabeticAverage = 'A';
    } else if (average >= 75) {
        alphabeticAverage = 'B';
    } else {
        alphabeticAverage = 'C';
    }

    // Display the alphabetized GPA to the student
    document.write(`Your GPA is: ${alphabeticAverage}`);
}

// Example usage
calculateGPA(['A', 'B', 'C']);
