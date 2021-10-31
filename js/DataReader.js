'use strict';
/////////////////////////////////////////

// Get the data from json & return 2 array : photographers and media

export default class DataReader {
    async getData() {
        let path = 'Data/data.json';
        //Read the json data
        let response = await fetch(path);
        let data = await response.json();

        //Split json in half
        const dataPhotographers = [...data.photographers];
        const dataMedias = [...data.media];

        return {
            'photographers': dataPhotographers,
            'medias': dataMedias
        };
    }
}
