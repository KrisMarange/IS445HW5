var userinput = prompt('Please enter a nuber between 2 and 10', '');

function Inputprompt() {
    if (userinput <= 10 && userinput >= 2) { 
        document.write('<h2>Your input number is ' + userinput + '</h2> <br />'); //
        var millioncount = userinput;
        for (var num = 0; millioncount > .000001 ; num++) {
            millioncount /= 2;
        }
        document.write('<h2>The number of times to divide the number ' + userinput + ' by 2 to get a value less than one millionth is ' + num + '</h2>');//Gives answer

        var n= userinput;
        document.write('<p>');
        for (var n = userinput; n !== 0; n--) {
            for (var ncount = n; ncount !== 0; ncount--) {
                document.write("*");
            }
            document.write('<br />');
        }
        document.write('</p>');
        
    }
    else {
        document.write('<h2 id="invalid">Your input number is ' + userinput + '. The valid input number is between 2 and 10. Please reload this page and try again.</h2>');
    }
}