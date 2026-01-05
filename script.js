function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Demo credentials
  if (email === "admin@gmail.com" && password === "12345") {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userEmail", email);
    window.location.href = "select-type.html";
  } else {
    document.getElementById("error").innerText =
      "Invalid email or password";
  }
}


function go(page) {
  window.location.href = page;
}

function setStandard(val) {
  localStorage.setItem("standard", val);
  val === "10th" ? go("interest.html") : go("group.html");
}

function setInterest(val) {
  localStorage.setItem("interest", val);
  go("quiz.html");
}

function quiz(skill) {
  localStorage.setItem("skill", skill);
  go("recommend.html");
}

function setGroup(group) {
  localStorage.setItem("group", group);
  go("recommend.html");
}

function setDegree(deg) {
  localStorage.setItem("degree", deg);
  go("recommend.html");
}

const result = document.getElementById("result");

if (result) {
  const standard = localStorage.getItem("standard");
  let courses = [];

  if (standard === "12th") {
    const data = {
      biology: ["MBBS", "BDS", "Nursing", "Pharmacy"],
      cs: ["B.Tech CSE", "AI & ML", "Web Development"],
      commerce: ["B.Com", "CA", "MBA"],
      arts: ["BA", "Design", "Journalism"]
    };
    courses = data[localStorage.getItem("group")];
  } else if (standard === "10th") {
    const data = {
      biology: ["MBBS", "Nursing", "Pharmacy"],
      maths: ["Engineering", "IT"],
      commerce: ["B.Com", "MBA"],
      arts: ["Fine Arts", "Design"]
    };
    courses = data[localStorage.getItem("skill")];
  } else {
    const data = {
      engineering: ["Full Stack", "Cloud Computing", "AI"],
      science: ["Research", "Data Analysis"],
      commerce: ["Finance", "MBA Prep"],
      medical: ["Public Health", "Clinical Research"]
    };
    courses = data[localStorage.getItem("degree")];
  }

  courses.forEach(c => {
    result.innerHTML += `<div class="card">${c}</div>`;
  });
}
