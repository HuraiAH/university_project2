const colors= document.getElementsByClassName('colors');
for( let i= 0; i< colors.length; i++){
    colors[i].addEventListener('click', changeColor)
}
function changeColor(){
    let color= this.getAttribute('data-color');
    document.documentElement.style.setProperty('--themes_color', color);
}

// var nam= 'md abu huraira'
// console.log(nam)