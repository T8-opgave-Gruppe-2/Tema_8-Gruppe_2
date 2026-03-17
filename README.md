# Teknisk dokumentation for Tema 8 gruppeprojekt

Når man er flere der bidrager til en kodebase, lærer man hurtigt, at ens sædvanlige måder at gøre tingene på ikke nødvendigvis er logisk for alle.

Skriv derfor jeres fælles retningslinjer for punkterne herunder(tilføj gerne flere selv), sådan som det giver bedst mening for jer som gruppe. Dokumentationen sikre, at jeres fælles kodebase forbliver overskuelig, er let at arbejde med og til at forstå for alle, og at I undgå konflikter, og har nemmere ved at hjælpe hinanden undervejs.

## Projektstruktur:

Beslut, hvordan I vil organisere jeres projekt – struktur for mapper og filer.

- Hvordan organiserer I billeder, fonte og andre ressourcer?
  Vi opdeler vores dokumenter i mapper: CSS, Javascript, fonts, billder også har vi vores html sider.
- Hvor placerer I boilerplate?(fx CSS- og JavaScript-filer, der bruges på tværs af projektet)
  Vi har placeret vores css og javascript filer i hver deres mappe.
- Hvor placerer I HTML, CSS- og JavaScript-filer til fx detaljevisning og listevisning?
  Vi har placeret vores css og javascript filer i hver deres mappe.

## Navngivning:

Beslutte hvordan i vil navngive filer og mapper for at sikre en ensartet struktur og undgå forvirring.

- Hvordan navngiver I filnavne? (fx små bogstaver, ingen mellemrum, brug af - eller \_)
  Vi har navngivet vores filer i småbogstaver, og anvendt bindestreg som mellemrum.
- Hvordan sikre I at det er til at forstå hvilke HTML-, CSS- og JavaScript-filer der høre sammen?
  Vi navngiver filer det samme, med undtagelse af endelserne som er indikere om det er en html, css eller javascript.

## Link til scripts:

- Hvor placerer I script referencer i HTML'en? (fx i <head> med defer attribute, eller sidst i <body>)
  vi placere vores script i <head> med en defer attribute.

## Git branches:

- Hvordan navngiver I branches, så alle kan forstår hvem der arbejder i branchen og på hvad?(fx feature-lotte-formular)
  Når vi brancher, så skriver vi først handling, derefter vores navn.

## Arbejdsflow:

- Hvordan fordeler I arbejdet, så I undgår at flere arbejder i de samme filer samtidigt?
  Vi har opdelt så vi en html side, og derved også en css fil hver.
- Hvordan sikrer I, at commit-beskeder er beskrivende?
  Vi holde en bideform infomerende tekst der beskriver det overordne.
- Hvordan kommunikerer i om ændringer i main branchen når feature merges?
  Så stopper vi processen, giver besked over messenger om siturationen, derved tager vi den sammen når vi mødes.

## Kode:

- Hvordan skriver i funktioner i JavaScript?(fx med function keyword eller som arrow functions)
  Vi bruger primært arrow functions (=>) i vores JavaScript. Det ses især i forbindelse med fetch() og callbacks, hvor vi arbejder med .then() til at håndtere data fra API’et. Derudover bruger vi også almindelige funktioner (function) til mere struktureret kode, hvor det giver bedre overblik.
- Beslut hvilken CSS selector i benyttes til referener i henholdsvis CSS og JavaScript(fx. id'er til JavaScript og Classes til CSS)
  Classes i CSS til styling af elementer, så de kan genbruges flere steder. Derudover har vi brugt querySelector og querySelectorAll til at arbejde med både classes og ID’er i JavaScript
- Skal filer have korte forklaringer som kommentarer?
  Vi har ikke anvendt dette

# Funktionalitet

Dette afsnit skal forklare hvad I konkret har arbejde med, for at udvikle websitet. Tænk over hvilke interaktioner brugeren kan foretage på sitet? Eller hvordan websitet håndterer og præsenterer data? Eksempler på funktionalitet, der kan beskrives:

- Hentning af produkter fra API.
- Filtrering af produkter baseret på brugerens valg.
- Dynamisk visning af produkter i HTML.

Henter produktdata fra et API ved brug af fetch().
Konverterer data til JSON og arbejder videre med det i JavaScript.
Viser produkter dynamisk i HTML.
Genererer produktkort automatisk ud fra data.
Filtrerer produkter baseret på brugerens valg af ingredienser.
Håndterer klik og brugerinteraktioner som fx en tilbage knap

# API endpoints

Dette afsnit skal liste de endpoints fra API'et i har benyttet:

- https://dummyjson.com/recipes
- https://dummyjson.com/recipes?limit=50

# Dokumentation af Funktion

Dette afsnit skal beskrive en funktion I selv har udviklet. Det kunne eksempelvis være en funktion der generere en listen over fx. produkter:

- Beskrivelse: Hvad gør funktionen? Hvordan spiller den sammen med resten af koden?
  showProducts tager et array af opskrifter og viser dem som kort på siden. Funktionen kaldes efter at opskrifterne er hentet fra API'et og filtreret baseret på de ingredienser, brugeren har valgt. Den øvrige kode henter og filtrerer data, og showProducts sørger for at præsentere resultatet.
- Parametre: Hvilke input forventes (fx en værdi fra en dropdown eller URL'en)?
  productsArr hvilket er et array af opskrift-objekter fra dummyjson API'et som allerede er filtreret efter ingredienser.
- Returnerer: Beskriv, om funktionen returnerer en værdi eller blot manipulerer DOM’en.
  Den manipulerer udelukkende DOM'en ved at tilføje HTML-indhold til productContainer via innerhtml.
- Eksempel på brug: Indsæt funktions-koden herunder(der hvor koden er i eksemplet) og vis, hvordan funktionen kaldes:
  // Funktionens kode:

```javascript
function showProducts(productsArr) {
  productsArr.forEach((recipe) => {
    productContainer.innerHTML += ``
  });

// Hvordan funktionen kaldes:
// (Efter filtrering af data fra API'et)
const filtered = data.recipes.filter((recipe) =>
  ingredients.some((ingredient) =>
    recipe.ingredients.some((ri) =>
      ri.toLowerCase().includes(ingredient.toLowerCase())
    )
  )
);
showProducts(filtered);
```
