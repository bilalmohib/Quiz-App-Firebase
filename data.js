var database =firebase.database();
/////////////////////////////////////////
let className = sessionStorage.getItem("className");
let subjectName = sessionStorage.getItem("subjectName");
////////////////////////////////////////////////////////
var clas=document.getElementById("clas").innerHTML=className;
var sub=document.getElementById("sub").innerHTML="Subject: "+subjectName;
////////////////////////////////////////////////////////
alert("You are now Entering the data for :-"+className+"\nFOR SUBJECT :-"+subjectName);
while(className==null||subjectName==null)
{
  alert("Please go back and choose the class and the subject to proceed");
}
console.log(className+"\n"+subjectName);

/////////////////////////////////////////
function sendMesssage()
{
//   var text1=document.getElementById("prima");
//   var text2;
// console.log(text1.childNodes)
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
  dateTime=dateTime.toString();



    //getting the question
    var question=document.getElementById("question").value;
    //getting the options
    var option1=document.getElementById("option1").value;
    var option2=document.getElementById("option2").value;
    var option3=document.getElementById("option3").value;
    var option4=document.getElementById("option4").value;
    //getting the right answer
    var answer=document.getElementById("answer").value;

    if(question==""||option1==""||option2==""||option3==""||option4==""||answer=="")
    {
      alert("Please fill all the fields to submit for the quiz");
      return;
    }
    else if(option1!=answer&&option2!=answer&&option3!=answer&&option4!=answer)
    {
      alert("Please check One of the options of four must be an answer");
      return;      
    }

//console.log(question+"\n"+option1+option2+option3+option4+answer+dateTime);


var key=firebase.database().ref('Quiz/').push().key;
var Quiz={
    Question:question,
    Option1:option1,
    Option2:option2,
    Option3:option3,
    Option4:option4,
    Answer:answer,
}

firebase.database().ref(`Quiz/${className}/${subjectName}/`).push(Quiz);


//refreshing the page remove this lines and see the error and if there is a way to overcome it I dont know
var x = window.location.href;
x = x.split( '#' );
window.location.href = x[0];

}
// Listen for form submit
document.getElementById('submit').addEventListener('click', submitForm);

// Submit form
function submitForm(e){
e.preventDefault();


// Show alert
//document.querySelector('.alert').style.display = 'block';

// Hide alert after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
},3000);

}