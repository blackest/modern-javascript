// variables & block scope
let age = 30;  //Global scope

if(true){

  // age = 40;
  let age = 40;   // local scope
  let name = 'shaun';
  console.log('inside 1st code block:', age, name);

  if(true){

    let age = 50; // local scope
    console.log('inside 2nd code block:', age, name);

  }

}

console.log('outside code block:', age, name);