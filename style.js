$(function() {
	//ハンバーガーボタンをクリックでグローバルメニューを開く
  $('#js-hamburger').on('click', function(){
    $('#js-header').toggleClass("open");
  });


  // google-form
  let $form = $('#js-form')
  $form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
					$form.slideUp()
          $('.p-contact-content__text').slideUp()
          $('#js-success').slideDown()
        }, 
        200: function() { 
          //送信に失敗したときの処理 
					
        }
      } 
    });
    return false; 
  });
});
