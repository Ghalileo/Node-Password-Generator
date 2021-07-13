const chalk = require('chalk');
const program = require ('commander');
const clipboardy = require ('clipboardy');
const log = console.log
const createPassword = require('./utils/createPassword')

program.version('1.0.0').description('Simple Password Generator')

program
.option('-l, --length <number>', 'length of password', '8')
.option('-s, --save', 'Save your password.txt',)
.option('-nn, --no-numbers', 'remove numbers')
.option('-ns, --no-symbols', 'remove numbers')
.parse()

const {length, save, numbers, symbols} = program.opts()

// Get generated passwords
const generatedPassword = createPassword(length, numbers, symbols)

//Copy to clipboard 
clipboardy.writeSync(generatedPassword)

//Output generated password 
log(chalk.blueBright('Here is your password: ' ) + chalk.red(generatedPassword))
log(chalk.magenta("Your password has been copied to clipboard"));