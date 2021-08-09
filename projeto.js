    //1
    function compareTrue(param1, param2){
        if (param1 >= 10 && param2 <= 15){
        return true;
    } else {
        return false;    }
    }
    compareTrue();
    
    //2
    function calcArea(base, height){
        return (base*height)/2;
    }
    calcArea(10, 50);
    calcArea(5, 2);
    calcArea(51, 1);

    //3
    function splitSentence(str){
        return str.split(' ');
    }
    splitSentence('go Trybe');
    splitSentence('vamo que vamo');
    splitSentence('foguete');

    //4
    function concatName(array){
        let arr = array.reverse();
        let primeiro = arr[0];
        let ultimo = arr[arr.length-1];
        return primeiro + ', ' + ultimo;
    }
    concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolilo']);
    concatName(['foguete', 'não', 'tem', 'ré']);
    concatName(['captain', 'my', 'captain']);

    //5
    function footballPoints(wins, ties) {
        let winPoints = wins*3;
        let tiePoints = ties*1;
        return winPoints + tiePoints + ' pontos';
    }
    footballPoints(14, 8);
    footballPoints(1, 2);
    footballPoints(0, 0);

    //6 INCOMPLETO
    function highestCount(array) {
        let maior = 0;
        for (let i = 0; i < array.length; i++) {
            if ( array[i] > maior ) {
               maior = array[i];
            }
            for (let numero of array) {
                if (numero === maior) {
                    return [array[i]]
                }
            }
            
        }
    }
    highestCount([9, 1, 2, 3, 9, 5, 7]);
    highestCount([0, 4, 4, 9, 2, 1]);
    highestCount([0, 0, 0]);

    //7
    function catAndMouse (mouse, cat1, cat2) {
        if (cat1 === cat2){
            return 'os gatos trombam e o rato foge';
        } else if (cat1 < cat2) {
            return 'cat1';
        } else if (cat2 < cat1) {
            return 'cat2';
        }
    }   
    catAndMouse(0, 3, 2);
    catAndMouse(0, 6, 12);
    catAndMouse(0, 5, 5);

    //8
    function fizzBuzz(array) {
        for (i = 0; i < array.length-1; i++);
        if (array[i]%3 == 0 && array[i]%5 == 0) {
            return 'fizzBuzz';
        } else if (array[i]%5 == 0) {
            return 'buzz';
        } else if (array[i]%3 == 0) {
            return 'fizz';
        } else {
            return 'bug!';
        }
    }

    fizzBuzz([2, 15, 7, 9, 45]);
    fizzBuzz([7, 9]);
    fizzBuzz([9, 25]);

    //9 //INCOMPLETO
    function encode(str) {
        return str.replace('a', '1');
    }
    encode('hi there');

    function decode(str) {
        return str.replace('1', 'a');
    }
    decode('');

    //10
    function techName(tech, name) {

    }
    techName()

    //11
    function generatePhoneNumber(array) {
        if (array.length == 11) {
            return '('+array[0]+array[1]+')'+array[2]+array[3]+array[4]+array[5]+array[6]+'-'+array[7]+array[8]+array[9]+array[10];
        } else if (array.length != 11){
            return 'Array com tamanho incorreto.'
        } else if (array < 0 && array > 9) {
            return "não é possível gerar um número de telefone com esses valores"
    }
    generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]);

    //12
    function triangleCheck(lineA, lineB, lineC) {
        if (lineA + lineB < lineC || lineB + lineC < lineA || lineA + lineC < lineB){
            return false;
        } else if (lineA - lineB > lineC || lineB - lineC > lineA || lineA - lineC > lineB) {
            return false;
        } else {
            return true;
        }
    }
    triangleCheck(10, 14, 8);

    //13
    function hydrate() {
        
    }