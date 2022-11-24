const artes = document.querySelector("#secaoArtes")

const listArtes = [{
    img: './assets/images/artes/mona-lisa.png',
    name: 'Mona-lisa',
    date: '1503-1506'
}, {
    img: './assets/images/artes/mona-lisa.png',
    name: 'Mona-lisa',
    date: '1503-1506'

}, {
    img: './assets/images/artes/mona-lisa.png',
    name: 'Mona-lisa',
    date: '1503-1506'

}, {
    img: './assets/images/artes/mona-lisa.png',
    name: 'Mona-lisa',
    date: '1503-1506'

}, {
    img: './assets/images/artes/mona-lisa.png',
    name: 'Mona-lisa',
    date: '1503-1506'

}, {
    img: './assets/images/artes/mona-lisa.png',
    name: 'Mona-lisa',
    date: '1503-1506'

}]


for (let i = 0; i < listArtes.length; i++) {
    artes.innerHTML += `  
    <a class="moldura">
        <img class="imgArte" src=${listArtes[i].img} alt="arte famosa">
    <div class="informacoesDaArte">
        <p>${listArtes[i].name}</p>
        <span>${listArtes[i].date}</span>
    </div>
</a> `

}