$(document).ready(function () {
    $("#nav").load("../Assets/Header/headerl.txt");
    $("#foobottom").load("../Assets/Footer/footer.txt");
  });
  randomId = localStorage.getItem("participant");
  axios(`${url}/projects/get/${randomId}`, {
    headers: {
      Authorization: "Bearer " + auth,
    },
  })
    .then((response) => {
      projects = response.data;
      console.log(projects);
      for (var i = 0; i < projects.individualProjects.length; i++) {
        document.querySelector(".projects").innerHTML +=
          "<div class='card'><a href='./Project_Profile.html?" +
          projects.individualProjects[i]._id +
          "' style='text-decoration: none;'><div class='card-body '><nbgre>" +
          projects.individualProjects[i].name +
          "</nbgre><div class='disc'>" +
          projects.individualProjects[i].description +
          "</div></div></a></div>";
      }
      for (var i = 0; i < projects.teams.length; i++) {
        document.querySelector(".projects").innerHTML +=
          "<div class='card'><a href='./Project_Profile.html" +
          projects.teams[i]._id +
          "' style='text-decoration: none;'><div class='card-body '><nbgre>" +
          projects.teams[i].name +
          "</nbgre><div class='disc'>" +
          projects.teams[i].description +
          "</div></div></a></div>";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  