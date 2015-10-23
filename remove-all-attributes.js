//Jquery plugin to remove all attributes
    jQuery.fn.removeAttributes = function () {
        //first get all attributes
        return this.each(function () {
            var attributes = $.map(this.attributes, function (item) {
                return item.name;
            });
            
            //now remove attributes
            var element = $(this);
            $.each(attributes, function (i, item) {
                element.removeAttr(item);
            });
        });
    }
    
