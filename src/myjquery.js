$(document).ready(function () {
  $("h1").css({color: '#c75517',
  fontWeight: 'bold',
  textTransform: 'uppercase'});
});


$(function()
{
  $("#Iframe").fadeToggle(1000).slideToggle(1000);
});


$(function () {
  $("#searchh2").css({opacity: '0.5'});
});

$(function () {
  $("#cardthree").html("Those who report on XpertBro have helped me make informed, logical, educated decisions. I am truly grateful.  ");
});

$(function () {
  $("#Itagpanel").on('mouseover', function()
  {
    $("#panel1").fadeOut(200);
  });
});

$(document).ready(function () {
  // $("p").text("Text has been updated");
  $("h2").css("font-weight", "bold ")
});

// $(function(){

//   var content="You dont have new tasks!!";
// $("#tasks").on('click',function(){
// var tasks=$(this).atte('data-panel');
// { $('#'+tasks).SlideDown();
// $('#'+tasks).html(content);
// });
// });

function validates() {
  let username = document.getElementById("uname");
  let password = document.getElementById("userpass");
  if (username.value.trim() == "" || password.value.trim() == "") {
      alert('Incorrect username or password');
      return false;
  } else { return true; }
}
