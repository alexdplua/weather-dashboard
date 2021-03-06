import moment from 'moment';

export const getChartSettings = data => {
    if (data.fetch  || !data.data) return null
    let labels = []
    let labelData = []
    let description = []



    for(let i = 0; i<7; i++){
        const item = data.data.data[i]
        labels.push(`${getDay(item.valid_date)}.${getMonth(item.valid_date)}`)
        labelData.push(item.temp.toFixed(0))
        description.push(item.weather.description)
    }



    return {
        type: 'line',
        data: {
            labels: labels,
            type: 'line',
            defaultFontFamily: 'Montserrat',
            datasets: [{
                label: 'Temperature',
                data: labelData,
                backgroundColor: 'transparent',
                borderColor: 'rgba(220,53,69,0.75)',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 10,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(220,53,69,0.75)',
                description: description
            }]
        },
        options: {
            responsive: true,

            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                footerFontColor: '#000',
                footerFontStyle: 'normal',
                footerFontSize: 12,
                footerFontFamily: 'Montserrat',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
                callbacks: {
                    footer: footerTooltip
                }
            },
            legend: {
                display: false,
                labels: {
                    usePointStyle: true,
                    fontFamily: 'Montserrat',
                },
            },
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Date'
                    }
                }],
                yAxes: [{
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Temperature'
                    }
                }]
            },
            title: {
                display: false,
                text: 'Normal Legend'
            }
        }
    }
}


export const getWidgetData = (forecast, date) => {
    if (forecast.fetch  || !forecast.data) return null
    console.log('fetch', forecast.fetch);
    let result ={}
    forecast.data.data.map((item) => {
        const itemDate = moment(item.valid_date)
        if(itemDate.year() === date.year()
        && itemDate.month() === date.month()
        && itemDate.date() === date.date()){
            result=Object.assign({}, item)
        }
    })
    result.city_name = forecast.data.city_name
    result.country_code = forecast.data.country_code
    console.log('result', result);
    return result
}

const getDay = day => {
    return moment(day).date()
}

const getHours = hours => {
    return moment(hours).hour()
}

export const getMonth = month => {
    const currentMonth = moment(month).month() + 1
    if (currentMonth > 9) return currentMonth
    return '0' + currentMonth
}

const footerTooltip = (tooltipItem, data) => {
    let result = null
    data.datasets[0].description.map((desc, index) => {
        if (tooltipItem[0].index === index) {
            result = desc
        }
    })
    return result
}


