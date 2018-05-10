const colorfy = require('../')

colorfy()
  .nl()
  .txt(' '.repeat(10)).white('WARNING!', 'bgred').nl()
  .txt(' '.repeat(10)).white('The server is down!', 'bgred')
  .print()

console.log('-------------------------------------')

colorfy()
  .indent(10)
  .nl()
  .white('WARNING!', 'bgred').nl()
  .white('The server is down!', 'bgred')
  .reset()
  .txt('Call you administrator he can fix it!')
  .print()

console.log('-------------------------------------')

colorfy()
  .nl()
  .yellow('Hello')
  .indent(2)
  .green('Have fun')
  .indent(2)
  .red('with indentions!')
  .reset()
  .txt('You might love it!')
  .print()
