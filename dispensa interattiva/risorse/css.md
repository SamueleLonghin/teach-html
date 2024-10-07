# Guida CSS: Introduzione e Approfondimenti per Docenti di Informatica

## Introduzione a CSS
CSS (Cascading Style Sheets) è un linguaggio di stile utilizzato per controllare l'aspetto e il layout delle pagine web scritte in HTML. CSS consente di separare il contenuto dalla presentazione, rendendo più semplice la gestione e la manutenzione del codice.

### Collegare CSS a un Documento HTML
Ci sono tre modi principali per aggiungere CSS a un documento HTML:
1. **Stile Inline**: Applicare stili direttamente agli elementi HTML con l'attributo `style`.
    ```html
    <p style="color: red;">Questo è un testo in rosso.</p>
    ```
2. **Stile Interno**: Inserire il CSS all'interno di un tag `<style>` nell'elemento `<head>` del documento.
    ```html
    <head>
      <style>
        body {
          background-color: lightblue;
        }
      </style>
    </head>
    ```
3. **Stile Esterno**: Collegare un foglio di stile esterno con il tag `<link>`.
    ```html
    <head>
      <link rel="stylesheet" href="stili.css">
    </head>
    ```
    Utilizzare un file esterno (`stili.css`) è la pratica più comune, poiché consente di riutilizzare il codice e semplifica la gestione degli stili.

## Sintassi di CSS
Un **blocco CSS** è formato da un **selettore** e da una serie di **dichiarazioni** racchiuse tra parentesi graffe.

```css
selettore {
  proprietà: valore;
}
```

Esempio:
```css
p {
  color: blue;
  font-size: 16px;
}
```
In questo esempio, il selettore `p` indica che tutte le etichette `<p>` avranno il colore del testo blu e una dimensione del carattere di 16 pixel.

### Selettori CSS
I **selettori** permettono di scegliere quali elementi HTML stilizzare. I più comuni includono:

- **Selettore di Tipo**: Si riferisce direttamente a un elemento HTML.
  ```css
  h1 {
    color: green;
  }
  ```
- **Selettore di Classe**: Si riferisce a elementi che hanno un determinato attributo `class`.
  ```css
  .intestazione {
    font-weight: bold;
  }
  ```
  Per applicare una classe, utilizzare l'attributo `class` nell'HTML:
  ```html
  <p class="intestazione">Questo è un paragrafo in grassetto.</p>
  ```
- **Selettore ID**: Si riferisce a un elemento con un `id` specifico (deve essere univoco in tutto il documento).
  ```css
  #introduzione {
    text-align: center;
  }
  ```
  Esempio HTML:
  ```html
  <div id="introduzione">Benvenuti al mio sito!</div>
  ```
- **Selettori Combinati**: Permettono di stilizzare elementi in base a relazioni tra di essi.
  - **Selettore Discendente**: Stilizza gli elementi discendenti di un altro elemento.
    ```css
    div p {
      color: red;
    }
    ```
    In questo caso, tutti i paragrafi all'interno di un elemento `<div>` saranno di colore rosso.
  - **Selettore di Classe su un Elemento**: Stilizza un elemento specifico con una classe.
    ```css
    div.intestazione {
      color: blue;
    }
    ```
    In questo esempio, solo i `<div>` con la classe `intestazione` avranno il colore blu.

- **Selettori di Attributo**: Consentono di selezionare elementi in base a un attributo specifico.
  ```css
  input[type="text"] {
    border: 1px solid gray;
  }
  ```
  In questo esempio, tutti gli `<input>` con `type="text"` avranno un bordo grigio.

- **Selettori a Gruppo**: Consentono di applicare lo stesso stile a più elementi contemporaneamente.
  ```css
  h1, h2, p {
    margin: 0;
  }
  ```
  In questo esempio, tutti i tag `<h1>`, `<h2>` e `<p>` avranno margine 0.

- **Selettori Universali**: Stilizza tutti gli elementi.
  ```css
  * {
    box-sizing: border-box;
  }
  ```
  Questo selettore si applica a tutti gli elementi della pagina.

### Priorità degli Stili CSS
Quando ci sono stili duplicati, CSS segue una gerarchia di **specificità** per determinare quale stile applicare:
1. **Stile Inline**: Gli stili definiti direttamente nell'attributo `style` di un elemento HTML hanno la priorità più alta.
    ```html
    <p style="color: red;">Questo testo sarà rosso</p>
    ```
2. **Selettori ID**: Hanno la seconda priorità più alta.
    ```css
    #intro {
      color: blue;
    }
    ```
3. **Selettori di Classe** : Hanno la priorità successiva.
    ```css
    .paragrafo {
      color: green;
    }
    ```
