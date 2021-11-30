
//remove warning if firstName has input
document.querySelector('#firstName').addEventListener("blur", function(){
    if(profile.firstName.value !== ""){
        fnameError.innerHTML = "";
    }
});

//remove warning if lastName has input
document.querySelector('#lastName').addEventListener("blur", function(){
    if(profile.lastName.value !== ""){
        lNameError.innerHTML = "";
    }
});


//remove warning if address1 has input
document.querySelector('#address1').addEventListener("blur", function(){
    if(profile.address1.value !== ""){
        address1Error.innerHTML = "";
    }
});


//remove warning if address2 has input
document.querySelector('#address2').addEventListener("blur", function(){
    if(profile.address2.value !== ""){
        address2Error.innerHTML = "";
    }
});


//remove warning if city has input
document.querySelector('#city').addEventListener("blur", function(){
    if(profile.city.value !== ""){
        cityError.innerHTML = "";
    }
});

//remove warning if province has input
document.querySelector('#province').addEventListener("blur", function(){
    if(profile.province.value !== ""){
        provinceError.innerHTML = "";
    }


    
});


//remove warning if country has input
document.querySelector('#country').addEventListener("blur", function(){
    if(profile.country.value !== ""){
        countryError.innerHTML = "";
    }


    
});




// Add an event to the form on submit to validate input
document.profile.addEventListener("submit", validateProfile);

