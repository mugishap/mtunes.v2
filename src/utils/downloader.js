// const fs = require('fs')

const ytdl = require('ytdl-core')
const download = async(id) => {
    console.log(`Downloading ${id}`);
    // ytdl(`https://www.youtube.com/watch?v=${id}`, { filter: format => format.container === 'mp3' }).pipe(fs.createWriteStream('test.mp4'))
}
export default download