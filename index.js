var pk = "485749bbc73d470d894fc934b62de254"
var ak = "e960b1584e7229fbd430c05fbc219085f10f7b2877558ce96623d506715a4570"
var units = `m`
document.getElementById("container").style.visibility = "hidden"


getWeather = () => {
    document.getElementById("searchBox").style.top = "55%"
    document.getElementById("container").style.visibility = "visible"
    var location = document.getElementById("searchInput").value
    document.getElementById("locationTitle").innerHTML = location

    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&units=${units}&days=5&key=${pk}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            var icon1 = data.data[0].weather.icon
            icon1URL = 'https://www.weatherbit.io/static/img/icons/' + icon1 + '.png'
            document.getElementById("icon1").src = icon1URL

            var icon2 = data.data[1].weather.icon
            icon2URL = 'https://www.weatherbit.io/static/img/icons/' + icon2 + '.png'
            document.getElementById("icon2").src = icon2URL

            var icon3 = data.data[2].weather.icon
            icon3URL = 'https://www.weatherbit.io/static/img/icons/' + icon3 + '.png'
            document.getElementById("icon3").src = icon3URL

            var icon4 = data.data[3].weather.icon
            icon4URL = 'https://www.weatherbit.io/static/img/icons/' + icon4 + '.png'
            document.getElementById("icon4").src = icon4URL

            var icon5 = data.data[4].weather.icon
            icon5URL = 'https://www.weatherbit.io/static/img/icons/' + icon5 + '.png'
            document.getElementById("icon5").src = icon5URL

            document.getElementById("day1").innerHTML = (data.data[0].temp + `°C`)
            document.getElementById("day2").innerHTML = (data.data[1].temp + `°C`)
            document.getElementById("day3").innerHTML = (data.data[2].temp + `°C`)
            document.getElementById("day4").innerHTML = (data.data[3].temp + `°C`)
            document.getElementById("day5").innerHTML = (data.data[4].temp + `°C`)

        })
        .catch(err => {

        })

    fetch(`https://api.unsplash.com/search/photos?query=${location}&orientation=landscape&client_id=${ak}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            var imageURL = data.results[0].urls.regular
            console.log(imageURL)
            document.getElementById("bg").style.background = `url(${imageURL})`

        })
        .catch(err => {

        })
}

