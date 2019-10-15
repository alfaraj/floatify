$(function(){
    $('input[type=text], input[type=number], input[type=password]').each(function(index, elem){
        $_input = $(this);
        $_input.wrap('<fieldset>');
        var placeholder = $(elem).attr('placeholder');
        $(elem).attr('placeholder', '');
        var $_label = $('<label>').addClass('floater').html(placeholder);
        $_input.after($_label);
        $_input.next('label').on('click', function(){
            $_input.focus();
        });
        if ($_input.val().length > 0) {
            $_input.next('.floater').addClass('floated');
        }
    }).on('focus', function(){
        $_input = $(this);
        $_input.next('.floater').addClass('floated');
    }).on('blur', function(){
        $_input = $(this);
        if ($_input.val().length === 0) {
            $_input.next('.floater').removeClass('floated');
        }
    });
    $('label.floater').on('click', function(){
        $_floater = $(this);
        $_floater.addClass('floated');
        $_floater.prev('input').focus();
    });

    setTimeout(function(){
        $("input:visible").eq(0).focus()
        $('select.form-control').next('span').find('.floater').addClass('floated');
    }, 1000);
});
