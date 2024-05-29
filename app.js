// Importing inquirer and chalk 
import inquirer from "inquirer";
import chalk from "chalk";
// Creating an array named availableCourses 
let availableCourses = ["Fundamentals of Programming", "Python Basics", "Essentials of Web Development", "CyberSecurity", "Project Management", "Introduction to Web Development", "AI Essentials"];
// Creating a class named Student 
class Student {
    static counter = 10000;
    id;
    name;
    courses;
    balance;
    constructor(Name) {
        this.id = Student.counter++;
        this.name = Name;
        this.courses = []; // Initialize an empty array for courses
        this.balance = 100;
    }
    // Method to enroll a student in a course
    enroll_course(Course) {
        this.courses.push(Course);
    }
    view_balance() {
        console.log(chalk.blueBright(`The current balance of ${this.name} is $${this.balance}`));
    }
    pay_tuition_fee(fee) {
        this.balance -= fee;
        console.log(chalk.greenBright(`Fees paid successfully. The new balance is $${this.balance}`));
    }
    student_status() {
        console.log(chalk.yellowBright(`\nStudent Name: ${this.name}`));
        console.log(chalk.yellowBright(`\nStudent ID: ${this.id}`));
        console.log(chalk.yellowBright(`\nCourses Enrolled: ${this.courses.join(", ")}`));
        console.log(chalk.yellowBright(`\nStudent Balance: $${this.balance}`));
    }
}
// Creating another class to manage students
class StudentManager {
    students;
    constructor() {
        this.students = [];
    }
    // Method to add a new student
    add_student(name) {
        let student = new Student(name);
        this.students.push(student);
        console.log(chalk.greenBright(`${student.name} added successfully. Their Student ID is ${student.id}`));
    }
    // Method to enroll a student in a course
    enroll_student(student_id, course) {
        let student = this.students.find(std => std.id === student_id);
        if (student) {
            student.enroll_course(course);
            console.log(chalk.greenBright(`${student.name} successfully enrolled in ${course}`));
        }
        else {
            console.log(chalk.redBright(`No student found with ID ${student_id}`));
        }
    }
    //Method to view student balance
    view_student_balance(student_id) {
        let student = this.students.find(std => std.id === student_id);
        if (student) {
            student.view_balance();
        }
        else {
            console.log(chalk.redBright(`No student found with ID ${student_id}`));
        }
    }
    //method to pay student fees
    pay_student_fees(student_id, fee) {
        let student = this.students.find(std => std.id === student_id);
        if (student) {
            student.pay_tuition_fee(fee);
        }
        else {
            console.log(chalk.redBright(`No student found with ID ${student_id}`));
        }
    }
    //method to display student status
    display_student_status(student_id) {
        let student = this.students.find(std => std.id === student_id);
        if (student) {
            student.student_status();
        }
    }
}
//Main function to Run the Program
async function main() {
    // Printing a welcome message
    console.log(chalk.magentaBright.bold("\n \t \t Welcome to Haya Sikander's - Student Management System"));
    console.log("-".repeat(80));
    let student_manager = new StudentManager();
    //while loop to keep program running
    //creating a variable to use in while loop
    let keeprunning = true;
    while (keeprunning) {
        //printing menu options
        let menu = await inquirer.prompt([{
                name: "choice",
                type: "list",
                message: "What would you like to do?",
                choices: ["Add a Student", "Courses", "View Balance", "Pay Tuition Fees", "View Student Status", "Exit"]
            }]);
        console.log("-".repeat(80));
        //Using switch case instead of if-else statement for user-choice
        switch (menu.choice) {
            case "Add a Student":
                let add_student = await inquirer.prompt([{
                        name: "student_name",
                        type: "string",
                        message: chalk.blueBright("Enter the name of the student")
                    }]);
                console.log("-".repeat(80));
                student_manager.add_student(add_student.student_name);
                break;
            case "Courses":
                console.log("-".repeat(80));
                let Coursechoices = await inquirer.prompt([{
                        name: "Course_choices",
                        type: "list",
                        message: "What would you like to do?",
                        choices: ["Enroll Student in a Course", "View available Courses"]
                    }]);
                if (Coursechoices.Course_choices == "Enroll Student in a Course") {
                    console.log("-".repeat(80));
                    let enroll_student = await inquirer.prompt([{
                            name: "stID",
                            type: "number",
                            message: chalk.blueBright("Enter the Student ID of the Student you want to Enroll")
                        },
                        {
                            name: "Course",
                            type: "list",
                            message: chalk.blueBright("Choose the course you want to enroll the student in: "),
                            choices: ["Fundamentals of Programming", "Python Basics", "Essentials of Web Development", "CyberSecurity", "Project Management", "Introduction to Web Development", "AI Essentials"]
                        }]);
                    if (enroll_student.Course == "Fundamentals of Programming") {
                        console.log(chalk.yellowBright.bold("\t \t Fundamentals of *rogramming"));
                        console.log("-".repeat(80));
                        console.log(chalk.cyanBright("About The Course"));
                        console.log("Info about the course....................You can as much detail about the course as u want");
                        let course_fee = 20;
                        console.log(chalk.cyanBright(`Course Fee:  ${course_fee}$`));
                        let confirmEnrollment = await inquirer.prompt([{
                                name: "EnrollmentConfirmation",
                                type: "list",
                                message: "Would you like to cancel or confirm your enrollment",
                                choices: ["Confirm Enrollment", "Cancel Enrollment"]
                            }]);
                        if (confirmEnrollment.EnrollmentConfirmation == "Confirm Enrollment") {
                            student_manager.enroll_student(enroll_student.stID, enroll_student.Course);
                            student_manager.pay_student_fees(enroll_student.stID, course_fee);
                        }
                        else {
                            console.log(chalk.redBright("Enrollment Cancelled"));
                        }
                    }
                    else if (enroll_student.Course == "Python Basics") {
                        console.log(chalk.yellowBright.bold("\t \t Python Basics"));
                        console.log("-".repeat(80));
                        console.log(chalk.cyanBright("About The Course"));
                        console.log("Info about the course....................You can as much detail about the course as u want");
                        let course_fee = 15;
                        console.log(chalk.cyanBright(`Course Fee:  ${course_fee}$`));
                        let confirmEnrollment = await inquirer.prompt([{
                                name: "EnrollmentConfirmation",
                                type: "list",
                                message: "Would you like to cancel or confirm your enrollment",
                                choices: ["Confirm Enrollment", "Cancel Enrollment"]
                            }]);
                        if (confirmEnrollment.EnrollmentConfirmation == "Confirm Enrollment") {
                            student_manager.enroll_student(enroll_student.stID, enroll_student.Course);
                            student_manager.pay_student_fees(enroll_student.stID, course_fee);
                        }
                        else {
                            console.log(chalk.redBright("Enrollment Cancelled"));
                        }
                    }
                    else if (enroll_student.Course == "Essentials of Web Development") {
                        console.log(chalk.yellowBright.bold("\t \t Essentials of Web Development"));
                        console.log("-".repeat(80));
                        console.log(chalk.cyanBright("About The Course"));
                        console.log("Info about the course....................You can as much detail about the course as u want");
                        let course_fee = 0;
                        console.log(chalk.cyanBright(`Course Fee:  ${course_fee}$`));
                        let confirmEnrollment = await inquirer.prompt([{
                                name: "EnrollmentConfirmation",
                                type: "list",
                                message: "Would you like to cancel or confirm your enrollment",
                                choices: ["Confirm Enrollment", "Cancel Enrollment"]
                            }]);
                        if (confirmEnrollment.EnrollmentConfirmation == "Confirm Enrollment") {
                            student_manager.enroll_student(enroll_student.stID, enroll_student.Course);
                            student_manager.pay_student_fees(enroll_student.stID, course_fee);
                        }
                        else {
                            console.log(chalk.redBright("Enrollment Cancelled"));
                        }
                    }
                    else if (enroll_student.Course == "CyberSecurity") {
                        console.log(chalk.yellowBright.bold("\t \t CyberSecurity"));
                        console.log("-".repeat(80));
                        console.log(chalk.cyanBright("About The Course"));
                        console.log("Info about the course....................You can as much detail about the course as u want");
                        let course_fee = 15;
                        console.log(chalk.cyanBright(`Course Fee:  ${course_fee}$`));
                        let confirmEnrollment = await inquirer.prompt([{
                                name: "EnrollmentConfirmation",
                                type: "list",
                                message: "Would you like to cancel or confirm your enrollment",
                                choices: ["Confirm Enrollment", "Cancel Enrollment"]
                            }]);
                        if (confirmEnrollment.EnrollmentConfirmation == "Confirm Enrollment") {
                            student_manager.enroll_student(enroll_student.stID, enroll_student.Course);
                            student_manager.pay_student_fees(enroll_student.stID, course_fee);
                        }
                        else {
                            console.log(chalk.redBright("Enrollment Cancelled"));
                        }
                    }
                    else if (enroll_student.Course == "Project Management") {
                        console.log(chalk.yellowBright.bold("\t \t Project Management"));
                        console.log("-".repeat(80));
                        console.log(chalk.cyanBright("About The Course"));
                        console.log("Info about the course....................You can as much detail about the course as u want");
                        let course_fee = 10;
                        console.log(chalk.cyanBright(`Course Fee:  ${course_fee}$`));
                        let confirmEnrollment = await inquirer.prompt([{
                                name: "EnrollmentConfirmation",
                                type: "list",
                                message: "Would you like to cancel or confirm your enrollment",
                                choices: ["Confirm Enrollment", "Cancel Enrollment"]
                            }]);
                        if (confirmEnrollment.EnrollmentConfirmation == "Confirm Enrollment") {
                            student_manager.enroll_student(enroll_student.stID, enroll_student.Course);
                            student_manager.pay_student_fees(enroll_student.stID, course_fee);
                        }
                        else {
                            console.log(chalk.redBright("Enrollment Cancelled"));
                        }
                    }
                    else if (enroll_student.Course == "Introduction to Web Development") {
                        console.log(chalk.yellowBright.bold("\t \t Introduction to Web Development"));
                        console.log("-".repeat(80));
                        console.log(chalk.cyanBright("About The Course"));
                        console.log("Info about the course....................You can as much detail about the course as u want");
                        let course_fee = 10;
                        console.log(chalk.cyanBright(`Course Fee:  ${course_fee}$`));
                        let confirmEnrollment = await inquirer.prompt([{
                                name: "EnrollmentConfirmation",
                                type: "list",
                                message: "Would you like to cancel or confirm your enrollment",
                                choices: ["Confirm Enrollment", "Cancel Enrollment"]
                            }]);
                        if (confirmEnrollment.EnrollmentConfirmation == "Confirm Enrollment") {
                            student_manager.enroll_student(enroll_student.stID, enroll_student.Course);
                            student_manager.pay_student_fees(enroll_student.stID, course_fee);
                        }
                        else {
                            console.log(chalk.redBright("Enrollment Cancelled"));
                        }
                    }
                    else {
                        console.log(chalk.yellowBright.bold("\t \t AI Essentials"));
                        console.log("-".repeat(80));
                        console.log(chalk.cyanBright("About The Course"));
                        console.log("Info about the course....................You can as much detail about the course as u want");
                        let course_fee = 0;
                        console.log(chalk.cyanBright(`Course Fee:  ${course_fee}$`));
                        let confirmEnrollment = await inquirer.prompt([{
                                name: "EnrollmentConfirmation",
                                type: "list",
                                message: "Would you like to cancel or confirm your enrollment",
                                choices: ["Confirm Enrollment", "Cancel Enrollment"]
                            }]);
                        if (confirmEnrollment.EnrollmentConfirmation == "Confirm Enrollment") {
                            student_manager.enroll_student(enroll_student.stID, enroll_student.Course);
                            student_manager.pay_student_fees(enroll_student.stID, course_fee);
                        }
                        else {
                            console.log(chalk.redBright("Enrollment Cancelled"));
                        }
                    }
                }
                else {
                    console.log(chalk.yellowBright.bold("Availabe Courses"));
                    console.log("Fundamentals of Programming           20$\n Python Basics                      15$\n Essentials of Web Development        Free\n CyberSecurity                      15$\n Project Management                   10$\n Introduction to Web Development      10$\n AI Essentials                       Free");
                }
                break;
            case "View Balance":
                let view_balance = await inquirer.prompt([{
                        name: "student_id",
                        type: "number",
                        message: chalk.blueBright("Enter the Student ID of the Student")
                    }]);
                console.log("-".repeat(80));
                student_manager.view_student_balance(view_balance.student_id);
                break;
            case "Pay Tuition Fees":
                let pay_fees = await inquirer.prompt([{
                        name: "stID",
                        type: "number",
                        message: "Enter the Student's ID for whom you want to pay"
                    },
                    {
                        name: "amount",
                        type: "number",
                        message: "Enter the amount you want to pay"
                    }]);
                student_manager.pay_student_fees(pay_fees.stID, pay_fees.amount);
                break;
            case "View Student Status":
                let stStatus = await inquirer.prompt([{
                        name: "stId",
                        type: "number",
                        message: "Enter the ID of the Student you want to view the Status of"
                    }]);
                student_manager.display_student_status(stStatus.stId);
                break;
            case "Exit":
                console.log(chalk.redBright("Exitting....."));
                console.log(chalk.redBright("Successfully Exited"));
                keeprunning = false;
        }
    }
}
main();
