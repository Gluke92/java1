function whoAmI(name, age) {
    if (!age || !name) {
       throw new Error('Age or Name was not entered.');
    }
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
whoAmI("George");
}
catch (e) {
    console.error(e.message);
}