// Challenge 1: your Age in Days

function ageInDays() {
 var birthYear = prompt('What year were you born... Good friend?');
 var realAgeInDays = (2019 - birthYear) * 365;
 var h1 = document.createElement('h1');
 var textAnswer =document.createTextNode('You are ' + realAgeInDays + ' days old');
 h1.setAttribute('id', 'ageInDays');
 h1.appendChild(textAnswer);
 document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
 document.getElementById('ageInDays').remove();
}

// scrollbutton
$('.scrollTo').click(function(){
    var getElement = $(this).attr('href');
    if($(getElement).length){
        var getOffset = $(getElement).offset().top;
        $('html,body').animate({
            scrollTop: getOffset - 50
        },500)

    }
    return false;
})