const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin') //for file downloade
const { verifyDownloadTasks } = require('cy-verify-downloads'); //for verify file downloade
//for excel data import---
const xlsx = require('node-xlsx').default;
const fs = require('fs');
const path = require('path');
//----------
module.exports = defineConfig({
  //includeShadowDom : true,
  //chromeWebSecurity : false, //for multi tab or multi-window
  e2e: {
    // baseUrl:"https://opensource-demo.orangehrmlive.com",

    setupNodeEvents(on, config) {
      //for excel data import---
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath))
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        }
      })
      //----------------------
      on('task', verifyDownloadTasks);//for verify file downloade
      on('task', { downloadFile }) //for file downloade
      // implement node event listeners here
      //task1 (11.cytask)-------------------

      on('task', {
        myTask1() {
          console.log('hello')
          return null
        }
      })

      ////task2
      on('task', {
        myTask2(nm) {
          console.log(`hi ${nm} how are you?`)
          return null
        }
      })

      //task3 addition
      on('task', {
        addition({ a, b }) {
          c = a + b
          console.log(c)
          return c
        }
      })

      //tasks for revision  file 14
      //task1
      on('task', {
        msgPrint() {
          console.log('hello')
          return null
        }
      })
      //task2
      on('task', {
        msgwithPara(str1) {
          console.log(`hi ${str1} how are you?`)
          return null
        }
      })
      //task3
      on('task', {
        addition({ a, b }) {
          c = a + b
          console.log(`addition = ${c}`)
          return c
        }
      })




    },
  },
});
