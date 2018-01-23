import googleApikey from '@config/googleapi.json';
import Qs from 'qs';

query={
    key: googleApikey.api_key,  // key of the google api
    language: 'en',             // language of the results
    types: 'geocode',           // default: 'geocode'
};

GooglePlacesSearchQuery={ 
    rankby: 'distance'
};

export async function request(text) {
    try {
        let url = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?&input=' + encodeURIComponent(text) + '&' + Qs.stringify(query);

        let response = await fetch(url);
        let responseJson = await response.json();
        return responseJson.predictions;
      } catch(error) {
        // Handle error
        console.error(error);
      }
}

export async function requestNearby(latitude, longitude) {
    try {
        let url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?' + Qs.stringify({
            location: latitude + ',' + longitude,
            key: query.key,
            ...GooglePlacesSearchQuery,
        });
        let response = await fetch(url);
        let responseJson = await response.json();
        return responseJson.results;
      } catch(error) {
        // Handle error
        console.error(error);
      }
}
    
