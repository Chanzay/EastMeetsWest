
//Jquery
$(document).ready(function() {
  //Puts the image on slide show mode for the east and southeast asian pages
  $('.southEastAsianMainPic').slick({
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      speed: 500
    });

  });


  $(document).ready(function() {

    //Set the accordion tabs for each restaurant page
    $("#accordion").accordion({
        heightStyle: "content" 
      });

});

$(document).ready(function() {
  //Gives a search bar to serach for each select in the review page
  $('.chosen-select').chosen();
});

$(document).ready(function() {
  
  // Submit the form on submit button click
  $('#submitForm').click(function(e) {
    e.preventDefault(); // prevent the form from submitting normally
    
    // Get the values from the form fields
    var firstName = $('#fname').val();
    var lastName = $('#lname').val();
    var restaurant = $('#restaurant').val();
    var rating = $('#rating').val();
    var reviewText = $('#review').val();
    
    // Check if all form fields are filled out
    if (firstName !== '' && lastName !== '' && restaurant !== '' && rating !== '' && reviewText !== '') {
      
      // Create the HTML to display the review
      var reviewHtml = '<div class="review">' +
        '<h2>' + firstName + ' ' + lastName + '</h2>' +
        '<p><strong>Restaurant: </strong>' + restaurant + '</p>' +
        '<p><strong>Rating: </strong>' + rating + '</p>' +
        '<p><strong>Review: </strong>' + reviewText + '</p>' +
        '</div>';
      
      // Append the review to the existing reviews
      $('.test').append(reviewHtml);
      
      // Clear the form fields
      $('#fname').val('');
      $('#lname').val('');
      $('#restaurant').val('');
      $('#rating').val('');
      $('#review').val('');
      
    } else {
      
      // Show an error message if not all fields are filled out
      alert('Please fill out all fields before submitting.');
      
    }
    
  });
  
});

const moreInfoBtn = document.getElementById('more-info-btn');
moreInfoBtn.addEventListener('click', function() {
  showMoreInfo();
});

function showMoreInfo() {
  fetch('moreInfo.txt')
    .then(response => response.text())
    .then(data => {
      // Call function to display the additional information in the HTML container
      displayMoreInfo(data);
    })
    .catch(error => {
      console.log(error);
    });
}

function displayMoreInfo(info) {
  const moreInfoContainer = document.getElementById('more-info-container');
  
  // Add the additional information to the container
  moreInfoContainer.innerHTML = info;
}
