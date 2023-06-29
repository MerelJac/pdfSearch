const saveKeyword = document.querySelector("#saveKeyword");
let keywordInput = document.querySelector("#keywordsInput");
const printSection = document.querySelector("#printKeywords");
const saveBtn = document.querySelector("#saveBtn");
const pdfToUpload = document.querySelector("#pdfUpload");

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

const savedData = [];
localStorage.setItem('savedFiles', JSON.stringify(savedData));

saveBtn.addEventListener("click", function() {
    let fileName = document.querySelector('input[type="file"]').value;
    var saveBundle = {
        fileName: fileName,
        keywords: keywordArray
    };

    savedData.push(saveBundle);
    localStorage.setItem('savedFiles', JSON.stringify(savedData));

    // clear page
    keywordArray = [];
    printSection.innerHTML = '';  
})

const searchKeywordBtn = document.querySelector('#searchKeyWrd');
searchKeywordBtn.addEventListener('click', () => {
    var searchQueryKeyWord = document.querySelector('#searchKeywords');
    var searchTerm = searchQueryKeyWord.value;
    var storedData = JSON.parse(localStorage.getItem('savedFiles'))
    console.log(storedData)
    for (var i = 0; i < storedData.length; i++) {
        let keywordsToCheck = storedData[i].keywords;
        let fileNameToCheck = storedData[i].fileName;      ;
        if (keywordsToCheck.includes(searchTerm)) {
            console.log('yay' + fileNameToCheck)
        } else {console.log('nope' + fileNameToCheck)}
    }
})
