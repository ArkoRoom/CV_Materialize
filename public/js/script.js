$(document).ready(function(){

  // Nav Responsive
  $(".button-collapse").sideNav();

  // Scroll
  $('.arrow-top, .arrow-bottom, .move').click(function () {
    var page = $(this).attr('href');
    var speed = 1000;
    $('html, body').animate({
      scrollTop: $(page).offset().top
    }, speed);
    return false;
  });

  // Effet sur le scroll
  $(document).scroll(function () {
    if ($(document).scrollTop() > 100) {
      $('.arrow-top').fadeIn('slow');
    }
    else {
      $('.arrow-top').fadeOut('slow');
    }
  });

  // Mini-Jeux
  var solution = Math.floor(Math.random() * 100) + 1;
  var count = 0;
  var finalCount = 6;

  var answerUser = $("#validAnswer").click(function () {
    var answer = parseInt($("#answerUser").val());
    while ((answerUser !== solution) && (count < finalCount)) {
      count++;
      if ((answer < 1) || (answer > 100)) {
        $(".answer").append("<p>Erreur ! Vous avez saisis <strong>" + answer + "</strong><br>Veuillez saisir un nombre <strong>compris entre 1 et 100.</strong><br>C'était l'essai n°" + count + " sur " + finalCount + ".</p>")
        break;
      }
      else if (answer < solution) {
        $(".answer").append("<p>Et non ! C'est plus que <strong>" + answer + ".</strong><br>C'était l'essai n°" + count + " sur " + finalCount + ".</p>")
        break;
      }
      else if (answer > solution) {
        $(".answer").append("<p>Et non ! C'est moins que <strong>" + answer + ".</strong><br>C'était l'essai n°" + count + " sur " + finalCount + ".</p>")
        break;
      }
      else if (answer === solution) {
        $(".answer").append("<p>Bravo ! Le nombre a trouvé était bien <strong>" + solution + ".</strong><br>Vous avez trouvé en " + count + " éssai(s) sur " + finalCount + ".<br>Vous pouvez rejouer en cliquant sur le bouton <strong>'Rejouez'.</strong></p>")
        $("#restart").show();
        $('#validAnswer').addClass('disabled');
        break;
      }
    }
    if (count === finalCount) {
      $(".answer").append("<p>Dommage ! Vous avez utilisé vos " + finalCount + " éssais.<br>Le chiffre à trouver été <strong>" + solution + ".</strong><br>Retentez votre chance !</p>")
      $("#restart").show();
      $('#validAnswer').addClass('disabled');
    }
  });

  //restart
  $("#restart").click(function () {
    location.reload("#creation");
  });

  //Effet quadrillage
  //On gÃ©nÃ©re alÃ©atoirement une image
  nbSquare = 374;
  var img = [
    'img1.jpg',
    'img2.png',
    'img3.jpg',
    'img4.jpg',
    'img5.jpeg'
  ];

  $('.wrap-img').css({
    'background-image': 'url(public/img/' + img[Math.floor(Math.random() * img.length)] + ')'
  });

  // On renvoie un entier alÃ©atoire entre une valeur min (incluse) et une valeur max (incluse).
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // On crÃ©e le quadrillage
    for (var i = 0; i < nbSquare; i++) {
      var createDiv = $('.container-div').append("<div class='div-mouse-hover" + i + " hover-effect' id='div" + i + "'></div>");
      $('.div-mouse-hover' + i + '').css({
        'display': 'inline-block',
        'width': '20px',
        'height': '20px',
        'margin-left': '2px',
        'margin-top': '-2px',
        'background-color': "#FFFFFF"
      });
    }

  // On crÃ©e l'effet "Suppression"
  var countClick = 0;
  var finalCountClick = 3;
  $('#delete-div').click(function () {
    countClick++;
    if (countClick != finalCountClick) {
      for (var i = 0; i < (nbSquare / 3); i++) {
        $('.div-mouse-hover' + getRandomIntInclusive(0, nbSquare) ).fadeTo('slow', 0.1);
      }
    }
    else {
      $('#delete-div').addClass('disabled');
    }
  });
});
