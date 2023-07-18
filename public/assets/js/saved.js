const saveKeyword = document.querySelector("#saveKeyword");
let keywordInput = document.querySelector("#keywordsInput");
const printSection = document.querySelector("#printKeywords");
const saveBtn = document.querySelector("#saveBtn");
const searchArea = document.querySelector('#searchBox');
const pdfToUpload = document.querySelector("#pdfUpload");

const printPath = document.createElement('section');
searchArea.append(printPath);

const searchKeywordBtn = document.querySelector('#searchKeyWrd');
searchKeywordBtn.addEventListener('click', () => {
    console.log('clicked')
    const eachSearch = document.createElement('div');
    printPath.innerHTML = '';
    var searchQueryKeyWord = document.querySelector('#searchKeywords');
    var searchTerm = searchQueryKeyWord.value;
    var storedData = JSON.parse(localStorage.getItem('savedFiles'))
 
    for (var i = 0; i < storedData.length; i++) {
        let keywordsToCheck = storedData[i].keywords;
        let fileNameToCheck = storedData[i].fileName;
        console.log(fileNameToCheck);

        if (keywordsToCheck.includes(searchTerm)) {
            eachSearch.innerHTML = `<a href="${fileNameToCheck}">${fileNameToCheck}</a><p>Keywords: ${keywordsToCheck.join(', ')}</p>`;
            console.log(eachSearch);
            printPath.appendChild(eachSearch)
        } 
        else {eachSearch.innerHTML = `<p>Search again</p>`}

    }
})
