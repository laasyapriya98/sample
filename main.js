/*function getfile(file,callback){
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status == "200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}

getfile("data.json", function(text){
  var data = JSON.parse(text);
  console.log(data);
})*/

function loadJSON(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }
      else{
        reject(new Error('error'));
      }
    })
  })

}
var newFile=loadJSON("data.json");
newFile.then(data=>{
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills);
  achievements(data.achievements);
})

var childTwo=document.querySelector(".childtwo")

function career(careerObj){
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="Career Objective";
  childTwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  careerHeading.appendChild(hr);
  var careerP=document.createElement("p");
  careerP.textContent=careerObj.info;
  childTwo.appendChild(careerP);
}

function education(edu){
  var educationHeading=document.createElement("h2");
  educationHeading.textContent="Academic Qualifications";
  childTwo.appendChild(educationHeading);
  var hr=document.createElement("hr");
  educationHeading.appendChild(hr);
  for(var i=0;i<edu.length;i++){
    eduH3=document.createElement("h3");
    eduH3.textContent=edu[i].degree;
    childTwo.appendChild(eduH3);
    var eduU1=document.createElement("ul");
    var eduLi=document.createElement("li");
    eduLi.textContent=edu[i].institute;
    eduU1.appendChild(eduLi);
    childTwo.appendChild(eduU1);
    var eduU2=document.createElement("ul");
    var eduLi1=document.createElement("li");
    eduLi1.textContent=edu[i].Year;
    eduU2.appendChild(eduLi1);
    childTwo.appendChild(eduU2);
    var eduU3=document.createElement("ul");
    var eduLi2=document.createElement("li");
    eduLi2.textContent=edu[i].percentage;
    eduU3.appendChild(eduLi2);
    childTwo.appendChild(eduU3);
  }
}

function skills(skillinfo){
  var skillsHeading=document.createElement("h2");
  skillsHeading.textContent="Technical Skills";
  childTwo.appendChild(skillsHeading);
  var hr=document.createElement("hr");
  skillsHeading.appendChild(hr);
  var skillTable=document.createElement("table");
  skillTable.border="2";
  childTwo.appendChild(skillTable);
  var tableData="";
  for(var i=0;i<skillinfo.length;i++){
    tableData+="<tr><td>"+skillinfo[i].title+"</td><td>"+skillinfo[i].info+"</td></tr>";
  }
  skillTable.innerHTML=tableData;
}

function achievements(achi){
  var achievementsHeading=document.createElement("h2");
  achievementsHeading.textContent="Achievements";
  childTwo.appendChild(achievementsHeading);
  var hr=document.createElement("hr");
  achievementsHeading.appendChild(hr);
  for(var i=0;i<achi.length;i++){

    var achiU1=document.createElement("ul");
    var achiLi=document.createElement("li");
    achiLi.textContent=achi[i].cocurricular;
    achiU1.appendChild(achiLi);
    childTwo.appendChild(achiU1);
    var achiU2=document.createElement("ul");
    var achiLi1=document.createElement("li");
    achiLi1.textContent=achi[i].internships;
    achiU2.appendChild(achiLi1);
    childTwo.appendChild(achiU2);
    var achiU3=document.createElement("ul");
    var achiLi2=document.createElement("li");
    achiLi2.textContent=achi[i].training;
    achiU3.appendChild(achiLi2);
    childTwo.appendChild(achiU3);
    var achiU4=document.createElement("ul");
    var achiLi3=document.createElement("li");
    achiLi3.textContent=achi[i].extracurricular;
    achiU4.appendChild(achiLi3);
    childTwo.appendChild(achiU4);
  }
  
}
