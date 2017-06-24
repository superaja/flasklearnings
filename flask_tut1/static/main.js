$(document).ready(function() {
                console.log("ready");
                $("#try-again").hide()
 
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
                        
                        if (data.items.length > 0) {
                        $('input').hide();
                        $("#try-again").show();
                        var rand = Math.floor(Math.random() * Object.keys(data.items).length)
                        console.log(data.items[rand].avatar_url);
                        $("#data").html('<a href="'+data.items[rand].html_url+'">'+data.items[rand].login+
                                '</a><br><img src="'+data.items[rand].avatar_url+'" class="avatar">')
                        $("input").val("")

                        } else {
                                $("#data").html('Error')
                        }

                        },
                        error: function(error){
                        console.log(error);
                        }
                });
 
        });
        
        $("#try-again").on('click', (function() {
                /* Act on the event */
                $('input').val('').show();
                $("#try-again").hide();
                $('data').html('')
        })); 
});