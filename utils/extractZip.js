const extract = require('extract-zip');
const path = require('path');

// WIP 

async function extractZip(source,destination){
    try{
        // const abs = path.resolve('../themes/zip_2MB.zip')
        console.log("Destination",destination)
        console.log("Source",source)
        await extract(source,{dir: destination})
    }
    catch(err){
        throw new Error(`Can't extract Zip Files ${err}`)
    }
}

module.exports={
    extractZip
}