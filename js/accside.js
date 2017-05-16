(function ($){	
    $.fn.input = function (){   	
        var label = $(this).find("input[for='label']");
        var value = $(this).find("input[for='value']");
        var ul = $(this).find('ul');
        var li = ul.find('li');     
        label.click(function (){
            ul.show();
            return false;
        });        
        li.click(function (){
            label.val($(this).html());
            value.val($(this).attr("data"));
            ul.hide();
            return false;
        })
        $(document).click(function (){
            ul.hide();
        });
    }
})(jQuery);

