Template.customer_journey_canvas_page.helpers({
   
    
    preservice: function () {
    
    return PreService.find({}, {sort: {createdOn: -1}});              

    },
    
    service: function () {
    
    return Service.find({}, {sort: {createdOn: -1}});              

    },
    
    postservice: function () {
    
    return PostService.find({}, {sort: {createdOn: -1}});              

    },
    
    additionalcomments: function () {
    
    return AdditionalSuggestions.find({}, {sort: {createdOn: -1}});              

    },
    
    });