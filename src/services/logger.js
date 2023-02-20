export const logger = (where, contents) => {
    console.log('--Logger--')
    console.log(`${where}:`)
    contents.forEach(element => {
        console.log(element)
    });
    console.log('----')

}