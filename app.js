function whoAmI(name = "Mo", age = 24) {
    const yob = yearOfBirth(age);
    console.log(`Hi, my name is ${name} and I'm ${age} years old.`);
    console.log(`I was born in ${yob}.`);
}


function yearOfBirth(age)
{
    if (age < 0)
    {
        throw new Error ("Age can not be negative");
    }
    return 2018 - age;
}
try {
whoAmI('Zhou', -25);
}
catch (e) {
    console.error(e.message);
}