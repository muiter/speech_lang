$(function(){
  // $(".glyphicon").click(function() {
  //   // alert("HI");
  //   $(".glyphicon").addClass(".rotate_menu");
  // })

// $('#submit').click(function() {
//     $.ajax({
//         url: send_email.php,
//         type:'POST',
//         data:
//         {
//             email: email_address,
//             message: message
//         },
//         success: function(msg)
//         {
//             alert('Email Sent');
//         }               
//     });
// }

      $('#submit').click(function(){
        var user_name = $('#user_name').val();
        var child_name = $('#child_name').val();
        var phone_num = $('#phone_num').val();
        var user_email = $('#user_email').val();
        var user_insur = $('#user_insur').val();
        var days_num = $('#days_num').val();
        var time_num = $('#time_num').val();
        var session_num = $('#session_num').val();


        console.log(user_name);
        // var recapatcha = $('.g-recaptcha').val();

    // if($('#landing').val().length < 3 || $('#boarding').val().length < 3 || $('#datepick').val().length < 3 || $('#pax_name').val().length < 3 || $('#pax_contact').val().length < 8 || $('#pax_email').val().length < 3) {

    //     $('#bookfail').attr('title','Sending Failed!').text('Please Enter valid information. All fields are required').dialog({buttons:{'Ok':function(){
    //         $(this).dialog('close');
    //         }},closeOnEscape:true,draggable:false,resizable:false,modal:true});

    // } else {

        var email_data = 'user_name='+user_name+'&child_name='+child_name+'&phone_num='+phone_num+'&user_email='+user_email+'&user_insur='+user_insur+'&days_num='+days_num+'&time_num='+time_num+'&session_num='+session_num; //&recapatcha='+recapatcha;
        $.ajax({
           type: 'POST',
           url: './send_email.php',
           data: email_data,
           success:function(){
             // $('#booksuccess').attr('title','Request sent successfully').text('Your request has been sent. We will be in touch soon').dialog({buttons:{'Ok':function(){   $(this).dialog('close');
             //  }},closeOnEscape:true,draggable:false,resizable:false,modal:true});
            $("#submit").after('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center"><p>Your email has been sent, Childhood Speech &amp; Language will contact you shortly.</p></div>');
           },
           error:function(ts){
            console.log(ts.responseText)
            alert('The email was not sent. Please try again.');
           }
        });
      // }
    });


});