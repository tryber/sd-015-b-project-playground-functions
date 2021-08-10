// Desafio 10
function techList(array, name) {
  // seu código aqui
  if (array.length === 0) {
    return 'Vazio!';
  }
  let ordem = array.sort();
  let conteudo = [];
  let obj = {};
  for (let key in ordem) {
    obj = {
      tech: ordem[key],
      name: name
    };
    conteudo.push(obj);
  }
  return conteudo;
}

// Desafio 11
function phoneNumberSize(array) {
  if (array.length === 11) {
    return true;
  } else {
    return false;
  }
}

function phoneNumberZero(array) {
  for (let key in array) {
    if (array[key] < 0) {
      return false;
    }
  }
  return true;
}

function phoneNumberNine(array) {
    for (let key in array) {
      if (array[key] > 9) {
        return false;
      }
    }
  return true;
}

function phoneNumberVerifyZero(array) {
	if (phoneNumberZero(array) === false) {
		return false;
	}
	return true;
}

function phoneNumberVerifyNine(array) {
	if (phoneNumberNine(array) === false) {
		return false;
	}
	return true;
}

function phoneNumberVerifyZeroNine(array) {
	if (phoneNumberVerifyZero(array) === true && phoneNumberVerifyNine(array) === true) {
		return true;
	}
	return false;
}

function phoneNumberRepeat(array) {
	let vezesRepetido = 0;
  let contador = 0;
  for (let key in array) {
    let verificaNumero = array[key];
    for (let index in array) {
      if (verificaNumero === array[index]) {
        contador += 1;
      }
    }
    if (contador > vezesRepetido) {
      vezesRepetido = contador;
    }
    contador = 0;
  }
	return vezesRepetido;
}

function phoneNumberVerifyRepeat(array) {
	if ( phoneNumberRepeat(array) >= 3) {
		return true;
	}
	return false;
}

function phoneNumberVerifyZeroNineRepeat(array) {
	if (phoneNumberVerifyZeroNine(array) === false || phoneNumberVerifyRepeat(array) === true) {
		return false;
	}
	return true;
}

function phoneNumberVerifyValid(array) {
	if (phoneNumberSize(array) === true) {
		if (phoneNumberVerifyZeroNineRepeat(array) === false) {
			return 'não é possivel gerar um número de telefone com esses valores';
		}
	} else if (phoneNumberSize(array) === false) {
		return 'Array com tamanho incorreto';
	}
	return true;
}

function phoneNumberParenteses(array) {
  let parenteses = "(" + array[0] + array[1] + ")";
  return parenteses;
}

function phoneNumbeCincoP(array) {
  let sequencia = "";
  for (let i = 2; i < 7; i += 1) {
    sequencia += (array[i]);
  }
  return sequencia;
}

function phoneNumbeQuatroU(array) {
  let sequencia = "";
  for (let i = 7; i < 11; i += 1) {
    sequencia += (array[i]);
  }
  return sequencia;
}

function phoneNumberPhone(array) {
  let telefone = phoneNumberParenteses(array) + phoneNumbeCincoP(array) + "-" + phoneNumbeQuatroU(array);
  return telefone;
}

function generatePhoneNumber(array) {
  // seu código aqui
	if (phoneNumberVerifyValid(array) === true) {
		return phoneNumberPhone(array);
	}
	return phoneNumberVerifyValid(array);
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
