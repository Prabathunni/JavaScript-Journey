function processArguments(...args){
  if(args.length === 0){
    console.log('No Arguments Passed');

  }else if(args.length ===1){
    console.log('One ARgument ;',args[0]);
    
  }
  else{
    console.log('Multiple ARguments :',args);
    
  }
}

processArguments();
processArguments(10);
processArguments('apple','orange','bannana')



var nn =[];
nn[0]=10;
console.log(nn[0]);
