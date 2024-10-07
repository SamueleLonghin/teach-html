# Dispensa HTML
## Introduzione a HTML
HTML (HyperText Markup Language) è un linguaggio di markup usato per creare pagine web. La struttura di un documento HTML è composta da diversi **tag** che, insieme, costruiscono il contenuto e la formattazione di una pagina web. HTML è essenziale per strutturare testo, immagini, collegamenti e altri elementi multimediali all'interno di una pagina web.

### Struttura di Base di un Documento HTML
Ogni documento HTML segue una struttura base che si può riassumere nel seguente esempio:

```html
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Titolo della Pagina</title>
</head>
<body>
  <header>
    <h1>Benvenuti nel mio sito</h1>
  </header>
  <main>
    <p>Questo è un esempio di pagina HTML.</p>
  </main>
  <footer>
    <p>Autore: Nome Cognome</p>
  </footer>
</body>
</html>
```

### Spiegazione della Struttura
- `<!DOCTYPE html>`: Indica al browser che il documento è scritto in HTML5.
- `<html lang="it">`: Tag principale che racchiude tutto il contenuto. L'attributo `lang` specifica la lingua del contenuto.
- `<head>`: Contiene meta-informazioni sul documento, come il titolo (`<title>`) e i metadati.
- `<meta charset="UTF-8">`: Imposta la codifica dei caratteri per evitare problemi di visualizzazione.
- `<body>`: Contiene il contenuto principale della pagina, come intestazioni (`<header>`), sezioni (`<main>`), e piè di pagina (`<footer>`).

## Struttura dei Tag HTML
I **tag HTML** sono gli elementi fondamentali per costruire una pagina web. La maggior parte dei tag ha un **tag di apertura** e uno di **chiusura**:

```html
<p>Questo è un paragrafo.</p>
```
- `<p>` è il tag di apertura, `</p>` è il tag di chiusura.
- Alcuni tag sono **auto-chiudenti**, come `<img>` e `<br>`.

### Attributi dei Tag
Ogni tag può avere degli **attributi** che forniscono ulteriori informazioni o personalizzazioni. Gli attributi sono scritti all'interno del tag di apertura:

```html
<a href="https://www.example.com" target="_blank">Visita Example</a>
```
- `href` è l'URL di destinazione.
- `target="_blank"` indica che il link si aprirà in una nuova finestra.

#### Attributo `id`
L'attributo **`id`** viene utilizzato per assegnare un identificativo univoco a un elemento HTML. Questo attributo è molto utile per applicare stili CSS specifici a un elemento o per manipolare l'elemento tramite JavaScript.

Esempio:
```html
<p id="introduzione">Questo è un paragrafo introduttivo.</p>
```
- Ogni valore `id` deve essere univoco all'interno del documento HTML.

## Elenco dei Tag HTML Principali

### Tag di Struttura
- **`<html>`**: Radice del documento.
- **`<head>`**: Meta-informazioni.
- **`<title>`**: Titolo della pagina.
- **`<body>`**: Contenuto principale.

### Tag di Formattazione del Testo
- **`<h1>`...`<h6>`**: Intestazioni di diverse dimensioni.
  - `<h1>`: Intestazione principale, solitamente utilizzata per il titolo principale della pagina. È la più grande e importante.
  - `<h2>`: Sottotitolo principale o sezioni principali della pagina.
  - `<h3>`: Sottosezione di `<h2>`, di dimensione inferiore.
  - `<h4>`: Sottosezione di `<h3>`, utilizzata per ulteriori divisioni.
  - `<h5>` e `<h6>`: Utilizzate per suddivisioni ulteriori, con `<h6>` come la più piccola e meno importante.

  L'utilizzo corretto delle intestazioni aiuta a organizzare la struttura del contenuto in modo gerarchico e migliora l'accessibilità, facilitando la navigazione per gli utenti e per i motori di ricerca.

- **`<p>`**: Paragrafo.
- **`<strong>`**: Testo in grassetto (importante).
- **`<em>`**: Testo in corsivo (enfasi).

### Collegamenti e Immagini
- **`<a>`**: Collegamento ipertestuale.
  ```html
  <a href="https://example.com">Link a Example</a>
  ```
- **`<img>`**: Immagine.
  ```html
  <img src="immagine.jpg" alt="Descrizione dell'immagine">
  ```

### Liste
- **`<ul>`**: Lista non ordinata (punti elenco).
  ```html
  <ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
  </ul>
  ```
- **`<ol>`**: Lista ordinata (numeri).
  ```html
  <ol>
    <li>Primo elemento</li>
    <li>Secondo elemento</li>
  </ol>
  ```

### Tabelle
- **`<table>`**: Definisce una tabella.
  ```html
  <table>
    <tr>
      <th>Nome</th>
      <th>Età</th>
    </tr>
    <tr>
      <td>Mario</td>
      <td>30</td>
    </tr>
  </table>
  ```
