const app = document.querySelector('.button1');
const fweb = document.querySelector('.button5');
const bweb = document.querySelector('.button6');
const ml = document.querySelector('.button7');
const mgmt = document.querySelector('.button9');
const design = document.querySelector('.button8');
const block = document.querySelector('.button10');
const cyber = document.querySelector('.button11');
const all = document.querySelector('.button');

function displayTeams(){
firebase.auth().onAuthStateChanged((user) =>
{
  if(user){
    
    user.getIdToken().then(function(idToken)
    {
      console.log(idToken);
      auth = idToken;
  var page = 1;
  displayTeams();
  var init = async function () {
    try {
      var res = await axios(`${url}/DN_Team/all/null?page=1`, {
        headers: {
          Authorization: "Bearer " + auth,
        },
      });
      hackss = await res.data;
      if (hackss.length >= 9 && hackss.length <= 16) {
        page = page + 1;
        console.log(page);
      }
      else if (hackss.length >= 17 && hackss.length <= 24) {
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
      }
      else if (hackss.length >= 25 && hackss.length <= 32) {
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
      }
      else if (hackss.length >= 33 && hackss.length <= 40) {
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
      }
      else if (hackss.length >= 41 && hackss.length <= 48) {
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
      }
      else if (hackss.length >= 49 && hackss.length <= 56) {
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
      }
      else if (hackss.length >= 57 && hackss.length <= 64) {
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
      }
      else if (hackss.length >= 65 && hackss.length <= 72) {
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
      }
      else if (hackss.length >= 73 && hackss.length <= 80) {
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
      }
      else if (hackss.length >= 81 && hackss.length <= 88) {
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
      }
      else if (hackss.length >= 89 && hackss.length <= 96) {
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
      }
      else if (hackss.length >= 97 && hackss.length <= 104) {
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
      }
      else if (hackss.length >= 105 && hackss.length <= 112) {
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);        
        displayTeams();
        page = page + 1;
        console.log(page);        
        displayTeams();
        page = page + 1;
        console.log(page);        
        displayTeams();
        page = page + 1;
        console.log(page);
      }
      else if (hackss.length >=113 && hackss.length <= 120) {
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
        displayTeams();
        page = page + 1;
        console.log(page);
      }
    }
    catch (err) {
      console.log(err.response.status);
    }
  }
  init();
  var height = document.body.clientHeight;
  console.log(height);
  if (height == document.body.clientHeight) {
    window.addEventListener('scroll', someFunction);
    function someFunction() {
      if (window.scrollY + window.innerHeight >= 3100) {
        console.log(window.scrollY + window.innerHeight);
        window.removeEventListener('scroll', someFunction);
      }
    }
  }
  document.querySelector(".dam1").innerHTML = "";
  console.log(page);
  function displayTeams() {
    var hack_id = window.location.search.split("?")[1];
    var init = async function () {
      try {
        var res = await axios(`${url}/DN_Team/all/null?page=${page}`, {
          headers: {
            Authorization: "Bearer " + auth,
          },
        });
        hacks = await res.data;
        console.log(hacks);
        for (let i = 0; i < hacks.final.length; i++) {
          if (hacks.final[i].participants.length == 1) {
            if (hacks.final[i].skills.length == 0) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:15px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 1) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 2) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 3) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button></span></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 4) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button></span></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 5) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 6) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 7) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 8) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
          }
          if (hacks.final[i].participants.length == 2) {
            if (hacks.final[i].skills.length == 0) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 1) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 2) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4' onclick='request()' value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 3) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 4) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 5) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 6) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4' onclick='request()' value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 7) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 8) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
          }
          if (hacks.final[i].participants.length == 3) {
            if (hacks.final[i].skills.length == 0) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 1) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 2) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 3) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 4) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 5) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 6) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 7) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 8) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
          }
          if (hacks.final[i].participants.length == 4) {
            if (hacks.final[i].skills.length == 0) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 1) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 2) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' style='margin-top:50px;'></div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 3) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 4) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 5) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good3'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 6) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good2'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 7) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
            if (hacks.final[i].skills.length == 8) {
              document.querySelector(".dam1").innerHTML +=
                "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
            }
          }
        }
      }
      catch (err) {
        console.log(err.response.status);
        if (err.response.status == 404) {
          swal("WARNING!!", "No Teams formed till now.", "warning");
        }

      }
    }
    init();
  }
})
  }
  else{
    console.log("Signed Out!!");
  }
});
}

displayTeams();

