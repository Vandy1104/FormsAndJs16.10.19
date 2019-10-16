console.log('Forms & JS');

//Reading from data
document.getElementById('submit').addEventListener('click', function(){
  var name = document.getElementById('name').value;
  console.log(name);

  var address = document.getElementById('address').value;
  console.log(address);

  document.getElementById('formData').innerHTML = name + '<br>' + address;
})

var names = [];
var projectA = [];
var projectB = [];
var projectC = [];
var averagePerformance = [];

var n = parseInt(prompt('Enter the number of Employees'));

document.getElementById('saveData').addEventListener('click', function(){
  var ename = document.getElementById('ename').value;
  console.log(ename);

  var projA = parseInt(document.getElementById('projectA').value);
  console.log(projA);

  var projB = parseInt(document.getElementById('projectB').value);
  console.log(projB);

  var projC = parseInt(document.getElementById('projectC').value);
  console.log(projC);

  var average = (projA + projB + projC)/3;


  document.getElementById('formsData').innerHTML += ename + '<br>' + projA + '<br>' + projB + '<br>' + projC + '<br>' + average;

  document.getElementById('average').value = average;

  names.push(ename);
  projectA.push(projA);
  projectB.push(projB);
  projectC.push(projC);
  averagePerformance.push(average);
  console.log(names, projA, projB, projC, averagePerformance);

})
