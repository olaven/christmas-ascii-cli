const ascii = require('ascii-art');
const download = require('download-file');
const url = "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.90xa4ZK6uzYFii7yWpIhdwHaEK%26pid%3D15.1&f=1";


const options = {
    download: {
        filename: "image.png"
    },
    ascii: {
        filepath: "./image.png", 
        alphabet: "variant4"
    }
}

const displayAsAscii = (filename) => {
    const image = new ascii.Image(options.ascii);

    image.write((error, rendered) => {
        if (error) throw error; 
        console.log(rendered); 
    }); 
}

download(url, options.download, (error) => {
    if (error) throw error;
    displayAsAscii("image.png"); 
}); 