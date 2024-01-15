const clickLi = document.querySelector('.nav ul li:last-child')
let flag = false

clickLi.addEventListener('click', function () {
    // console.log(111)
    if (!flag) {
        document.body.style.backgroundColor = '#000'
        document.body.style.color = '#fff'
    } else {
        document.body.style.backgroundColor = ''
        document.body.style.color = ''
    }
    flag = !flag
})