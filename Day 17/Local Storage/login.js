// funtion for login

function login(){
  let userName = document.getElementById('uname').value ;
  console.log(userName);
  
  localStorage.setItem('USERNAME',userName);

  // redirect to home

  window.location='./home.html'

}