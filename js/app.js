function ageInDays() {
  var birthYear = prompt("What year were you born... Good friend?");
  var realAgeInDays = (new Date().getFullYear() - birthYear) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode(
    "You are " + realAgeInDays + " days old"
  );
  var year = document.querySelector("#year");
  year.innerHTML = "2002";
  h1.setAttribute("id", "ageInDays");
  h1.classList.add("display-4", "wt1");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
  setTimeout(() => document.getElementById("ageInDays").remove(), 10000);
}

const year = document.querySelector("#year");
year.innerHTML = new Date().getFullYear();
year.classList.add('lead', 'footer-text');

function reset() {
  document.getElementById("ageInDays").remove();
}

// scrollbutton
$(".scrollTo").click(function() {
  var getElement = $(this).attr("href");
  if ($(getElement).length) {
    var getOffset = $(getElement).offset().top;
    $("html,body").animate(
      {
        scrollTop: getOffset - 50
      },
      500
    );
  }
  return false;
});
