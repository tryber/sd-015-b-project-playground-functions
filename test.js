function encode(string) {
    let encryptedString = "";
    for (let index in string){
      switch (string[index]){
        case "a":
          encryptedString= encryptedString.concat("1");
          break;
        case "e":
          encryptedString = encryptedString.concat("2");
          break;
        case "i":
          encryptedString = encryptedString.concat("3");
          break;
        case "o":
          encryptedString = encryptedString.concat("4");
          break;
        case "u":
          encryptedString = encryptedString.concat("5");
          break;
        default:
          encryptedString = encryptedString.concat(string[index]);
          break;
      } 
    }
    return encryptedString;
}
console.log(encode("oies"));