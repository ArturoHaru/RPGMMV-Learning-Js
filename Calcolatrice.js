//=============================================================================
// Calcolatrice.js                                                             
//=============================================================================


/*:
*
* @author Arturo Cecora
* @plugindesc Semplice calcolatrice
* 
* @help
* Per utilizzare questo plugin è necessario che i numeri sui quali effettuare
* operazioni siano contenuti nelle variabili 1 e 2. 
* Per richiamare un'operazione, aggiungete un evento "PLugin Command" e a seconda
* dell'operazione che volete fare inserite "Calcolatrice [segno dell'operazione]".
*
* Addizione:        +
* Sottrazione:      -
* Moltiplicazione:  *
* Divisione:        /
*
* Es. "Calcolatrice +"
*/

(function($) {

//=============================================================================
// PluginManager Parameters                                                             
//=============================================================================

  //Registers the Plugin for use 
  var parameters = PluginManager.parameters("Calcolatrice");
  //A place that holds all the parameters from your plugin params above
  var PluginPatternParams = {
    N1: Number(parameters['Numero 1']),
    N2: Number(parameters['Numero 2'])
  };




    //Plugin COMMANDS
    var _Game_Interpreter_pluginCommand =
            Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        
        console.log(command);

        switch(command){
          case "Calcolatrice":
              Calcolatrice(args);
          break;
          
          default:
            console.log("Comando non riconosciuto")
          }

          function Calcolatrice(args){

            var res = 0.0;
            switch(args[0]){
              case "+":
                var res = $gameVariables.value(1) + $gameVariables.value(2);
                console.log(res);
                $gameMessage.add(res);
                break;
              
              case "-":
                var res = $gameVariables.value(1) - $gameVariables.value(2);
                console.log(res);
                $gameMessage.add(res);
                break;
              
              case "*":
                var res = $gameVariables.value(1) * $gameVariables.value(2);
                console.log(res);
                $gameMessage.add(res);
                break;
              
              case "/":
                var res = $gameVariables.value(1) / $gameVariables.value(2);
                console.log(res);
                $gameMessage.add(res);
                break;

              default:
                  console.error("Argomento di Calcolatrice non valido");
                  $gameMessage.add("Argomento di Calcolatrice non valido");
          };

          }

      }





})();