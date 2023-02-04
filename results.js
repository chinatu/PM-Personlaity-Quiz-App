// import {High_Abstraction, Engineering_Facing, Bussiness_Facing, Low_Abstraction} from "./game.js"
var xValues = ["High Abstraction", "Engineering-Facing", "Bussiness-Facing ", "Low Abstraction"];
var yValues = [2,1,2,2];
// console.log(High_Abstraction)
// // var yValues = [High_Abstraction, Engineering_Facing, Bussiness_Facing, Low_Abstraction];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Your Product Manager Spectrum"
    }
  }
});

// const ctx = document.getElementById('myChart');

//   new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });

