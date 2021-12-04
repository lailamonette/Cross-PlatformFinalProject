const monthlyButton = document.querySelector('.buttonMonthly');
const yearlyButton = document.querySelector('.buttonYearly');

const personalPrice = document.querySelector('.price-personal');
const premiumPrice = document.querySelector('.price-premium');
const businessPrice = document.querySelector('.price-business');

const personalPriceDetails = document.querySelector('.personal-price-details');
const premiumPriceDetails = document.querySelector('.premium-price-details');
const businessPriceDetails = document.querySelector('.business-price-details');


monthlyButton.addEventListener('click', function(){
    monthlyButton.classList.add('button-clicked')
    yearlyButton.classList.remove('button-clicked');
    personalPrice.textContent = 'CAD $10';
    premiumPrice.textContent = 'CAD $15';
    businessPrice.textContent = 'CAD $30';
    personalPriceDetails.textContent = 'Payed Monthly, Billed Monthly';
    premiumPriceDetails.textContent = 'Payed Monthly, Billed Monthly';
    businessPriceDetails.textContent = 'Payed Monthly, Billed Monthly';
    
});
yearlyButton.addEventListener('click', function(){
    monthlyButton.classList.remove('button-clicked')
    yearlyButton.classList.add('button-clicked');
    personalPrice.textContent = 'CAD $6';
    premiumPrice.textContent = 'CAD $10';
    businessPrice.textContent = 'CAD $15';
    personalPriceDetails.textContent = 'Payed Monthly, Billed Yearly';
    premiumPriceDetails.textContent = 'Payed Monthly, Billed Yearly';
    businessPriceDetails.textContent = 'Payed Monthly, Billed Yearly';
});