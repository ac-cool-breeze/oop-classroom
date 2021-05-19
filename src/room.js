class Room {
    constructor( name, description ) {
      this.name = name
      this.description = description
      this.contents = []
    }
  
    add(item){
      this.contents.push(item) 
      return this
    }
  
    has(reference){
        return this.contents.includes(reference)
    }
  
  
  }
  
  module.exports = Room