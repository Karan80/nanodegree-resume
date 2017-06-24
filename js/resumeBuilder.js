//bio
var bio = {
    "name" : "Karan Nahar",
    "role" : "Front-end Developer",
    "contacts" : {
        "mobile" : "8800880000",
        "email" : "karannahar.kf@hotmail.com",
        "github" : "Karan80",
        "twitter" : "@Karan1E",
        "location" : "New Delhi, India" 
    },
    "pictureURL" : "images/myphoto2.jpg",
    "welcomeMessage" : "Welcome To My Resume",
    "skills" :  ["HTML5" , "CSS3", "Javascript","React", "Angular js", "SASS","CrossPlatform apps" ] 
}

var formattedName = HTMLheaderName.replace( "%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role); 
$("#header").prepend(formattedName,formattedRole);
var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
$("#header").append(formattedPic);

bio.display= function(){
    var contact = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var email = HTMLemail.replace("%data%", bio.contacts.email);
    var github = HTMLgithub.replace("%data%", bio.contacts.github);
    var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var mylocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(contact, email, github, twitter, mylocation);
    $("#footerContacts").append(contact, email, github, twitter, mylocation);
    
    if(bio.skills.length > 0){
        $("#header").append(HTMLskillsStart); 
        for(i = 0; i < bio.skills.length ; i++){
            var skill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(skill);
        }    
    }
}
bio.display();


// Internationalize Name
var button = '<button onclick="inName()">Internationalize Name</button>';
$("#main").append(button);
var inName = function(){
    var name = bio.name;
    name = name.split(" ");
    name[1] =  name[1].toUpperCase();
    name[0] =  name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase() ;
    name = name.join(" ");
    return name;  
}
HTMLheaderName.replace( formattedName, inName);



    
//work experience
//I don,t have any work experience yet. This object is created for only the project.
var work = {
    "jobs" : [
            {
            "employer" :  "Self Employed",
            "title" : "Front-End developer",
            "location" : "Delhi, India",
            "dates" : "2017",
            "description" : "I am self employed and work as a front end developer building web application using various front-end technologies like HTML, CSS, JavaScript, AngularJS and many more."
            }   
        ]
};

work.display = function(){
  for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var FormattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);  
    var Formattedtitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);  
    var FormattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);  
    var FormattedLocation= HTMLworkLocation.replace("%data%", work.jobs[job].location);  
    var FormattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);  
    $(".work-entry:last").append(FormattedEmployer,Formattedtitle, FormattedDates, FormattedLocation, FormattedDescription);
  }   
}
work.display();

//projects
var projects = [
    {
      "title" : "Chef Website",
      "dates" : "2017",
      "description" : "",
      "image" : "images/project1.png"
    },
    {
      "title" : "Restaurant Website",
      "dates" : "2016",
      "description" : "",
      "image" : "images/project2.png"
    }
];


projects.display = function(){
    for(i=0; i<projects.length; i++){
        $("#projects").append(HTMLprojectStart);
        var pTitle = HTMLprojectTitle.replace("%data%", projects[i].title);
        var pDates = HTMLprojectDates.replace("%data%", projects[i].dates);
        var pDescription = HTMLprojectDescription.replace("%data%", projects[i].description);
        var pImg = HTMLprojectImage.replace("%data%", projects[i].image);
        $(".project-entry:last").append(pTitle, pDates,pDescription, pImg);    
    } 
}
projects.display();

//education
var education = {
    "schools": [
        {
		"name": "Guru Gobind Singh Indraprastha University",
		"schoolYears": "2012-2016",
		"degree": "Electical and Electronics engineering",
		"major": "Power Systems",
		"location": "Delhi, India"
	    }
    ],
    "onlineCourses" : [
        {
          "title" : "Front-End Web Developer Nanodegree",
          "school" : "Udacity",
          "dates" : "2017",
          "url" : "#education"
        },
        {
          "title" : "Front-End JavaScript Frameworks - Angular JS",
          "school" : "Coursera",
          "dates" : "2016",
          "url" : "https://www.coursera.org/account/accomplishments/certificate/UEMLP8HNKQ9F"
         },
         {
          "title" : "React Fundamentals",
          "school" : "Pluralsight",
          "dates" : "2017",
          "url" : "https://drive.google.com/file/d/0B9n9arqAydkPQUlUVWtjeWN1Snc/view"
         },
        {
          "title" : "Advanced CSS",
          "school" : "Edx",
          "dates" : "2017",
          "url" : "https://courses.edx.org/certificates/727c623154114938aaca140ff805a2a0"
        },
        {
          "title" : "Responsive Web Design",
          "school" : "Coursera",
          "dates" : "2016",
          "url" : "https://www.coursera.org/account/accomplishments/certificate/ACS76EAUUBKD"
        },
        {
          "title" : "Multiplatform Mobile App Development",
          "school" : "Coursera",
          "dates" : "2016",
          "url" : "https://www.coursera.org/account/accomplishments/certificate/93E2B4859QHX"
        }
    ]
};

education.display = function(){
    $("#education").append(HTMLschoolStart);
    for(i = 0; i< education.schools.length; i++){
        var school = HTMLschoolName.replace("%data%", education.schools[i].name);
        var schoolYrs = HTMLschoolDates.replace("%data%", education.schools[i].schoolYears);
        var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        //var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
        var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(school, schoolYrs, schoolDegree, schoolLocation);
    }    
 
    $(".education-entry").append(HTMLonlineClasses);
    for(i = 0; i< education.onlineCourses.length; i++){
        var onlineClassTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        var courseUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry").append(onlineClassTitle, onlineSchool, onlineDates, courseUrl);
    }
}
education.display();


$("#mapDiv").append(googleMap);

