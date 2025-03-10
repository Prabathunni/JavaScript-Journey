// db={
//   1000:{"acno":1000, "username":"Neer", "password":1000,"balance":5000,transaction:[]},
//   1001:{"acno":1001, "username":"Laisha", "password":1001,"balance":5000,transaction:[]},
//   1002:{"acno":1002, "username":"Vyom", "password":1002,"balance":3000,transaction:[]},
// }

// //1 create a function for validate account number. To validate account check
// //if account number in db return true otherwise return false

// function validateAccount(acno){
//   return acno in db ? true:false;
// }

// console.log(validateAccount(1000));

// //2 create a function for authenticate user using account number and password 
// //if both are in db then print 'access granted' otherwise print 'permission denied'
// //authenticated(acno,pswd)?access granted else permission denied

// function authenticateAccount(acno,passwd){

//   if(validateAccount(acno)){
//     actualPassword = db[acno].password; //Main password is extracted from the nested object and stored in a variable to check the password

//       if(passwd==actualPassword){
//         console.log("Login Successfull");
        
//       }
//       else{
//         console.log("Incorrect Password!");
        
//       }
//   }

//   else{
//     console.log("Invalid Account number!!");
    
//   }
// }


// authenticateAccount(1000,1002);
// authenticateAccount(1000,1000)



//-------------------------------------------------------------------------------------------- using class
console.log('------------------------------------using Class');

class Bank{

  db={
    1000:{"acno":1000, "username":"Neer", "password":1000,"balance":5000,transaction:[]},
    1001:{"acno":1001, "username":"Laisha", "password":1001,"balance":5000,transaction:[]},
    1002:{"acno":1002, "username":"Vyom", "password":1002,"balance":3000,transaction:[]},
  }

  validateAccount(acno){
    
    return acno in this.db ? true:false;  
      
  }
 

  authenticateAccount(acno,passwd){

    if(this.validateAccount(acno)){
  
        if(passwd==this.db[acno].password){
          console.log("Login Successfull");
          
        }
        else{
          console.log("Incorrect Password!");
          
        }
    }
  
    else{
      console.log("Invalid Account number!!");
      
    }
  }

  fundTransfer(fromAccount,toAccount,amount){

    if((this.validateAccount(fromAccount)) && (this.validateAccount(toAccount))){

        if(this.db[fromAccount].balance > amount){
          this.db[toAccount].balance = this.db[toAccount].balance + amount;
          this.db[fromAccount].balance -= amount;  //use assignment operator
          console.log('Transactioncompleted');
          
          
        }
        else{
          console.log("Invalid amount!");
          
        }

    }
    else{
      console.log("Invalide Ac number!");
      
    }
  }

  getBalence(acno){
    console.log(this.db[acno].balance);
    
  }
  
}


person1 = new Bank();

person1.fundTransfer(1000,1002,2000);
person1.getBalence(1002);
