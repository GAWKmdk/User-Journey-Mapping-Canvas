Template.customer_journey_canvas_page.events({
    
    'click .delete-pin-preservice': function() {
        console.log('pin delete selected');
        var pinId = this._id;
        console.log(pinId);
        
        if (confirm("Would you like to delete this touchpoint ?")) {
            PreService.remove(pinId);
            Bert.alert( 'Touchpoint successfully deleted', 'danger', 'fixed-top', 'fa-remove' );
            return false;
        }
        
        return false;
    },
    
    'click .delete-pin-service': function() {
        console.log('pin delete selected');
        var pinId = this._id;
        console.log(pinId);
        
        if (confirm("Would you like to delete this touchpoint ?")) {
            Service.remove(pinId);
            Bert.alert( 'Touchpoint successfully deleted', 'danger', 'fixed-top', 'fa-remove' );
            return false;
        }
        
        return false;
    },
    
    'click .delete-pin-postservice': function() {
        console.log('pin delete selected');
        var pinId = this._id;
        console.log(pinId);
        
        if (confirm("Would you like to delete this touchpoint ?")) {
            PostService.remove(pinId);
            Bert.alert( 'Touchpoint successfully deleted', 'danger', 'fixed-top', 'fa-remove' );
            return false;
        }
        
        return false;
    },
    
    'click .delete-pin-suggest': function() {
        console.log('pin delete selected');
        var pinId = this._id;
        console.log(pinId);
        
        if (confirm("Would you like to delete this note ?")) {
            AdditionalSuggestions.remove(pinId);
            Bert.alert( 'Note successfully deleted', 'danger', 'fixed-top', 'fa-remove' );
            return false;
        }
        
        return false;
    },
    
   
    
});