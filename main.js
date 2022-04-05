let div = $('<div>hello world</div>');

let body = $('body');


body.append(div);

div.on('click',function(){
console.log('it is working');
});

let div2 = $('<div><canvas id="Chart1"></canvas></div>');

body.append(div2);


const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(243, 56, 122)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 33, 46, 92, 102, 105, 149],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('Chart1'),
    config
);


let div3 = $('<div>3rd Div</div>');
body.append(div3);
let canvas2 = $('<canvas id ="Chart2"></canvas>');
div3.append(canvas2);

const data2 = {
    labels: [
      'Red',
      'Green',
      'Yellow',
      'Grey',
      'Blue'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
};

const config2 = {
    type: 'polarArea',
    data: data2,
    options: {}
};

const myChart2 = new Chart(document.getElementById("Chart2"), config2);