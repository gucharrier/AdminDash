const chart1 = document.getElementById('chart1').getContext('2d');
const mychart1 = new Chart(chart1, {
    type: 'line',
    data: {
        labels: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
        datasets: [{
            label: 'Last week',
            backgroundColor: '#8c68cd',
            borderColor: '#8c68cd',
            data: [3000, 4000, 2500, 7000, 5000, 9000, 2000],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks:{
                    beginAtZero: true
                }
            }]
        }
    }
})