const youtube_btn = document.querySelector('.youtube-btn');
const appointment_model = document.querySelector('.appointment-model');
let scrolledToBottom = false;


youtube_btn.addEventListener('click', ()=>{
    window.open('https://www.youtube.com/channel/UCAzFpJ-hFlig8K53tw00Bew', '_blank');
})


// Checks to see if user has reach bottom of the page
window.onscroll = function(ev) {

  const scrollY = window.scrollY;
  const pageHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;

  // Check if scrolled to the bottom
  if (!scrolledToBottom && (scrollY + windowHeight) >= pageHeight) {
      console.log('User scrolled to the bottom of the page.');
      scrolledToBottom = true;
  }

  // Check if scrolling back to the middle from the bottom
  if (scrolledToBottom && scrollY <= (pageHeight / 1.5) && scrollY > 0) {
      console.log('User scrolled back to the middle from the bottom.');
      appointment_model.style.display = "block";
      // Your logic for when user scrolls back to the middle from the bottom
      scrolledToBottom = false; // Reset scrolledToBottom flag
  }
}
      // localStorage.setItem("hasReachedPageBottom", "true");
      // console.log(localStorage.getItem("hasReachedPageBottom"));

    // if (localStorage.getItem("hasReachedPageBottom") === "true")


const appointment_modal_exit_btn = document.querySelector('.appointment-modal-exit-btn');

appointment_modal_exit_btn.addEventListener('click', ()=>{
  appointment_model.style.display = "none";
})




// Cookie consent code

const necessary_cookies_consent_btn = document.querySelector("#necessary-cookies-consent-btn");
const accept_all_cookies_consent_btn = document.querySelector("#accept-all-cookies-consent-btn")
const cookie_banner_section = document.querySelector("#cookie-banner-section")


const necessary_cookies_consent = (e)=>{
  e.preventDefault();

    localStorage.setItem("necessaryCookiesConsentStatus", "true");
    // console.log(localStorage.getItem("necessaryCookiesConsentStatus"));
    cookie_banner_section_hide()
}

const accept_all_cookies_consent = (e)=>{
  e.preventDefault();

    localStorage.setItem("acceptAllCookiesConsentStatus", "true");
    // console.log(localStorage.getItem("necessaryCookiesConsentStatus"));
    cookie_banner_section_hide()
}


const cookie_banner_section_hide = ()=>{
  if(localStorage.getItem("necessaryCookiesConsentStatus") === "true" || localStorage.getItem("acceptAllCookiesConsentStatus") === "true" )
    {
      cookie_banner_section.style.display = "none";
    }
}

cookie_banner_section_hide();


necessary_cookies_consent_btn.addEventListener("click", necessary_cookies_consent);
accept_all_cookies_consent_btn.addEventListener("click", accept_all_cookies_consent);
