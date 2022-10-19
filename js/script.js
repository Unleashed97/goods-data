// form
const handleForm = () => {
    const formSubmitBtn = document.querySelector('.form__btn')

    formSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault()
    })
}
handleForm()

// labels
dates = ['26.01', '27.01', '28.01', '29.01', '30.01', '01.02', '02.02', '03.02', '04.02', '05.02', '06.02', '07.02', '08.02', '09.02', '10.02', '11.02', '12.02', '13.02', '14.02', '15.02', '16.02', '17.02', '18.02', '19.02', '20.02', '21.02', '22.02', '23.02', '24.02', '25.02']

// for random data generation
function createRandomNumber(min=1, max=10) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function fillDataGood(){
    let data = []
    for(let i =0; i< dates.length; i++){
        data.push(createRandomNumber())
    }
    return data
}

// color generation
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// chart
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dates,
        datasets: [{
            label: 'чайник заварочный',
            data: [null, 16, 17],
            borderColor: getRandomColor(),
            tension: 0.5
        }, {
            label: 'чайник заварочный стеклянный',
            data: fillDataGood(),
            borderColor: getRandomColor(),
            tension: 0.5
        },
        {
            label: 'заварочный чайник',
            data: fillDataGood(),
            borderColor: getRandomColor(),
            tension: 0.5
        },
        {
            label: 'заварочный чайник стекло',
            data: fillDataGood(),
            borderColor: getRandomColor(),
            tension: 0.5,
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            yAxis: {
              position: 'right',
              reverse: true
            },
            
          },
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                title: {
                    padding: 20,
                },
                labels: {
                    padding: 10,

                    usePointStyle: true,
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

// toggle cities
const toggleCities = () => {
    const goodRows = document.querySelectorAll('.good-row')

    goodRows.forEach(row => {
        row.addEventListener('click', ()=> {
            let parent = row

            function nextSibling(parent){
                let nextEl = parent.nextElementSibling

                if(nextEl && nextEl.classList.contains('good-city')){
                    nextEl.classList.toggle('hide')
                    nextSibling(nextEl)

                } 
                else return 
            }

            nextSibling(parent)
        })
    })

}
toggleCities()


const handleRemove = () => {
    const goodRemoveBtnList = document.querySelectorAll('.good-remove')

    goodRemoveBtnList.forEach(btn => btn.addEventListener('click', (e) => {
        e.stopPropagation()

        const serObj ={}
        const goodRow = btn.closest('.good-row')

        const art = goodRow.querySelector('.good-art')
        const name = goodRow.querySelector('.table__cell-name')

        serObj.art = art.innerText
        serObj.name = name.innerText

        console.log(serObj)

    }))

}

handleRemove()