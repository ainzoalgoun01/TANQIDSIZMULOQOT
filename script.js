const products = {
  plainBurger: {
    name: 'Гамбургер простой',
    price: 10000,
    kcall: 350,
  },
  freshBurger: {
    name: 'Гамбургер FRESH',
    price: 20500,
    kcall: 480,
  },
  freshCombo: {
    name: 'FRESH COMBO',
    price: 31900,
    kcall: 720,
  },
}
const extraproducts = {
  doubleMayonnaise: {
    name: 'Двойной майонез',
    price: 200,
    kcall: 100,
  },
  lettuce: {
    name: 'Салатный лист',
    price: 230,
    kcall: 30,
  },
  cheese: {
    name: 'Сыр',
    price: 30,
    kcall: 70,
  },
}
function Summ() {return this.amount * this.price}
function Kcall() {return this.amount * this.kcall}
for(const key in products){
  products[key]['amount'] = 0
  products[key]['calcSumm'] = Summ
  products[key]['calcKcall'] = Kcall
}

// const productBtn = document.querySelectorAll('.main__product-btn')
// productBtn.forEach(function(btn, key){
//   btn.addEventListener('click', function(){
//     const card = btn.closest('.main__product')
//     const btnSymbol = btn.getAttribute('data-symbol')
//     const cardId = card.id;
//     const productAmount = card.querySelector('.main__product-num')
//     const productPrice = card.querySelector('.main__product-price span')
//     const productKcall = card.querySelector('.main__product-kcall span')
//     if(btnSymbol == '+' && products[cardId].amount < 30){
//       products[cardId].amount++
//     }else if(btnSymbol == '-' && products[cardId].amount > 0){
//       products[cardId].amount--
//     }
//     productAmount.innerHTML = products[cardId].amount
//     productPrice.innerHTML = products[cardId].calcSumm()
//     productKcall.innerHTML = products[cardId].calcKcall()
//   })
// })
// const mainCheckbox = document.querySelectorAll('.main__product-checkbox')
// mainCheckbox.forEach(function(checkbox, key){
//   checkbox.addEventListener('click', function(){
//     const card = checkbox.closest('.main__product')
//     const cardId = card.id;
//     const extraCheck = checkbox.getAttribute('data-extra')
//     products[cardId][extraCheck] = checkbox.checked
//     const productPrice = card.querySelector('.main__product-price span')
//     const productKcall = card.querySelector('.main__product-kcall span')
    
//     if(products[cardId][extraCheck] == true){
//       products[cardId].price += extraproducts[extraCheck].price
//       products[cardId].kcall += extraproducts[extraCheck].kcall
//     }else{
//       products[cardId].price -= extraproducts[extraCheck].price
//       products[cardId].kcall -= extraproducts[extraCheck].kcall
//     }
//     productPrice.innerHTML = products[cardId].calcSumm()
//     productKcall.innerHTML = products[cardId].calcKcall()
//   })
// })


const mainProducts = document.querySelectorAll('.main__product');
mainProducts.forEach(function(card, key){
  const cardBtn = card.querySelectorAll('.main__product-btn')
  const extraCheck = card.querySelectorAll('.main__product-checkbox')
  const productAmount = card.querySelector('.main__product-num')
  const productPrice = card.querySelector('.main__product-price span')
  const productKcall = card.querySelector('.main__product-kcall span')
  const cardId = card.id
  
  cardBtn.forEach(function(btn){
    btn.addEventListener('click', function(){
      const btnSymbol = btn.getAttribute('data-symbol')
      if(btnSymbol == '+' && products[cardId].amount < 30){
        products[cardId].amount++
      }else if(btnSymbol == '-' && products[cardId].amount > 0){
        products[cardId].amount--
      }
      productAmount.innerHTML = products[cardId].amount
      productPrice.innerHTML = products[cardId].calcSumm()
      productKcall.innerHTML = products[cardId].calcKcall()
    })
  })
  extraCheck.forEach(function(checkbox){
    checkbox.addEventListener('click', function(){
      const check = checkbox.getAttribute('data-extra')
      products[cardId][check] = checkbox.checked
      if(products[cardId][check] == true){
        products[cardId].price += extraproducts[check].price
        products[cardId].kcall += extraproducts[check].kcall
      }else{
        products[cardId].price -= extraproducts[check].price
        products[cardId].kcall -= extraproducts[check].kcall
      }
      productPrice.innerHTML = products[cardId].calcSumm()
      productKcall.innerHTML = products[cardId].calcKcall()
    })
  })
})

// чек(корзина)
const addCart = document.querySelector('.addCart')
const receipt = document.querySelector('.receipt')
const receiptWindow = document.querySelector('.receipt__window')
const receiptOut = document.querySelector('.receipt__window-out')
const receiptBtn = document.querySelector('.receipt__window-btn')

addCart.addEventListener('click', function(e){
  e.preventDefault();
  let totalName = ''
  let totalPrice = 0
  let arrProducts = []
  
  for(const key in products){
    const pObj = products[key]
    if(pObj.amount > 0){
      arrProducts.push(pObj)
      pObj['totalName'] = `${pObj.name} : ${pObj.amount}`
      for(const info in pObj){
        if(pObj[info] === true){
          pObj['totalName'] += `${extraproducts[info].name}`
        }
      }
      pObj['totalName'] += `Цена за шт. ${pObj.price} Всего: ${pObj.calcSumm()}`
    }
  }
  console.log(arrProducts);
  
  
  receipt.style.display = 'flex'
  setTimeout(() => {
    receipt.style.opacity = '1'
  }, 100);
  setTimeout(() => {
    receiptWindow.style.top = '10%'
  }, 300);
})
receiptBtn.addEventListener('click', function(){
  receiptWindow.style.top = '-100%'
  setTimeout(() => {
    receipt.style.opacity = '0'
  }, 300);
  setTimeout(() => {
    receipt.style.display = 'none'
    receipt.removeAttribute('style')
    receiptWindow.removeAttribute('style')
  }, 600);
})




















// lvl ====================================================
const lvl = document.querySelector('.header__timer-extra')
function LVL(i){
  lvl.innerHTML = i
  i++
  if(i <= 100){
    setTimeout(() => {
      LVL(i)
    }, i+i);
  }
}
LVL(0)
// dblclick ===============================================
const productInfo = document.querySelectorAll('.main__product-info')
const view = document.querySelector('.view')
const viewClose = document.querySelector('.view__close')

productInfo.forEach(function(card, key){
  card.addEventListener('click', function(){
    view.classList.add('active')
    const imgSrc = card.querySelector('img').getAttribute('src')
    view.querySelector('img').setAttribute('src', imgSrc)
  })
})
viewClose.addEventListener('click', function(){view.classList.remove('active')})