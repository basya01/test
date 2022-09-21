const prices = {
  monthly: ['19', '54', '89'],
  yearly: ['12', '36', '56'],
  status: 'monthly'
};

const pricesElems = document.querySelectorAll('.plan__price');
const toggler = document.documentElement.querySelector('.toggler');
toggler.addEventListener('click', togglerHandler);

function togglerHandler(e) {
  const newStatus = e.target.textContent.toLowerCase();
  if(newStatus === prices.status) return;
  
  pricesElems.forEach((item, index) => {
    item.innerHTML = item.innerHTML.replace(prices[prices.status][index], prices[newStatus][index]);
  })

  toggler.classList.toggle('toggler_active')

  prices.status = newStatus;
}
