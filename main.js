var array;

fetch("data.json")
  .then(response => response.json())
  .then(json => array = json);

months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function load(){
    for(var i = 0; i < array.length; i++){
        var date = new Date(array[i].date[0], array[i].date[1], array[i].date[2]);
        document.getElementById("content").innerHTML = document.getElementById("content").innerHTML + "<span class='title'>" + array[i].title + "</span>" + "<span class='date'>" + months[date.getMonth() - 1] + " " + date.getDate() + " " + date.getFullYear() + "</span>" + "<br>";
    }
}

