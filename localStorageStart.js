var className;
var subjectName;

var check1 = false;
var check2 = false;
var check3 = false;
let user_name = sessionStorage.getItem("name");
console.log("The user name getted from the login students authentication: ", user_name + "\n");




///////////////////////////////////////////////////////////////////////////////////////////

firebase.database().ref(`Condition/Class III/`).on('value', (data) => {

  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("class3").style = "display:none";
  }
});


firebase.database().ref(`Condition/Class IV/`).on('value', (data) => {

  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("class4").style = "display:none";
  }
});


firebase.database().ref(`Condition/Class V/`).on('value', (data) => {

  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("class5").style = "display:none";
  }
});


firebase.database().ref(`Condition/Class VI/`).on('value', (data) => {

  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("class6").style = "display:none";
  }
});


firebase.database().ref(`Condition/Class VII/`).on('value', (data) => {

  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("class7").style = "display:none";
  }
});


firebase.database().ref(`Condition/Class Pre-Nine/`).on('value', (data) => {

  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("class8").style = "display:none";
  }
});


firebase.database().ref(`Condition/Class IX/`).on('value', (data) => {

  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("class9").style = "display:none";
  }
});



firebase.database().ref(`Condition/Class X/`).on('value', (data) => {

  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("class10").style = "display:none";
  }
});

////////////////////////////////////////////////////////////////////////////////////////////






function getData(e) {
  e.style.color = 'white';
  e.style.backgroundColor = 'green'


  subjectName = e.innerHTML;
  console.log(subjectName);
  sessionStorage.setItem("subjectName", subjectName);//take jab b name chye ho to get name ker k lele hum "name"
  check1 = true;
}



function getClass(e) {

  e.style.color = 'white';
  e.style.backgroundColor = 'purple'
  e.style.borderRadius = '10%'

  className = e.innerHTML;
  e.style.color = 'red';
  console.log(className);
  sessionStorage.setItem("className", className);//take jab b name chye ho to get name ker k lele hum "name"
  check2 = true;
}


function go() {
  //   var cond=false;
  //     while(className=="Class VI"&&subjectName=="English"&&cond==false)
  //     {
  //           var code=prompt("Enter the key: ");
  //           if(code=="123")
  //           {
  //             cond=true;
  //             break;
  //           }
  //     }
  while (check1 == false || check2 == false) {
    alert("Please select the appropriate Class and the Subject to proceed further");
    return;
  }
  firebase.database().ref(`Score/${className}/${subjectName}/`).once('value', (data) => {
    var quiz = data.val();
    var keys = Object.keys(quiz);


    for (let i = 0; i < keys.length; i++) {

      var key = keys[i];
      var Name = quiz[key].Name;
      //     console.log("The username from firebase database: ",Name); 

      if (user_name == Name) {
        //  alert("The user has given the test ");
        check3 = true;
      }
      console.log("The username from firebase database: ", Name + i + check3);


    }
    console.log(check3);


    if (check3 == true) {
      alert("The user has given the test ");
    }
    else if (check3 == false && check1 == true && check2 == true) {
      alert("Welcome");
      location.href = "quiz.html";
    }
  });


}



var database = firebase.database();

