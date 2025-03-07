class Employee{

  // instance initialization
  setEmployee(id,name,designation,salary){ //function
    this.empid=id,
    this.empname=name,
    this.empdesignation=designation,
    this.empsalary=salary
    console.log('Employee details Created');
  }
  printEmployee(){
    console.log(this.empid,this.empname,this.empdesignation,this.empsalary);
    
  }

}

// object Creation

// object_name =new class_name()

emp = new Employee();

// object1
emp.setEmployee(1000,'Manod',"Developer",5000);
emp.printEmployee();
console.log("-----------------------------------------");

// object2
emp.setEmployee(1001,'Rejoice','Developer',20000)
emp.printEmployee();




console.log("-----------------------------------------new class creation");

// student class creation
// student rollno,sname,mark,grade

class Student{

  // instance initialization
  setStudent(rollno,sname,mark,grade){
    this.stdrollno=rollno,
    this.stdsname=sname,
    this.stdmark=mark,
    this.stdgrade=grade
    console.log(this.stdrollno,this.stdsname,this.stdmark,this.stdgrade);
  }
}

std =new Student();
std.setStudent(11,'Firoz',200,'A');