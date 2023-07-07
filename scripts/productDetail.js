import {navbar} from '../components/navbar.js'
import {footer} from '../components/footer.js'
document.querySelector('#navbar').innerHTML=navbar()
document.querySelector('#footer').innerHTML=footer()
document.querySelector('.logo').addEventListener('click',()=>{
    location.href='../index.html'
})
let id=localStorage.getItem('id')
let description=localStorage.getItem('description')
let image=localStorage.getItem('image')
let price=localStorage.getItem('price')
let title=localStorage.getItem('title')
title=title.toUpperCase()
let detailImage=document.createElement('img')
detailImage.src=image
let mainImage=document.querySelector('.mainImage')
mainImage.append(detailImage)
let titleContainer=document.createElement('h1')
titleContainer.append(title)
let priceContainer=document.createElement('p')
priceContainer.textContent='$'+price
let addtobag=document.createElement('button')
addtobag.textContent='Add to bag'
let descriptionTitle=document.createElement('p')
descriptionTitle.textContent='DESCRIPTION'
let hr=document.createElement('hr')
let descriptionContainer=document.createElement('p')
descriptionContainer.textContent=description
document.querySelector('.mainDesc').append(titleContainer,priceContainer,addtobag,descriptionTitle,hr,descriptionContainer)