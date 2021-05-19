class Marker {
    constructor(size, color, remainingInk){
        this.size = size
        this.color = color
        this.remainingInk = remainingInk
    }
  
    write(string){
      let newString = ''
      for(var i = 0; i < string.length; i++){
          if(this.remainingInk > 0 && string[i] !== ' '){
            newString += string[i]
            this.remainingInk--
          } else if(string[i] === ' '){
              newString += string[i]
          }
      }
  
      return newString
    }
  }
  
  module.exports = Marker
  