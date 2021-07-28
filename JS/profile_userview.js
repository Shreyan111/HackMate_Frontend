$(document).ready(function () {
    $("#nav").load("../Assets/Header/headerl.txt");
    $("#foobottom").load("../Assets/Footer/footer.txt");
});

var user;
axios(`${url}/participant/login`, {
    headers: {
        Authorization: "Bearer " + auth,
    },
})
.then((response) => {
    user = response.data;
    document.par_form.name.value = user.name;
    document.par_form.username.value = user.username;
    document.querySelector("#email").innerHTML = user.email;
    document.par_form.college.value = user.college;
    document.par_form.git.value = user.github;
    document.par_form.linkedln.value = user.linkedIn;
    document.par_form.personal_website.value = user.website;
    document.par_form.year.value = user.graduation_year;
    document.form.bio.value = user.bio;
    console.log(user);
})
.catch((error) => console.error("Error: " + error));


let fd= document.getElementById("frontend");
let bd=document.getElementById("backend");
let ui = document.getElementById("ui");
let ml = document.getElementById("ml");
let mg = document.getElementById("management");
let app = document.getElementById("app");
let cyber = document.getElementById("cyber");
let block = document.getElementById("block");
var skills=[];
var userskills=[];
axios(`${url}/skills/mySkills`, {
    headers: {
        Authorization: "Bearer " + auth,
    }
})
.then((response) => {
    skills=response.data;
    // console.log(skills);
    skills.forEach(element => {
        userskills.push(element.skill);
    });
    console.log(userskills);
    if(userskills.includes("frontend")){
        fd.checked = true;
    }
    if(userskills.includes("backend")){
        bd.checked = true;
    }
    if(userskills.includes("management")){
        mg.checked = true;
    }
    if(userskills.includes("ui/ux")){
        ui.checked= true;
    }
    if(userskills.includes("ml")){
        ml.checked = true;
    }
    if(userskills.includes("appdev")){
        app.checked = true; 
    }
    if(userskills.includes("cybersecurity")){
        cyber.checked = true;
    }
    if(userskills.includes("blockchain")){
        block.checked = true;
    }
})
.catch((error) => console.error("Error: " + error));


function delete_accoount(){
  axios 
    .delete(`${url}/participant/deleteProfile`, {
        headers: {
            Authorization: "Bearer " + auth,
        },
    })
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => console.error("Error: " + error));
}


function update_account() {
    let flag=0;
    let Name=document.getElementById("name");
    let username=document.getElementById("username");
    let college=document.getElementById("college");
    let year=document.getElementById("year");
    let linkedin=document.getElementById("linkedln");
    let git=document.getElementById("git");
    let website=document.getElementById("personal_website");
    let bio=document.getElementById("bio");
    Name.value=Name.value.toUpperCase().trim();
    username.value=username.value.trim();
    year.value=year.value.trim();
    college.value=college.value.toUpperCase().trim();
    let len=Name.value.length;
    let n = username.value.length;
    linkedin.value=linkedin.value.trim();
    let regex=/^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/;
    let regstr=/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
    git.value=git.value.trim();
    website.value=website.value.trim();
    bio.value=bio.value.trim();
    let length=bio.value.length;
    let reg1=/^[A-Z][A-Z\s]*$/;
    let reg2=/(19|20)\d{2}$/;
    //name should be only alphabets and of max length 30
    if(len<=30){
        if(reg1.test(Name.value) === true){ 
            onSuccess(Name);
        }
        else{
            onError(Name,"Enter a valid name");
            flag=flag+1;
        }
    }
    else{
        onError(Name,"Enter a valid name");
        flag=flag+1;
    }
    //username should be only alphabets and of max length 30
    if(n<=20){
            onSuccess(username);
    }
    else{
        onError(username,"Username cannot be longer than 10 charecters");
        flag=flag+1;
    }
    //college name only alphabets
    if(college.value.match(reg1)){
        onSuccess(college);
    }
    else{
        onError(college,"Enter valid college name");
        flag=flag+1;
    }
    //year check
    if(year.value.match(reg2)){
            onSuccess(year);
    }
    else{
        onError(year,"Enter valid year");
        flag=flag+1;
    }
    //linkedin validation
    if(regex.test(linkedin.value) === true){
        onSuccess(linkedin);
    }
    else{
        onError(linkedin,"Enter correct linkedIn profile link");
        flag=flag+1;
    }
    //github profile link validation
    if(regstr.test(git.value) === true){
        onSuccess(git);
    }
    else{
        onError(git,"Enter correct github profile link");
        flag=flag+1;
    }
    //personal website
    if(regstr.test(website.value) === true){
        onSuccess(website);
    }
    else{
        onError(website,"Enter correct website link");
        flag=flag+1;
    }
    //setting limit to bio
    if(length<=200){
        onSuccess(bio);
    }
    else{
        onError(bio,"bio should not exceed 200 characters");
        flag=flag+1;
    }
    console.log(flag);

    if(flag==0){
        axios
        .patch(
            `${url}/participant/updateProfile`,
            {
                name: document.par_form.name.value,
                username: document.par_form.username.value,
                college: document.par_form.college.value,
                github: document.par_form.git.value,
                linkedIn: document.par_form.linkedln.value,
                website: document.par_form.personal_website.value,
                graduation_year: document.par_form.year.value,
                bio: document.form.bio.value
            },
            {
                headers: {
                    Authorization: "Bearer " + auth,
                },
            }
            )
            .then((response) => {
                console.log("Success:", response.data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        }
       
}
function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden";  
}
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
}
function arrayRemove(arr, value) {
    return arr.filter(function(geeks){
        return geeks != value;
    });
 }


function addskills(){


    let choice = [];
    let fd= document.getElementById("frontend");
    let bd=document.getElementById("backend");
    let ui = document.getElementById("ui");
    let ml = document.getElementById("ml");
    let mg = document.getElementById("management");
    let app = document.getElementById("app");
    let cyber = document.getElementById("cyber");
    let block = document.getElementById("block");
    if(fd.checked==1){
        choice.push("frontend");
    }
    else{
        if(choice.includes("frontend")){
            choice = arrayRemove(choice,"frontend");
        }
    }
    if(bd.checked==1){
        choice.push("backend");
    }
    else{
        if(choice.includes("backend")){
            choice = arrayRemove(choice,"backend");
        }
    }
    if(ui.checked==1){
        choice.push("ui/ux");
    }
    else{
        if(choice.includes("ui/ux")){
            choice = arrayRemove(choice,"ui/ux");
        }
    }
    if(ml.checked==1){
        choice.push("ml");
    }
    else{
        if(choice.includes("ml")){
            choice = arrayRemove(choice,"ml");
        }
    }
    if(mg.checked==1){
        choice.push("management");
    }
    else{
        if(choice.includes("management")){
            choice = arrayRemove(choice,"management");
        }
    }
    if(app.checked==1){
        choice.push("appdev");
    }
    else{
        if(choice.includes("appdev")){
            choice = arrayRemove(choice,"appdev");
        }
    }
    if(cyber.checked==1){
        choice.push("cybersecurity");
    }
    else{
        if(choice.includes("cybersecurity")){
            choice = arrayRemove(choice,"cybersecurity");
        }
    }
    if(block.checked==1){
        choice.push("blockchain");
    }
    else{
        if(choice.includes("blockchain")){
            choice = arrayRemove(choice,"blockchain");
        }
    }

    axios
  .post(`${url}/skills/mySkills`,
  {
    skills : choice,
  },
  {
    headers: {
      Authorization: "Bearer " + auth,
    },
  }
  )
  .then((response) => {
    console.log("Success:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}