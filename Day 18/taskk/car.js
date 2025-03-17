// for Storing the records to localstorage

function storeRecords(){
  let carBrand = document.getElementById('carbrand').value;
  let price = document.getElementById('price').value;
  let key = document.getElementById('key').value;

  carObjects ={
    car:carBrand,
    price:price,
    key:key
  }

  // to load objects value to local storage
  if(carObjects.key in localStorage){
    alert("Record Already exists");
  }  
  else{
    localStorage.setItem(carObjects.key,JSON.stringify(carObjects))
  }
}


// Retrieve a record from the localstorage using the key

function retrieveRecord(){
  let keyvalue = document.getElementById('retrieveKey').value;
  let carObjects = JSON.parse(localStorage.getItem(keyvalue));

  result.innerHTML=`
  <div class="card mt-2 " style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${carObjects.car}</li>
    <li class="list-group-item">${carObjects.price}</li>
    <li class="list-group-item">${carObjects.key}</li>
  </ul>
</div>
  `

}

// To delete a record

function deleteRecord(){
  let key = document.getElementById('deleteKey').value;

  if(key in localStorage){
    localStorage.removeItem(key);

    result22.innerHTML=`
    <p class="text-success mt-3">Record Deleted Success Fully</p>
    `  
  }
  else{
    result22.innerHTML=`
    <p class="text-success mt-3">Failed Bro!</p>
    `  
  }
}




// Clear the records from localStorage
function clearRecord(){
  localStorage.clear()
}