var n = 0;
app.addEventListener('click', function () {
  firebase.auth().currentUser.getIdToken().then((id) => {
    auth = id;
    if (n % 2 == 0) {
      document.getElementById("active1").className = "button1";
      document.getElementById("inactive1").className = "button";
      n = n + 1;
      var occurence = "appdev";
      var page = 1;
      displayTeams();
      var init = async function () {
        try {
          var res = await axios(`${url}/DN_Team/teamSkills/null?page=1&skill=${occurence}`, {
            headers: {
              Authorization: "Bearer " + auth,
            },
          });
          hackss = await res.data;
          if (hackss.length >= 9 && hackss.length <= 16) {
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 17 && hackss.length <= 24) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 25 && hackss.length <= 32) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 33 && hackss.length <= 40) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 41 && hackss.length <= 48) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 49 && hackss.length <= 56) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 57 && hackss.length <= 64) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 65 && hackss.length <= 72) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 73 && hackss.length <= 80) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
        }
        catch (err) {
          console.log(err.response.status);
        }
      }
      init();
      var height = document.body.clientHeight;
      console.log(height);
      if (height == document.body.clientHeight) {
        window.addEventListener('scroll', someFunction);
        function someFunction() {
          if (window.scrollY + window.innerHeight >= 700) {
            console.log(window.scrollY + window.innerHeight);
            displayTeams();
            window.removeEventListener('scroll', someFunction);
          }
        }
      }
      document.querySelector(".dam1").innerHTML = "";
      console.log(page);
      function displayTeams() {
        var hack_id = window.location.search.split("?")[1];
        var init = async function () {
          try {
            var res = await axios(`${url}/DN_Team/teamSkills/null?page=${page}&skill=${occurence}`, {
              headers: {
                Authorization: "Bearer " + auth,
              },
            });
            hacks = await res.data;
            console.log(hacks);
      for (let i = 0; i < hacks.final.length; i++) {
        if (hacks.final[i].participants.length == 1) {
          if (hacks.final[i].skills.length == 0) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:15px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 1) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 2) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 3) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button></span></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 4) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button></span></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 5) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 6) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 7) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 8) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
        }
        if (hacks.final[i].participants.length == 2) {
          if (hacks.final[i].skills.length == 0) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 1) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 2) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4' onclick='request()' value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 3) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 4) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 5) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 6) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4' onclick='request()' value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 7) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 8) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
        }
        if (hacks.final[i].participants.length == 3) {
          if (hacks.final[i].skills.length == 0) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 1) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 2) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 3) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 4) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 5) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 6) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 7) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 8) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
        }
        if (hacks.final[i].participants.length == 4) {
          if (hacks.final[i].skills.length == 0) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 1) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 2) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' style='margin-top:50px;'></div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 3) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 4) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 5) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good3'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 6) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good2'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 7) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
          if (hacks.final[i].skills.length == 8) {
            document.querySelector(".dam1").innerHTML +=
              "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
              "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
          }
        }
      }
    }
    catch (err) {
      console.log(err.response.status);
      if (err.response.status == 404) {
        swal("WARNING!!", "No Team has formed till now!!", "warning");
      }
    }
  }
  init();
}
}
    else {
      document.getElementById("active1").className = "button1";
      document.getElementById("inactive1").className = "button1";
      n = n + 1;
    }
  })
});
fweb.addEventListener('click', function () {
  firebase.auth().currentUser.getIdToken().then((id) => {
    auth = id;
    if (n % 2 == 0) {
      document.getElementById("active1").className = "button1";
      document.getElementById("inactive2").className = "button";
      n = n + 1;
      var occurence = "frontend";
      var page = 1;
      displayTeams();
      var init = async function () {
        try {
          var res = await axios(`${url}/DN_Team/teamSkills/null?page=1&skill=${occurence}`, {
            headers: {
              Authorization: "Bearer " + auth,
            },
          });
          hackss = await res.data;
          if (hackss.length >= 9 && hackss.length <= 16) {
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 17 && hackss.length <= 24) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 25 && hackss.length <= 32) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 33 && hackss.length <= 40) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 41 && hackss.length <= 48) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 49 && hackss.length <= 56) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 57 && hackss.length <= 64) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 65 && hackss.length <= 72) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 73 && hackss.length <= 80) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
        }
        catch (err) {
          console.log(err.response.status);
        }
      }
      init();
      var height = document.body.clientHeight;
      console.log(height);
      if (height == document.body.clientHeight) {
        window.addEventListener('scroll', someFunction);
        function someFunction() {
          if (window.scrollY + window.innerHeight >= 3106) {
            console.log(window.scrollY + window.innerHeight);
            displayTeams();
            window.removeEventListener('scroll', someFunction);
          }
        }
      }
      document.querySelector(".dam1").innerHTML = "";
      console.log(page);
      function displayTeams() {
        var hack_id = window.location.search.split("?")[1];
        var init = async function () {
          try {
            var res = await axios(`${url}/DN_Team/teamSkills/null?page=${page}&skill=${occurence}`, {
              headers: {
                Authorization: "Bearer " + auth,
              },
            });
            hacks = await res.data;
            console.log(hacks);
            for (let i = 0; i < hacks.final.length; i++) {
              if (hacks.final[i].participants.length == 1) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:15px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button></span></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button></span></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
              if (hacks.final[i].participants.length == 2) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4' onclick='request()' value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4' onclick='request()' value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
              if (hacks.final[i].participants.length == 3) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
              if (hacks.final[i].participants.length == 4) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' style='margin-top:50px;'></div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good3'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good2'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
            }
          }
          catch (err) {
            console.log(err.response.status);
            if (err.response.status == 404) {
              swal("WARNING!!", "No Team has formed till now!!", "warning");
            }
          }
        }
        init();
      }
    }
    else {
      document.getElementById("active1").className = "button1";
      document.getElementById("inactive2").className = "button1";
      n = n + 1;
    }
  })
});
bweb.addEventListener('click', function () {
  firebase.auth().currentUser.getIdToken().then((id) => {
    auth = id;
    if (n % 2 == 0) {
      document.getElementById("active1").className = "button1";
      document.getElementById("inactive3").className = "button";
      n = n + 1;
      var occurence = "backend";
      var page = 1;
      displayTeams();
      var init = async function () {
        try {
          var res = await axios(`${url}/DN_Team/teamSkills/null?page=1&skill=${occurence}`, {
            headers: {
              Authorization: "Bearer " + auth,
            },
          });
          hackss = await res.data;
          if (hackss.length >= 9 && hackss.length <= 16) {
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 17 && hackss.length <= 24) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 25 && hackss.length <= 32) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 33 && hackss.length <= 40) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 41 && hackss.length <= 48) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 49 && hackss.length <= 56) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 57 && hackss.length <= 64) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 65 && hackss.length <= 72) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 73 && hackss.length <= 80) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
        }
        catch (err) {
          console.log(err.response.status);
        }
      }
      init();
      var height = document.body.clientHeight;
      console.log(height);
      if (height == document.body.clientHeight) {
        window.addEventListener('scroll', someFunction);
        function someFunction() {
          if (window.scrollY + window.innerHeight >= 3106) {
            console.log(window.scrollY + window.innerHeight);
            displayTeams();
            window.removeEventListener('scroll', someFunction);
          }
        }
      }
      document.querySelector(".dam1").innerHTML = "";
      console.log(page);
      function displayTeams() {
        var hack_id = window.location.search.split("?")[1];
        var init = async function () {
          try {
            var res = await axios(`${url}/DN_Team/teamSkills/null?page=${page}&skill=${occurence}`, {
              headers: {
                Authorization: "Bearer " + auth,
              },
            });
            hacks = await res.data;
            console.log(hacks);
            for (let i = 0; i < hacks.final.length; i++) {
              if (hacks.final[i].participants.length == 1) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:15px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button></span></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button></span></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
              if (hacks.final[i].participants.length == 2) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4' onclick='request()' value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4' onclick='request()' value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
              if (hacks.final[i].participants.length == 3) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
              if (hacks.final[i].participants.length == 4) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' style='margin-top:50px;'></div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good3'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good2'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
            }
          }
          catch (err) {
            console.log(err.response.status);
            if (err.response.status == 404) {
              swal("WARNING!!", "No Team has formed till now!!", "warning");
            }
          }
        }
        init();
      }
    }
    else {
      document.getElementById("active1").className = "button1";
      document.getElementById("inactive3").className = "button1";
      n = n + 1;
    }
  })
});
ml.addEventListener('click', function () {
  firebase.auth().currentUser.getIdToken().then((id) => {
    auth = id;
    if (n % 2 == 0) {
      document.getElementById("active1").className = "button1";
      document.getElementById("inactive4").className = "button";
      n = n + 1;
      var occurence = "ml";
      var page = 1;
      displayTeams();
      var init = async function () {
        try {
          var res = await axios(`${url}/DN_Team/teamSkills/null?page=1&skill=${occurence}`, {
            headers: {
              Authorization: "Bearer " + auth,
            },
          });
          hackss = await res.data;
          if (hackss.length >= 9 && hackss.length <= 16) {
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 17 && hackss.length <= 24) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 25 && hackss.length <= 32) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 33 && hackss.length <= 40) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 41 && hackss.length <= 48) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 49 && hackss.length <= 56) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 57 && hackss.length <= 64) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 65 && hackss.length <= 72) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 73 && hackss.length <= 80) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
        }
        catch (err) {
          console.log(err.response.status);
        }
      }
      init();
      var height = document.body.clientHeight;
      console.log(height);
      if (height == document.body.clientHeight) {
        window.addEventListener('scroll', someFunction);
        function someFunction() {
          if (window.scrollY + window.innerHeight >= 3107) {
            console.log(window.scrollY + window.innerHeight);
            displayTeams();
            window.removeEventListener('scroll', someFunction);
          }
        }
      }
      document.querySelector(".dam1").innerHTML = "";
      console.log(page);
      function displayTeams() {
        var hack_id = window.location.search.split("?")[1];
        var init = async function () {
          try {
            var res = await axios(`${url}/DN_Team/teamSkills/null?page=${page}&skill=${occurence}`, {
              headers: {
                Authorization: "Bearer " + auth,
              },
            });
            hacks = await res.data;
            console.log(hacks);
            for (let i = 0; i < hacks.final.length; i++) {
              if (hacks.final[i].participants.length == 1) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:15px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button></span></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button></span></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
              if (hacks.final[i].participants.length == 2) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4' onclick='request()' value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4' onclick='request()' value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
              if (hacks.final[i].participants.length == 3) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
              if (hacks.final[i].participants.length == 4) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' style='margin-top:50px;'></div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good3'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good2'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
            }
          }
          catch (err) {
            console.log(err.response.status);
            if (err.response.status == 404) {
              swal("WARNING!!", "No Team has formed till now!!", "warning");
            }
          }
        }
        init();
      }
    }
    else {
      document.getElementById("active1").className = "button1";
      document.getElementById("inactive4").className = "button1";
      n = n + 1;
    }
  })
});
design.addEventListener('click', function () {
  firebase.auth().currentUser.getIdToken().then((id) => {
    auth = id;
    if (n % 2 == 0) {
      document.getElementById("active1").className = "button1";
      document.getElementById("inactive5").className = "button";
      n = n + 1;
      var occurence = "ui/ux";
      var page = 1;
      displayTeams();
      var init = async function () {
        try {
          var res = await axios(`${url}/DN_Team/teamSkills/null?page=1&skill=${occurence}`, {
            headers: {
              Authorization: "Bearer " + auth,
            },
          });
          hackss = await res.data;
          if (hackss.length >= 9 && hackss.length <= 16) {
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 17 && hackss.length <= 24) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 25 && hackss.length <= 32) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 33 && hackss.length <= 40) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 41 && hackss.length <= 48) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 49 && hackss.length <= 56) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 57 && hackss.length <= 64) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 65 && hackss.length <= 72) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 73 && hackss.length <= 80) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
        }
        catch (err) {
          console.log(err.response.status);
        }
      }
      init();
      var height = document.body.clientHeight;
      console.log(height);
      if (height == document.body.clientHeight) {
        window.addEventListener('scroll', someFunction);
        function someFunction() {
          if (window.scrollY + window.innerHeight >= 3106) {
            console.log(window.scrollY + window.innerHeight);
            displayTeams();
            window.removeEventListener('scroll', someFunction);
          }
        }
      }
      document.querySelector(".dam1").innerHTML = "";
      console.log(page);
      function displayTeams() {
        var hack_id = window.location.search.split("?")[1];
        var init = async function () {
          try {
            var res = await axios(`${url}/DN_Team/teamSkills/null?page=${page}&skill=${occurence}`, {
              headers: {
                Authorization: "Bearer " + auth,
              },
            });
            hacks = await res.data;
            console.log(hacks);
            for (let i = 0; i < hacks.final.length; i++) {
              if (hacks.final[i].participants.length == 1) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:15px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button></span></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button></span></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
              if (hacks.final[i].participants.length == 2) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4' onclick='request()' value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4' onclick='request()' value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
              if (hacks.final[i].participants.length == 3) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
              if (hacks.final[i].participants.length == 4) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' style='margin-top:50px;'></div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good3'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good2'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
            }
          }
          catch (err) {
            console.log(err.response.status);
            if (err.response.status == 404) {
              swal("WARNING!!", "No Team has formed till now!!", "warning");
            }
          }
        }
        init();
      }
    }
    else {
      document.getElementById("active1").className = "button1";
      document.getElementById("inactive5").className = "button1";
      n = n + 1;
    }
  })
});
mgmt.addEventListener('click', function () {
  firebase.auth().currentUser.getIdToken().then((id) => {
    auth = id;
    if (n % 2 == 0) {
      document.getElementById("active1").className = "button1";
      document.getElementById("inactive6").className = "button";
      n = n + 1;
      var occurence = "management";
      var page = 1;
      displayTeams();
      var init = async function () {
        try {
          var res = await axios(`${url}/DN_Team/teamSkills/null?page=1&skill=${occurence}`, {
            headers: {
              Authorization: "Bearer " + auth,
            },
          });
          hackss = await res.data;
          if (hackss.length >= 9 && hackss.length <= 16) {
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 17 && hackss.length <= 24) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 25 && hackss.length <= 32) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 33 && hackss.length <= 40) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 41 && hackss.length <= 48) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 49 && hackss.length <= 56) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 57 && hackss.length <= 64) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 65 && hackss.length <= 72) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 73 && hackss.length <= 80) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
        }
        catch (err) {
          console.log(err.response.status);
        }
      }
      init();
      var height = document.body.clientHeight;
      console.log(height);
      if (height == document.body.clientHeight) {
        window.addEventListener('scroll', someFunction);
        function someFunction() {
          if (window.scrollY + window.innerHeight >= 3106) {
            console.log(window.scrollY + window.innerHeight);
            displayTeams();
            window.removeEventListener('scroll', someFunction);
          }
        }
      }
      document.querySelector(".dam1").innerHTML = "";
      console.log(page);
      function displayTeams() {
        var hack_id = window.location.search.split("?")[1];
        var init = async function () {
          try {
            var res = await axios(`${url}/DN_Team/teamSkills/null?page=${page}&skill=${occurence}`, {
              headers: {
                Authorization: "Bearer " + auth,
              },
            });
            hacks = await res.data;
            console.log(hacks);
            for (let i = 0; i < hacks.final.length; i++) {
              if (hacks.final[i].participants.length == 1) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:15px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button></span></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button></span></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
              if (hacks.final[i].participants.length == 2) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4' onclick='request()' value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4' onclick='request()' value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
              if (hacks.final[i].participants.length == 3) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
              if (hacks.final[i].participants.length == 4) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' style='margin-top:50px;'></div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good3'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good2'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
            }
          }
          catch (err) {
            console.log(err.response.status);
            if (err.response.status == 404) {
              swal("WARNING!!", "No Team has formed till now!!", "warning");
            }
          }
        }
        init();
      }

    }
    else {
      document.getElementById("active1").className = "button1";
      document.getElementById("inactive6").className = "button1";
      n = n + 1;
    }
  })
});
block.addEventListener('click', function () {
  firebase.auth().currentUser.getIdToken().then((id) => {
    auth = id;
    if (n % 2 == 0) {
      document.getElementById("active1").className = "button1";
      document.getElementById("inactive7").className = "button";
      n = n + 1;
      var occurence = "blockchain";
      var page = 1;
      displayTeams();
      var init = async function () {
        try {
          var res = await axios(`${url}/DN_Team/teamSkills/null?page=1&skill=${occurence}`, {
            headers: {
              Authorization: "Bearer " + auth,
            },
          });
          hackss = await res.data;
          if (hackss.length >= 9 && hackss.length <= 16) {
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 17 && hackss.length <= 24) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 25 && hackss.length <= 32) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 33 && hackss.length <= 40) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 41 && hackss.length <= 48) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 49 && hackss.length <= 56) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 57 && hackss.length <= 64) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 65 && hackss.length <= 72) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 73 && hackss.length <= 80) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
        }
        catch (err) {
          console.log(err.response.status);
        }
      }
      init();
      var height = document.body.clientHeight;
      console.log(height);
      if (height == document.body.clientHeight) {
        window.addEventListener('scroll', someFunction);
        function someFunction() {
          if (window.scrollY + window.innerHeight >= 3106) {
            console.log(window.scrollY + window.innerHeight);
            displayTeams();
            window.removeEventListener('scroll', someFunction);
          }
        }
      }
      document.querySelector(".dam1").innerHTML = "";
      console.log(page);
      function displayTeams() {
        var hack_id = window.location.search.split("?")[1];
        var init = async function () {
          try {
            var res = await axios(`${url}/DN_Team/teamSkills/null?page=${page}&skill=${occurence}`, {
              headers: {
                Authorization: "Bearer " + auth,
              },
            });
            hacks = await res.data;
            console.log(hacks);
            for (let i = 0; i < hacks.final.length; i++) {
              if (hacks.final[i].participants.length == 1) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:15px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button></span></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button></span></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
              if (hacks.final[i].participants.length == 2) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4' onclick='request()' value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4' onclick='request()' value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
              if (hacks.final[i].participants.length == 3) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
              if (hacks.final[i].participants.length == 4) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' style='margin-top:50px;'></div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good3'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good2'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
            }
          }
          catch (err) {
            console.log(err.response.status);
            if (err.response.status == 404) {
              swal("WARNING!!", "No Team has formed till now!!", "warning");
            }
          }
        }
        init();
      }
    }
    else {
      document.getElementById("active1").className = "button1";
      document.getElementById("inactive7").className = "button1";
      n = n + 1;
    }
  })
});
function myFunction(){
  var nk = 0;
  const cards = document.querySelectorAll("#good");
  cards.forEach(card => card.addEventListener('click', look));
  console.log(cards);
  function look(){
    console.log(" i was clicked");
    console.log(this);
    nk = nk + 1; 
    if(nk == 1){ 
    var team_id = this.querySelector("#team-id").textContent;
    console.log(team_id);
  var dots = this.querySelector("#dots");
  var moreText = this.querySelector("#more");
  var btnText = this.querySelector("#myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    btnText.innerHTML = "See more";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    btnText.style.display = "none";
  }
}
}
}
function myFunction1(){
  var nk1 = 0;
  const cards1 = document.querySelectorAll("#good1");
  cards1.forEach(card1 => card1.addEventListener('click', look1));
  console.log(cards1);
  function look1(){
    console.log(" i was clicked");
    console.log(this);
    nk1 = nk1 + 1; 
    if(nk1 == 1){ 
    var team_id_1 = this.querySelector("#team-id-1").textContent;
    console.log(team_id_1);
  var dots1 = this.querySelector("#dots1");
  var moreText1 = this.querySelector("#more1");
  var btnText1 = this.querySelector("#myBtn1");

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    moreText1.style.display = "none";
    btnText1.innerHTML = "See more";
  } else {
    dots1.style.display = "none";
    moreText1.style.display = "inline";
    btnText1.style.display = "none";
  }
}
}
}
function myFunction2(){
  var nk2 = 0;
  const cards2 = document.querySelectorAll("#good2");
  cards2.forEach(card2 => card2.addEventListener('click', look2));
  console.log(cards2);
  function look2(){
    console.log(" i was clicked");
    console.log(this);
    nk2 = nk2 + 1; 
    if(nk2 == 1){ 
    var team_id_2 = this.querySelector("#team-id-2").textContent;
    console.log(team_id_2);
  var dots2 = this.querySelector("#dots2");
  var moreText2 = this.querySelector("#more2");
  var btnText2 = this.querySelector("#myBtn2");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    moreText2.style.display = "none";
    btnText2.innerHTML = "See more";
  } else {
    dots2.style.display = "none";
    moreText2.style.display = "inline";
    btnText2.style.display = "none";
  }
}
}
}
function myFunction3(){
  var nk3 = 0;
  const cards3 = document.querySelectorAll("#good3");
  cards3.forEach(card3 => card3.addEventListener('click', look3));
  console.log(cards3);
  function look3(){
    console.log(" i was clicked");
    console.log(this);
    nk3 = nk3 + 1; 
    if(nk3 == 1){ 
    var team_id_3 = this.querySelector("#team-id-3").textContent;
    console.log(team_id_3);
  var dots3 = this.querySelector("#dots3");
  var moreText3 = this.querySelector("#more3");
  var btnText3 = this.querySelector("#myBtn3");

  if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    moreText3.style.display = "none";
    btnText3.innerHTML = "See more";
  } else {
    dots3.style.display = "none";
    moreText3.style.display = "inline";
    btnText3.style.display = "none";
  }
}
}
}
cyber.addEventListener('click', function () {
  firebase.auth().currentUser.getIdToken().then((id) => {
    auth = id;
    if (n % 2 == 0) {
      document.getElementById("active1").className = "button1";
      document.getElementById("inactive8").className = "button";
      n = n + 1;
      var occurence = "cybersecurity";
      var page = 1;
      displayTeams();
      var init = async function () {
        try {
          var res = await axios(`${url}/DN_Team/teamSkills/null?page=1&skill=${occurence}`, {
            headers: {
              Authorization: "Bearer " + auth,
            },
          });
          hackss = await res.data;
          if (hackss.length >= 9 && hackss.length <= 16) {
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 17 && hackss.length <= 24) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 25 && hackss.length <= 32) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 33 && hackss.length <= 40) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 41 && hackss.length <= 48) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 49 && hackss.length <= 56) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 57 && hackss.length <= 64) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 65 && hackss.length <= 72) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
          else if (hackss.length >= 73 && hackss.length <= 80) {
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
            displayTeams();
            page = page + 1;
            console.log(page);
          }
        }
        catch (err) {
          console.log(err.response.status);
        }
      }
      init();
      var height = document.body.clientHeight;
      console.log(height);
      if (height == document.body.clientHeight) {
        window.addEventListener('scroll', someFunction);
        function someFunction() {
          if (window.scrollY + window.innerHeight >= 2900) {
            console.log(window.scrollY + window.innerHeight);
            displayTeams();
            window.removeEventListener('scroll', someFunction);
          }
        }
      }
      document.querySelector(".dam1").innerHTML = "";
      console.log(page);
      function displayTeams() {
        var hack_id = window.location.search.split("?")[1];
        var init = async function () {
          try {
            var res = await axios(`${url}/DN_Team/teamSkills/null?page=${page}&skill=${occurence}`, {
              headers: {
                Authorization: "Bearer " + auth,
              },
            });
            hacks = await res.data;
            console.log(hacks);
            for (let i = 0; i < hacks.final.length; i++) {
              if (hacks.final[i].participants.length == 1) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:15px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button></span></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button></span></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
              if (hacks.final[i].participants.length == 2) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4' onclick='request()' value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4' onclick='request()' value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
              if (hacks.final[i].participants.length == 3) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
              if (hacks.final[i].participants.length == 4) {
                if (hacks.final[i].skills.length == 0) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' style='margin-top:50px;'></div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good3'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good2'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".dam1").innerHTML +=
                    "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                    "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
                }
              }
            }
          }
          catch (err) {
            console.log(err.response.status);
            if (err.response.status == 404) {
              swal("WARNING!!", "No Team has formed till now!!", "warning");
            }

          }
        }
        init();
      }
    }
    else {
      document.getElementById("active1").className = "button1";
      document.getElementById("inactive8").className = "button1";
      n = n + 1;
    }
  })
});
all.addEventListener('click', function () {
  document.getElementById("active1").className = "button";
  document.getElementById("inactive1").className = "button1";
  document.getElementById("inactive2").className = "button1";
  document.getElementById("inactive3").className = "button1";
  document.getElementById("inactive4").className = "button1";
  document.getElementById("inactive5").className = "button1";
  document.getElementById("inactive6").className = "button1";
  document.getElementById("inactive7").className = "button1";
  document.getElementById("inactive8").className = "button1";

  firebase.auth().currentUser.getIdToken().then((id) => {
    auth = id;
    var page = 1;
    displayTeams();
    var init = async function () {
      try {
        var res = await axios(`${url}/DN_Team/all/null?page=1`, {
          headers: {
            Authorization: "Bearer " + auth,
          },
        });
        hackss = await res.data;
        if (hackss.length >= 9 && hackss.length <= 16) {
          page = page + 1;
          console.log(page);
        }
        else if (hackss.length >= 17 && hackss.length <= 24) {
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
        }
        else if (hackss.length >= 25 && hackss.length <= 32) {
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
        }
        else if (hackss.length >= 33 && hackss.length <= 40) {
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
        }
        else if (hackss.length >= 41 && hackss.length <= 48) {
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
        }
        else if (hackss.length >= 41 && hackss.length <= 48) {
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
        }
        else if (hackss.length >= 49 && hackss.length <= 56) {
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
        }
        else if (hackss.length >= 57 && hackss.length <= 64) {
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
        }
        else if (hackss.length >= 65 && hackss.length <= 72) {
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
        }
        else if (hackss.length >= 73 && hackss.length <= 80) {
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
        }
        else if (hackss.length >= 81 && hackss.length <= 88) {
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
        }
        else if (hackss.length >= 89 && hackss.length <= 96) {
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
        }
        else if (hackss.length >= 97 && hackss.length <= 104) {
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
        }
        else if (hackss.length >= 105 && hackss.length <= 112) {
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);        
          displayTeams();
          page = page + 1;
          console.log(page);        
          displayTeams();
          page = page + 1;
          console.log(page);        
          displayTeams();
          page = page + 1;
          console.log(page);
        }
        else if (hackss.length >=113 && hackss.length <= 120) {
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
          displayTeams();
          page = page + 1;
          console.log(page);
        }
      }
      catch (err) {
        console.log(err.response.status);
      }
    }
    init();
    var height = document.body.clientHeight;
    console.log(height);
    if (height == document.body.clientHeight) {
      window.addEventListener('scroll', someFunction);
      function someFunction() {
        if (window.scrollY + window.innerHeight >= 3100) {
          console.log(window.scrollY + window.innerHeight);
          window.removeEventListener('scroll', someFunction);
        }
      }
    }
    document.querySelector(".dam1").innerHTML = "";
    console.log(page);
    function displayTeams() {
      var hack_id = window.location.search.split("?")[1];
      var init = async function () {
        try {
          var res = await axios(`${url}/DN_Team/all/null?page=${page}`, {
            headers: {
              Authorization: "Bearer " + auth,
            },
          });
          hacks = await res.data;
          console.log(hacks);
          for (let i = 0; i < hacks.final.length; i++) {
            if (hacks.final[i].participants.length == 1) {
              if (hacks.final[i].skills.length == 0) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:15px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 1) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 2) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 3) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button></span></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 4) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button></span></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 5) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 6) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 7) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 8) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
            }
            if (hacks.final[i].participants.length == 2) {
              if (hacks.final[i].skills.length == 0) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 1) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 2) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4' onclick='request()' value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 3) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 4) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 5) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 6) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4' onclick='request()' value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 7) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 8) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
            }
            if (hacks.final[i].participants.length == 3) {
              if (hacks.final[i].skills.length == 0) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 1) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 2) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 3) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 4) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 5) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good3' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 6) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good2' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 7) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 8) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='good' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
            }
            if (hacks.final[i].participants.length == 4) {
              if (hacks.final[i].skills.length == 0) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 1) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button></div></div><div class='row' style='margin-top:50px;'></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 2) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' style='margin-top:50px;'></div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 3) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 4) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[3].skill + "</h6></button></div></div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 5) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good3'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn3' style='color:white; cursor:pointer;' onclick='myFunction3()'>See More<span id='dots3'>...</span></h4><span id = 'more3'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button></span></div></div><div class='row' id='team-id-3' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 6) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good2'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn2' style='color:white; cursor:pointer;' onclick='myFunction2()'>See More<span id='dots2'>...</span></h4><span id = 'more2'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button></span></div></div><div class='row' id='team-id-2' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 7) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn1' style='color:white; cursor:pointer;' onclick='myFunction1()'>See More<span id='dots1'>...</span></h4><span id = 'more1'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button></span></div></div><div class='row' id='team-id-1' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
              if (hacks.final[i].skills.length == 8) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1' id='goods' id='good'><div class='card-body'><h3 class='text13' id='team1'>" + hacks.final[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks.final[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[0].photo+"' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks.final[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[1].photo+"' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks.final[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[2].photo+"' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='"+hacks.final[i].participants[3].photo+"' class='Image4'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks.final[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks.final[i].skills[1].skill + "</h6></button><h4 id='myBtn' style='color:white; cursor:pointer;' onclick='myFunction()'>See More<span id='dots'>...</span></h4><span id = 'more'><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks.final[i].skills[7].skill + "</h6></button></span></div></div><div class='row' id='team-id' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row' id='team-ids' style='display:none;'>"+hacks.final[i].team._id+"</div><div class='row'><input type='submit' class='button4'  onclick='request()'value='Request to Join'></div></div><div class='empty'></div></div></div>";
              }
            }
          }
        }
        catch (err) {
          console.log(err.response.status);
          if (err.response.status == 404) {
            swal("WARNING!!", "No Team has formed till now!!", "warning");
          }

        }
      }
      init();
    }
  })

  // document.querySelector(".dam1").innerHTML = "";
});

