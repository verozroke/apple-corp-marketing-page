let ellen: string = ' i love you ellen <3'
console.log(ellen)

let training1: Element = document.getElementsByClassName('courses__el')[0]
let training2: Element = document.getElementsByClassName('courses__el')[1]
let training3: Element = document.getElementsByClassName('courses__el')[2]
let training4: Element = document.getElementsByClassName('courses__el')[3]


function makeActive(id: string): void {
    if (training1.classList.contains('active')) {
        training1.classList.remove('active')
    }
    if (training2.classList.contains('active')) {
        training2.classList.remove('active')
    }
    if (training3.classList.contains('active')) {
        training3.classList.remove('active')
    }
    if (training4.classList.contains('active')) {
        training4.classList.remove('active')
    }
    const givenEl: Element | null = document.getElementById(id)
    givenEl?.classList.toggle('active')
}


// @ts-ignore
export { };