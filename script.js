document.getElementById("search-submit").addEventListener("click", function(event) {
    event.preventDefault();
    let value = document.getElementById("word").value;
    if (value ==="") {
        value = "images";
    }
    const apiKey = "563492ad6f91700001000001c733899f6da44b168c7e25beafc4507e";
    const address = "https://api.pexels.com/v1/search?query=" + value + "&per_page=50&page=1";
    const req = new Request(address, {
        method: 'GET',
        url: address,
        headers: {
            "Authorization" : apiKey
        }      
    })
    fetch(req)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        let results = "";
        let header = "";
        header += "<h1>Search results for " + value + ":</h1>";
        document.getElementById("header").innerHTML = header;
        json.photos.forEach((item)=>{
            results += "<div class=\"item\"><img class=\"items\" src=\"" + item.src.original + "\" alt=\"user images\"></div>"
        })
        document.getElementById("search-result").innerHTML = results;
    })
})