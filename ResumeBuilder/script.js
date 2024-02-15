//To add another education detail
var addEducation = document.getElementById("addEducation");
var education = document.querySelector(".education");

//making array and saving data
var educationCounter = 0;
var educationArray = [
    degreeArray = [],
    uniArray = [],
    gradYearArray = []
];

addEducation.addEventListener("click", () => {
    //Adding another education content block
    var educationCopy = document.querySelector(".educationContent").cloneNode(true);
    education.appendChild(document.createElement("hr"));    
    education.appendChild(educationCopy);

    var degree = document.getElementsByName("degree")[educationCounter].value;
    var uni = document.getElementsByName("uni")[educationCounter].value;
    var gradYear = document.getElementsByName("year")[educationCounter].value;

    educationArray[0].push(degree);
    educationArray[1].push(uni);
    educationArray[2].push(gradYear);

    document.getElementsByName("degree")[educationCounter].value = "";
    document.getElementsByName("uni")[educationCounter].value = "";
    document.getElementsByName("year")[educationCounter].value = "";

    educationCounter++;
})

//To add another experience detail
var addExperience = document.getElementById("addExperience");
var experience = document.querySelector(".experience");

//making array and saving data
var experienceCounter = 0;
var experienceArray = [
    jobTitleArray = [],
    companyArray = [],
    startDateArray = [],
    endDateArray = [],
    responsibilitiesArray = []
];

addExperience.addEventListener("click", () => {
    var experienceCopy = document.querySelector(".workExperienceContent").cloneNode(true);
    experience.appendChild(document.createElement("hr"));    
    experience.appendChild(experienceCopy);

    var jobTitle = document.getElementsByName("jobTitle")[experienceCounter].value;
    var company = document.getElementsByName("company")[experienceCounter].value;
    var startDate = document.getElementsByName("duration")[experienceCounter].value;
    var endDate = document.getElementsByName("duration")[experienceCounter].value;
    var responsibilities = document.getElementById("responsibilities").value;

    experienceArray[0].push(jobTitle);
    experienceArray[1].push(company);
    experienceArray[2].push(startDate);
    experienceArray[3].push(endDate);
    experienceArray[4].push(responsibilities);

    var jobTitle = document.getElementsByName("jobTitle")[experienceCounter].value = "";
    var company = document.getElementsByName("company")[experienceCounter].value = "";
    var startDate = document.getElementsByName("duration")[experienceCounter].value = "";
    var endDate = document.getElementsByName("duration")[experienceCounter].value = "";
    var responsibilities = document.getElementById("responsibilities").value = "";

    experienceCounter++;
})

//To add skills
var addSkills = document.getElementById("addSkills");
var skillArray = [];
var skillCounter = 0;
addSkills.addEventListener("click", () => {
    var skills = document.getElementsByName("skills")[0].value;
    skillArray[skillCounter] = skills;
    skillCounter++;
    document.getElementsByName("skills")[0].value = "";
})



var submit = document.getElementById("submit").onclick = function (){
    var fullName = document.getElementsByName("fname")[0].value;
    var number = document.getElementsByName("number")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var city = document.getElementsByName("city")[0].value;
    var state = document.getElementById("states").options[document.getElementById("states").options.selectedIndex].innerHTML;
    var objective = document.getElementById("objective").value;
  
    /* var degree = document.getElementsByName("degree")[0].value;
    var uni = document.getElementsByName("uni")[0].value;
    var gradYear = document.getElementsByName("year")[0].value;
    var jobTitle = document.getElementsByName("jobTitle")[0].value;
    var company = document.getElementsByName("company")[0].value;
    var startDate = document.getElementsByName("duration")[0].value;
    var endDate = document.getElementsByName("duration")[0].value;
    var responsibilities = document.getElementById("responsibilities").value; */

    var reference = document.getElementById("reference").value;
}
