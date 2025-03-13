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