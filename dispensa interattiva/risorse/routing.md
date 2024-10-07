# Routing delle Risorse

## Introduzione al Routing delle Risorse
Il sistema di routing delle risorse su un sito web consente di gestire e navigare tra i vari contenuti. È essenziale comprendere la differenza tra indirizzi **relativi** e **assoluti** e come utilizzare **link esterni** correttamente. Queste conoscenze sono fondamentali per costruire pagine web strutturate e facili da navigare.

## Concetto di Radice
Il concetto di **radice** (o **root**) si riferisce alla directory principale di un sito web, da cui partono tutti i percorsi assoluti interni al sito. In altre parole, la root è il livello più alto della struttura delle cartelle del sito. Quando si utilizza un percorso che inizia con una barra (`/`), significa che si sta facendo riferimento alla radice del sito. Questo tipo di riferimento è molto utile per garantire la coerenza dei collegamenti, indipendentemente da dove ci si trova all'interno della struttura delle cartelle.

Ad esempio, se la struttura del sito è la seguente:

```
progetto-web/
├── index.html
├── about.html
├── css/
│   └── stile.css
├── js/
│   └── script.js
├── immagini/
│   └── logo.png
└── contatti/
    └── contact.html
```
- La directory **root** in questo esempio è `progetto-web/`.
- Quando si utilizza un percorso come `/css/stile.css`, si sta indicando di cercare il file `stile.css` all'interno della cartella `css`, partendo dalla root del sito.
- Questo significa che, indipendentemente dalla pagina HTML in cui ci si trova, il percorso `/css/stile.css` funzionerà sempre per collegarsi a quel file.

## Indirizzi Relativi e Assoluti
### Indirizzi Assoluti
Un **indirizzo assoluto** specifica l'intero percorso di una risorsa, compreso il protocollo (`http://` o `https://`), il dominio e il percorso completo della risorsa. Ad esempio:
```html
<a href="https://www.example.com/about.html">Chi Siamo</a>
```
- Questo link si collega alla pagina `about.html` del sito `https://www.example.com`, indipendentemente dalla posizione della pagina corrente.
- Gli indirizzi assoluti sono utili quando si devono creare collegamenti a pagine che si trovano su siti diversi dal proprio o per garantire che il link funzioni correttamente indipendentemente dalla posizione della pagina corrente.
- Si considerano indirizzi assoluti anche **quelli che iniziano dalla radice del sito** (`/`). Questi link indicano percorsi che partono sempre dalla directory principale del sito, il che rende la gestione delle risorse coerente a prescindere dalla posizione della pagina corrente. Ad esempio:
```html
<a href="/css/stile.css">Stile CSS</a>
```
- Questo link cerca il file `stile.css` all'interno della directory `css` partendo dalla root del sito.
- Per risorse comuni come JavaScript e CSS, è consigliabile usare percorsi assoluti che partono dalla root (`/css/` o `/js/`) per evitare problemi di navigazione o percorsi rotti.

### Indirizzi Relativi
Un **indirizzo relativo** definisce il percorso della risorsa rispetto alla posizione **della pagina corrente**. Gli indirizzi relativi sono particolarmente utili quando si sviluppa un sito che potrebbe essere spostato o riorganizzato, poiché questi link sono flessibili e non dipendono da un dominio fisso. Esistono diversi tipi di indirizzi relativi:

1. **Percorso Relativo Semplice**: Si riferisce a una risorsa nella stessa directory o in una sottodirectory.
    ```html
    <a href="about.html">Chi Siamo</a>
    ```
    - Questo link si collega alla pagina `about.html` nella stessa directory del documento attuale.

2. **Percorso Relativo al Livello Superiore**: Utilizza `..` per risalire alle directory superiori.
    ```html
    <a href="../contact.html">Contatti</a>
    ```
    - Questo link si collega a `contact.html`, risalendo di un livello dalla directory corrente.

