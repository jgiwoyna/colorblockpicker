$(document).ready(function () {
  $('#container').append('<div id="yellow" class="blockColor"></div>' + '<p></p>');
  $('#container').append('<div id="green" class="blockColor"></div>' + '<p></p>');
  $('#container').append('<div id="red" class="blockColor"></div>' + '<p></p>');
  $('#container').append('<div id="blue" class="blockColor"></div>' + '<p></p>');
  $('#container').append('<div id="orange" class="blockColor"></div>' + '<p></p>');
  $('#container').append('<div id="purple" class="blockColor"></div>' + '<p></p>');
  $('#container').append('<div id="teal" class="blockColor"></div>' + '<p></p>');
  $('#container').append('<div id="magenta" class="blockColor"></div>' + '<p></p>');
  $('#container').append('<div id="brown" class="blockColor"></div>' + '<p></p>');
  $('#container').append('<div id="pink" class="blockColor"></div>' + '<p></p>');

  var newRandomNumber = randomNumber(0, 9);
  var colorsArray = ["yellow", "green", "red", "blue", "orange", "purple", "teal", "magenta", "brown", "pink"];
  var newRandomColor = colorsArray[newRandomNumber];

  function generateNewColor () {
    newRandomNumber = randomNumber(0, 7);
    newRandomColor = colorsArray[newRandomNumber];
    $('#colorPick').text('Pick ' + newRandomColor + '!');
  }

  $('#colorPick').text('Pick ' + newRandomColor + '!');

  $('#container').on('click', '.blockColor', function (){
    var answer = $(this).attr('id');
    console.log(answer);
    if (newRandomColor == answer) {
      $('#message').text('Good Job!');
      generateNewColor();
    } else {
      $('#message').text('Wrong Answer!');
    }
  })
});














function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
