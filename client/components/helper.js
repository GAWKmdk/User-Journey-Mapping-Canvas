Handlebars.registerHelper('getStatusColor', function(emotive) {
    switch (emotive) {
        case "good" : {
            return 'green';
        }
        break;
        case "bad" : {
            return 'red';
        }
        break;
        case "needing" : {
            return 'blue';
        }
        
        break;
        default : {
        return 'white';
    }
}
});



Handlebars.registerHelper('getStatusIcon', function(emotive) {
    switch (emotive) {
       case "good" : {
            return 'fa-smile-o';
        }
        break;
        case "bad" : {
            return 'fa-frown-o';
        }
        break;
        case "needing" : {
            return 'fa-meh-o';
        }
        
        break;
        default : {
        return 'fa-wheelchair';
    }
}
});