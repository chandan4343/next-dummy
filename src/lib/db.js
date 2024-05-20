
// const username = process.env.USERNAME;
const login = process.env.USERNAME_PASSWORD;
export const connetionSrt = `mongodb+srv://${login}:${login}@cluster0.evvmxmw.mongodb.net/testing?retryWrites=true&w=majority&appName=Cluster0`