var loopHandle = null;

// The messageSystem object is where you should do all of your work
// Use any combination of javascript, HTML and CSS that you feeling
// is appropriate
messageSystem = {
    msgCount: 0,
    showMessage: function(msg) {
      if (messageSystem.msgCount < 5) {
        messageSystem.makeMessage(msg);
      }
    },

    makeMessage: function(msg) {
      messageSystem.msgCount += 1;
      var $msg = $('<div></div>');
      var $content = $('<p></p>');
      $msg.attr('class', 'msg');
      if(msg.length > 50) {
        $content.text(msg.slice(0, 50) + "...");
      } else { $content.text(msg) }

      var $btn = $('<button></button>');
      $btn.text('X');
      $btn.appendTo($msg);
      $content.appendTo($msg);
      $msg.appendTo('#msgDiv');
      var lifecycle = setTimeout(function() {
        $msg.fadeOut(1000, function() {

          $msg.remove()
          messageSystem.msgCount -= 1;
        });
        // $msg.remove();
      }, 3000);
    }
}



function showMsg() {
    quotes = [
    "What we've got here is failure to communicate.",
    'Go ahead, make my day.',
    "I've got a bad feeling about this.",
    "I don't know half of you half as well as I should like; and I like less than half of you half as well as you deserve.",
    "I find your lack of faith disturbing.",
    "You're gonna need a bigger boat.",
    "Tell Mike it was only business.",
    "I have come here to chew bubble gum and kick ass, and I'm all out of bubble gum."
    ];
    messageSystem.showMessage(_.sample(quotes));

}

function loop() {
    showMsg();
    var rand = Math.round(Math.random() * (3000 - 500)) + 500;
    loopHandle = setTimeout(loop, rand);
}
loop();

$(function() {
   $('#msgButton').click(function() {
       var btn = $(this),
      btnTxt = btn.text();
       if (btnTxt === 'Start Messages') {
           btn.text('Stop Messages');
           loopHandle = setTimeout(loop, 500);
           $('#messengerStatus').text('Active');

       } else {
           btn.text('Start Messages');
           $('#messengerStatus').text('Inactive');
           clearTimeout(loopHandle);
           loopHandle = null;
       }
   } );
  $('#msgDiv').on('click', 'button', function() {
    $(this).parent().remove();
  });
  $('.msg').on('click', function() {
    this.css('opacity', 1);
    // $(this).clearTimeout(loopHandle);
  })
});
