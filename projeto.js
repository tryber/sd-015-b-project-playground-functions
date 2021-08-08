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

    //3 INCOMPLETO
    //function splitSentence(str){}

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

    //6 //INCOMPLETO
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
    