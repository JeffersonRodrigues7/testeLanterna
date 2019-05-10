$(document).ready( function(){
        
        var aceso = 0;
        var carga = 100;

        function acende(){
                $('body').css({'background-color': 'white'});
                $('#luz').css({'opacity': '0.8'});
                $('#status').html("Aceso");
                aceso = 1;
        }

        function apaga(){
                $('body').css({'background-color': 'black'});
                $('#luz').css({'opacity': '0.0'});
                $('#status').html("Apagado");
                aceso = 0;
        }

        $("#acendeApaga").click(function(){
                if(aceso == 0 && carga>0) acende();
                else apaga();
        });

        $("#trocaBateria").click(function(){
                carga = 100;
                verificaCarga();
                apaga();
        });

        function verificaCarga(){
                $('#bateria').css({'width': carga+"%"});
                $('#bateria').css({'font-size': '0.8em'});
                $('#bateria').html(carga+"%");
                if(carga < 33) $('#bateria').css({'background-color': 'red'});
                else if(carga < 66) $('#bateria').css({'background-color': 'yellow'});
                else $('#bateria').css({'background-color': 'green'});
                if(carga == 0) apaga();
        }

        window.setInterval(function (){
                if(aceso==1){
                        carga = carga - 1;
                        if(carga > -1) verificaCarga();    
                }
        }, 1000);


});