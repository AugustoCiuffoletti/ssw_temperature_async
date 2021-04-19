# Calcolo della media delle temperature

Il calcolo della media richiede una serie di query al servizio OpenWeatherMap. In questo esempio le query vengono sequenzializzate: ciascuna viene eseguita solo quando la precedente è terminata, utilizzando "await" per la sequenzializzazione. Il procedimento è molto poco efficiente. 

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-sswtasync)