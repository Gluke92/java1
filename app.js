function whoAmI(name, age) {
    if (!age || !name) {
       throw new Error('Age or Name was not entered.');
    }
    if(typeof age !== typeof Number){
        throw new Error("age is not a number")
    }
    if(typeof name !== typeof String){
        throw new Error("name is not a string")
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
whoAmI("George","29");
}
catch (e) {
    console.error(e.message);
}