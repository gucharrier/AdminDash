const chart2 = document.getElementById('chart2').getContext('2d');
const myChart2 = new Chart(chart2, {
    type: 'doughnut',
    data: {
        labels : ['tv','bureau','tablette','appareil photo','Pc portable','mobile','écran'],
        datasets: [{
            label: 'products',
            data: [60,40,20,50,80,90,30],
            backgroundColor: ['#b4eaf6','#efcfff','#ffe69c','#79dfc1','#ffd4cf','#e284ff','#a1c6f7','#g5hr6k','#111111','#aaaaaa']
        }]
    },
})