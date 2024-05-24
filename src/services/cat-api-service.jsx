export default class CatApiService{

   baseUrl = 'https://cataas.com/';

   getRandomCat = async () => {
        let urlImageResult = undefined;

        const response = await fetch(`${this.baseUrl}cat`);
        const blobResponse = await response.blob();
        
        urlImageResult = URL.createObjectURL(blobResponse);
        return urlImageResult;
   }
}