$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerl.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});

function allow() {
  firebase.auth().currentUser.getIdToken().then((id) => {
    auth = id;
    // var team_id = teams[0].team._id;
    var team_id = hacks[0].team._id;
    console.log(team_id);
    axios
      .post(
        `${url}/requests/request/${team_id}`,
        {
          code: request,
        },
        {
          headers: {
            Authorization: "Bearer " + auth,
          },
        }
      )
      .then((response) => {
        accept = response.data;
        console.log(accept);
        swal("SUCCESS!!", "Your request has been submitted successfully", "success");
      })
      .catch((error) => {
        console.error("Error:", error);
        console.log(error.response.status);
        if (error.response.status == 409) {
          swal("WARNING!!", "Request to join this team has already been sent.", "warning");
        }
      });
  })
}

document.getElementById("search").addEventListener("keyup", function (event) {
  event.preventDefault();
  firebase.auth().currentUser.getIdToken().then((id) => {
    auth = id;
    if (event.keyCode === 13) {
      axios(`${url}/DN_Team/teamName/null`, {
        headers: {
          Authorization: "Bearer " + auth,
        },
        params: {
          name: document.getElementById("search").value,
          // name: "DEF",
        },
      })
        .then((response) => {
          hacks = response.data;
          console.log(hacks);
          document.querySelector(".dam1").innerHTML = "";
          for (let i = 0; i < hacks.length; i++) {
            if (hacks[i].participants.length == 1) {
              if (hacks[i].skills.length == 0) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:15px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row'><input type='submit' onclick='allow()' class='button4' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 1) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 2) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[1].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 3) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[2].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4'  onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 4) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[3].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4'  onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 5) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[4].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 6) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[5].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 7) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[6].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 8) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text21'>" + hacks[i].skills[7].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
            }
            if (hacks[i].participants.length == 2) {
              if (hacks[i].skills.length == 0) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 1) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 2) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[1].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 3) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[2].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 4) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[3].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 5) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[4].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 6) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[5].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 7) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[6].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 8) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks[i].participants[1].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[7].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
            }
            if (hacks[i].participants.length == 3) {
              if (hacks[i].skills.length == 0) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp3.svg' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 1) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp3.svg' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 2) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp3.svg' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[1].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 3) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp3.svg' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[2].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 4) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp3.svg' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[3].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 5) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp3.svg' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[4].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 6) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp3.svg' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[5].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 7) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp3.svg' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[6].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 8) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp3.svg' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks[i].participants[2].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[7].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
            }
            if (hacks[i].participants.length == 4) {
              if (hacks[i].skills.length == 0) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp3.svg' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp3.svg' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><h3 style='color:white; font-size:20px; font-family: Nunito Sans; margin-top: 17px;'>No Skills Required</h3></div></div><div class='row'><input type='submit' class='button4'  onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 1) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp3.svg' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp3.svg' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 2) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp3.svg' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp3.svg' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[1].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 3) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp3.svg' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp3.svg' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[2].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 4) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp3.svg' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp3.svg' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[3].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 5) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp3.svg' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp3.svg' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[4].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 6) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp3.svg' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp3.svg' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[5].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 7) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp3.svg' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp3.svg' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[6].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
              if (hacks[i].skills.length == 8) {
                document.querySelector(".dam1").innerHTML +=
                  "<div class='col-lg-6 md-12 col-12'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>" + hacks[i].team.name + "</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>" + hacks[i].participants.length +
                  "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>" + hacks[i].participants[0].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>" + hacks[i].participants[1].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp3.svg' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks[i].participants[2].name + "</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp3.svg' class='Image3'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text18'>" + hacks[i].participants[3].name + "</h5></div></div></div></div></div><div class='row'><div class='col-lg-4 col-md-4 col-4'><h3 class='text19'>Skills required :</h3></div><div class='col-lg-8 col-md-8 col-8'><button class='button3'><h6 class='text20'>" + hacks[i].skills[0].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[1].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[2].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[3].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[4].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[5].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[6].skill + "</h6></button><button class='button3'><h6 class='text20'>" + hacks[i].skills[7].skill + "</h6></button></div></div><div class='row'><input type='submit' class='button4' onclick='allow()' value='Request to Join'></div></div><div class='empty'></div></div></div></div>";
              }
            }
          }
        })
        .catch(e => {
          console.log(e);
          console.log(e.response.status);
          if (e.response.status == 404) {
            swal("WARNING!!", "There is no such team.", "warning");
          }
        });
    }
  })
});

