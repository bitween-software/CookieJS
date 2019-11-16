# Vereisten
De volgende bibliotheek kan alleen worden gebruikt op een daadwerkelijke server en niet direct vanuit
het filesysteem.

# Gebruik
Voor het gebruik van deze biblotheek op een website, voer je de volgende stappen uit:

1. Zorg ervoor dat je een valide HTML-bestand hebt. Voor een goed voorbeeld zie het bestand examples/index.html
2. Include het Javascriptbestand in 'dist/cookie.js' na de end-tag van HTML.
3. Zorg ervoor dat het element dat je wilt laten verdwijnen wanneer een bepaalde knop is aangeklikt
   een style van 'display: none;' geeft.
4. Geef het element dat je wilt laten verdwijnen een uniek ID.
5. Geef het element (bijvoorbeeld een button) dat ervoor moet zorgen dat het bovenstaande element verdwijnt een uniek
id heeft.
6. Roep de volgende functie aan in een script-tag onder de include van het JS-bestand.:
    
         initializeCookieListener(#[BUTTON_ID], #[ELEMENT_ID]);
         
    
