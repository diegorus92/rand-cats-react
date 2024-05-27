export default class CatApiService{

   baseUrl = 'https://cataas.com/';

   getRandomCat = async () => {
        let urlImageResult = undefined;

        const response = await fetch(`${this.baseUrl}cat`);
        const blobResponse = await response.blob();
        
        urlImageResult = URL.createObjectURL(blobResponse);
        return urlImageResult;
   }

   getRandomCatWithText = async (text) => {
      const response = await fetch(`${this.baseUrl}cat/says/${text}?${new URLSearchParams({
         fontColor: '#c0c',
         fontSize: 70,
      })}`);

      const blobResponse = await response.blob();

      const urlImageResult = URL.createObjectURL(blobResponse);
      return urlImageResult;
   }
}


