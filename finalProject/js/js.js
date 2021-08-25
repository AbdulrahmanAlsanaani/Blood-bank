$(document).ready(function() {

    $('#departure').datepicker({
       minDate : '-6m',
       maxDate : 0,
       changeMonth : true,
       changeYear : true
    });
    $('#date-b').datepicker({
        minDate : '-50y',
        maxDate : '-18y',
        changeMonth : true,
        changeYear : true,
     });
     /*$("#error-name").hide();

     $("#name").keypress( function(){
        var $name;
        $name=$("#name").text();
        if (e.which == 13){
        if($name.height <= 5) {
           $("#error-name").show();
        }}
    }
     ) */
     $("#name").keypress(function(){
        if($(this).val().length <=3){
            //$(this).parent().find('.custom-alert').fadeIn(300);
            $('#div-username').css('border','1px solid #F00');
            $('.useralert').fadeIn(300);
            //$('.asterisx').fadeIn(100);
            userErrors = true;
        }else{
            $('#div-username').css('border','1px solid #080');
            $('.useralert').fadeOut(300);
            //$('.asterisx').fadeOut(100);
            userErrors=false;
        }
    });


    /*$("#departure").blur(function(){
        if($(this).val().length <=3){
            //$(this).parent().find('.custom-alert').fadeIn(300);
            $(this).css('border','1px solid #F00');
            $('.datelalert').fadeIn(300);
            //$('.asterisx').fadeIn(100);
            userErrors = true;
        }else{
            $(this).css('border','1px solid #080');
            $('.datelalert').fadeOut(300);
            //$('.asterisx').fadeOut(100);
            userErrors=false;
        }
    });


    $("#date-b").blur(function(){
        if($(this).val().length <=3){
            //$(this).parent().find('.custom-alert').fadeIn(300);
            $(this).css('border','1px solid #F00');
            $('.datebalert').fadeIn(300);
            //$('.asterisx').fadeIn(100);
            userErrors = true;
        }else{
            $(this).css('border','1px solid #080');
            $('.datebalert').fadeOut(300);
            //$('.asterisx').fadeOut(100);
            userErrors=false;
        }
    });*/



    /*$("#email").keypress(function(e){
        
        if(e.keyCode != 64){
            //$(this).parent().find('.custom-alert').fadeIn(300);
            $(this).css('border','1px solid #F00');
            $('.emailalert').fadeIn(300);
            //$('.asterisx').fadeIn(100);
            userErrors = true;
        }else{
            $(this).css('border','1px solid #080');
            $('.emailalert').fadeOut(300);
            //$('.asterisx').fadeOut(100);
            userErrors=false;
        }
    });*/



    $("#phone").keypress(function(){
        if($(this).val().length <=3){
            //$(this).parent().find('.custom-alert').fadeIn(300);
            $('#div-phone').css('border','1px solid #F00');
            $('.phonealert').fadeIn(300);
            //$('.asterisx').fadeIn(100);
            userErrors = true;
        }else{
            $('#div-phone').css('border','1px solid #080');
            $('.phonealert').fadeOut(300);
            //$('.asterisx').fadeOut(100);
            userErrors=false;
        }
    });

    $(".b").change(function(){
        var pack = this.options[this.selectedIndex].value;     // Get selected option
          if (pack === 'صنعاء'){
            $(".city").html("<option>المدينة</option>"+
            '<option value="الامانة">الامانة</option>'+
            '<option value="بيت مران">بيت مران</option>'+
            '<option value="سيان">سيان</option>'+
            '<option value="غيمان">غيمان</option>')
        }else if
        (pack === 'عدن'){
            $(".city").html('<option>المدينة</option>'+
            '<option value="عدن">عدن</option>'+
            '<option value="النصورة">النصورة</option>'+
            '<option value="خور مكسر">خور مكسر</option>'+
            '<option value="الشيخ عثمان">الشيخ عثمان</option>')
        }
        else if
        (pack === 'حضرموت'){
            $(".city").html('<option>المدينة</option>'+
            '<option value="الكلا">الكلا</option>'+
            '<option value="حجر">حجر</option>'+
            '<option value="سيؤن">سيؤن</option>'+
            '<option value="الغيل">الغيل</option>'+
            '<option value="الحامي">الحامي</option>'+
            '<option value="الشحر">الشحر</option>')
        }
        else if
        (pack === 'إب'){
            $(".city").html('<option>المدينة</option>'+
            '<option value="إب">إب</option>'+
            '<option value="العدين">العدين</option>'+
            '<option value="القاعدة">القاعدة</option>'+
            '<option value="حبيش">حبيش</option>')
        }
        else{
            $(".city").html('pack');
            $(this).css('border','1px solid #080');
            $('.opalert').fadeOut(300);
            //$('.asterisx').fadeOut(100);
            emailError=false;
        }
    });

    $('#hello').dialog({
        modal: true,
        autoOpen: false,});

    /*$("#submit").submit(function(){
        /*if(userErrors==true ||emailError==true||msgError==true){
            e.preventDefault();
            $('.userman, .email, .Message').blur();

        }else{

        }
       
        $('#hello').dialog('open');

    });*/
});