- `<tr>`: Riga della tabella.
- `<th>`: Intestazione di colonna.
- `<td>`: Cella della tabella.

### Form
I **form** sono elementi HTML che consentono agli utenti di inserire dati da inviare al server per l'elaborazione. Sono spesso utilizzati per registrazioni, login, inserimento di commenti e altre interazioni con l'utente.

Un form è composto da vari campi di input, come caselle di testo, bottoni di invio, checkbox, ecc.

Esempio di un form di base:

```html
<form action="/invia-dati" method="post">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <button type="submit">Invia</button>
</form>
```
- `action` specifica l'URL a cui inviare i dati del form.
- `method` può essere `get` o `post` a seconda del tipo di richiesta.
- `<input>` rappresenta un campo di input, con vari tipi come `text`, `email`, `password`, ecc.

#### Attributi dei Tag di Input
- **`type`**: Specifica il tipo di campo di input. I valori più comuni includono:
  - `text`: Campo di testo generico.
  - `email`: Campo di input per email, che richiede una formattazione valida per l'indirizzo email.
  - `password`: Campo di input che oscura il testo digitato.
  - `checkbox`: Casella di controllo.
  - `radio`: Pulsante di scelta.
  - `submit`: Bottone per inviare il form.

  Esempio:
  ```html
  <input type="text" name="nome">
  <input type="email" name="email">
  <input type="password" name="password">
  ```

- **`name`**: Attributo che assegna un nome al campo di input. Questo nome è importante perché identifica i dati quando il form viene inviato al server.
  ```html
  <input type="text" name="username">
  ```
  Nell'esempio, il campo di input ha il nome `username`, che verrà utilizzato dal server per elaborare il dato inserito dall'utente.

## Altri Tag HTML Utili

### div
Il tag **`<div>`** è un contenitore generico utilizzato per raggruppare elementi HTML e applicare stili o layout tramite CSS. Non ha un significato semantico specifico, ma è utile per organizzare e stilizzare i contenuti.

Esempio:
```html
<div class="contenitore">
  <h2>Sezione del Contenuto</h2>
  <p>Questo è un paragrafo all'interno di un div.</p>
</div>
```
- `<div>` è spesso usato in combinazione con CSS per creare layout complessi.

### br
Il tag **`<br>`** inserisce un'interruzione di riga all'interno del testo. È auto-chiudente e viene utilizzato quando si vuole andare a capo senza iniziare un nuovo paragrafo.

Esempio:
```html
<p>Questo è un testo.<br>Questo testo va a capo.</p>
```

### hr
Il tag **`<hr>`** crea una linea orizzontale di separazione. È utile per dividere visivamente sezioni di contenuto.

Esempio:
```html
<p>Introduzione</p>
<hr>
<p>Contenuto principale</p>
```

## Linee Guida per una Buona Programmazione HTML
Per rendere le pagine HTML accessibili e in linea con le direttive sull'accessibilità, è essenziale seguire alcune buone pratiche:

### 1. Utilizzare Tag Semantici
Tag come `<header>`, `<footer>`, `<main>`, `<nav>`, e `<section>` aiutano i lettori di schermo a capire la struttura della pagina e facilitano la navigazione.

```html
<main>
  <section>
    <h2>Argomento Principale</h2>
    <p>Questo è il contenuto della sezione principale.</p>
  </section>
</main>
```

### 2. Fornire Testo Alternativo per le Immagini
Ogni immagine deve avere un attributo `alt` per descriverne il contenuto. Questo è cruciale per gli utenti non vedenti.

```html
<img src="grafico.png" alt="Grafico che mostra l'andamento delle vendite nel 2023">
```

### 3. Uso degli Attributi ARIA
Gli attributi **ARIA** (Accessible Rich Internet Applications) aiutano a migliorare l'accessibilità aggiungendo informazioni che altrimenti non sarebbero disponibili ai lettori di schermo.

```html
<button aria-label="Invia il modulo">Invia</button>
```

### 4. Controllo del Colore e Contrasto
Assicurarsi che il testo abbia sufficiente contrasto rispetto allo sfondo per essere leggibile. Utilizzare strumenti come [WebAIM](https://webaim.org/resources/contrastchecker/) per verificare i colori.

### 5. Strutturare Correttamente i Form
- Utilizzare etichette (`<label>`) associate ai campi del modulo.
- Assicurarsi che i campi obbligatori siano ben identificati.


```html
<form>
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome" required>
</form>
```



### 6. Navigazione Intuitiva
Assicurarsi che i link siano descrittivi e che abbiano senso anche fuori dal contesto:

```html
<a href="/guida">Leggi la guida completa</a>
```


## Risorse Consigliate
- [MDN Web Docs: HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3Schools: HTML Tutorial](https://www.w3schools.com/html/)
- [WebAIM: Accessibility Guidelines](https://webaim.org/standards/wcag/)