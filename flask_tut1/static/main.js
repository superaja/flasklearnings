$(document).ready(function() {
                console.log("ready");
 
        $("form").on("submit", function() {
                console.log("The form has been submitted AD")
                               
 
                var x = $('input[name="location"]').val()
                var y = $('input[name="language"]').val()
                console.log(x, y)
 
                $.ajax({
                        type: "POST",
                        url: "/",
                        data: {first: x, second:y},
                        success: function(data) {
                        console.log(data);
                        // $("#data").html(data.total)
                        $("#input").val("")
                        },
                        error: function(error){
                        console.log(error);
                        }
                });
 
        });
 
});