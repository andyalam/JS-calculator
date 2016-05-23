$("#number").text(0);
var memory = [];

$("button").on('click', function(){

    var current = $("#number").text();
    var input = $(this).text();

    //0-9
    if (!isNaN(input) || input === '.'){
        if (current === '0' && input != '.')
            current = input;
        else if (!(current.indexOf('.') > -1 && input === '.'))
            current += input;
    }
    //NaN's
    else {
        switch(input){
            case 'AC':
                memory = [];
                current = '0'; break;

            case 'CE':
                current = ''; break;

            case '%' :
                memory.push(current);
                memory.push('%');
                current = '';
                console.log('/'); break;

            case '/':
                memory.push(current);
                memory.push('/');
                current = '';
                console.log('/'); break;

            case 'x' :
                memory.push(current);
                memory.push('x');
                current = '';
                console.log('x'); break;

            case '-' :
                memory.push(current);
                memory.push('-');
                current = '';
                console.log('-'); break;

            case '+' :
                memory.push(current);
                memory.push('+');
                current = '';

                console.log('+'); break;

            case '=' :
                //push previous number
                memory.push(current);
                //iterate through memory to get final answer
                var answer = Number(memory[0]);

                for (var i = 1; i < memory.length; i += 2){
                    var operator = memory[i];
                    var num = Number(memory[i+1]);

                    if(operator === '+') answer += num;
                    else if (operator === '-') answer -= num;
                    else if (operator === 'x') answer *= num;
                    else if (operator === '/') answer /= num;
                    else if (operator === 'MOD') answer = answer % num;
                    else if (operator === '%') answer = 0.01*answer * num;
                }


                current = answer.toString();
                memory = [];

                console.log('=');
                console.log(current);
                break;

            case 'MOD':
                memory.push(current);
                memory.push('MOD');
                current = '';

                console.log('MOD'); break;
        }
    }


    console.log(memory);
    //assign the new value at the end here
    $("#number").text(current);
});

$('body').on('keypress', function(e) {
  var key = String.fromCharCode(e.which);
  if (key === '1') $('#1').click();
  else if (key === '2') $('#2').click();
  else if (key === '3') $('#3').click();
  else if (key === '4') $('#4').click();
  else if (key === '5') $('#5').click();
  else if (key === '6') $('#6').click();
  else if (key === '7') $('#7').click();
  else if (key === '8') $('#8').click();
  else if (key === '9') $('#9').click();
  else if (key === '0') $('#0').click();
  else if (key === '*') $('#multiply').click();
  else if (key === '/') $('#divide').click();
  else if (key === '+') $('#add').click();
  else if (key === '-') $('#subtract').click();
  else if (key === '=' || e.which === 13) $('#equal').click();
  else if (key === '%') $('#percent').click();
  else if (key === '.') $('#decimal').click();
  else if (key === 'm') $('#mod').click();
  else if (key === 'a') $('#AC').click();
  else if (key === 'c') $('#CE').click();

});
