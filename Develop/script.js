var lengthmin = 8;
var lengthmax = 128;
// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){   
  //prompt for length
  var lengthChoice = prompt("Choose a password length between least 8 characters and no more than 128 characters");
  // validate password length
  if (lengthChoice < lengthmin){
    alert("Length should be greater than or equal to  " + lengthmin);
    return;
  }else if(lengthChoice > lengthmax){
    alert("Length should be less than or equal to  "+ lengthmax);
    return;
  }


  // const yesNoValidationArray = ["Y","y","N","n"];
  // var boolIncludeUpperCase = prompt("Do you want your password characters to include Upper case ?  Type Y  or N");
  // if( !yesNoValidationArray.includes( boolIncludeUpperCase)){
  //   alert("You can enter Y ,y,N or n to indicate YES or NO");
  //   return;
  // }
  // var boolIncludeLowerCase = prompt("Do you want your password characters to include Lower case ?  Type Y  or N");
  // if( !yesNoValidationArray.includes( boolIncludeLowerCase)){
  //   alert("You can enter Y ,y,N or n to indicate YES or NO");
  //   return;
  // }
  // var boolIncludeNumericCase = prompt("Do you want your password characters to include Numeric Characters ?  Type Y  or N");
  // if( !yesNoValidationArray.includes( boolIncludeNumericCase)){
  //   alert("You can enter Y ,y,N or n to indicate YES or NO");
  //   return;
  // }
  // var boolIncludeSpecialCase = prompt("Do you want your password characters to include Special Characters ?  Type Y  or N");
  // if( !yesNoValidationArray.includes( boolIncludeSpecialCase)){
  //   alert("You can enter Y ,y,N or n to indicate YES or NO");
  //   return;
  // }

   var boolIncludeUpperCase = confirm("Do you want your password characters to include Upper case ?" );
   var boolIncludeLowerCase = confirm("Do you want your password characters to include Lower case ? ");
   var boolIncludeNumericCase = confirm("Do you want your password characters to include Numeric Characters ?");
   var boolIncludeSpecialCase = confirm ("Do you want your password characters to include Special Characters ? ");


  if(!(boolIncludeUpperCase || boolIncludeLowerCase || boolIncludeNumericCase || boolIncludeSpecialCase)){
    alert(" You did not select any character type. You should select atleast one character type  (from Lower case , Upper case , Numeric or Special characters )")
    return;
  }

  var passWrdCharArray =[""];
  var passIndex=0;
  //Below do while loop will generate randome characters based on the user criteria. 
  do {
    
    if(boolIncludeUpperCase){
      //Get a randome number less than or eqal to 26
      var randomNum= Math.floor(Math.random() * 26);
      //Add it to 65 to get a random upper case ASCII character.
      passWrdCharArray[passIndex]=String.fromCharCode( 65+randomNum);
      passIndex++;
      if(passIndex>=Number(lengthChoice))
        break;
    }

    if(boolIncludeLowerCase){
      //Get a randome number less than or eqal to 26
      var randomNum= Math.floor(Math.random() * 26);
      //Add it to 97 to get a random upper case ASCII character.
      passWrdCharArray[passIndex]=String.fromCharCode( 97+randomNum);
      passIndex++;
      if(passIndex>=Number(lengthChoice))
        break;
    }

    if(boolIncludeNumericCase){
      //Get a randome number less than or eqal to 10 for numeric
      var randomNum= Math.floor(Math.random() * 10);
      //Add it to 48 to get a random upper case ASCII numeric character.
      passWrdCharArray[passIndex]=String.fromCharCode( 48+randomNum);
      passIndex++;
      if(passIndex>=Number(lengthChoice))
        break;
    }
    if(boolIncludeSpecialCase){
      //Get a randome number less than or eqal to 15
      var randomNum= Math.floor(Math.random() * 15);
      //Add it to 33 to get a random upper case ASCII character.
      passWrdCharArray[passIndex]=String.fromCharCode( 33+randomNum);
      passIndex++;
      if(passIndex>=Number(lengthChoice))
        break;
    }
  }while(true)

  alert("Password  genarated based on the selected criteria: \n Length: "+lengthChoice+"\n Use Upper Case: "+boolIncludeUpperCase+
  "\n Use Lower Case: "+boolIncludeLowerCase+
  "\n Use Numeric Chars : "+boolIncludeNumericCase+
  "\n Use Special Chars: "+boolIncludeSpecialCase
  )

  return passWrdCharArray.join("");//create the password string by joining all random characters in the char array. 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
