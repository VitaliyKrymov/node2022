 require('./index.js')

function greeting (name) {
    console.log(`Hello ${name}`)
}
function test() {
    console.log('test is working')
}

module.exports = {greeting,test};
