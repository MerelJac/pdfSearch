const saveKeyword = document.querySelector("#saveKeyword");
let keywordInput = document.querySelector("#keywordsInput");
// const printSection = document.querySelector("#printKeywords");
const saveBtn = document.querySelector("#saveBtn");
const searchArea = document.querySelector('#searchBox');
const pdfToUpload = document.querySelector("#pdfUpload");
const printSection = document.querySelector('#resultsSection')


// const printPath = document.createElement('section');
// searchArea.append(printPath);

const searchKeywordBtn = document.querySelector('#searchKeyWrd');
searchKeywordBtn.addEventListener('click', () => {
    var searchQueryKeyWord = document.querySelector('#searchKeywords');
    var searchTerm = searchQueryKeyWord.value;
    console.log('clicked');
    fetch('/api/data')
    .then(response => response.json())
    .then(data => {
      let dataPulled = data.data;
      const filteredData = dataPulled.filter(record => record.keywords.includes(searchTerm));
      resultsSection.innerHTML = '';
      outputData(filteredData);
      console.log(filteredData);
    
    })
    // const eachSearch = document.createElement('div');
    // printPath.innerHTML = '';
    // var searchQueryKeyWord = document.querySelector('#searchKeywords');
    // var searchTerm = searchQueryKeyWord.value;
    // var storedData = JSON.parse(localStorage.getItem('savedFiles'))
    // for (var i = 0; i < storedData.length; i++) {
    //     let keywordsToCheck = storedData[i].keywords;
    //     let fileNameToCheck = storedData[i].fileName;
    //     console.log(fileNameToCheck);

    //     if (keywordsToCheck.includes(searchTerm)) {
    //         eachSearch.innerHTML = `<a href="${fileNameToCheck}">${fileNameToCheck}</a><p>Keywords: ${keywordsToCheck.join(', ')}</p>`;
    //         console.log(eachSearch);
    //         printPath.appendChild(eachSearch)
    //     } 
    //     else {eachSearch.innerHTML = `<p>Search again</p>`}

    // }


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

  const headerThead = document.createElement('tr');
  headerThead.classList.add('thread');


  const fileLine = document.createElement('td');
  fileLine.classList.add('list');
  fileLine.textContent = 'FILE PATH'


  const keywordLine = document.createElement('td');
  keywordLine.classList.add('list');
  keywordLine.textContent = 'KEYWORDS';

  const notesLine = document.createElement('td');
  notesLine.classList.add('list');
  notesLine.textContent = 'NOTES';

  headerThead.append(keywordLine);
  headerThead.append(fileLine);
  headerThead.append(notesLine);

  resultsSection.appendChild(headerThead)

  data.forEach(entry => { 
    console.log(entry);

    const eachThread = document.createElement('tr');
    eachThread.classList.add('thread');


    const fileLineData = document.createElement('a');
    // fileLine.setAttribute('scope', 'row');
  
    fileLineData.setAttribute('href', entry.fileName);
    fileLineData.textContent = 'Link';





    const keywordLineData = document.createElement('td');
    // keywordLine.setAttribute('scope', 'col');
    keywordLineData.textContent = entry.keywords.join(', ');

    const notesLineData = document.createElement('td');
    // notesLine.setAttribute('scope', 'col');
    notesLineData.textContent =  entry.notes;

    keywordLine.appendChild(keywordLineData);
    notesLine.appendChild(notesLineData);
    fileLine.appendChild(fileLineData);


});

}