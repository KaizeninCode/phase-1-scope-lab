// Write your solution in this file!
var customerName = 'bob' //window. variableName means that the variable is being declared at the global scope.
function upperCaseCustomerName() {
    window.customerName = window.customerName.toUpperCase()
}

function setBestCustomer() {
    window.bestCustomer = 'not bob'
    
}

function overwriteBestCustomer () {
    window.bestCustomer = 'maybe bob'
    
}

const leastFavoriteCustomer = 'Tekashi'
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Not Tekashi'
}
