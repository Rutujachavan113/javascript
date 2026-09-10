class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log("loggen in");
        
    }
}
class Teacher extends User{
    
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log("course added");
        
    }
}

const value=new Teacher("rutuja","abc@gmail.com",123);

value.addCourse();
value.logMe();

const val2=new User("rutu")
val2.logMe();
// val2.addCourse(); //cannot call child class member