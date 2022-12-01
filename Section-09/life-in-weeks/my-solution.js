function dateOfDeath (age) {
    const maxYearsInLife = 90;

    const date = new Date();
    const dateYear = date.getFullYear()

    const dob = dateYear - age;

    const yearsToLife = maxYearsInLife - age
    const monthsToLife = yearsToLife * 12;
    const weeksToLife = yearsToLife * 52;
    const daysToLife = yearsToLife * 365;

    console.log(`Your Birth Year: ${dob}`)
    console.log(`Years to life until ${maxYearsInLife}: ${yearsToLife}`)
    console.log(`Months to life until ${maxYearsInLife}: ${monthsToLife}`)
    console.log(`Weeks to life until ${maxYearsInLife}: ${weeksToLife}`)
    console.log(`Days to life until ${maxYearsInLife}: ${daysToLife}`)

    console.log(`You have ${daysToLife} days, ${weeksToLife} weeks, ${monthsToLife} months, and ${yearsToLife} years to live until you're 90 years old`)
}

dateOfDeath(12);