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

    $("#lastMessage").click(function(){
        $("#lastMessage").slideUp(400)
    })
    var contactPage = $("<div class='columns' id='contactPage'>")
    var contactInputs = $("<div class='column card' id='message-2'><h3>Your name: <input class='inputFields' id='yourName'><h3>Your phone #: <input class='inputFields' id='yourNum'><br><h3>Your email: <input class='inputFields' id='yourEmail'><br><h3>Leave me a message: <input class='inputFields' id='yourMessage'><br><br><h2>Send it").css({float:'right'})
    var contactMessages = $("<div class='column card' id='message-1'><h2 id='workWithMe'>Contact me - Let's Work Together!<h4 id='address'>Amal Janabayev<br>1630 228th St SE<br>Bothell, WA 98021<h4/>").css({float:'left'})
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



