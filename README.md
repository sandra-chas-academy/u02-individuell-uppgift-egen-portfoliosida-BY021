# u02-Individuell-uppgift
u02- Individuell uppgift - Egen portfoliosida (HTML/CSS/JS)

https://chasacademy.instructure.com/courses/423/assignments/2319


### Sammanfattning av projekt och reflektion kring styrkor och ev brister.

I detta projekt har jag lärt mig att använda JSON, fetcha i JS, använda funktioner och inplementera kod i HTML med JS.

Jag har valt att jobba vidare på att utveckla tidigare HTML & CSS U01 hemsidan (Pavans) där jag har gjort uppdateringar med JSON och JS men tyvärr hann jag ej bli klar med About me och Project sidorna ännu, behöver lite mer tid för att göra klart. Anledingen är för att jag varit sjuk en hel vecka som gjorde att jag missat jätte mycket och dels för att den mesta tiden har gått åt grupparbetet u03 och lärandet. Jag förstår projektets instruktioner och har implementerat uppgiftens alla delar i Home, Contact & projects men har About me och komplettering av projects kvar. Jag har under uppgiften studerar in mycket teori samtidigt som jag testar mycket kod loggar. Vidare har jag även upptäckt en brist att jag inte kan lära mig många saker samtidigt utan måste ta en sak i taget annars kommer jag ej kunna komma ihåg någonting och fastnar i kod jätte länge.

Det har varit svårt att bara lyssna och lära sig, min nya strategi är att anteckna mycket och ta en sak i taget samtidigt som jag testar kod hela tiden.

### 1. Vad kan man utveckla med hjälp av JavaScript inom frontend?

JavaScript är ett mångsidigt programmeringsspråk för frontendutveckling och används för att skapa dynamiska och interaktiva webbapplikationer som ger användarna en mer engagerande upplevelse. JavaScript gör det möjligt att manipulera och förändra webbsidans innehåll utan att behöva ladda om sidan. Några viktiga områden där JavaScript används är:

interaktivitet, händelsehantering, asynkron programering och API-anrop, Single Page Applications, animationer och grafiska effekter.

- **Interaktivitet**: JavaScript används för att skapa interaktiva element på en webbsida, som knappar, formulär, menyer, bildspel och modala fönster. Med JavaScript kan man utveckla dynamiska förändringar på sidan baserat på användarens handlingar, etc. att visa eller dölja innehåll när en användare klickar på en knapp.

- **Asynkron programmering och API-anrop**: Genom att använda Asynchronous funktioner kan man hämta data från servrar utan att behöva ladda om hela sidan. Detta gör att man kan bygga applikationer som är snabbare och mer responsiva, som etc. chatt-appar och sociala medier.

- **Single Page Applications (SPA)**: JavaScript spelar en central roll i att skapa SPAs, där hela webbapplikationen laddas på en gång och endast en del av sidan uppdateras när användaren interagerar med applikationen.

- **Animationer och grafiska effekter**: JavaScript kan även användas för att skapa animeringar och grafiska effekter på en webbsida.

### 2. Vad är JSON och hur används det inom frontend?

JSON (JavaScript Object Notation) är ett lättviktigt format för att lagra och överföra data mellan en server/fil och en webbapplikation. Det är ett textbaserat format som är lätt att läsa och skriva. JSON är baserat på JavaScript-syntax. Json kan användas på följande sätt:

- **Dataöverföring mellan klient och server**: JSON är det vanligaste formatet för att skicka data mellan en webbapplikation och en server via HTTP. När en användare interagerar med en applikation och gör ett API-anrop (t.ex. för att hämta information eller skicka formulärdata) används JSON för att skicka data fram och tillbaka.

- **Datahantering i JavaScript**: Eftersom JSON är baserat på JavaScript-objekt, kan det enkelt omvandlas till JavaScript-objekt med hjälp av `JSON.parse()` och kan även konverteras tillbaka till JSON med `JSON.stringify()`. Detta gör att utvecklare kan arbeta med data på ett enkelt och effektivt sätt.

- **Lagras lokalt i webbläsaren**: JSON kan även användas för att lagra data på klientsidan, exempelvis i webbläsarens lokala lagring (localStorage). Detta gör det möjligt för webbapplikationer att bevara användardata mellan sessioner eller uppdateringar, vilket kan förbättra användarupplevelsen genom att spara inställningar eller tillfälliga data.

### 3. Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det och dess protokoll?

HTTP (HyperText Transfer Protocol) är det protokoll som används för att överföra data mellan en webbläsare och en server. Det är grunden för hur webben fungerar, där varje gång en användare besöker en webbsida sker en begäran via HTTP från webbläsaren till servern, som svarar med den begärda sidan eller data. HTTP är ett statslöst protokoll, vilket innebär att varje begäran är oberoende av tidigare begärningar och servern inte sparar information om tidigare kommunikation.

Det är viktigt att ha stor förståelse av HTTP och dess protokoll av flera anledningar:

- **API-anrop**: Många moderna webbapplikationer använder externa API:er för att hämta data. Dessa API:er kommunicerar via HTTP. Att förstå HTTP:s metoder, som GET, POST, PUT och DELETE, gör att man kan bygga applikationer som interagerar effektivt med API:er. Till exempel används GET för att hämta data, POST för att skicka data till servern, och PUT för att uppdatera data.

- **Statuskoder**: HTTP-statuskoder är viktiga för att förstå hur en server svarar på en begäran. Koder som 200 (OK), 404 (Not Found) och 500 (Internal Server Error) ger frontendutvecklare information om begärans resultat och hjälper till att hitta fel och problem i projektet på ett effektivt sätt.

- **Säkerhet**: HTTP är grunden för internetkommunikation, och genom att använda HTTPS (den säkra versionen av HTTP) kan dataöverföring mellan klient och server krypteras och skyddas mot avlyssning. För frontendutvecklare är det viktigt att säkerställa att webbapplikationer är säkra, till exempel genom att använda HTTPS och hantera autentisering och sessioner på ett korrekt sätt.