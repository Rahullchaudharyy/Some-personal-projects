const indianStatesAndUTs = [
    { name: "Delhi" }, 
    { name: "Andhra Pradesh" },
    { name: "Arunachal Pradesh" },
    { name: "Assam" },
    { name: "Bihar" },
    { name: "Chhattisgarh" },
    { name: "Goa" },
    { name: "Gujarat" },
    { name: "Haryana" },
    { name: "Himachal Pradesh" },
    { name: "Jharkhand" },
    { name: "Karnataka" },
    { name: "Kerala" },
    { name: "Madhya Pradesh" },
    { name: "Maharashtra" },
    { name: "Manipur" },
    { name: "Meghalaya" },
    { name: "Mizoram" },
    { name: "Nagaland" },
    { name: "Odisha" },
    { name: "Punjab" },
    { name: "Rajasthan" },
    { name: "Sikkim" },
    { name: "Tamil Nadu" },
    { name: "Telangana" },
    { name: "Tripura" },
    { name: "Uttar Pradesh" },
    { name: "Uttarakhand" },
    { name: "West Bengal" },
    { name: "Andaman and Nicobar Islands" },
    { name: "Chandigarh" },
    { name: "Dadra and Nagar Haveli and Daman and Diu" },
    { name: "Lakshadweep" },
    { name: "Puducherry" },
    { name: "Ladakh" }, 
    { name: "Jammu and Kashmir" } 
];
// const APIkey = "aa53482faf2a769ff9c9d8cda1d9625a";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=aa53482faf2a769ff9c9d8cda1d9625a&q=`;
const searchbox = document.querySelector('#input');
const searchbtn = document.querySelector('.search-button');
const getbtn = document.querySelector('.Get-weather')
const thepic = document.querySelector('#Weather-pic')
const Options = document.querySelector('#City-select-tool')
const Rajya = document.querySelector('.City')
const suggestion = []


async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        document.querySelector('#Placename').innerHTML = data.name;
        document.querySelector('#Temprature').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('#humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('#wind').innerHTML = data.wind.speed + ' km/h';

        document.querySelector('#Whole-data').style.display = 'block'
        const Error = document.querySelector('#valid')
        Error.style.display = 'none'
    } catch (error) {
        const Error = document.querySelector('#valid')
        Error.style.display = 'block'
        document.querySelector('#Whole-data').style.display = 'none'

        console.error('There was a problem fetching the weather data:', error);
    }
}
indianStatesAndUTs.forEach(StateName => {
    Options.innerHTML += `<option class="City">${StateName.name}</option>`
})



searchbtn.addEventListener('click', () => {
    const Error = document.querySelector('#valid')
    
    if (!searchbox.value) {
        alert('Please enter the City/State name')
    }else{
        checkWeather(searchbox.value);
    }
});
getbtn.addEventListener('click', () => {
   
        const selectedOption = Options.value;
        searchbox.value = selectedOption;
        checkWeather(selectedOption);
        console.log(selectedOption);
    
});




