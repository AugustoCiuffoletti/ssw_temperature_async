# Calcolo della media delle temperature

Il calcolo della media richiede una serie di query al servizio OpenWeatherMap. In questo esempio le query sono incapsulate in una funzione "async" e a ciascuna request è applicato un await. Le richieste procedono tutte in parallelo e ciascuna contribuisce al risultato finale. 

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-sswtasync)