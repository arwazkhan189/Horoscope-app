//getting zodaic sign from user
function cardclick(zodaicsign){
      getzodaicdetails(zodaicsign);
      changeimage(zodaicsign);
}

// fetching details from aztro's API
function getzodaicdetails(zodaicsign){
        const URL="https://aztro.sameerkumar.website/";
        fetch(`${URL}?sign=${zodaicsign}&day=today`,{
            method: 'POST'
        })
        .then(response => response.json())
        .then(showzodaicdetails);
}

//Showing zodaic sign details on screen
function showzodaicdetails(response,zodaicsign){
      let current_date = document.getElementById('current_date');
      let today = new Date().toString().split(' ').splice(1,3).join(' ');
      current_date.innerText = today;

      let lucky_time = document.getElementById('lucky_time');
      lucky_time.innerText= `${response.lucky_time}`;

      let lucky_number = document.getElementById('lucky_number');
      lucky_number.innerText = `${response.lucky_number}`;
      
      let color = document.getElementById('color');
      color.innerText = `${response.color}`;

      let mood = document.getElementById('mood');
      mood.innerText = `${response.mood}`;

      let description = document.getElementById('description');
      description.innerText = `${response.description}`;
}

//Changing Zodaic image according to click
function changeimage(zodaicsign){
      let zodaicimage = document.getElementById('zodaicimg'); 
      
      if (zodaicsign=='aries'){
        zodaicimage.setAttribute("src",`./assets/zodiac_card_images/aries.jpg`);
      }
      else if(zodaicsign=='taurus'){
            zodaicimage.setAttribute("src",`./assets/zodiac_card_images/taurus.jpg`);
      }
      else if(zodaicsign=='gemini'){
            zodaicimage.setAttribute("src",`./assets/zodiac_card_images/gemini.jpg`);
      }
      else if(zodaicsign=='cancer'){
            zodaicimage.setAttribute("src",`./assets/zodiac_card_images/cancer.jpg`);
      }
      else if(zodaicsign=='leo'){
            zodaicimage.setAttribute("src",`./assets/zodiac_card_images/leo.jpg`);
      }
      else if(zodaicsign=='virgo'){
            zodaicimage.setAttribute("src",`./assets/zodiac_card_images/virgo.jpg`);
      }
      else if(zodaicsign=='libra'){
            zodaicimage.setAttribute("src",`./assets/zodiac_card_images/libra.jpg`);
      }
      else if(zodaicsign=='scorpio'){
            zodaicimage.setAttribute("src",`./assets/zodiac_card_images/scorpio.jpg`);
      }
      else if(zodaicsign=='sagittarius'){
            zodaicimage.setAttribute("src",`./assets/zodiac_card_images/sagittarius.jpg`);
      }
      else if(zodaicsign=='capricorn'){
            zodaicimage.setAttribute("src",`./assets/zodiac_card_images/capricorn.jpg`);
      }
      else if(zodaicsign=='aquarius'){
            zodaicimage.setAttribute("src",`./assets/zodiac_card_images/aquarius.jpg`);
      }
      else {
            zodaicimage.setAttribute("src",`./assets/zodiac_card_images/pisces.jpg`);
      }
}
