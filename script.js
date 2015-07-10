//define variable-----------------------------------------

//key variable
var ctrlKey;
var commandKey;
var tempKey;
var currentPlace=0;

//key_code
var keyEvent={
    KEY_A : 65,
};

//-------------------------------------------------------

//function----------------------------------------------------------------

//key_class
var judgePressedKey={
    init:function(e){
        ctrlKey=false;
        commandKey=false;
        tempKey=0;
        e.preventDefault();
    },
    //if Ctrl is pressed or not
    isCtrlPressed:function(e){
        ctrlKey=e.ctrlKey;
        return ctrlKey;
    },
    isCommandPressed:function(e){
        commandKey=e.metaKey;
        return commandKey;
    },
    //if _keyCode is pressed or not
    isKeyPressed:function(e,_keyCode){
        tempKey=e.keyCode;
        if(tempKey==_keyCode){
            return true;
        }
        return false;
    }
};

//keydown_function
var keydownAction=function(e){
    //Ctrl
    if(judgePressedKey.isCtrlPressed(e) || judgePressedKey.isCommandPressed(e) ){
        //Ctrl+A
        if(judgePressedKey.isKeyPressed(e,keyEvent.KEY_A)){
            //process
            selectTagCtrlA();
            judgePressedKey.init(e);
        }
    }
    };

//process if ctrl+A is pressed
var selectTagCtrlA=function(){
    //get <pre> element
    var elementsTagP=document.getElementsByTagName("pre");
    if(elementsTagP && elementsTagP.length > 0 ){//<p> exist;
        if(currentPlace >= elementsTagP.length){
            currentPlace=0;
        }
        highlightText(elementsTagP[currentPlace]);
        currentPlace++;
    }
};

//controll Ctrl+A
var highlightText = function(element) {
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
    // var top = element.offsetTop - (window.innerHeight / 2 );
    // window.scrollTo( 0, top );
};

//key event process
document.addEventListener("keydown",keydownAction);

//----------------------------------------------------------------------------------