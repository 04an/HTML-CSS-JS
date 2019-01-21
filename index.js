const body = document.querySelector('body')

const header = document.querySelector('header')

const footer = document.querySelector('footer')

const toggleBackgroundButton = document.querySelector('.toggle-background')

const weather = document.querySelector('.weather')

const elements =[header,footer]

const toggleBackground = () => {
    if (body.classList.contains("background-white")){
body.classList.remove("background-white");
body.classList.add("background-dark");

elements.forEach(element =>{
    element.classList.remove("background-blue");
    element.classList.add("background-yellow");
}) ;
}else{
    body.classList.remove("background-dark");
    body.classList.add("background-white");

    elements.forEach(element => {
        element.classList.remove("background-yellow");
        element.classList.add("background-blue");
        
    })
}
}
toggleBackgroundButton.addEventListener('click',toggleBackground);

fetch("https://api.openweathermap.org/data/2.5/weather?q=Szczecin,pl&units=metric&appid=d105c85a4c5a55658bfa658ad29687f0")
.then(response => response.json())
.then(data => {
weather.innerHTML =`Weather in ${data.name}, ${data.sys.country}, ${new Date().toLocaleDateString()}
<div class="weather-conditions"><img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="current weather icon"></img></div>
<span>Temperature: ${data.main.temp}&#8451:</span> pressure: ${data.main.pressure}kPa</span>`
})

// setInterval(fetchData, 6000000);




