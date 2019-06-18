var selectedMovie, showtime, age;

function Movie(name, showtimes) {
  this.name = name,
  this.showtimes = showtimes
}

var avengers = new Movie("Avengers: Endgame", ["10:00am", "12:00pm", "2:00pm", "4:00pm", "6:00pm", "8:00pm"]);
var spiderman = new Movie("Spiderman: Into the Spiderverse", ["9:30am", "11:30am", "1:30pm", "4:00pm", "6:00pm", "9:00pm"]);
var space = new Movie("2001: A Space Odyssey", ["11:00am", "2:00pm", "3:30pm", "5:00pm", "7:00pm", "11:00pm"]);

function showtimes(){
  for(var i = 0; i < avengers.showtimes.length; i++){
    $("#avengersTime" + (i+1)).append(avengers.showtimes[i]);
    $("#spidermanTime" + (i+1)).append(spiderman.showtimes[i]);
    $("#spaceTime" + (i+1)).append(space.showtimes[i]);
  }
}

$(function(){
  $("#name1").append(avengers.name);
  $("#name2").append(spiderman.name);
  $("#name3").append(space.name);

  showtimes();

  $("#userAgeForm").submit(function(event){
    event.preventDefault();
    selectedMovie = $("input:radio[name=movie]:checked").val();
    showtime = $("#" + selectedMovie + "Showtimes").val();
    age = $("#userAge").val();

  })

});
