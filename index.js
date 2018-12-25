#!/usr/bin/env node
const ascii = require('ascii-art');
const download = require('download-file');
const imageSearch = require('g-i-s'); 

const options = {
    searchTerms : ["christmas", "christmas cartoon", "christmassy"], 
    download: {
        filename: "image.png"
    },
    ascii: {
        filepath: "./image.png",
        alphabet: "ultra-wide"
    }
}

const getRandomFrom = (array) => {
    const index = Math.floor(Math.random() * array.length); 
    return array[index]; 
}



imageSearch(getRandomFrom(options.searchTerms), (error, results) => {

    let image = getRandomFrom(results); 
    download(image.url, options.download, (error) => {
        if (error) throw error;
        displayAsAscii("image.png");
    });
}); 



const displayAsAscii = (filename) => {
    const image = new ascii.Image(options.ascii);

    image.write((error, rendered) => {
        if (error) throw error; 
        console.log(rendered); 
    }); 
}

