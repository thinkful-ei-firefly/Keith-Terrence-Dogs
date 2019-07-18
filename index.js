'use-strict';

function getDogImage() {
  console.log('Call');
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.images').append(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function handleSubmit(){
  $('#number').submit(event => {
    event.preventDefault();
    $('.images').empty();
    const dogNumber = parseInt($(event.currentTarget).children('input').val());
    if (typeof(dogNumber) !== typeof(1)){
      alert('Please enter a number!');
      return;
    }
    else if (dogNumber > 50 || dogNumber < 1){
      alert('Please enter a number between 1 and 50!');
      return;
    } else {
      for (let i = 0; i < dogNumber; i++){
        getDogImage();
      }
    }
  });
  for (let i = 0; i < 3; i++){
    getDogImage();
  }
}

$(handleSubmit());