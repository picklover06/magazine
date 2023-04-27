const row = document.querySelector('.row')

const h1 = document.createElement('h1')

const productData = [
    {
        productImage: 'https://olcha.uz/image/266x266/products/wOsONunTJSTIQJfy5GvyqbL7tocohR84L138XjC9jn5Ed8ZSdabWj7gImK7f.jpg',
        info: 'Xiaomi 13 Lite (Global)',
        price:'4 657 000 сум ',
        monthPrice: '503 000 сум x 12 мес',
        credit:'КУПИТЬ',
        },
        {
        productImage: 'https://olcha.uz/image/266x266/products/BV1wsSpH1hgVs3p5Us02SjGzc3Vv9gAdNd9ogQcxowO5FNljIOGG8rwWcVlm.jpg',
        info: 'Honor X6 4/64GB',
        price:'1 790 000 сум 1 912 000 сум',
        monthPrice: '242 000 сум x 12 мес',
        credit:'КУПИТЬ',
    },
    {
        productImage: 'https://olcha.uz/image/266x266/products/BV1wsSpH1hgVs3p5Us02SjGzc3Vv9gAdNd9ogQcxowO5FNljIOGG8rwWcVlm.jpg',
        info: 'Honor X6 4/64GB',
        price:'1 790 000 сум 1 912 000 сум',
        monthPrice: '242 000 сум x 12 мес',
        credit:'КУПИТЬ',
    },  {
        productImage: 'https://olcha.uz/image/266x266/products/BV1wsSpH1hgVs3p5Us02SjGzc3Vv9gAdNd9ogQcxowO5FNljIOGG8rwWcVlm.jpg',
        info: 'Honor X6 4/64GB',
        price:'1 790 000 сум 1 912 000 сум',
        monthPrice: '242 000 сум x 12 мес',
        credit:'КУПИТЬ',
    },  {
        productImage: 'https://olcha.uz/image/266x266/products/BV1wsSpH1hgVs3p5Us02SjGzc3Vv9gAdNd9ogQcxowO5FNljIOGG8rwWcVlm.jpg',
        info: 'Honor X6 4/64GB',
        price:'1 790 000 сум 1 912 000 сум',
        monthPrice: '242 000 сум x 12 мес',
        credit:'КУПИТЬ',
    },  {
        productImage: 'https://olcha.uz/image/266x266/products/BV1wsSpH1hgVs3p5Us02SjGzc3Vv9gAdNd9ogQcxowO5FNljIOGG8rwWcVlm.jpg',
        info: 'Honor X6 4/64GB',
        price:'1 790 000 сум 1 912 000 сум',
        monthPrice: '242 000 сум x 12 мес',
        credit:'КУПИТЬ',
    },  {
        productImage: 'https://olcha.uz/image/266x266/products/BV1wsSpH1hgVs3p5Us02SjGzc3Vv9gAdNd9ogQcxowO5FNljIOGG8rwWcVlm.jpg',
        info: 'Honor X6 4/64GB',
        price:'1 790 000 сум 1 912 000 сум',
        monthPrice: '242 000 сум x 12 мес',
        credit:'КУПИТЬ',
    },  
    {
        productImage: 'https://olcha.uz/image/266x266/products/BV1wsSpH1hgVs3p5Us02SjGzc3Vv9gAdNd9ogQcxowO5FNljIOGG8rwWcVlm.jpg',
        info: 'Honor X6 4/64GB',
        price:'1 790 000 сум 1 912 000 сум',
        monthPrice: '242 000 сум x 12 мес',
        credit:'КУПИТЬ',
    },  
    {
        productImage: 'https://olcha.uz/image/266x266/products/BV1wsSpH1hgVs3p5Us02SjGzc3Vv9gAdNd9ogQcxowO5FNljIOGG8rwWcVlm.jpg',
        info: 'Honor X6 4/64GB',
        price:'1 790 000 сум 1 912 000 сум',
        monthPrice: '242 000 сум x 12 мес',
        credit:'КУПИТЬ',
    },  
    {
        productImage: 'https://olcha.uz/image/266x266/products/BV1wsSpH1hgVs3p5Us02SjGzc3Vv9gAdNd9ogQcxowO5FNljIOGG8rwWcVlm.jpg',
        info: 'Honor X6 4/64GB',
        price:'1 790 000 сум 1 912 000 сум',
        monthPrice: '242 000 сум x 12 мес',
        credit:'КУПИТЬ',
    },  
    {
        productImage: 'https://olcha.uz/image/266x266/products/BV1wsSpH1hgVs3p5Us02SjGzc3Vv9gAdNd9ogQcxowO5FNljIOGG8rwWcVlm.jpg',
        info: 'Honor X6 4/64GB',
        price:'1 790 000 сум 1 912 000 сум',
        monthPrice: '242 000 сум x 12 мес',
        credit:'КУПИТЬ',
    },  
    {
        productImage: 'https://olcha.uz/image/266x266/products/BV1wsSpH1hgVs3p5Us02SjGzc3Vv9gAdNd9ogQcxowO5FNljIOGG8rwWcVlm.jpg',
        info: 'Honor X6 4/64GB',
        price:'1 790 000 сум 1 912 000 сум',
        monthPrice: '242 000 сум x 12 мес',
        credit:'КУПИТЬ',
    },  
    {
        productImage: 'https://olcha.uz/image/266x266/products/BV1wsSpH1hgVs3p5Us02SjGzc3Vv9gAdNd9ogQcxowO5FNljIOGG8rwWcVlm.jpg',
        info: 'Honor X6 4/64GB',
        price:'1 790 000 сум 1 912 000 сум',
        monthPrice: '242 000 сум x 12 мес',
        credit:'КУПИТЬ',
    },  
    {
        productImage: 'https://olcha.uz/image/266x266/products/BV1wsSpH1hgVs3p5Us02SjGzc3Vv9gAdNd9ogQcxowO5FNljIOGG8rwWcVlm.jpg',
        info: 'Honor X6 4/64GB',
        price:'1 790 000 сум 1 912 000 сум',
        monthPrice: '242 000 сум x 12 мес',
        credit:'КУПИТЬ',
    },  
    {
        productImage: 'https://olcha.uz/image/266x266/products/BV1wsSpH1hgVs3p5Us02SjGzc3Vv9gAdNd9ogQcxowO5FNljIOGG8rwWcVlm.jpg',
        info: 'Honor X6 4/64GB',
        price:'1 790 000 сум 1 912 000 сум',
        monthPrice: '242 000 сум x 12 мес',
        credit:'КУПИТЬ',
    },  
    {
        productImage: 'https://olcha.uz/image/266x266/products/BV1wsSpH1hgVs3p5Us02SjGzc3Vv9gAdNd9ogQcxowO5FNljIOGG8rwWcVlm.jpg',
        info: 'Honor X6 4/64GB',
        price:'1 790 000 сум 1 912 000 сум',
        monthPrice: '242 000 сум x 12 мес',
        credit:'sotib olish',
    },  
    {
        productImage: 'https://olcha.uz/image/266x266/products/BV1wsSpH1hgVs3p5Us02SjGzc3Vv9gAdNd9ogQcxowO5FNljIOGG8rwWcVlm.jpg',
        info: 'Honor X6 4/64GB',
        price:'1 790 000 сум 1 912 000 сум',
        monthPrice: '242 000 сум x 12 мес',
        credit:'КУПИТЬ',
    },  
]




productData.forEach(product => {
    const box = document.createElement('div')
    const img = document.createElement('img')
    const price = document.createElement('p')
    const monthPrice = document.createElement('h4')
    const info = document.createElement('p')
    const credit = document.createElement('button')

    img.src = product.productImage
    info.textContent = product.info
    price.textContent = product.price
    monthPrice.textContent = product.monthPrice
    credit.textContent = product.credit


    price.classList.add('price')
    box.classList.add('col-lg-2')
    box.classList.add('col-md-4')
    box.classList.add('col-sm-12')
    credit.classList.add('credit')
    info.classList.add('info-item')
    price.classList.add('price')

    row.append(box)
    box.append(img)
    box.append(price)
    box.append(monthPrice)
    box.append(info)
    box.append(credit)

    row.style.display = 'flex'
})
