import{c as a,Q as i}from"./index.022eda07.js";var n={sidebar:{main:"Muistilista",history:"Historia",about:"Tietoja",source:"L\xE4hdekoodi Githubissa"},main:{initialMessage:"Hei!",initialMessage2:"Mit\xE4 mahtaa j\xE4\xE4kaapista l\xF6yty\xE4?",initialMessageSub:"Paina alhaalta plussaa ja ala kirjaamaan!"},history:{header:"Historia (20 viimeisint\xE4)",done:"K\xE4ytetty"},dialogue:{common:{name:"Nimi",expirationDate:"Vanhenemisp\xE4iv\xE4",location:"S\xE4ilytyspaikka",type:"Tyyppi"},new:{add:"Lis\xE4\xE4 uusi muistutus"},edit:{created:"Luotu"},delete:{prompt:"Haluatko varmasti poistaa muistutuksen?",yes:"Kyll\xE4",cancel:"Peruuta"},placeholder:{name:"Anna mulle joku kiva nimi",location:"Miss\xE4 meik\xE4\xE4 s\xE4ilytet\xE4\xE4n?"}},reminder:{titleEnd:" on vanhenemassa!",bodyStart:"Muista tarkistaa "},note:{deleted:"Muistutus poistettu.",created:"Muistutus luotu!",checked:"V\xE4hensit h\xE4vikki\xE4! Hienoa! \u{1F389}"},itemTypes:{none:"Tyhj\xE4",meat:"Liha",vegetable:"Vihannes",rootvegetable:"Juures",canned:"Purkitettu",cheese:"Juusto",dough:"Taikina",jam:"Hillo",milk:"Maito",pasta:"Pasta",potato:"Peruna",rice:"Riisi",sauce:"Kastike",stew:"Pata",egg:"Kananmuna",bread:"Leip\xE4",fruit:"Hedelm\xE4",dessert:"J\xE4lkiruoka",meal:"Ateria",fastfood:"Pikaruoka",unknown:"Tuntematon"},about:{intro:"Heippa! Tervetuloa tutustumaan H\xE4lykkiin! ",p1:`
    Sovellus syntyi yhden illan hullusta ideoinnista
    ja omista tarpeista - j\xE4\xE4kaapin ja ruokakaapin pohjalta j\xE4i liian usein k\xE4ytt\xE4m\xE4tt\xE4 kaikenlaista aivan kelpoista.
    `,p2:`
    H\xE4lykin tarkoituksena on auttaa v\xE4hent\xE4m\xE4\xE4n h\xE4vikki\xE4 keitti\xF6ss\xE4. Kun lis\xE4\xE4t sovellukseen kautta muistutuksen,
    se muistuttaa sinua merkittyn\xE4 er\xE4p\xE4iv\xE4n\xE4 k\xE4ytt\xE4m\xE4tt\xF6m\xE4st\xE4 ruokatarvikkeesta. K\xE4ytetty\xE4si ruokatarvikkeen voit
    kuitata muistutuksen painamalla muistutusta ja siihen ilmestyv\xE4\xE4 vihre\xE4\xE4 nappia. 
    `,p3:`
    Mik\xE4li et halua k\xE4ytt\xE4\xE4 ruokatarviketta tai 
    kuitata sit\xE4, voit my\xF6s muokata tai poistaa muistutuksen kokonaan painamalla vihre\xE4n napin viereen ilmestyv\xE4\xE4 kyn\xE4-nappia.
    `,disclaimer:`
    P.s. H\xE4lykki -sovellus k\xE4ytt\xE4\xE4 ainoastaan sovelluksen sis\xE4ist\xE4 tallennustilaa ja muistutusominaisuuksia. 
    K\xE4ytt\xE4j\xE4tietoja ei l\xE4hetet\xE4 kenellek\xE4\xE4n, ei edes kehitt\xE4j\xE4lle.
    `,p4:`
    Toivottavasti H\xE4lykist\xE4 on apua sinunkin keitti\xF6ss\xE4si!
    `,sign:"\u2014 Jani, kehitt\xE4j\xE4"}},o={sidebar:{main:"Reminders",history:"History",about:"About",source:"Source code in Github"},main:{initialMessage:"Hi!",initialMessage2:"What's in the fridge, I wonder?",initialMessageSub:"Press the button in the rightside corner to begin!"},history:{header:"History (20 latest)",done:"Done"},dialogue:{common:{name:"Name",expirationDate:"Expiration Date",location:"Location",type:"Category"},new:{add:"Create a new reminder"},edit:{created:"Created"},delete:{prompt:"Are you sure you want to delete the reminder?",yes:"Yes",cancel:"Cancel"},placeholder:{name:"Give me some good name, will ya?",location:"Where am I kept in?"}},reminder:{titleEnd:" is about to expire!",bodyStart:"Remember to check your "},note:{deleted:"Reminder deleted.",created:"Reminder has been created!",checked:"You just reduced waste! That's great! \u{1F389}"},itemTypes:{none:"Empty",meat:"Meat",vegetable:"Vegetable",rootvegetable:"Root",canned:"Canned",cheese:"Cheese",dough:"Dough",jam:"Jam",milk:"Milk",pasta:"Pasta",potato:"Potato",rice:"Rice",sauce:"Sauce",stew:"Stew",egg:"Egg",bread:"Bread",fruit:"Fruit",dessert:"Dessert",meal:"Meal",fastfood:"Fast Food",unknown:"Unknown"},about:{intro:"Hi! Welcome to use H\xE4lykki! ",p1:`
    H\xE4lykki was born in the midst of one late night tinkering session
    and from my own needs - the fridge and the food locker were left far too often with perfectly usable food items.
    `,p2:`
    H\xE4lykki's main idea is to help you reduce food waste in the kitchen. When you create a reminder in the application,
    it will automatically remind you about the nearly expired food items. After you have used the item you can 
    clear the reminder from the app by pressing it and the appearing green button afterwards.
    `,p3:`
    In case you have decided not to use the food item or you want to remove the reminder without clearing it,
    you can also edit and delete it by pressing the edit button that appears next to the green button.
    `,disclaimer:`
    H\xE4lykki app utilizies only your mobile phones internal memory and doesn't send any data outside of the application. 
    Not even to the developer.
    `,p4:`
    I hope you will find H\xE4lykki useful!
    `,sign:"\u2014 Jani, the developer"}},s={"en-US":o,"fi-FI":n},r=({app:e})=>{const t=a({legacy:!1,locale:i.lang.getLocale(),fallbackLocale:"en-US",globalInjection:!0,messages:s});e.use(t)};export{r as default};
