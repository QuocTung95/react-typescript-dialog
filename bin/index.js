const {execSync} = require('child_process')


const runCommand = command => {
    try {
        execSync(`${command}`, {stdio: 'inderit'})
    } catch (error) {
        console.log(`Failed to excute ${command}`, error)
        return false
    }
    return true
}


const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/QuocTung95/react-typescript-dialog ${repoName}`
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`)

const checkOut = runCommand(gitCheckoutCommand)

if(!checkOut) process.exit(-1)

console.log(`Installing dependencies for ${repoName}`)

const installDeps = runCommand(installDepsCommand)

if(!installDeps) process.exit(-1)

console.log(`Congratulations! You are ready. Follow the following commands to start`)
console.log(`cd ${repoName} && npm start`)

