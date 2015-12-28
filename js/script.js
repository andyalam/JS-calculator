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