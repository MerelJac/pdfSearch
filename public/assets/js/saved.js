const saveKeyword = document.querySelector("#saveKeyword");
let keywordInput = document.querySelector("#keywordsInput");
// const printSection = document.querySelector("#printKeywords");
const saveBtn = document.querySelector("#saveBtn");
const searchArea = document.querySelector('#searchBox');
const pdfToUpload = document.querySelector("#pdfUpload");
const printSection = document.querySelector('#resultsSection')


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

let parsedData;
fetch('/api/data')
  .then(response => response.json())
  .then(data => {
    // Work with the loaded JSON data here
    console.log(data.data)
    outputData(data.data);

  })
  .catch(error => {
    console.log('Error loading data:', error);
  });

function outputData(data) {
console.log(data)
data.forEach(entry => { 
  let newDiv = document.createElement('div');
  newDiv.classList.add('row');

  const fileP = document.createElement('p');
  fileP.innerHTML += entry.fileName;

  const keywordP = document.createElement('p');
  keywordP.innerHTML += entry.keywords;

  const notesP = document.createElement('p');
  notesP.innerHTML += entry.notesP;


  newDiv.appendChild(fileP);
  newDiv.appendChild(keywordP)
  newDiv.appendChild(notesP);

  printSection.append(newDiv);

  console.log(entry.id);

});
  // printSection.innerHTML += data;
}