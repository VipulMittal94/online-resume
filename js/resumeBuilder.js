
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a class="workemp" href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">(%data%)</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';


var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a class="workemp" href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">(%data%)</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%" class="Imageclass">';
var googleMap = '<div id="map"></div>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#"><span id="emp">%data%</span>';
var HTMLworkTitle = '--%data%</a>';
var HTMLworkDates = '<div class="date-text">(%data%)</div>';
var HTMLworkDescription = '<div class="des" ><br>%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';


//bio

var bio = {
    "name": "Vipul Mittal",
    "role": "WebDeveloper",
    "welcomeMessage": "Harry James Potter is the orphan Potter, who, on his eleventh birthday, learns he's a wizard. Thus, he attends Hogwarts School of Witchcraft and Wizardry to practise magic under the guidance of the kindly headmaster Albus Dumbledore. Harry discovers that he is already famous throughout the magical community, and that his fate is tied with that of Lord Voldemort, the internationally feared Dark Wizard and murderer of his parents Lily and James.",
    "biopic": "images/4.jpg",
    "skills": ["awesome", "handsome", "silent", "cool"],
    "contacts": {
        "mobile": "000-00-00",
        "email": "vmittal@mail.com",
        "github": "mitt",
        "location": "bikaner"
    },
    display : function() {

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(formattedImage);
        $("#header").append(formattedMessage);

        $("#header").append(HTMLskillsStart);

        bio.skills.forEach(function(i) {
            var formattedSkills = HTMLskills.replace("%data%", i);
            $("#skills").append(formattedSkills);
        });

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#footerContacts").append(formattedMobile, formattedEmail, formattedgithub);
    }
};
//education

var education = {
    "schools": [{
        "name": "Bikaner Boys School",
        "dates": "1990-2000",
        "location": "Bikaner",
        "degree": "Senior sec.",
        "majors": ["Science"],
        "url": "abc@xyz.com",
    }, {
        "name": "NIT Jalandhar",
        "dates": "2000-2004",
        "location": "Jalandhar",
        "degree": ["Bachelor"],
        "majors": "Chemical Engineering",
        "url": "vipul@nitj.ac.in",
    }],
    "onlinecourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2004-2005",
        "url": "https://www.udacity.com/course/nd001",
    }],
    display :function() {
        education.schools.forEach(function(i) {
            $('#education').append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", i.name).replace("#",i.url);
            var formattedDegree = HTMLschoolDegree.replace("%data%", i.degree);
            var formattedDates = HTMLschoolDates.replace("%data%", i.dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", i.location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", i.majors);

            $(".education-entry:last").prepend(formattedName + formattedDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedMajor);

        });
    }

};

//work

var work = {
    "jobs": [{
        "employer": "Microsoft",
        "title": "Web-Developer",
        "location": "Jaipur",
        "dates": "2008-2012",
        "description": "the job was awesome. "
    }, {
        "employer": "Amazon",
        "title": "Web-Developer",
        "location": "Bangalore",
        "dates": "2002-2008",
        "description": "love the place. the location was far better than the last one."
    }],
    display : function() {

        work.jobs.forEach(function(i) {
            $("#workExperience").append(HTMLworkStart);

            var formattedemployer = HTMLworkEmployer.replace("%data%", i.employer);
            var formattedtitle = HTMLworkTitle.replace("%data%", i.title);
            var formattedDates = HTMLworkDates.replace("%data%", i.dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", i.location);
            var formattedDescription = HTMLworkDescription.replace("%data%", i.description);

            $(".work-entry:last").append(formattedemployer + formattedtitle);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDescription);
        });
    }


};

//project

var projects = {
    "projects": [{
        "title": "Harry Potter and  the chamber of secrets",
        "dates": "2008-2010",
        "image": ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"],
        "description": "Harry second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school corridors warn that the Chamber of Secrets has been opened and that the heir of Slytherin would kill all pupils who do not come from all-magical families. These threats are found after attacks which leave residents of the school",
    }, {
        "title": "Harry Potter and the Half Blood Prince.",
        "dates": "2011-2012",
        "description": "It is the sixth and penultimate novel in the Harry Potter series, written by British author J. K. Rowling. Set during protagonist Harry Potter's sixth year at Hogwarts, the novel explores the past of Harry's nemesis, Lord Voldemort, and Harry's preparations for the final battle against Voldemort alongside his headmaster and mentor Albus Dumbledore.",
        "image": ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"]
    }],
    display : function() {
        projects.projects.forEach(function(i) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", i.title);
            var formattedDates = HTMLprojectDates.replace("%data%", i.dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", i.description);

            $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
            i.image.forEach(function(j) {
                var formattedImage = HTMLprojectImage.replace("%data%", j);
                $(".project-entry:last").append(formattedImage);
            });
        });
    }

};

bio.display();
projects.display();
work.display();
education.display();



$("#mapDiv").append(googleMap);