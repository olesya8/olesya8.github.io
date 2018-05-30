$(document).ready(function () {
    
    function get_timer () {
        var date_new = "May30,2018 13:30";
        var date_t = new Date(date_new);
        var date = new Date;
        var timer = date_t - date;
        
        if(date_t > date) {
            var day = parseInt(timer/(24*60*60*1000));
            if(day < 10){
                 day = '0' + day;
            }
            day = day.toString();
            
            var hour = parseInt(timer/(60*60*1000))%24;
            if(hour < 10){
                hour = '0' + hour;
                
            }
            hour = hour.toString();
            
            var minutes = parseInt(timer/(60*1000))%60;
            if(minutes < 10) {
                minutes ='0' + minutes;
            }
            minutes = minutes.toString();
            
            var seconds = parseInt(timer/(1000))%60;
            if(seconds < 10) {
                seconds = '0' + seconds;
                
            }
            seconds = seconds.toString();
            $("#clock").html("<span id='stop'>" + day + ":" + hour + ":" + minutes + ":" + seconds + "</span>");
            setTimeout(get_timer,1000);
        }
        else {
            $("#clock").html("<span id='stop'></span>");
        }
    }
    get_timer ();
});




