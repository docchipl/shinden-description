# @docchi/shinden-description

Prosty moduł do pobierania opis ze strony shinden

![Okładka](https://cdn.discordapp.com/attachments/721911008213598238/1026872206585774090/unknown.png)

## Kontakt

- GitHub: [github.com/ankordii][github]
- Website: [https://docchi.pl/][site]
- E-mail: pomoc@docchi.pl

## Instalacja

```bash
npm install @docchi/shinden-description
```

## Jak używać

<sub>Nie zapomnij dodać
```json
"type": "module"
```
do *package.json*
</sub>

Przykład: 

```js
import shindenDescription from "@docchi/shinden-description";

console.log(await 
  shindenDescription("Isekai Yakkyoku")
)
```

If available
```json

{
  "status": 200,
  "message": "Success",
  "shinden": {
    "data": {
        "anime": "Isekai Yakkyoku", 
        "slug": "58580-isekai-yakkyoku" 
    },
    "description": "Kanji Yakutani był światowej sławy farmaceutą, który po utracie swojej młodszej siostry z powodu nieuleczalnej choroby postanowił poświęcić swoje życie wynajdowaniu nowych leków. W wieku 31 lat aptekarz umiera z powodu przepracowania i reinkarnuje się jako 10-letni chłopiec w alternatywnej, średniowiecznej Europie. W świecie, gdzie istnieje magia udzielana poprzez błogosławieństwo bóstw opiekuńczych, Falma, bo tak ma na imię nasz bohater po odrodzeniu, dowiaduje się, że został pobłogosławiony przez bóstwo opiekuńcze medycyny. Otrzymuje zdolność molekularnego tworzenia i niszczenia, jak i również natychmiastowej diagnozy chorób w ludzkim ciele. Mając te zdolności i wiedzę z poprzedniego życia, główny bohater postanawia założyć własną aptekę i poprawić stan opieki zdrowotnej, gdyż medycyna w świecie, gdzie został odrodzony, jest bardzo nieskuteczna i tylko szlachta może sobie na nią pozwolić."  
  }
}
```
# Codes

- 500 - Coś poszło nie tak

- 200 - Pobrano opis

# Wsparcie
<b>IMPORTANT</b>: Help me beeing efficient, please! I am developing in my free time for no money. Contribute to the project by posting complete, structured and helpful issues which I can reproduce quickly without asking for missing information.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/docchi)

# License
[MIT](https://github.com/docchipl/cda-checking/blob/main/LICENSE)

[github]: https://github.com/ankordii
[site]: https://docchi.pl/
