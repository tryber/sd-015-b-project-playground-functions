/* para realizar alguns dos exercicios eu fiz varias pesquisas pois estava com muitas duvidas, consultei o mozila developer e alguns commits de estudantes, mas só utilizei os codigos apos entender como os memso funcionam" */

function compareTrue (boolean1, boolean2){
    if(boolean1 === boolean2 && boolean1 === true){
        return true
    }else{
        return false
    }
}

function calcArea(base, height){
    return ((base * height)/2)
}

function slipSentence (frase){
    return frase.split(' ');
}
/* consultei o site "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split", após entender o codigo utilizei o split  */

function concatName (arrayString){
    let ultimo = (arrayString.length -1);
    return arrayString[0] + ", " + arrayString[ultimo];
}

function footballPoints(wins, ties){
    let winValue = 3;
    let tiesValue = 1;
    return (wins * winValue) + (ties * tiesValue);
}

function highestCount (numArray){
let numMax =  Math.max.apply(null, numArray);
let cont = 0
for(let i = 0; i < numArray.length; i += 1){
    if(numMax === numArray[i]){
    cont += 1;
    }
}
return cont;
} 

function catAndMouse (mouse, cat1, cat2){
    let winCat1 = 0;
    let winCat2 = 0;

    if(mouse < cat1){
        for(let i = cat1; i >= mouse; i -= 1){
            winCat1 += 1;

        }
    }else if(mouse > cat1){
        for(let j = cat1; j <= mouse;j += 1){
            winCat1 +=1
        }
    }

    if(mouse < cat2){
        for(let k = cat2; k >= mouse; k -= 1){
            winCat2 += 1;

        }
    }else if(mouse > cat2){
        for(let l = cat2; l <= mouse;l += 1){
            winCat2 +=1
        }
    }
    if(winCat1 < winCat2){
        return "cat1"
    }else if(winCat1 > winCat2){
        return "cat2"
    }else if(winCat1 === winCat2){
        return "os gatos trombam e o rato foge"
    }
}

