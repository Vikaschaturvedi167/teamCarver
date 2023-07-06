import {navbar} from '../components/navbar.js'
import {footer} from '../components/footer.js'
document.querySelector('#navbar').innerHTML=navbar()
document.querySelector('#footer').innerHTML=footer()
document.querySelector('.logo').addEventListener('click',()=>{
    location.href='./index.html'
})
let fetchData=async()=>{
    try {
        let result=await fetch('https://shy-ruby-chimpanzee-sari.cyclic.app/products')
        let data=await result.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
fetchData()