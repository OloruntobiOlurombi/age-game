// Challenge 1: your Age in Days

function ageInDays() {
 var birthYear = prompt('What year were you born... Good friend?');
 var realAgeInDays = (2019 - birthYear) * 365;
 var h1 = document.createElement('h1');
 var result = document.getElementById('flex-box-result');
 var textAnswer =document.createTextNode('You ' + realAgeInDays + ' days old');
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(textAnswer);
 result.appendChild(h1);
}

function reset() {
 document.getElementById('ageInDays').remove();
}