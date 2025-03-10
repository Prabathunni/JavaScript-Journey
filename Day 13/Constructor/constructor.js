class Student{
  
  // instance initialization - constructor() - Default method(no need to create function)
  // first execute this method then user defined methods execute

  constructor(rollno,name,grade,total){
    this.rollno=rollno,
    this.sname=name,
    this.grade=grade,
    this.total=total
  }
  printDetails(){
    console.log(this.rollno,this.sname,this.grade,this.total);

  }

}

// object creation
std1 =new Student(1,'Abi',4,50); //after object creation constructor invokes automatically

// print the object details
std1.printDetails();



console.log('-----------------------------------------------next question');


class Bank{

  createAcc(acno,name,balance,phno){
    this.acno=acno,
    this.name=name,
    this.balance=balance,
    this.phno=phno
  }

  depositAmount(amount){
    this.balance=this.balance+amount
    console.log('Balence : ',this.balance);
    console.log('---------------------------------------------------');

  }

  withdrawAmount(amount){
    if(amount>this.balance){
      console.log('Transaction Failed');
      console.log('Amount Exceeded than Balence');
      console.log('---------------------------------------------------');

    }
    else{
      this.balance=this.balance-amount
      console.log("The balence after withdrawal : ",this.balance);
      console.log('---------------------------------------------------');
      
    }
  }

  balanceEnquiry(){
    console.log(this.balance);
    
  }

}

// object 1 creation
person1 =new Bank();

// objects function calling one by one
person1.createAcc(100,'Aromal',5000,9087654321);
person1.withdrawAmount(2000);
person1.depositAmount(1000);
person1.withdrawAmount(6000);
person1.balanceEnquiry();