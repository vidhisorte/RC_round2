const submissionContent = [
  {
    Question: 1,
    Title: "Submission 1",
    Status: "50%",
    time: "20:15:27",
  },
  {
    Question: 1,
    Title: "Submission 2",
    Status: "40%",
    time: "20:15:27",
  },
  {
    Question: 2,
    Title: "Submission 3",
    Status: "30%",
    time: "20:15:27",
  },
  {
    Question: 3,
    Title: "Submission 4",
    Status: "20%",
    time: "20:15:27",
  },
  {
    Question: 4,
    Title: "Submission 5",
    Status: "10%",
    time: "20:15:27",
  },
  {
    Question: 2,
    Title: "Submission 6",
    Status: "25%",
    time: "20:15:27",
  },
  {
    Question: 1,
    Title: "Submission 1",
    Status: "50%",
    time: "20:15:27",
  },
  {
    Question: 5,
    Title: "Submission 2",
    Status: "40%",
    time: "20:15:27",
  },
  {
    Question: 3,
    Title: "Submission 4",
    Status: "20%",
    time: "20:15:27",
  },
  {
    Question: 4,
    Title: "Submission 5",
    Status: "10%",
    time: "20:15:27",
  },
  {
    Question: 1,
    Title: "Submission 1",
    Status: "50%",
    time: "20:15:27",
  },
  {
    Question: 1,
    Title: "Submission 2",
    Status: "40%",
    time: "20:15:27",
  },
  {
    Question: 2,
    Title: "Submission 3",
    Status: "30%",
    time: "20:15:27",
  },
  {
    Question: 3,
    Title: "Submission 4",
    Status: "20%",
    time: "20:15:27",
  },
  {
    Question: 4,
    Title: "Submission 5",
    Status: "10%",
    time: "20:15:27",
  },
  {
    Question: 1,
    Title: "Submission 1",
    Status: "50%",
    time: "20:15:27",
  },
  {
    Question: 1,
    Title: "Submission 2",
    Status: "40%",
    time: "20:15:27",
  },
  {
    Question: 2,
    Title: "Submission 3",
    Status: "30%",
    time: "20:15:27",
  },
  {
    Question: 3,
    Title: "Submission 4",
    Status: "20%",
    time: "20:15:27",
  },
  {
    Question: 4,
    Title: "Submission 5",
    Status: "10%",
    time: "20:15:27",
  },
];
Display(1);
function Display(Que) {
  document.getElementById("my_grid").innerHTML = "";
  const myobj = submissionContent.filter((obj) => obj.Question == Que);
  for (var i = 1; i <= 6; i++) {
    if (i == Que) {
      document.getElementById(`${i}`).style.backgroundColor = "#2ce6d9";
    } else {
      document.getElementById(`${i}`).style.backgroundColor = "inherit";
    }
  }
  if (myobj.length <= 6) {
    document.getElementById("myfooterid").style.position = "absolute";
  } else {
    document.getElementById("myfooterid").style.position = "relative";
  }
  if (myobj.length == 0) {
    document.getElementById("my_grid").style.display = "flex";
    document.getElementById("containerid").style.alignItems = "center";
    document.getElementById(
      "my_grid"
    ).innerHTML = `<h4 style=" color : white">It seems you have made no submission for this question!</h4>`;
  } else {
    myobj.map((obj) => {
      document.getElementById("my_grid").style.display = "grid";
      document.getElementById("containerid").style.cssText = `
        align-items:unset;
      `;
      document.getElementById("my_grid").innerHTML += `
      <div class="card my_card" style="width: 10vw;">
      <div class="card-header margin">
      ${obj.Title}
      </div>
      <ul class="list-group list-group-flush">
      <div class="subdiv">Status:${obj.Status}</div>
      <div class="subdiv">Time:${obj.time}</div>
      <div class="progress progress_div">
      <div class="progress-bar progress-bar-striped progress-bar-animated pg-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width:${obj.Status}"></div>
      </div>
      <button type="button" class="btn btn-success margin my-button">Attempt</button>
      </ul>
      </div>    
  `;
    });
  }
}
