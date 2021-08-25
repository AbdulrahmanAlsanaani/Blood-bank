/*global $,alert, console*/
$(function (){
    'use strict';
    var userErrors = true,
    emailError = true,
    msgError = true;
    function checkErrors(){
        if(userErrors==true ||emailError==true||msgError==true){
        console.log("Errors")
    }else
    console.log("true")
}

    $(".usermane").blur(function(){
        if($(this).val().length <=3){
            //$(this).parent().find('.custom-alert').fadeIn(300);
            $(this).css('border','1px solid #F00');
            $('.useralert').fadeIn(300);
            //$('.asterisx').fadeIn(100);
            userErrors = true;
        }else{
            $(this).css('border','1px solid #080');
            $('.useralert').fadeOut(300);
            //$('.asterisx').fadeOut(100);
            userErrors=false;
        }
    });

    $(".email").blur(function(){
        //if($(this).val().length <1){
        if($(this).val()==""){
            //$(this).parent().find('.custom-alert').fadeIn(300);
            $(this).css('border','1px solid #F00');
            $('.emailalert').fadeIn(300);
            //$('.asterisx').fadeIn(100);
            emailError = true;
        }else{
            $(this).css('border','1px solid #080');
            $('.emailalert').fadeOut(300);
            //$('.asterisx').fadeOut(100);
            emailError=false;
        }
    });

    $(".cellphone").blur(function(){
        //if($(this).val().length <1){
        if($(this).val().length<9 ){
            //$(this).parent().find('.custom-alert').fadeIn(300);
            $(this).css('border','1px solid #F00');
            $('.cellphonealert').fadeIn(300);
            //$('.asterisx').fadeIn(100);
        }else{
            $(this).css('border','1px solid #080');
            $('.cellphonealert').fadeOut(300);
            //$('.asterisx').fadeOut(100);
        }
    });

    $(".Message").blur(function(){
        //if($(this).val().length <1){
            if($(this).val().length <=10){
            //$(this).parent().find('.custom-alert').fadeIn(300);
            $(this).css('border','1px solid #F00');
            $('.Messagealert').fadeIn(300);
            //$('.asterisx').fadeIn(100);
            msgError = true;
        }else{
            $(this).css('border','1px solid #080');
            $('.Messagealert').fadeOut(300);
            //$('.asterisx').fadeOut(100);
            msgError-false;
        }
    });


    $("submit").submit(function(e){
        if(userErrors==true ||emailError==true||msgError==true){
            e.preventDefault();
            $('.userman, .email, .Message').blur();

        }else{

        }
    });

});