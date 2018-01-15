function whoAmI(name = "Mo", age = 24) {
    const yearOfBirth = 2018 - age; 
    console.log(`Hi, my name is ${name} and I'm ${age} years old.`);
    console.log(`I was born in ${yearOfBirth}.`);
}

whoAmI('Zhou', 25);