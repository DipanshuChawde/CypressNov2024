const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //task1 (11.cytask)-------------------

      on('task',{
        myTask1(){
          console.log('hello')
          return null
        }
      })

      ////task2
      on('task',{
        myTask2(nm){
          console.log(`hi ${nm} how are you?`)
          return null
        }
      })

      //task3 addition
      on('task',{
        addition({a,b}){
          c=a+b
          console.log(c)
          return c
        }
      })


    },
  },
});
