$(document).ready(function(){

    $('.user_content1').click(function(){
        if($('.click_div1').css("display")=="none"){
            $('#down_btn').attr("src","../img/up_icon.png");
            $('.click_div1').css("display","block");
        }else{
            $('#down_btn').attr("src","../img/down2_icon.png");
            $('.click_div1').css("display","none");
        }
    });
    
    $('.user_content2').click(function(){
        if($('.click_div2').css("display")=="none"){
            $('#down_btn').attr("src","../img/up_icon.png");
            $('.click_div2').css("display","block");
        }else{
            $('#down_btn').attr("src","../img/down2_icon.png");
            $('.click_div2').css("display","none");
        }
    });
    
    $('.user_content3').click(function(){
        if($('.click_div3').css("display")=="none"){
            $('#down_btn').attr("src","../img/up_icon.png");
            $('.click_div3').css("display","block");
        }else{
            $('#down_btn').attr("src","../img/down2_icon.png");
            $('.click_div3').css("display","none");
        }
    });
    
    $('.user_content4').click(function(){
        if($('.click_div4').css("display")=="none"){
            $('#down_btn').attr("src","../img/up_icon.png");
            $('.click_div4').css("display","block");
        }else{
            $('#down_btn').attr("src","../img/down2_icon.png");
            $('.click_div4').css("display","none");
        }
    });
    
    
    /* 비밀번호 변경 js */
    var currenPassword=$('#currenPassword');
    var newPassword=$('#newPassword');
    var confirnewPassword=$('#confirnewPassword');
    
    
    currenPassword.on('focus',function(){
        $('.pl1').css("top","175px").css("font-size","11px");
        $('#currenPassword').css("border-color","#4e86ed");
        
    });
    currenPassword.on('focusout', function(){ 
        if(currenPassword.val()==''){
            $('.pl1').css("top","180px").css("font-size","15px"); 
            $('#currenPassword').css("border-color","#999");
    
        }else{
            $('#currenPassword').css("border-color","#5fa53f");
        }  
    });
    
    
    
    newPassword.on('focus',function(){
        $('.pl2').css("top","275px").css("font-size","11px");
        $('#newPassword').css("border-color","#4e86ed");
        
    });
    newPassword.on('focusout', function(){ 
        var pw1=$('#newPassword').val();
        if($('#newPassword').val()==''){
            $('.pl2').css("top","280px").css("font-size","15px"); 
            $('#newPassword').css("border-color","#999");
            $('#pwck').css("display","none")
        }
        
        else if(pw1.length < 6 || pw1.length > 60){
            $('#newPassword').css("border-color","#ee3110");
            $('#pwck').css("display","block")
        }
        else{
            $('#newPassword').css("border-color","#5fa53f");
            $('#pwck').css("display","none")
        } 
    });
    
    
    confirnewPassword.on('focus',function(){
        $('.pl3').css("top","365px").css("font-size","11px");
        $('#confirnewPassword').css("border-color","#4e86ed");
        
    });
    confirnewPassword.on('focusout', function(){ 
        var pw1=$('#newPassword').val();
        var pw2=$('#confirnewPassword').val();
    
        if(confirnewPassword.val()==''){
            $('.pl3').css("top","370px").css("font-size","15px"); 
            $('#confirnewPassword').css("border-color","#999");
    
        }else if(pw1==pw2){
            $('#confirnewPassword').css("border-color","#5fa53f");
            $('#pwck2').css("display","block")
        }
        else if(pw1!=pw2){
            $('#confirnewPassword').css("border-color","#5fa53f");
            $('#pwck2').text("비밀번호 불일치")
            $('#pwck2').css("color","red")
            $('#pwck2').css("display","block")
        }
        
    });



    /*초기 멤버십 선택되는 곳 */
    $('.item3').addClass('list_select');
    $('.item3').find('.selection_header').addClass('list_select_item');
    $('.item3').append('<img src="../img/check.png" class="check_img">');
    /*---------------------------------------------------------------- */

    
    $('.list_item').on('click', function(){ 
        $(this).addClass('list_select');
        $(this).find('.selection_header').addClass('list_select_item');
        $(this).append('<img src="../img/check.png" class="check_img">');
        
        $(this).siblings().removeClass('list_select');
        $(this).siblings().find('.selection_header').removeClass('list_select_item');
        $(this).siblings().find('.check_img').remove();
    }); 
    
    });