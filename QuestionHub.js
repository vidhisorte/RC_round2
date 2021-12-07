const cardContent = [
  {
    Title: "Question 1",
    Accuracy: "50%",
  },
  {
    Title: "Question 2",
    Accuracy: "40%",
  },
  {
    Title: "Question 3",
    Accuracy: "30%",
  },
  {
    Title: "Question 4",
    Accuracy: "20%",
  },
  {
    Title: "Question 5",
    Accuracy: "10%",
  },
  {
    Title: "Question 6",
    Accuracy: "25%",
  },
];
function makeCard(obj) {
  const card = document.getElementById("my_grid");
  const prev = card.innerHTML;
  card.innerHTML = `${prev}
    <div class="card my_card" style="width: 10vw;">
  <div class="card-header margin">
    ${obj.Title}
  </div>
  <ul class="list-group list-group-flush">
  <div class="subdiv">Accuracy:${obj.Accuracy}</div>
  <div class="progress progress_div">
  <div class="progress-bar progress-bar-striped progress-bar-animated pg-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width:${obj.Accuracy}"></div>
</div>
<button type="button" class="btn btn-success margin attempt-button">Attempt</button>
  </ul>
</div>    
    
    `;
}
cardContent.map((value) => {
  makeCard(value);
});

