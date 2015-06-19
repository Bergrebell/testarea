/**
 * Created by romankupper on 6/17/15.
 */
    console.log("ajax2.js loaded");


$(document).ready(function() {
    $('h1').click(function() {
        $(this).fadeOut('slow');
    });

    $('#ajaxform').submit(function (event) {
        // Das eigentliche Absenden verhindern
        console.log("ajaxform entered");


        event.preventDefault();
            console.log("default prevented");
            // Das sendende Formular und die Metadaten bestimmen
            var form = $(this); // Dieser Zeiger $(this) oder $("form"), falls die ID form im HTML exisitiert, klappt übrigens auch ohne jQuery ;)
            var action = form.attr("action"), // attr() kann enweder den aktuellen Inhalt des gennanten Attributs auslesen, oder setzt ein neuen Wert, falls ein zweiter Parameter gegeben ist
                method = form.attr("method"),
                data = {name: "Roman"};

        // Der eigentliche AJAX Aufruf
        $.ajax({
            url: "/request",
            type: method,
            data: data
        });

        $('#testbtn').click(function() {
            alert($(this).val());
        });

            /*.done(function (data) {
            // Bei Erfolg
            alert("Erfolgreich:" + data);
        }).fail(function () {
            // Bei Fehler
            alert("Fehler!");
        }).always(function () {
            // Immer
            alert("Beendet!");
        });*/
    });

});
