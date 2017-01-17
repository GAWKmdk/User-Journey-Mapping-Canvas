Router.configure({
    //frame-build
   layoutTemplate: 'app_layout'
    //,
    //loadingTemplate:'layoutLoading',
    //notFoundTemplate:'notFound'
});



Router.route('/', {
    //posting-board
   
    
    name: 'customerjourneycanvasitem',
    template: 'customer_journey_card',

    
    data: {
        
        preservice: function () {
            PreService.find({}, {sort: {createdOn: -1}});
        },
      //  preservicerecommendation: function () {
     //       PreServiceRecommendation.find({}, {sort: {createdOn: -1}});
     //   },
        service: function () {
            Service.find({}, {sort: {createdOn: -1}});  
        },
     //   servicerecommendation: function () {
    //        ServiceRecommendation.find({}, {sort: {createdOn: -1}});
    //    },
        postservice: function () {
            PostService.find({}, {sort: {createdOn: -1}});
        },
     //   postservicerecommendation: function () {
     //       PostServiceRecommendation.find({}, {sort: {createdOn: -1}});
     //   },
        additionalcomments: function () {
         AdditionalSuggestions.find({}, {sort: {createdOn: -1}});
        }
        
    },
    waitOn: function(){
  
        return [
            
        Meteor.subscribe('preservice'),
       // Meteor.subscribe('preservicerecommendation'),
        Meteor.subscribe('service'),
       // Meteor.subscribe('servicerecommendation'),
        Meteor.subscribe('postservice'),
       // Meteor.subscribe('postservicerecommendation'),
        Meteor.subscribe('additionalsuggestions')
            
        ]
        
    }
  
});
