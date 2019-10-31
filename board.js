var squares = '';
for(var i = 0; i < 8; i++){
    if(i%2 === 0){
        for(var j = 0; j < 8; j++){
            if(j%2 === 0){
                squares += '[#]'
            } else{
                squares += '[0]';
            }
        }
        console.log(squares);
        squares = '';
    } else{
        for(var k = 0; k < 8; k++){
            if(k%2 === 0){
                squares += '[0]'
            } else{
                squares += '[#]';
            }
        }
        console.log(squares);
        squares = '';
    }
}

