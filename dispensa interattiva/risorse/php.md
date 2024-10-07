
### Ricezione dei Dati in PHP
PHP è comunemente usato per ricevere e gestire i dati dei form. Vediamo un esempio di gestione dei dati inviati dal form sopra utilizzando PHP.

#### `$_POST` e `$_GET`
In PHP, esistono due variabili globali principali per accedere ai dati dei form:
- **`$_POST`**: Utilizzata per accedere ai dati inviati tramite il metodo `POST`.
- **`$_GET`**: Utilizzata per accedere ai dati inviati tramite il metodo `GET`.

Esempio di script PHP (`processa.php`) per gestire i dati inviati tramite il metodo POST:
```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];

    echo "Nome: " . htmlspecialchars($nome) . "<br>";
    echo "Email: " . htmlspecialchars($email) . "<br>";
}
?>
```
- **`$_SERVER["REQUEST_METHOD"]`**: Verifica se il metodo utilizzato per la richiesta è POST.
- **`htmlspecialchars()`**: Previene attacchi di tipo XSS convertendo i caratteri speciali in entità HTML. Questo è importante per evitare problemi di sicurezza.
- **`echo`**: È uno strumento per "scrivere" codice html da php.