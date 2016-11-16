/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio = {
 	"name" : "Lucinda Luo",
    "role" : "Front End Web Developer",
    "contacts" : {
    	mobile:"13810453283",
    	email:"448177067@qq.com",
    	github:"lucindaluo",
    	twitter:"lucindaluo",
    	location:"Beijing China"
    },
    "welcomeMessage":"Thank you For coming, I'm looking for a new job !",
    "skills":["UI Design","Product Design","Data Analysis","Web Development"],
    "biopic":"images/me.jpg"
 };
 bio.display = function(){
 	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
 	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
 		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
 		$("#skills").append(formattedSkill);
 	}

    $("#footerContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
    $("#footerContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
    $("#footerContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
    $("#footerContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
    $("#footerContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));

};



//bio end

 var education ={
 	"schools":[
 	            {
 	           	name:"Central University of Finance and Economics",
                location:"Beijing China",
                degree:"not included",
                major:"Business",
                dates:"2005",
                url:"http://www.cufe.edu.cn"
 	            },
 	            {
 	           	name:"North China University of Technology",
                location:"Beijing China",
                degree:"Bachelor of Engineering",
                major:"Computer science and technology",
                dates:"2016",
                url:"http://www.ncut.edu.cn/"
 	            }],
 	"onlineCourses":[
 	                 {
                      	title:"Front-End Web Developer Nanodegree",
                      	school:"Udacity",
                      	dates:"2016",
                      	url:"https://classroom.udacity.com/nanodegrees/nd001/syllabus"
                      },
                      { 
                      	title:"Introduction to Bootstrap",
                      	school:"edX",
                      	dates:"2015",
                      	url:"https://www.edx.org"
                      }
                    ]  
 	           };
 	education.display = function(){
 		
        for(var i=0; i<education.schools.length;i++){
 			$("#education").append(HTMLschoolStart);

 			var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
 			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
 			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
 			var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].major);
 			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
 			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            
            formattedName.replace("#", education.schools[i].url);
 		
 		$(".education-entry:last").append(formattedName + formattedDegree);
 		$(".education-entry:last").append(formattedLocation);
 		$(".education-entry:last").append(formattedDates);
 		$(".education-entry:last").append(formattedMajors);
        };
//online education
        $(".education-entry:last").append(HTMLonlineClasses);
        for (var i = 0; i < education.onlineCourses.length; i++) {
        	var onlinetitle = HTMLonlineTitle.replace('%data%',education.onlineCourses[i].title);
      	    onlinetitle.replace("#",education.onlineCourses[i].url);
      	    var onlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
     	    $(".education-entry:last").append(onlinetitle + onlineSchool);
     	    var onlineDates = HTMLonlineDates.replace('%data%',education.onlineCourses[i].dates);
     	    $(".education-entry:last").append(onlineDates);
     	    var onlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url).replace('#', education.onlineCourses[i].url);
     	   $(".education-entry:last").append(onlineURL);

	    
 	};           
};
//end of education
//wore start
var work = {
    "jobs" :
    [
      {
        "employer" : "kuaijihui360.com",
        "title" : "Product Manager",
        "location" :"Beijing China",
        "dates" : "2016 - Present",
        "description" : "Responsible for Product Design"
      }, 
      {
        "employer" : "Leyikao.com",
        "title" : "Product Manager",
        "location" :"Beijing China",
        "dates" : "2015 - 2016",
        "description" : "Responsible for Product Design"
      }, 
      {
        "employer" : "YOLOHO.com",
        "title" : "CTO assistant",
        "location" :"Beijing China",
        "dates" : "2014 - 2015",
        "description" : "Responsible for call center system maintenance"
      }, 
      {
        "employer" : "GE Healthcare",
        "title" : "IT program management specialist",
        "location" :"Beijing China",
        "dates" : "2012 - 2014",
        "description" : "Responsible for call center system maintenance"
      }, 
      {
        "employer" : "Global Info Tech",
        "title" : "SRE",
        "location" :"Beijing China",
        "dates" : "2008 - 2012",
        "description" : "Responsible for the stability of the service"
      }
    ]
  };
     work.display = function(){
      
      for (var i = 0; i < work.jobs.length;i++){
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formatterworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

        $(".work-entry:last").append(formattedEmployer + formattedworkTitle);
        $(".work-entry:last").append(formattedworkLocation);
        $(".work-entry:last").append(formattedworkDates);
        $(".work-entry:last").append(formatterworkDescription); 
      }
    }
//end of workexperience

//start of projects

var projects = {
  'title' : "App Product Design",
  'dates': "2015-2016",
  'description' :"Used sketch for APP Design",
  'images' : ["http://placekitten.com/100/100"]
};

projects.display = function(){
   
   $("#projects").append(HTMLprojectStart);
   var title = HTMLprojectTitle.replace("%data%", projects.title).replace("#", projects.url); 
   var dates = HTMLprojectDates. replace("%data%",projects.dates);
   var description = HTMLprojectDescription.replace("%data%",projects.description);
   var images = HTMLprojectImage.replace("%data%",projects.images)

   $(".project-entry:last").append(title);
   $(".project-entry:last").append(dates);
   $(".project-entry:last").append(description);
   $(".project-entry:last").append(images);
}
//end of projects

//add map here
$("#mapDiv").append(googleMap);


//display
 bio.display();
 education.display();
 work.display();
 projects.display();

