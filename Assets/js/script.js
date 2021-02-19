$(document).ready(function(){

    $("#blinker").css({color:'#4666FF',fontWeight:'200'})
    
    $("#aboutMe").mouseover(function(){
        $("#aboutMe").css({backgroundColor:"#00FECA"})
    }).mouseout(function(){
        $("#aboutMe").css({backgroundColor:'transparent'})
    });
    $("#contact").mouseover(function(){
        $("#contact").css({backgroundColor:"#F85125"})
    }).mouseout(function(){
        $("#contact").css({backgroundColor:'transparent'})
    })
    $("#myProjects").mouseover(function(){
        $("#myProjects").css({backgroundColor:"#00207F"})
    }).mouseout(function(){
        $("#myProjects").css({backgroundColor:'transparent'})
    })

    var firstColumn = $("#firstColumn");
    var secondColumn = $("#secondColumn");

    var lostNoMore = $("<div class='card projectShowcase' id='lostNoMore'>").css({height:'350px',display:'block',marginTop:'10%', backgroundImage:'url(./Assets/css/Pictures/lnm.png)'})
    var lostNomoreTitle = $("<h2 class='projectTitles' id='lostNoMoreTitle'>").text('LostNoMore - Interactive travelling guide').css({backgroundColor:'#4666FF',color:'white',borderRadius:'5%'})
    var lnmLink = $("<span class='projectlinks'><a href='https://obrienceob.github.io/LostNoMore/'><p >Deployed link -->").css({color:'white'})
    var githublnmLink = $("<span class='projectlinks'><a href=' https://github.com/obrienceob/LostNoMore'><p >Repo link -->").css({color:'white'})
    lostNoMore.append(lnmLink,githublnmLink).hide();
    firstColumn.append(lostNoMore);
    $("#lostNoMore").mouseover(function(){
        lostNomoreTitle.slideDown(350).stop()
    }).mouseout(function(){
        lostNomoreTitle.hide()
    })

    var passwordProject = $("<div class='card projectShowcase' id='passwordProject'>").css({height:'350px', display:'block',backgroundImage:'url(./Assets/css/Pictures/password.png)'})
    var passwordProjectTitle = $("<h2 class='projectTitles' id='passwordProjectTitle'>").text('Password Generator')
    var pswLink = $("<span class='projectlinks'><a href=' https://amal31497.github.io/Homework-3/'><p >Deployed link -->")
    var githubpswLink = $("<span class='projectlinks'><a href='https://github.com/Amal31497/Homework-3'><p >Repo link -->")
    passwordProjectTitle.append(pswLink,githubpswLink).hide();
    passwordProject.append(passwordProjectTitle);
    firstColumn.append(passwordProject)
    $("#passwordProject").mouseover(function(){
        passwordProjectTitle.slideDown(350).stop()
    }).mouseout(function(){
        passwordProjectTitle.hide()
    })

    var weather = $("<div class='card projectShowcase' id='weatherProject'>").css({height:'350px', display:'block', backgroundImage:'url(./Assets/css/Pictures/weather.png)'})
    var weatherProjectTitle = $("<h2 class='projectTitles' id='weatherProject'>").text('Weather Dashboard')
    var wLink = $("<span class='projectlinks'><a href='https://amal31497.github.io/Weather-Dashboard/'><p >Deployed link -->")
    var githubwLink = $("<span class='projectlinks'><a href='https://github.com/Amal31497/Weather-Dashboard'><p >Repo link -->")
    weatherProjectTitle.append(wLink,githubwLink).hide();
    weather.append(weatherProjectTitle);
    secondColumn.append(weather);
    $("#weatherProject").mouseover(function(){
        weatherProjectTitle.slideDown(350).stop()
    }).mouseout(function(){
        weatherProjectTitle.hide()
    })

    var schedule = $("<div class='card projectShowcase' id='scheduleProject'>").css({height:'350px', display:'block', backgroundImage:'url(./Assets/css/Pictures/schedule.png)'})
    var scheduleProjectTitle = $("<h2 class='projectTitles' id='scheduleProject'>").text('Scheduling tool');
    var schLink = $("<span class='projectlinks'><a href=' https://amal31497.github.io/Homework-5/'><p >Deployed link -->")
    var githubschLink = $("<span class='projectlinks'><a href=' https://github.com/Amal31497/Homework-5'><p >Repo link -->")
    scheduleProjectTitle.append(schLink,githubschLink).hide();
    schedule.append(scheduleProjectTitle);
    secondColumn.append(schedule);
    $("#lastMessage").click(function(){
        $("#lastMessage").slideUp(400)
    })
    var contactPage = $("<div class='columns' id='contactPage'>")
    var contactInputs = $("<div class='column' id='message-2'><h3>Your name: <input class='inputFields' id='yourName'><h3>Your phone #: <input class='inputFields' id='yourNum'><br><h3>Your email: <input class='inputFields' id='yourEmail'><br><h3>Leave me a message: <input class='inputFields' id='yourMessage'><br><br><h2>Send it").css({float:'right'})
    var contactMessages = $("<div class='column' id='message-1'><h2 id='workWithMe'>Contact me - Let's Work Together!<h4 id='address'>Amal Janabayev<br>1630 228th St SE<br>Bothell, WA 98021<h4/>").css({float:'left'})
    contactPage.append(contactMessages, contactInputs).css({width:'100%',margin:'0'}).hide()
    $("#contactField").append(contactPage)

    $("#contactField").click(function(){
        contactPage.fadeIn(300)
    })




    $("#workWithMe").click(function(){
        var nameInput = $("#yourName").text
        var numInput = $("#yourNum").text
        var emailInput = $("#yourEmail").text
        var messageInput = $("#yourMessage").text
        localStorage.setItem("name",nameInput);
        localStorage.setItem("number",numInput);
        localStorage.setItem("email",emailInput);
        localStorage.setItem("message",messageInput);
    })
    


})


