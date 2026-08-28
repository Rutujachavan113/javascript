// =--> for assigning values
// == --> to comapre
// === -->copmare with its datatype

// if else

    const isLoggedIn=true;
    const debitCard=true;
    const loggedByGoogle=true;
    const loggedByGmail=true;

    if(isLoggedIn && debitCard){
        console.log("allow to shoping"); 
    }
    else if(loggedByGoogle || loggedByGmail){
        console.log("user loggedin");   
    }
    else{
        console.log("not allowed");
        
    }

    // switch
    const month=3;

    switch (month) {
        case 1:
            console.log("jan");
            break;
           case 2:
            console.log("feb");
            break; 
            case 3:
            console.log("march");
            break;
            case 4:
            console.log("April");
            break;
    
        default:
            console.log("default");
            
            break;
    }