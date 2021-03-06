<?php

$dsn = 'mysql:host=localhost;dbname=bloodbank';

$user = 'root';

$pass = '';

$options = array(
    
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',

);


try {
    $db = new PDO($dsn, $user, $pass, $options);

    if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    /*$typeblood = $_POST['typeblood'];
    $province = $_POST['province'];
    $city = $_POST['city'];*/

    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $q = "INSERT INTO bloodinfo (name,phone,email) VALUES ('mkmok',7411,'llo-l')";

    $db->exec($q);
    
    }

    
}

catch(PDOException $e){

    echo 'Failed' . $e->getMessage();

}




?>


<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="style/style.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="style/font-awesome.css" />
    <link rel="stylesheet" href="style/jquery-ui.min.css">
    <link rel="stylesheet" href="style/style2.css">
    <link rel="stylesheet" href="style/bootstrap.min.css">
    <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link href="css/font-Cairo.css" rel="stylesheet">
</head>
<body>
    <!--Start nav-->
    <nav class="navbar navbar-fixed-top bd-navbar pr-2 bg-danger align-content-center" style="position:relative;z-index:1000;width: 100%">
            <div class="container px-0">
                <div class="alai-logo">
                    <div class="navbar-header d-flex align-items-center mr-md-4 bloodlogo">
                        <a href="#" class="navbar-brand mr-md-2 mr-0 mt-1 brandtext" style="
                        color: #fff!important;">بنك الدم الالكتروني</a>
                        <img src="img/blooda.svg" alt="logo blooda" class="blood ml-2 mt-1 d-block d-sm-none">  
                    </div>
                </div>
                <ul class="navbar-nav flex-row mr-md-auto d-md-flex line-h pr-0">
                    <li class="nav-item mr-2">
                        <a href="#">
                            <i class="fa fa-facebook-square" style="color:#fff"></i></a>      
                    </li>
                    <li class="nav-item mr-2">
                        <a href="#">
                            <i class="fab fa-twitter-square"></i></a>     
                    </li>
                    <li class="nav-item mr-2">
                        <a href="#">
                            <i class="fab fa-whatsapp-square"></i></a>      
                    </li>
                    <li class="nav-item mr-2">
                        <a href="#">
                            <i class="fab fa-instagram"></i></a>       
                    </li>
                    
                </ul>
            </div>
        </nav>
        <!--End nav-->
    <div class="containt">
        <div class="retrev">
            <a href="index.php" class="font">رجوع</a>
        </div>
        <h1 class="font">تسجيل متبرع جديد</h1>
        <form method="POST"> 
                <div class="div" id="div-username" method"POST">
                    <input type="text" placeholder="اسم المتبرع" id="name" class="font" name="name">
                            <i class="fa fa-user"></i>
                </div>
                <div class="alert alert-danger custom-alert useralert" class="font" style="display: none;">
                    يجب الا يقل الاسم عن 5 احرف
                </div>
            <div class="date">
                    <div class="l-date">
                        <div class="div">
                        <input type="text" placeholder="تاريخ اخر تبرع" id="departure" class="font" required name="lDate"> 
                            <i class="fa fa-calendar"></i>
                    </div>
                        <div class="alert alert-danger custom-alert datelalert" style="display: none;" class="font">
                                يجب ادخال تاريخ اخر تبرع
                        </div> 
                    </div>
                <div class="b-date">
                    <div class="div">
                    <input type="text" placeholder="تاريخ الميلاد" id="date-b" name="bDate" required class="font">  
                        <i class="fa fa-calendar"></i>
                    </div>
                    <div class="alert alert-danger custom-alert datebalert" style="display: none;"class="font">                  
                        يجب ادخال تاريخ الميلاد
                    </div>
                </div>
            </div>
            <div class="date">
                    <div class="l-date">
                        <div class="div">
                        <input type="email" placeholder="الايميل" id="email" name="email" class="font"> 
                            <i class="font">@</i>
                        </div>
                        <div class="alert alert-danger custom-alert emailalert" style="display: none;" class="font">
                            الايميل غير صحيح (يجب ان يحتوي الايميل عل @) 
                        </div> 
                    </div>
                <div class="b-date">
                    <div class="div" id="div-phone">
                    <input type="number" placeholder="رقم التلفون" id="phone" name="phone" required class="font"> 
                        <i class="fa fa-phone"></i>
                    </div>
                    <div class="alert alert-danger custom-alert phonealert" style="display: none;" class="font">
                        يجب الا يقل رقم التلفون عن 5 ارقام
                    </div>
                </div>
            </div>
            <select name="typeblood" required class="font">
                 <option value="">فصيلة الدم</option>
                 <option value="">A+</option>
                 <option value="">B+</option>
                 <option value="">AB+</option>
                 <option value="">O+</option>
                 <option value="">A-</option>
                 <option value="">B-</option>
                 <option value="">AB-</option>
                 <option value="">O-</option>
            </select>
            <select name="province" class="b font" required >
                <option value="">المحافظة</option>
                <option value="صنعاء" id="san">صنعاء</option>
                <option value="عدن" id="aden">عدن</option>
                <option value="حضرموت" id="had">حضرموت</option>
                <option value="إب" id="eb">إب</option>
                <option value="rem" id="rem">ريمة</option>
                <option value="taz" id="taz">تعز</option>
                <option value="hod" id="hod">الحديدة</option>
           </select>

           <select name="city" class="city font" required>
            <option value="">المدينة</option>
           </select>

           <input type="submit" value="تسجيل" id="submit" class="font">
        </form>
       

        
        <div id="hello" title="Hello World!" style="display: none;">
            <p>A jQuery UI Dialog Box</p>
        </div>

    </div>

    <div class="container-fluid py-2 font text-white bg-danger text-center cust-foot">
            <p class="m-0 cust-p">جميع الحقوق محفوظة © 2019 .
                <a href="#" class="text-white" style="
                color: #fff!important;">بنك الدم الالكتروني</a>
            </p>
    </div>
    <script src="js/jquery.min.js"></script>
    <script src="js/jquery-1.11.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/jquery-ui.js"></script>
    <script src="js/js.js"></script>
</body>
</html>