4. **Selettori di Tipo**: Come gli elementi HTML (`p`, `h1`, etc.), hanno la priorità più bassa.
    ```css
    p {
      color: black;
    }
    ```
5. **Importanza con `!important`**: È possibile forzare uno stile utilizzando `!important`, che sovrascrive qualsiasi altro valore definito.
    ```css
    p {
      color: blue !important;
    }
    ```

### Applicare Più Classi a un Elemento
È possibile applicare più classi a un singolo elemento HTML separandole con uno spazio.

Esempio HTML:
```html
<p class="classe1 classe2">Questo è un paragrafo con due classi.</p>
```
In questo caso entrambe le classi verranno applicate all'elemento:
```css
.classe1 {
  color: red;
}

.classe2 {
  font-weight: bold;
}
```
In questo esempio, il paragrafo avrà il testo in rosso e in grassetto.

## Proprietà CSS Comuni
CSS offre una vasta gamma di proprietà per personalizzare l'aspetto degli elementi. Ecco alcune delle più utilizzate:

- **Colore del Testo** (`color`):
  ```css
  p {
    color: blue;
  }
  ```
- **Dimensione del Carattere** (`font-size`):
  ```css
  h1 {
    font-size: 24px;
  }
  ```
- **Colore di Sfondo** (`background-color`):
  ```css
  body {
    background-color: lightyellow;
  }
  ```
- **Margini** (`margin`) e **Padding** (`padding`):
  - **`margin`** controlla lo spazio esterno di un elemento.
  - **`padding`** controlla lo spazio interno di un elemento.
  ```css
  div {
    margin: 20px;
    margin-top: 10px;
    padding: 15px;
  }
  ```
- **Bordi** (`border`):
  ```css
  p {
    border: 1px solid black;
  }
  ```
  Questa dichiarazione applica un bordo nero, solido, di 1 pixel intorno ai paragrafi.

## Il Modello di Box CSS

![Modello di Box in css](https://www.unm.edu/~tbeach/IT145/week08/images/boxmodel.gif)

Ogni elemento HTML può essere considerato come una **scatola**. Il **modello di box** comprende:
- **Contenuto**: L'area dove si trova il testo o gli elementi figli.
- **Padding**: Spazio tra il contenuto e il bordo. Aumentare il padding aumenta lo spazio interno dell'elemento, creando "cuscini" interni tra il contenuto e il bordo.
- **Bordo**: Contorno dell'elemento. Può essere personalizzato con vari stili, colori e larghezze.
- **Margine**: Spazio esterno che separa l'elemento dagli altri. Aumentare il margine aumenta lo spazio esterno tra l'elemento e gli altri elementi circostanti.

Esempio di come applicare queste proprietà:
```css
div {
  width: 300px;
  padding: 10px;  /* Spazio interno tra il contenuto e il bordo */
  border: 2px solid black;  /* Bordo dell'elemento */
  margin: 20px;  /* Spazio esterno tra l'elemento e gli altri */
}
```
- **`box-sizing`**: La proprietà `box-sizing` definisce come vengono calcolate le dimensioni totali dell'elemento. Usando `box-sizing: border-box;`, il padding e il bordo vengono inclusi nella larghezza totale dell'elemento.

## Layout con CSS: Flexbox e Grid
### Flexbox
**Flexbox** è un sistema di layout unidimensionale che permette di distribuire gli elementi in una riga o colonna.

Esempio:
```css
.container {
  display: flex;
  justify-content: space-between;
}
```
In questo esempio, gli elementi all'interno di `.container` saranno distribuiti uniformemente con spazio tra di loro.

### CSS Grid
**CSS Grid** è un sistema di layout bidimensionale che permette di creare layout complessi con righe e colonne.

Esempio:
```css
grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
```
Questo esempio crea una griglia con due colonne, la prima più stretta della seconda.

## Buone Pratiche CSS
1. **Separare il CSS dall'HTML**: Utilizzare fogli di stile esterni per mantenere il codice pulito e riutilizzabile.
2. **Utilizzare Nomi Significativi per Classi e ID**: Usa nomi che descrivano la funzione o il contenuto dell'elemento, ad esempio `.nav-bar` o `#footer`.
3. **Evitare Inline CSS**: Mantieni gli stili nel CSS separato per facilitare la manutenzione del codice.
5. **Ridurre la Specificità**: Evita di creare selettori troppo specifici per rendere il CSS più facile da sovrascrivere e mantenere.


## Risorse Consigliate
- [MDN Web Docs: CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [W3Schools: CSS Tutorial](https://www.w3schools.com/css/)
- [CSS Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Tricks: A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)