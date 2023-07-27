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
  data.forEach(entry => { 
    console.log(entry);

    const eachThread = document.createElement('tr');
    eachThread.classList.add('thread');
    eachThread.classList.add('row');



    const fileLineData = document.createElement('a');
    // fileLine.setAttribute('scope', 'row');
  
    fileLineData.setAttribute('href', entry.fileName);
    fileLineData.textContent = 'Link';

    const keywordLineData = document.createElement('td');
    keywordLineData.textContent = entry.keywords.join(', ');

    const notesLineData = document.createElement('td');
    notesLineData.textContent =  entry.notes;

    eachThread.appendChild(keywordLineData);
    eachThread.appendChild(notesLineData);
    eachThread.appendChild(fileLineData);

    resultsSection.appendChild(eachThread)

});

}