3. **Navigazione in Cartelle Annidate**: Per gestire risorse all'interno di diverse sottodirectory o risalire a cartelle superiori, è possibile creare percorsi relativi più complessi:
    ```html
    <a href="../immagini/logo.png">Logo</a>
    ```
    - Questo link si collega all'immagine `logo.png` che si trova in una directory superiore rispetto alla pagina corrente.

## Struttura delle Cartelle e Navigazione
Per comprendere meglio l'uso degli indirizzi relativi, è utile conoscere come organizzare le risorse all'interno delle cartelle. Vediamo un esempio di struttura di una cartella di progetto web:

```
progetto-web/
├── index.html
├── about.html
├── css/
│   └── stile.css
├── js/
│   └── script.js
├── immagini/
│   └── logo.png
└── contatti/
    └── contact.html
```
In questa struttura:
- **`index.html`** è la pagina principale.
- **`about.html`** è una pagina separata nella stessa directory di `index.html`.
- **`css/stile.css`** è il file di stile.
- **`js/script.js`** è il file JavaScript.
- **`immagini/logo.png`** contiene un'immagine del logo.
- **`contatti/contact.html`** è una pagina di contatto in una sottodirectory chiamata `contatti`.

Esempi di utilizzo degli indirizzi relativi:
1. **Da `index.html` a `about.html`**:
    ```html
    <a href="about.html">Scopri di più</a>
    ```
2. **Da `index.html` a `contact.html` nella directory `contatti`**:
    ```html
    <a href="contatti/contact.html">Contattaci</a>
    ```
3. **Da `contact.html` a `stile.css`** (file CSS nella cartella `css`):
    ```html
    <link rel="stylesheet" href="../css/stile.css">
    ```
    - Si risale di un livello (`..`) dalla directory `contatti` per accedere alla directory principale e poi alla directory `css`.
4. **Da `about.html` a `logo.png` nella cartella `immagini`**:
    ```html
    <img src="immagini/logo.png" alt="Logo">
    ```
    - `immagini` è una sottodirectory della stessa directory di `about.html`.

## Link Esterni
Un **link esterno** punta a una risorsa ospitata su un dominio diverso da quello corrente. È spesso utilizzato per collegarsi a siti esterni o per fornire riferimenti esterni.
- Di solito, i link esterni utilizzano `target="_blank"` per aprire il link in una nuova scheda del browser, mantenendo l'utente sulla pagina originale del sito:
    ```html
    <a href="https://www.google.com" target="_blank">Visita Google</a>
    ```
- Questo approccio migliora l'esperienza utente, poiché il visitatore non lascia il sito originale, facilitando il ritorno al contenuto principale.


## Ancore
Le **ancore** vengono utilizzate per creare collegamenti all'interno della stessa pagina o verso una sezione specifica di un'altra pagina. Le ancore sono particolarmente utili per navigare in documenti lunghi, migliorando l'usabilità e l'accessibilità del sito.

Per creare un'ancora, è necessario aggiungere un attributo `id` all'elemento di destinazione e quindi creare un link che punti a quell'`id`. Ad esempio:

1. **Creazione dell'elemento di destinazione con un `id`**:
    ```html
    <h2 id="sezione1">Sezione 1</h2>
    <p>Questa è la prima sezione del documento.</p>
    ```
2. **Creazione del link all'ancora**:
    ```html
    <a href="#sezione1">Vai alla Sezione 1</a>
    ```
    - Questo link porterà l'utente direttamente alla sezione del documento con `id="sezione1"`.

Le ancore possono essere utilizzate anche per collegarsi a sezioni specifiche di altre pagine. Ad esempio:
```html
<a href="about.html#team">Scopri il nostro team</a>
```
- Questo link porterà l'utente alla sezione `#team` della pagina `about.html`, se quella sezione è identificata da un `id="team"`.


## Risorse Consigliate
- [MDN Web Docs: Understanding URLs](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL)