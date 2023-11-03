//3. Write a “person” class to hold all the details.

class Person {
    constructor(firstName, lastName, age, department, email, mobile, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.department=department;
        this.email=email;
        this.mobile=mobile;
        this.city = city;
    }
    getPersonDetails(){
        return `Name: ${this.firstName} ${this.lastName}
        age: ${this.age}
        department: ${this.department}
        email: ${this.email}
        mobile: ${this.mobile}
        city: ${this.city}`;
    }
}
let person1 = new Person("Preslin", "Bakthar",23, "BE", "preslin@gmail.com", 9003363692, "pollachi");
let person2 = new Person("Priyanka","Kanaga", 19, "gstofficer", "priyanka123@gmail.com", 9865751959, "madathukulam");

console.log(person1.getPersonDetails());
console.log(person2.getPersonDetails());
