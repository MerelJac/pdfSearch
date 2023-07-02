const saveKeyword = document.querySelector("#saveKeyword");
let keywordInput = document.querySelector("#keywordsInput");
const printSection = document.querySelector("#printKeywords");
const saveBtn = document.querySelector("#saveBtn");
const pdfToUpload = document.querySelector("#pdfUpload");

const printPath = document.createElement('section');
document.body.appendChild(printPath);

keywordArray = [];
saveKeyword.addEventListener("click", function() {
    let keyword = keywordInput.value;
    if (!keywordArray.includes(keyword)) {
        keywordArray.push(keyword)
    }
    printSection.innerHTML = keywordArray.join(", ");
    keywordInput.value = "";
    console.log(keywordArray);
})

const savedData = JSON.parse(localStorage.getItem('savedFiles')) || [];

saveBtn.addEventListener("click", function() {
    let fileName = document.querySelector('input[type="file"]').value;
    var saveBundle = {
        fileName: fileName,
        keywords: keywordArray
    };

    console.log(savedData)
    savedData.push(saveBundle);
    localStorage.setItem('savedFiles', JSON.stringify(savedData));

    // clear page
    keywordArray = [];
    printSection.innerHTML = '';  
})

const searchKeywordBtn = document.querySelector('#searchKeyWrd');
searchKeywordBtn.addEventListener('click', () => {
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
            eachSearch.innerHTML = `<a href="${fileNameToCheck}">${fileNameToCheck}</a><p>Keywords: ${keywordsToCheck}</p>`;
            console.log(eachSearch);
            printPath.appendChild(eachSearch)
        } 
        else {eachSearch.innerHTML = `<p>Search again</p>`}

    }
})
