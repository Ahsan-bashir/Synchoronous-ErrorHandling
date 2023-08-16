const { ageError } = require("./ageException");

const ageValidator=(age)=>{
    try {
        if(age<0){
        throw new ageError("Age cannot be negative !!!");
    }
    if(age>=0 && age<=18){
        throw new ageError("Not Eligible for vote !");
    }
    console.log('Age is Valid');
    } catch (error) {
        // console.log(error.message);
        console.log(error.stack);
        // console.log(error.name);
    }
    finally{
        console.log("Age is Validated !!!!!");
    }
}

ageValidator(13)


