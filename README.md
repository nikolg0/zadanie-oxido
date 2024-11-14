# Strukturyzacja artykułu.

## Opis

Aplikacja łączy się z API OpenAI. Odczytuje dokument tekstowy z pliku, po czym przekazuje go do OpenAI w celu strukturyzacji treści w format HTML. Aplikacja wysyła prompt do AI, a następnie otrzymany wygenerowany artykuł zapisuje do pliku '.html' w docelowej ścieżce.


## Instrukcja uruchomienia:
1. Sklonowanie repozytorium

```bash
git clone https://github.com/nikolg0/zadanie-oxido.git
```
2. Instalacja zależności
   ```
   cd zadanie-oxido
   npm install
   ```
3. Konfiguracja OpenAI API

   w pliku .env dodaj swój klucz API.
      ```
      OPENAI_API_KEY=your_openai_api_key
      ```   
4. Uruchomienie aplikacji

 Wpisz w terminal:
```
node app/index.js
```
Gotowe! Teraz możesz uruchomić plik artykul.html w dowolnej przeglądarce, aby zobaczyć podgląd artykułu :)
      
