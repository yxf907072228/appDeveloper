'use strict';

undefined.$axure.internal(function($ax){
    let repeat , box;
    $ax('*').each(function(diagramObject, elementId) {
        if ($ax.public.fn.IsRepeater(diagramObject.type)) {
            repeat = $('#'+elementId);
        }else if(diagramObject.friendlyType == '矩形'){
            box =  $('#'+elementId);
        }
       
    });
    console.log(repeat, box);
});
