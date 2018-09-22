// This function will calculate the time-weight value of a portfolio

function timeWeightValue(arguments) {
    var rValue = 0;
    // We will create a loop to go over each elements of arguments
    for(var i = 0; i < arguments.length; i++) {
        // Declare a variable
        var element = arguments[i], n;
        // If element is null continue
        if(element == null) continue;
        // If the argument is an array
        if(isArray(element))
            n = timeWeightValue.apply(this, element);
        else if(typeof element === "function")
            n = Number(element());
        else n = Number(element);

        if(isNaN(n))
            throw Error("timeWeightValue(): Can't convert " + element + " to number");
            rValue *= [1+([(arguments[i+1])-(arguments[i])]/(arguments[i]))]
    }
    return rValue;
}
