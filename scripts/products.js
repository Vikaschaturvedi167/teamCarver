//!global variables
let products=[]
//! importing 
import {navbar} from '../components/navbar.js'
import {footer} from '../components/footer.js'
document.querySelector('#navbar').innerHTML=navbar()
document.querySelector('#footer').innerHTML=footer()
//!rest
document.querySelector('.logo').addEventListener('click',()=>{
    location.href='./index.html'
})
const hamburger=document.querySelector('.hamburger')
const navMenu=document.querySelector('.navlinks')
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})
//!fetching data
let fetchData=async()=>{
    try {
        let result=await fetch('https://shy-ruby-chimpanzee-sari.cyclic.app/products')
        let data=await result.json()
        products=data
        displayData(data)
    } catch (error) {
        console.log(error)
    }
}
fetchData()
//!appending data
let displayData=(data)=>{
    console.log(data)
    document.querySelector('#mainitems').innerHTML=''
    data.forEach((item)=>{
        let img=document.createElement('img')
        img.src=item.image
        let name=document.createElement('p')
        name.textContent=item.title
        let price=document.createElement('p')
        price.textContent='$'+item.price
        let div=document.createElement('div')
        div.setAttribute('class','carditem')
        div.append(img,name,price)
        div.addEventListener('click',()=>{
           localStorage.setItem('id',item.id)
           localStorage.setItem('description',item.description)
           localStorage.setItem('image',item.image)
           localStorage.setItem('price',item.price)
           localStorage.setItem('title',item.title)
           location.href='productDetail.html'
        })
        document.querySelector('#mainitems').append(div)
    })
}
displayData(products)
