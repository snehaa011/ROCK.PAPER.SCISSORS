var yourscore=0;
var compscore=0;
var computerChoice=["rockc","paperc","scic"];
var yourChoice=["rocky","papery","sciy"];

$(".icon").on("click",function(){
    var userChoice=$(this).attr("id");
    playSound(userChoice);
    for (var i=0;i<3;i++)
    {
        if ( yourChoice[i] != userChoice )
        {
            $("#"+yourChoice[i]).addClass("inactive");
        }
        else
        {
            $("#"+userChoice).addClass("clicked");
            var youIndex=i;
        }
    }
    var compIndex=Math.floor(Math.random()* 3);
    var compChoice=computerChoice[compIndex];
    $("#"+compChoice).removeClass("inactive");
    checkScore(youIndex,compIndex)
})

function checkScore(you,comp){
    if (you==comp)
    {
        setTimeout(function(){$("h1").text("It's a tie.");},1000);
    }
    if ( (you==0 && comp==1) || (you==1 && comp==2) || (you==2 && comp==0))
    {
        compscore++;
        setTimeout(function(){$("h1").text("Computer scores.");},1000);
    }
    if ( (comp==0 && you==1) || (comp==1 && you==2) || (comp==2 && you==0))
    {
        yourscore++;
        setTimeout(function(){$("h1").text("You score.");},1000);
    }
    next();
}

function next()
{
    setTimeout(function(){$(".youscore").text(yourscore);
    $(".compscore").text(compscore);},2000);
    setTimeout(function(){
        $("h1").text("ROCK. PAPER. SCISSORS. ");
        $(".you .icon").removeClass("inactive");
        $(".comp .icon").addClass("inactive");
        $("#"+userChoice).removeClass("clicked");
    },2000);
    if (yourscore==5 || compscore==5)
        gameOver();
}

function gameOver()
{
    if (yourscore>compscore)
    setTimeout(function(){$("h1").text(" YOU WIN!! ");},3000);
    else
    setTimeout(function(){$("h1").text(" YOU LOSE!! ");},3000);
    setTimeout(function(){
        compscore=0;
        yourscore=0;
        $(".youscore").text(yourscore);
        $(".compscore").text(compscore);
        $("h1").text("ROCK. PAPER. SCISSORS. ");
        $(".you .icon").removeClass("inactive");
        $(".comp .icon").addClass("inactive");
    },6000);
}

$(".restart").on("click",function(){
    compscore=0;
        yourscore=0;
        $(".youscore").text(yourscore);
        $(".compscore").text(compscore);
        $("h1").text("ROCK. PAPER. SCISSORS. ");
        $(".you .icon").removeClass("inactive");
        $(".comp .icon").addClass("inactive");
})

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}