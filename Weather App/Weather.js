const Country = document.getElementById('Country')
const City = document.getElementById('City')
const check_weather = document.querySelector('.check_weather')
const temp = document.querySelector('.temp')
const pressure = document.querySelector('.pressure')
const humidity = document.querySelector('.humidity')
const sea_level = document.querySelector('.sea_level')
const sky=document.querySelector('.sky')
const icon=document.querySelector('.icon')

const Array_of_object = [
    {
        Country: 'Pakistan',
        City: 'Islamabad'
    },
    {
        Country: 'Pakistan',
        City: 'Lahore'
    },
    {
        Country: 'Pakistan',
        City: 'Karachi'
    },
    {
        Country: 'Pakistan',
        City: 'Multan'
    },
    {
        Country: 'Pakistan',
        City: 'Peshawar'
    },
    {
        Country: 'Pakistan',
        City: 'Faisalabad'
    },
    {
        Country: 'India',
        City: 'Delhi'
    },
    {
        Country: 'India',
        City: 'Kolkata'
    },
    {
        Country: 'India',
        City: 'Chennai'
    },
    {
        Country: 'India',
        City: 'Mumbai'
    },
    {
        Country: 'India',
        City: 'Jagdalpur'
    },
    {
        Country: 'India',
        City: 'Hyderabad'
    },
    {
        Country: 'Australia',
        City: 'Melbourne'
    },
    {
        Country: 'Australia',
        City: 'Sydney'
    },
    {
        Country: 'Australia',
        City: 'Adelaide'
    },
    {
        Country: 'Australia',
        City: 'Brisbane'
    },
    {
        Country: 'Australia',
        City: 'Perth'
    },
    {
        Country: 'Australia',
        City: 'Hobart'
    },
]

let get_value


Country.addEventListener('change', (e) => {
    get_value = e.target.value;
    if (get_value == 'Pakistan') {
        City.innerHTML = ''
        const Pakistan = Array_of_object.filter(x => x.Country == get_value)
        Pakistan.forEach(pak_items => {
            const option = document.createElement('option')
            City.appendChild(option)
            option.value = pak_items.City
            option.textContent = pak_items.City
        })

        const Pak_first_option = document.querySelector('#City option:nth-of-type(1)')
        Pak_first_option.setAttribute('selected', true)
    }
    else if (get_value == 'India') {
        City.innerHTML = ''
        const India = Array_of_object.filter(x => x.Country == get_value)
        India.forEach(ind_items => {
            const option = document.createElement('option')
            City.appendChild(option)
            option.value = ind_items.City
            option.textContent = ind_items.City
        })

        const ind_first_option = document.querySelector('#City option:nth-of-type(1)')
        ind_first_option.setAttribute('selected', true)
    }
    else {
        City.innerHTML = ''
        const Australia = Array_of_object.filter(x => x.Country == get_value)
        Australia.forEach(Aus_items => {
            const option = document.createElement('option')
            City.appendChild(option)
            option.value = Aus_items.City
            option.textContent = Aus_items.City
        })
        const Aus_first_option = document.querySelector('#City option:nth-of-type(1)')
        Aus_first_option.setAttribute('selected', true)
    }

})

async function fetdata(data1) {
    const api = 'd525cdac3ba2b237fe5ea6e0c9318c98';
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data1} &appid=${api}`);
    const res = await data.json()
    let temp1=res.main.temp - 273.15
    let floor=Math.floor(temp1)
    temp.textContent = `${floor}°C`
    icon.innerHTML=`<img src="https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png"></img>`
    sky.textContent=`${res.weather[0].description} `
    pressure.innerHTML = `Pressure: ${res.main.pressure} <br> Humidity:${res.main.humidity}`
 
}
check_weather.addEventListener('click', () => {
    fetdata(City.value)
})