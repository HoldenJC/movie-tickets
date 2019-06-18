var selectedMovie, showtime, age, price, amPm;
var basePrice = 7;

function Movie(name, showtimes, release) {
  this.name = name,
  this.showtimes = showtimes,
  this.release = release
}

var avengers = new Movie("Avengers: Endgame", ["10:00am", "12:00pm", "2:00pm", "4:00pm", "6:00pm", "8:00pm"], "new-release");
var spiderman = new Movie("Spiderman: Into the Spiderverse", ["9:30am", "11:30am", "1:30pm", "4:00pm", "6:00pm", "9:00pm"], "new-release");
var space = new Movie("2001: A Space Odyssey", ["11:00am", "2:00pm", "3:30pm", "5:00pm", "7:00pm", "11:00pm"], "re-release");

function showtimes(){
  for(var i = 0; i < avengers.showtimes.length; i++){
    $("#avengersTime" + (i+1)).append(avengers.showtimes[i]);
    $("#spidermanTime" + (i+1)).append(spiderman.showtimes[i]);
    $("#spaceTime" + (i+1)).append(space.showtimes[i]);
  }
}

function ticketPrice(released, time, userAge, matinee){
  if(released === "new-release" && matinee === "am"){
    price = basePrice * 1.5;
  } else if(released === "new-release" && matinee === "pm"){
    price = basePrice * 2;
  } else if(released === "re-release" && matinee === "am"){
    price = basePrice;
  } else if(released === "re-release" && matinee === "pm"){
    price = basePrice * 1.25;
  }
  if(userAge > 59){
    price /= 2;
  }
}

function releaseType(movie){
  if(movie === "avengers"){
    return avengers.release;
  } else if(movie === "spiderman"){
    return spiderman.release;
  } else if(movie === "space"){
    return space.release;
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
    amPm = showtime.charAt(showtime.length-2) + showtime.charAt(showtime.length-1);

    var release = releaseType(selectedMovie);
    ticketPrice(release, showtime, age, amPm);

    $("#userAgeForm").after("Ticket Price: $" + price.toFixed(2));
  })
});