function join() {
  firebase.auth().currentUser.getIdToken().then((id) => {
    auth = id;
    code = document.getElementById("enter_code").value;
    console.log(code);
    axios
      .post(
        `${url}/DN_Team/code/null`,
        {
          code: code,
        },
        {
          headers: {
            Authorization: "Bearer " + auth,
          },
        }
      )
      .then((response) => {
        hack = response.data;
        console.log(hack);
        swal("SUCCESS!!", "You have joined the team successfully.", "success");
      })
      .catch((error) => {
        console.error("Error:", error);
        if (error.response.status == 403) {
          swal("WARNING!!", "You have already joined the team.", "warning")
        }
      });
  })
}

function request() {
  // id.innerHTML = "Ooops!";
  var nk = 0;
    const cards = document.querySelectorAll("#goods");
    cards.forEach(card => card.addEventListener('click', look));
    console.log(cards);
    console.log(nk);
    function look() {
      console.log(this);
      nk = nk + 1; 
      if(nk == 1){     
      var team_id = this.querySelector("#team-ids").textContent;
      console.log(team_id);
      firebase.auth().currentUser.getIdToken().then((id) => {
        auth = id;
      axios
        .post(
          `${url}/requests/request/${team_id}`,
          {
            code: request,
          },
          {
            headers: {
              Authorization: "Bearer " + auth,
            },
          }
        )
        .then((response) => {
          accept = response.data;
          console.log(accept);
          swal("SUCCESS!!", "Your request has been submitted successfully", "success");
        })
        .catch((error) => {
          console.error("Error:", error);
          console.log(error.response.status);
          if (error.response.status == 409) {
            swal("WARNING!!", "Request to join this team has already been sent.", "warning");
          }
        });
      })
    }
    }
}