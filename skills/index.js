var xValues = ["Html", "Css", "Javascript", "React", "Git Github","sass"];
var yValues = [55, 49, 44, 24, 15 ,30,20];
var barColors = ["red", "green","blue","orange","brown","orenge","gray"];

new Chart("myChart", {
  type: "horizontalBar",
  data: {
  labels: xValues,
  datasets: [{
    backgroundColor: barColors,
    data: yValues
  }]
},
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "میزان تسلط به تکنلوژی های مختلف"
    },
    scales: {
      xAxes: [{ticks: {min: 0, max:100}}]
    }
  }
});