const ourOs = require ('os')

//check the memory of your system
const totalMemory = ourOs.totalmem
console.log (totalMemory)

//check the free memory
const freeMem = ourOs.freemem
console.log (freeMem)

//check the OS of your system
const ourPlatform = ourOs.platform
console.log (ourPlatform)

//check the CPUs
const ourCPU = ourOs.cpus
console.log (ourCPU)

//check architecture
const myarch = ourOs.arch
console.log (myarch)