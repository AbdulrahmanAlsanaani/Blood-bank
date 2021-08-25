(function($){

        $('#add').submit(function() {
            $.ajax({
                data: $(this).serialize(),
                type: $(this).attr('method'),
                url: $(this).attr('action'),
                success: function(response) {
                	if (response=="success"){
                        $('#message').text("??U� ???�?�U?U�U� ?�U�?�?�U� U�U�").css('color','green').show().fadeOut( 4000 );
                        $("#add")[0].reset()
					}else{
                        $('#message').text(response).show().css('color','red').fadeOut( 4000 );
					}

                }
            });
            return false; // cancel original event to prevent form submitting
        });

        $('#add_comments_form').submit(function() {
            $.ajax({
                data: $(this).serialize(),
                type: $(this).attr('method'),
                url: $(this).attr('action'),
                success: function(response) {
                    if (response=="success"){
                        $('#messages').text("??U� ?�?�?�U??� ???�U�U?U�U� ?�U�U? U??�U�?� ???�U�U?U�U� ?�?�?� ?�U�U�U�?�U?U�?� ?�U�U?U� ?� ?�U�?�?� U�U�").css('color','green').show().fadeOut( 4000 );
                        $("#add_comments_form")[0].reset()
                    }else{
                        $('#messages').text(response).show().css('color','red').fadeOut( 3000 );
                    }

                }
            });
            return false; // cancel original event to prevent form submitting
        });



		// Open modal window on click
		$('.modal-open').on('click', function(e) {
			var mainInner = $('#main'),
				modal = $('#modal');

			mainInner.animate({ opacity: 0 }, 400, function(){
				$('html,body').scrollTop(0);
				modal.addClass('modal-active').fadeIn(400);
			}).hide();
			e.preventDefault();

			$('#modal-close').on('click', function(e) {
				modal.removeClass('modal-active').fadeOut(400, function(){
					mainInner.show().animate({ opacity: 1 }, 400);
				});
				e.preventDefault();
			});
		});


        $('#search').click(function(){
            $('.result').hide(100);
            $('#search_result').find("tr").remove();
            var type=$('.blood_type').val();
            var city=$('.search-city').val();
            var parent=$('.search-parent').val();
            $('.profile').hide();
            $.ajax({
                url:'search.php',
                type:"POST",
                async:false,
                data:{'type':type,'city':city,'parent':parent},
                success:function(data){
                    var obj = JSON.parse(data);
                    if (obj.length !=0){
                        $('.result').show(100);
                    }
                    for (var i=0;i < obj.length;i++) {
                        $('#search_result').append("<tr><td>"+obj[i].name+"</td><td class='text-danger'><b style='direction: ltr'>"+obj[i].type+"</b></td><td>"+obj[i].city+"</td><td>"+obj[i].parent+"</td><td><a class='btn btn-outline-warning detals' id='"+obj[i].id+"'>??U??�?�U?U�</a></td></tr>");
                    }

                    $('.detals').on('click', function(e) {
                        var mainInner = $('#main'),
                            modal = $('#donor_info');
                        var id=$(this).attr("id");
                        $.ajax({
                            url:'donor_profile.php?id='+id,
                            success:function(data){
                                $('.profile').show();
                                var obj=JSON.parse(data);
                                $('#donor_info_name').text(obj.name);
                                $('#donor_info_type').text(obj.type);
                                $('#donor_info_city').text(obj.city);
                                $('#donor_info_parent').text(obj.parent);
                                $('#donor_info_phone1').text(obj.phone1);
                                $('#donor_info_phone2').text(obj.phone2);
                                $('#donor_info_location').text(obj.location);
                                $('#donor_info_sex').text(obj.sex);
                                $('#donor_info_wight').text(obj.wight);
                                $('#donor_info_contact').text(obj.contact);
                                $('#donor_info_call_time').text(obj.call_time);
                                $('#donor_info_age').text(obj.age);
                                $('#donor_info_smoking').text(obj.smoking);

                            }}
                        );

                        mainInner.animate({ opacity: 0 }, 400, function(){
                            $('html,body').scrollTop(0);
                            modal.addClass('modal-active').fadeIn(400);
                        }).hide();
                        e.preventDefault();

                        $('#donor_info_close').on('click', function(e) {
                            modal.removeClass('modal-active').fadeOut(400, function(){
                                //mainInner.animate({ opacity: 1 }, 400);
                            });
                            e.preventDefault();
                        });
                    });
                }
            });
        });
        var parents =["?�U�U�?�?�??"];
        var city=$('.search-city').val();
        var x = document.getElementById("search-parent");
        $('.search-city').change(function(){
            parents=[];
            city=$(this).val();
            switch (city) {
                case "?�?�?�U?U�":
                    parents=["U�?�U�?� ?�U�U�?�U?U�?�", "?�U�?�?�U�", "?�U�U�?�U�?�", "?�U�U�?�U�", "U�U�U??�U�?�U�"];
                    break;
                case "?�U�?�U�?�?�?�":
                    parents=["?�U�?�U�?�?�U?", "?�U�U�?�?�U�", "?�?�U�?�", "?�?�U??�?�", "U�U???", "?�U�U?U�U�?�?�", "?�U�?�?�?�?�", "?�U�?�?�U�?�U??�", "?�U�U�?�U�?�", "?�U�?�?�U�?�U??�"];
                    break;
                case "?�U�?�?�?�?�":
                    parents=["U�?�U�?� ?�U�U�?�U?U�?�", "?�U�U�?�U�?�", "?�?� ?�U�?�?�?�", "?�U�U??�U�", "?�?�U� ?�?�U??�", "?�U�?�?�U??�", "?�U�U�?�U?U�?�"];
                    break;
                case "?�U�?�U�U?U�?�U�U??�":
                    parents=["U�?�U�?� ?�U�U�?�U?U�?�", "?�U�?�U�?�U�", "?�U�U�?�U�", "?�?�U�U??�", "?�?�?�?�"];
                    break;
                case "?�U�?�U?U�?�U�U??�":
                    parents=["U�?�U�?� ?�U�U�?�U?U�?�", "?�U�?�?�U�U??�", "?�U?U�", "?�U�?�U�?�?�"];
                    break;
                case "?�U�U�?�U�U�":
                    parents=["?�U�?�U�?�U�?�", "?�U�?�U�U??�?�", "?�U�?�?�?�", "?�U�U�?�U�?�??", "?�U�?�U�U�?�U�"];
                    break;
                case "?�U�U�?�U?":
                    parents=["U�?�U�?� ?�U�U�?�U?U�?�", "?�U�U�U�U??�", "?�U�U�U�?�?�?�?�", "?�U�U�?�?�?�?�"];
                    break;
                case "?�?�?�U�":
                    parents=["?�U�?�U�?�", "?�U�U�?�?�U�U?U�", "?�U�U�?�U??�", "?�U�U�?�?�U�U??�", "?�U�?�U�?�?� ?�U�???�?�U?"];
                    break;
                case "?�???�?�?�":
                    parents=["?�U�U�?�?�", "?�U�?�?�?�U??�", "?�U�?�?�?�", "?�U�?�?�?�U�U??�", "?�U�U�?�?�U�U??�", "?�?�U� ???�U??�", "?�U�?�?�?�U�U??�", "?�U�U�?�?�?�U�", "?�U�?�?�U?U�U??�"];
                    break;
                case "?�U�?�?�?�":
                    parents=["U�?�U�?� ?�U�U�?�U?U�?�", "?�U�?�?�U�?�", "?�U?U�?�U�U?U�", "?�U??� ?�?�?�U�", "?�?�?�?�?�?�U??�"];
                    break;
                case "?�U�U�U�":
                    parents=["U�?�U�?� ?�U�U�?�U?U�?�", "?�U�?�U�?�?�U??�", "?�U�?�?�", "?�U�U?U�", "?�?�?�U�"];
                    break;
                case "?�U??�U�U�":
                    parents=["?�?�U�U�?�?�", "?�U�?�?�U�?�", "?�U�U�U�?�?�?�U??�", "?�?�U�U�U?U�", "?�U�?�?�U�?�", "U�U??�U?"];
                    break;
                case "?�U? U�?�?�":
                    parents=["?�U�U�?�?�?�U??�", "?�U�?�?�?�?�", "?�U�?�U??�?�U?", "?�U�U� ?�U�?�U?U�?�", "?�U�?�?�?�U??�"];
                    break;
                case "?�U�?�?� ?�U�?�U?U�":
                    parents=["?�?�U�?�?�??", "??U�?�U???", "?�U�?�?�U�?�?�", "?�U??�U?", "?�U�?�U�?�", "?�U�?�", "?�U�?�?�U�?�U�?�??U�", "?�U�?�?�U?U�"];
                    break;
                case "U�?�?�U�?�??":
                    parents=["U�?�U�?� ?�U�U�?�U?U�?�", "?�U�U??�U??�", "?�U?U� ?�U�??U�?�"];
                    break;
                case "U�?�U�U�U�":
                    parents=["U�?�U�?� ?�U�U�?�U?U�?�", "?�?�U�U�U�", "?�U�?�?�?�", "?�U�?�U�U??�?�"];
                    break;
                case "U�U??�?�U�":
                    parents=["?�U�?�U�?�?�?�", "?�U�U? ?�U�???�?�U?", "?�U�U�U?U�U�U�?�", "?�U�U�?�?�", "U�U�?�?� ?�?�U�?�", "?�U�U�?�U�?�??"];
                    break;
                case "?�U�U�U�?�U�":
                    parents= ["U�?�U�?� ?�U�U�?�U?U�?�", "?�U�?�?�?�?�", "?�U�?�?�?�", "U�?�U�U�?�", "?�U�?�U??�?�U�", "?�U�?�?�?�", "?�U�?�U�?�?�U�U??�", "??U�?�U??�", "??U�U�U?U?"];
                    break;
                case "U�?�?�?�":
                    parents=["?�U�U�U�??", "?�U�?�U?", "?�U�?�U�U??�?�", "?�?�?�?�", "?�U�U�?�U�?�U�U??�", "?�U�?�?�U??�U??�"];
                    break;
                default:
                    parents.clone();
            }
            $('.search-parent').find("option").remove();
            for(var i=0 ; i < parents.length;i++){
                $('.search-parent').append("<option>"+parents[i]+"</option>");
            }

        });
        $.ajax({
            url:"comments.php",
            success:function(data){
                var obj=JSON.parse(data);
                for(var i=0;i<obj.length;i++){
                    $('#comments_get').append('<div class="card card-margin" ><h5 class="card-header text-white  bg-info  text-right" style="padding: 4px !important;direction: rtl"><img src="flags/'+obj[i].country+'" width="50" height="50" /> '+obj[i].name+'   <span class="pull-left text-left" style="font-size:small">'+obj[i].created_at+'</span></h5><div class="card-block"><p class="card-text text-right" style="color:black;padding:5px;">'+obj[i].content+'</p></div></div>');
                }
            }
        });
		
		// Open modal window on click
		$('.modal2-open').on('click', function(e) {
			var mainInner = $('#main'),
				modal = $('#modal2');

			mainInner.animate({ opacity: 0 }, 400, function(){
				$('html,body').scrollTop(0);
				modal.addClass('modal-active').fadeIn(400);
			}).hide();
			e.preventDefault();

			$('#modal2-close').on('click', function(e) {
				modal.removeClass('modal-active').fadeOut(400, function(){
					mainInner.show().animate({ opacity: 1 }, 400);
				});
				e.preventDefault();
			});
		});

        $('.comments-open').on('click', function(e) {
            var mainInner = $('#main'),
                modal = $('#comments');
            mainInner.animate({ opacity: 0 }, 400, function(){
                $('html,body').scrollTop(0);
                modal.addClass('modal-active').fadeIn(400);
            }).hide();
            e.preventDefault();

            $('#comments_close').on('click', function(e) {
                modal.removeClass('modal-active').fadeOut(400, function(){
                    mainInner.show().animate({ opacity: 1 }, 400);
                });
                e.preventDefault();
            });
        });

        $('#add_comments_open').on('click', function(e) {
            var mainInner = $('#main'),
                modal = $('#add_comments');
            mainInner.animate({ opacity: 0 }, 400, function(){
                $('html,body').scrollTop(0);
                modal.addClass('modal-active').fadeIn(400);
            }).hide();
            e.preventDefault();

            $('#add_comments_close').on('click', function(e) {
                modal.removeClass('modal-active').fadeOut(400, function(){
                    //mainInner.animate({ opacity: 1 }, 400);
                });
                e.preventDefault();
            });
        });


	
})(jQuery);