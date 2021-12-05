const monthlyButton = document.querySelector('.buttonMonthly');
const yearlyButton = document.querySelector('.buttonYearly');

const personalPrice = document.querySelector('.price-personal');
const premiumPrice = document.querySelector('.price-premium');
const businessPrice = document.querySelector('.price-business');

const personalPriceDetails = document.querySelector('.personal-price-details');
const premiumPriceDetails = document.querySelector('.premium-price-details');
const businessPriceDetails = document.querySelector('.business-price-details');

const annualBenefits = document.querySelectorAll('.annual-benefits');

// Makes changes to textContent of elements in the website
monthlyButton.addEventListener('click', function(){
    monthlyButton.classList.add('button-clicked')
    yearlyButton.classList.remove('button-clicked');

    for(x = 0; x < annualBenefits.length; x++){
        annualBenefits[x].classList.remove('turnOn');
        annualBenefits[x].classList.add('turnOff');
    }

    personalPrice.textContent = 'CAD $10';
    premiumPrice.textContent = 'CAD $15';
    businessPrice.textContent = 'CAD $30';
    personalPriceDetails.textContent = 'Payed Monthly, Billed Monthly';
    premiumPriceDetails.textContent = 'Payed Monthly, Billed Monthly';
    businessPriceDetails.textContent = 'Payed Monthly, Billed Monthly';
    
});
// Makes changes to textContent of elements in the website
yearlyButton.addEventListener('click', function(){
    monthlyButton.classList.remove('button-clicked')
    yearlyButton.classList.add('button-clicked');

    for(x = 0; x < annualBenefits.length; x++){
        annualBenefits[x].classList.remove('turnOff');
        annualBenefits[x].classList.add('turnOn');
    }

    personalPrice.textContent = 'CAD $6';
    premiumPrice.textContent = 'CAD $10';
    businessPrice.textContent = 'CAD $15';
    personalPriceDetails.textContent = 'Payed Monthly, Billed Yearly';
    premiumPriceDetails.textContent = 'Payed Monthly, Billed Yearly';
    businessPriceDetails.textContent = 'Payed Monthly, Billed Yearly';
});