# Paleta kolorów GDG on Campus PW

Paleta kolorów [GDG on Campus Politechnika Warszawska](https://gdg.community.dev/gdg-on-campus-politechnika-warszawska-warsaw-poland/) dla Marketing Team i wszystkich, którzy robią coś w naszych barwach. Kliknij kolor, a HEX trafi do schowka.

**Link:** [colors.gdgpw.pl](https://colors.gdgpw.pl)

Czysty HTML, CSS i JS, bez buildów i zależności. Wygląd i układ plików jak w [gdg-jam-jar](https://github.com/gdg-pw/gdg-jam-jar).

## Kolory

| Rodzina | Odcienie             |
|---------|----------------------|
| Blue    | 700 / 500 / 300 / 50 |
| Red     | 700 / 500            |
| Pink    | 300 / 50             |
| Yellow  | 700 / 500 / 300 / 50 |
| Green   | 700 / 500 / 300 / 50 |
| Gray    | 900 / 700 / 500 / 200 |
| White   | —                    |

Na komputerze kolory to pionowe paski z HEX-em na dole, a nazwa pokazuje się po najechaniu. Na telefonie paski są poziome, z HEX-em i nazwą. Paski są przyciskami, więc działa też Tab + Enter.

## Uruchomienie

Otwórz `index.html` w przeglądarce albo postaw prosty serwer:

```bash
python3 -m http.server 8000
```

i wejdź na http://localhost:8000.

## Gdzie co zmieniać

| Co                                    | Plik                 |
|---------------------------------------|----------------------|
| Kolory i ich nazwy                    | `js/data.js`         |
| Teksty, socials, OG tagi              | `index.html`         |
| Kolory strony, czcionki, zaokrąglenia | `css/variables.css`  |
| Paski palety, toast „Skopiowano”      | `css/components.css` |
| Tło, impreza (Konami)                 | `css/effects.css`    |
| Rysowanie palety, kopiowanie          | `js/palette.js`      |
| Symbole w tle, Konami                 | `js/effects.js`      |
| Logo, favicon, obrazek do podglądu    | `assets/`            |

Czcionki to Google Sans Flex (tekst) i Google Sans Code (HEX) z Google Fonts.

Po zmianie kolorów w `js/data.js` warto podmienić też pasek na dole `assets/og.jpg`, bo pokazuje obecną paletę.

## Easter egg

Konami code: ↑ ↑ ↓ ↓ ← → ← → B A

## Deploy

Kontener z `Dockerfile` (nginx z naszym `nginx.conf`), port `8097`. Lokalnie tak samo jak na serwerze: `docker compose up --build` i http://localhost:8097.

Każdy nowy plik w repo trafia na stronę, chyba że jest wpisany w `.dockerignore`. Portu i nazwy kontenera w `docker-compose.yml` nie zmieniaj, opiera się na nich konfiguracja serwera GDG.
