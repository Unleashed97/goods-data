const handleForm = () => {
    const formSubmitBtn = document.querySelector('.form__btn')

    formSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault()
    })
}
handleForm()

dates = ['26.01', '27.01', '28.01', '29.01', '30.01', '01.02', '02.02', '03.02', '04.02', '05.02', '06.02', '07.02', '08.02', '09.02', '10.02', '11.02', '12.02', '13.02', '14.02', '15.02', '16.02', '17.02', '18.02', '19.02', '20.02', '21.02', '22.02', '23.02', '24.02', '25.02']

function createRandomNumber(min=1, max=10) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function fillDateGood(){
    let data = []
    for(let i =0; i< dates.length; i++){
        data.push(createRandomNumber())
    }
    return data
}

function Good(name){
    this.name = name
    this.dates = dates
    this.data = fillDateGood()
}

const obj1 = new Good('чайник заворочный')

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dates,
        datasets: [{
            label: 'чайник заварочный',
            data: fillDateGood(),
            backgroundColor: [
                'green'
            ],
            borderColor: [
                'green'
            ],
            borderWidth: 2,
            tension: 0.5
        }, {
            label: 'чайник заварочный стеклянный',
            data: fillDateGood(),
            backgroundColor: [
                'yellow',
            ],
            borderColor: [
                '#ddd',
            ],
            borderWidth: 2,
            tension: 0.5
        },
        {
            label: 'заварочный чайник',
            data: fillDateGood(),
            backgroundColor: [
                'blue'
            ],
            borderColor: [
                'blue'
            ],
            borderWidth: 2,
            tension: 0.5
        },
        {
            label: 'заварочный чайник стекло',
            data: fillDateGood(),
            backgroundColor: [
                'red',
            ],
            borderColor: [
                'red',
            ],
            borderWidth: 2,
            tension: 0.5,
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            yAxis: {
              position: 'right',
              reverse: true
            }
          },
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {

                    usePointStyle: true,
                    boxWidth: 3,

                    pointStyle: 'circle',

                }
            }
        }
    }
});

// table
const handleTable = () => {
    const cells = document.querySelectorAll('table td')

    cells.forEach(cell => {
        if(Number(cell.innerText) > 0 && Number(cell.innerText) <=5){
            cell.classList.add('green')
        }
        if(Number(cell.innerText) >= 6 && Number(cell.innerText) <=10){
            cell.classList.add('yellow')
        }
        if(Number(cell.innerText) >= 11){
            cell.classList.add('red')
        }
        if(cell.innerText === '-'){
            cell.classList.add('white')
        }
    })
}

handleTable()