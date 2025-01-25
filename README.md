# Zadanie domowe #2.2 - React
## Książka kontaktów
Napisz aplikację do przechowywania kontaktów książki telefonicznej.
### Krok 1
Aplikacja powinna składać się z formularza i listy kontaktów. W obecnym kroku zrealizuj dodanie nazw kontaktu i wyświetlanie listy kontaktów. Aplikacja nie powinna przechowywać kontaktów między różnymi sesjami (odświeżenie strony).

Wykorzystaj następujący układ input z wbudowaną walidacją dla nazwy kontaktu.
```
<input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
```
> [!IMPORTANT]
> Podany w zadaniu pattern wymagał poprawy

Stan zapisany w komponencie rodzicu <App> obowiązkowo powinien wyglądać następująco, nie można dodawać nowych właściwości.
```
state = {
  contacts: [],
  name: ''
}
```
Każdy kontakt powinien być obiektem z właściwościami name i id. Do generowania identyfikatorów wykorzystaj dowolny pasujący pakiet, na przykład [nanoid](https://www.npmjs.com/package/nanoid). Po tym kroku aplikacja powinna wyglądać mniej więcej tak:

![step-1](https://github.com/user-attachments/assets/edba9a57-01a9-44ae-9bd6-addef3c19036)

### Krok 2
Rozszerz funkcjonalność aplikacji, pozwalając użytkownikom dodawać numery telefonów. W tym celu dodaj do formularza `<input type="tel">` oraz właściwość dla zapisywania jego wartości w stanie.
```
state = {
  contacts: [],
  name: '',
  number: ''
}
```
Wykorzystaj ten układ input z wbudowaną walidacją dla numeru kontaktu.
```
<input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
```
> [!IMPORTANT]
> Podany w zadaniu pattern wymagał poprawy

Po tym kroku aplikacja powinna wyglądać mniej więcej tak:

![step-2](https://github.com/user-attachments/assets/c329d962-17c4-41a5-a364-f3186d5cf97f)

### Krok 3

Dodaj pole wyszukiwania, które można wykorzystać do filtrowania listy kontaktów po nazwie.

* Pole wyszukiwania to input bez formularza, którego wartość zapisuje się w stanie (kontrolowany element).
* Logika filtrowania powinna ignorować wielkość liter.

![step-3](https://github.com/user-attachments/assets/f8667ffb-bb72-4246-a8fd-0e044ff919a6)

Gdy pracujemy nad nową funkcjonalnością, wygodnie jest na stałe zakodować niektóre dane w stanie. Uchroni to od ręcznego wprowadzania danych w interfejsie dla testowania pracy nowej funkcjonalności. Można na przykład wykorzystać taki stan początkowy.
```
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}
```

### Krok 4

Jeżeli twoja aplikacja realizowana jest w jednym komponencie `<App>`, wykonaj refaktor, dzieląc pasujące części na oddzielne komponenty. W stanie komponentu root `<App>` zostaną tylko właściwości `contacts` i `filter`.

```
state = {
  contacts: [],
  filter: ''
}
```
Wystarczy wydzielić cztery komponenty: formularz dodania kontaktów, listę kontaktów, element listy kontaktów i filtr wyszukiwania.

Po refaktorze komponent root aplikacji będzie wyglądał następująco:
```
<div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div>
```

### Krok 5
Usuń użytkownikowi możliwość dodawania kontaktów, których nazwy są już w książce telefonicznej. W wypadku takiej próby pokaż `alert` z ostrzeżeniem.

![step-5](https://github.com/user-attachments/assets/37f1609f-2d85-4bd4-9cfb-6ad4e48e7948)

### Krok 6
Rozszerz funkcjonalność aplikacji, pozwalając użytkownikowi na usuwanie zapisanych wcześniej kontaktów.

![step-6](https://github.com/user-attachments/assets/690fdc86-0898-4b55-b810-611735ed7e07)

