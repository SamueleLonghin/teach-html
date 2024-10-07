// Mostra i link ai file
const fileList = document.getElementById('fileList');
for (const [label, path] of Object.entries(filesDict)) {
    const link = document.createElement('div');
    link.classList.add('file-link');
    link.textContent = label;
    link.dataset.path = path;
    link.addEventListener('click', function () {
        window.history.pushState({}, '', `#${encodeURIComponent(label)}`);
        fetchMarkdownFile(path);
        if (window.innerWidth <= 768) {
            toggleSidebar();
        }
    });
    fileList.appendChild(link);
}

// Funzione per caricare il file Markdown
function fetchMarkdownFile(path) {
    fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error('Errore nel caricamento del file: ' + path);
            }
            return response.text();
        })
        .then(content => {
            displayMarkdownContent(content);
        })
        .catch(error => {
            console.error('Errore:', error);
        });
}

// Funzione per visualizzare il contenuto Markdown
function displayMarkdownContent(content) {
    const output = document.getElementById('output');
    output.innerHTML = '';
    const htmlContent = marked.parse(content);

    const container = document.createElement('div');
    container.classList.add('markdown');
    container.innerHTML = htmlContent;

    // Genera l'elenco dei capitoli basato sugli header del markdown
    const chapterList = document.getElementById('chapterList');
    chapterList.innerHTML = '';
    container.querySelectorAll('h1, h2, h3').forEach((header, index) => {
        const chapterLink = document.createElement('div');
        chapterLink.classList.add('chapter-link', header.tagName.toLowerCase());
        chapterLink.textContent = header.textContent;
        chapterLink.addEventListener('click', () => {
            header.scrollIntoView({ behavior: 'smooth' });
        });
        chapterList.appendChild(chapterLink);
    });

    // Evidenziazione dei blocchi di codice
    output.appendChild(container);
    container.querySelectorAll('pre code').forEach((block) => {

        // block.classList.add('language-css'); // Aggiungi la classe di linguaggio appropriata

        console.log(block, block.innerHTML)
        if (preview && block.classList.contains('language-html') && !block.innerHTML.includes("style")) {
            // Creazione della griglia per visualizzare codice e anteprima
            const flexContainer = document.createElement('div');
            flexContainer.classList.add('code-preview-flex');

            const codeContainer = document.createElement('div');
            codeContainer.classList.add('code-container');
            const previewContainer = document.createElement('div');
            previewContainer.classList.add('render-html');

            // Copia il contenuto del blocco di codice nel codeContainer e applica la classe language-html
            const codeBlock = document.createElement('pre');
            const codeElement = document.createElement('code');
            codeElement.classList.add(language);
            codeElement.textContent = block.textContent;
            codeBlock.appendChild(codeElement);
            codeContainer.appendChild(codeBlock);

            // Aggiungi l'anteprima nel previewContainer
            previewContainer.innerHTML = block.textContent;

            // Aggiungi entrambi i contenitori al flexContainer
            flexContainer.appendChild(codeContainer);
            flexContainer.appendChild(previewContainer);

            // Sostituisci il blocco originale con il flexContainer
            block.parentElement.replaceWith(flexContainer);
        }
        Prism.highlightElement(block);

    });

    container.querySelectorAll('code').forEach((inlineCode) => {
        if (/^<.*>$/.test(inlineCode.textContent.trim())) {
            inlineCode.classList.add(language); // Aggiungi la classe di linguaggio appropriata
        }
        Prism.highlightElement(inlineCode);
    });
}

// Gestisce la navigazione tra i file utilizzando l'URL
window.addEventListener('popstate', function () {
    const hash = window.location.hash.substring(1);
    if (filesDict[hash]) {
        fetchMarkdownFile(filesDict[hash]);
    }
});

// Carica automaticamente il file se c'è un hash nell'URL
window.addEventListener('load', function () {
    const hash = decodeURIComponent(window.location.hash.substring(1));
    if (filesDict[hash]) {
        fetchMarkdownFile(filesDict[hash]);
    }
    else{
        fetchMarkdownFile(filesDict[Object.keys(filesDict)])
    }
});

// Mostra/Nasconde la barra laterale per schermi piccoli
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
sidebarToggle.addEventListener('click', toggleSidebar);

function toggleSidebar() {
    sidebar.classList.toggle('visible');
}

