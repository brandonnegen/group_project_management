$(document).ready(function() {
  $('.gen-project').on('click', function() {
    wholeTeam = [];
    $('.employee-header').html('');
    $('.employees .an-employee').remove();
    $('.add-employee').hide();
    $(".sprints").html("");
    project = {
      name : makeName(),
      frontend : randomNum(),
      clientside : randomNum(),
      serverside : randomNum()
    };
    $('.project').html("");
    $('.project').append('<div class="proj-name"><h2>Company Name: '+ project.name +'</h2></div>');
    $('.project').append('<div class="skill">Front End Scrum Need: '+ project.frontend +'</div>');
    $('.project').append('<div class="skill">Clientside Scrum Need: '+ project.clientside +'</div>');
    $('.project').append('<div class="skill">Serverside Scrum Need: '+ project.serverside +'</div>');
    $('.project').append('<button class="btn btn-info assign-staff">Assign Staff</button>');
    console.log(project);
  });//end project btn

  $('body').on('click', '.assign-staff', function() {
    addEmployee();
  });//end Assign Staff btn

  $('.add-employee').on('click', function(){
    addEmployee();
  });

});//End Document Ready

var wholeTeam = [];

var project = {};

function checkTeam (){
  var fe = false;
  var ss = false;
  var cs = false;
  for (var i = 0; i < wholeTeam.length; i++) {
    if(wholeTeam[i].employeeSkill == "Front End"){fe = true; }
    if(wholeTeam[i].employeeSkill == "Serverside Logic"){ss = true;}
    if(wholeTeam[i].employeeSkill == "Clientside Logic"){cs = true;}
  };
  if(!fe || !ss || !cs){
    addEmployee();
  }
  calcSprints();
}

function addEmployee (){
  $.ajax({
    url: "/employee-request",
    success: function(randomEmployee) {
      empObj = randomEmployee;
      console.log(empObj);
      wholeTeam.push(empObj);
      $('.employee-header').html('Employees assigned to project:');
      $('.employees').append('<div class="an-employee">'+empObj.employeeName+': '+empObj.employeeSkill + ' Scrum Score: ' + empObj.employeeScrumNum + '</div>');
      $('.add-employee').show();
    },
    complete: function(){
      console.log(wholeTeam);
      checkTeam();
    }

  });

}

var randomNum = function(){
  return Math.floor(Math.random() * (1 + 60 - 10) + 10);
};

function calcSprints(){
  var feTotal = 0;
  var ssTotal = 0;
  var csTotal = 0;
  for (var i = 0; i < wholeTeam.length; i++) {
    if(wholeTeam[i].employeeSkill == "Front End"){feTotal+= wholeTeam[i].employeeScrumNum; }
    if(wholeTeam[i].employeeSkill == "Serverside Logic"){ssTotal+= wholeTeam[i].employeeScrumNum;}
    if(wholeTeam[i].employeeSkill == "Clientside Logic"){csTotal+= wholeTeam[i].employeeScrumNum;}
  };
  var feSprint = Math.ceil(project.frontend / feTotal);
  var ssSprint = Math.ceil(project.clientside / ssTotal);
  var csSprint = Math.ceil(project.serverside / csTotal);
  var sprintResult = Math.max(feSprint, ssSprint, csSprint);


  $(".sprints").html("<h2>Sprints required for project completion: " + sprintResult + "</h2>");
};

function makeName(){
  var adjective = ["Desolate", "Hungry", "Amplified", "Silly", "Urgent", "Cold", "Ample", "Tiny", "Peaceful", "Beloved", "Vast", "Forlorn"];
  var noun = ["Mountain", "Ocean", "Market", "Mark", "District", "Solutions", "Window", "Coffee", "Pancake", "Town", "Tacos", "Mall", "Highway"];

  var num1 = Math.floor(Math.random() * adjective.length);
  var num2 = Math.floor(Math.random() * noun.length);
  return adjective[num1] + " " + noun[num2];
}



