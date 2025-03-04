class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateUsername(username) {
    if (username.length < 10) {
        throw new ValidationError("Username must be at least 10 characters long.");
    }
    return "Username is Valid";
}

try {
    console.log(validateUsername("abc"));
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
} finally {
    console.log("All done");
}

try{
    console.log(validateUsername("ThisIsLongEnough"));
}catch(error){
    console.error(`${error.name}: ${error.message}`);
}finally{
    console.log("All done");
}