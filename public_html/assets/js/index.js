// PRELOADER
    
$(window).on('load', function () {
    var $preloader = $('#p_prldr');
       $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.delay(3500).fadeOut();
    $preloader.delay(4000).fadeOut('slow');
});

//END OF PRELOADER//

//SCREEN LOADING EVENTS//
window.addEventListener("load", initAudioPlayer); //инициировать плеер
window.addEventListener("load", initMixcloud); //иннициировать mixcloud
window.addEventListener("focus", updateButton); //обновить статус кнопки плэй
window.addEventListener("load", updateDiv); //обновить now playing
window.addEventListener("load", showPage); 


//RANDOM BACKGROUND SCRIPT//
var images = ['background1.png'];
$('body').css({'background-image': 'url(assets/img/' + images[Math.floor(Math.random() * images.length)] + ')'
    });
//END OF RBS//



// var radbat = document.getElementById("radbat");

// radbat.addEventListener('click', function populate () {
//          var iframe1 = document.getElementById('mix1');
//          var iframe2 = document.getElementById('mix2');
//          var iframe3 = document.getElementById('mix3');
//          iframe1.setAttribute('src', 'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fknown-unknown-w-asiriunh-tapetownlive-29062020%2F');
//          iframe2.setAttribute('src', 'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Frwanda-tapetownlive-10072020%2F');
//          iframe3.setAttribute('src', 'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fwillie-fon-willie-tapetownlive-06072020%2F');
//     }); 

// MIXCLOUD IFRAME LOADING
// window.setTimeout(function () {
//         var iframe = document.getElementById('mix1');
//         iframe.setAttribute('src', 'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Feskapisté-tapetownlive-23-07-2020%2F');
//     }, 3000); 

// window.setTimeout(function () {
//         var iframe = document.getElementById('mix2');
//         iframe.setAttribute('src', 'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fvideo-marathon-kasia-ekstovich-tapetownlive-11072020%2F');
//     }, 3000); 

// window.setTimeout(function () {
//         var iframe = document.getElementById('mix3');
//         iframe.setAttribute('src', 'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fkeprah-tapetownlive-22072020%2F');
//     }, 3000);
//

document.body.classList.add('js-loading');
function showPage() {
  document.body.classList.remove('js-loading');
}

  var xx = document.getElementById('cash');
    var paybtn = document.getElementById('paybtn');
    paybtn.addEventListener('click', function(e) {
      e.preventDefault();
     xx.play();
      });

$(function() {
  //----- OPEN
  $('[data-popup-open]').on('click', function(e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-open');
    $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
    e.preventDefault();
  });

  //----- CLOSE
  $('[data-popup-close]').on('click', function(e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-close');
    $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

    e.preventDefault();
  });
});



//TABS//
var tabs = Array.prototype.slice.call(document.getElementsByClassName('menu-items'), 0);
var tabsContent = Array.prototype.slice.call(document.getElementsByClassName('menu-item-content'), 0);
tabs.forEach((element, i) => {
    element.onclick = () => {
        //подсвечивание выбранной вкладки
        tabs.forEach(element => {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            }
        })
        element.classList.add('active');
        //отображение содержимого вкладки
        tabsContent.forEach(element => {
            if (element.style.display == 'block');
                element.style.display = 'none';
        })
        tabsContent[i].style.display = 'block';
    }
});
//END OF//


//REFRESH NOW PLAYING//
    function updateDiv () {
    var auto_refresh = setInterval(
    function ()
{ 
    $( "#now1" ).load(window.location.href + " #now1" );
}, 3000);
  }
//END OF//  


            
//AUDIO PLAYER//         
var audio, playPause;
function initAudioPlayer(){
    audio = document.getElementById('myTune');
    playPause = document.getElementById('btn');
    playPause.addEventListener('click', function(e) {
      e.preventDefault();
      playPause.classList.toggle('fa-play');
      playPause.classList.toggle('fa-pause');
      if (audio.paused) {
        audio.play();
        stopMixcloud();
      } else {
        audio.pause();
      }
      return false;
    }, false);
    updateButton();
  }
//END OF//  


        //PLAY BUTTON STATUS CHANGE// 
        var audio;
        audio = document.getElementById('myTune');
        function updateButton() {
            if(audio.paused) {
              $('#btn').removeClass('fa fa-pause');
              $('#btn').addClass('fa fa-play');
          } else {
              $('#btn').removeClass('fa fa-play');
              $('#btn').addClass('fa fa-pause');
          }
        }
        //END OF//

//MIXCLOUD WIDGET AND PLAYBACK SWITCH//
var mixcloudWidgets;
function initMixcloud() {
    mixcloudWidgets = Array.from(document.getElementsByClassName('mixcloudWidget'), e => Mixcloud.PlayerWidget(e));
    mixcloudWidgets.forEach(function(w) {
        w.ready.then(function() {
            w.events.play.on(onMixcloudPlay(w));
        });
    });
}

        //STOP MIXCLOUD WHEN RADIO IS PLAYING//
        function stopMixcloud() {
            mixcloudWidgets.forEach(function(w) {
                            w.pause();
            });
        }

        //STOP RADIO WHEN MIXCLOUD IS PLAYING//
        function onMixcloudPlay(widget) {
            return function() {
                audio.pause();
                mixcloudWidgets.forEach(function(w) {
                    if (w != widget)
                        w.pause();
                });
            }
}






