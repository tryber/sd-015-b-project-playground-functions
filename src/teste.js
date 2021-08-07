function text(string){
	thenum = string.match( /\d+/g );
	valor = thenum.reduce((total, numeros) => total + numeros);
	
	return valor + ' copos de água'

	}

console.log(text('you can enter 333 maximum 500 choices'))