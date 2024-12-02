function showit(var1) {
console.log(var1)
document.getElementById('services').style.display = 'none';
document.getElementById('work').style.display = 'none';
document.getElementById('pricing').style.display = 'none';
document.getElementById('join').style.display = 'none';
document.getElementById('contact').style.display = 'none';
document.getElementById('head').style.display = 'none';

document.getElementById(var1).style.display = 'block';

}