//creating a new instance of a Url
const myUrl = new URL('http:migrant-solutions.com:3000/index.html?id=100&status=active')

//pathname is a property and not a method. Thats why it has no ()
const ourPathName = myUrl.pathname
console.log(ourPathName)

//this is what makes it different from the host name
//the host has the port number too
const rootDomain = myUrl.host
console.log(rootDomain)

//returns the whole url in a string
const serialUrl = myUrl.toString()
console.log(serialUrl)

//the host name only has the address without the port number
const ourHostName = myUrl.hostname
console.log(ourHostName)

//returns the parameters of the url
const ourParams = myUrl.searchParams
console.log(ourParams)