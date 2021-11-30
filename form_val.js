function validateProfile(e){

    e.preventDefault();

    var valid=true;

    //display warning if firstName is not entered
    if(profile.firstName.value === ""){
    document.querySelector('#fnameError').innerHTML="*Please enter a First Name*";
        valid = false;
    }

    //display warning if lastName is not entered
    if(profile.lastName.value == ""){
        document.querySelector('#lNameError').innerHTML="*Please enter a Last Name*";
        valid=false;
    }

    //display warning if address1 is not entered
    if(profile.address1.value == ""){
        document.querySelector('#address1Error').innerHTML="*Please enter an address*";
        valid=false;
    }

    //display warning if address2 is not entered
    if(profile.address2.value == ""){
        document.querySelector('#address2Error').innerHTML="*Please enter an address*";
        valid=false;
    }

    //display warning if city is not entered
    if(profile.city.value == ""){
        document.querySelector('#cityError').innerHTML="*Please enter a city*";
        valid=false;
    }



    //display warning if province is not entered
    if(profile.province.value == ""){
        document.querySelector('#provinceError').innerHTML="*Please select a province*";
        valid=false;
    }

    //display warning if country is not entered
    if(profile.country.value == ""){
        document.querySelector('#countryError').innerHTML="*Please select a province*";
        valid=false;
    }

    

    if(valid){
        alert("Thank you");
    }
    

    return valid;
    

};