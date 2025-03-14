// WElcome message

// to get the data from local storage that we stored in login webpage - getItem()

let userName = localStorage.getItem('USERNAME');
console.log(userName);

// welcome message
welcome.innerHTML = `WELCOME ${userName}`;


// TO remove the data from local storage -removeItem()


function logout(){

  localStorage.clear();

  window.location='./login.html'

}




// to add a new employee details to the local storege 

function addEmployee(){

    // create an object to store the employee details
  employee = {
    id:empid.value,
    name:empname.value,
    addr:empaddr.value,
    desg:empdesg.value,
    exp:empexp.value,
    sal:empsal.value,
  }

  // to prevent multiple entry from the same employee

  if(employee.id in localStorage){
    alert("Employee Already exists")
  }
  else{
    localStorage.setItem(employee.id,JSON.stringify(employee))
    alert("Employee Added")
  }

}


// search employyee id

function search(){

  let key = emp.value;
  let employee = JSON.parse(localStorage.getItem(key));

  // for displaying the employee in card
  result.innerHTML = `  <div class="card mt-3" style="width: 18rem;">
   <ul class="list-group list-group-flush">
    <li class="list-group-item">${employee.id}</li>
    <li class="list-group-item">${employee.name}</li>
    <li class="list-group-item">${employee.addr}</li>
    <li class="list-group-item">${employee.desg}</li>
    <li class="list-group-item">${employee.exp}</li>
    <li class="list-group-item">${employee.sal}</li>
   </ul>
  </div>
  `
}