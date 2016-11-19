/**
 * Created by illuSioN4ng on 2016/7/13.
 */
define(function(required, exports){
    function helloPython(){
        document.write("Hello,Python!");
    }
    function helloJavascript(){
        document.write("Hello,JavaScript!");
    }
    exports.helloJavascript = helloJavascript;
    exports.helloPython = helloPython;
})