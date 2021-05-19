class Student {
    constructor(name, skillLevel){
        this.name = name
        this.skillLevel = skillLevel
        this.assignments = []
    }
  
    study(){
        if(this.skillLevel < 100){
            this.skillLevel++
        }
        return this
    }
  
    doHomework(homework){
      if (homework === undefined){
          for(var i = 0; i < this.assignments.length; i++){
              if(this.assignments[i].completed === false){
                  return this.doHomework(this.assignments[i])
              }
          }
      }
  
      if(this.skillLevel > homework.skillLevel){
          homework.completed = true
      } else if (this.skillLevel < homework.skillLevel){
          homework.completed = false
      }
      
      if(homework.skillLevel !== undefined){
          if(homework.skillLevel > 1 && homework.skillLevel < 100){
              this.assignments.push(homework)
          }
      }
    }
  }
  
  module.exports = Student
  