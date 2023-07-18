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
    console.log(keyword)
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

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(saveBundle)

    };
    
    fetch('/api', options);
    
    // clear page
    keywordArray = [];
    printSection.innerHTML = ''; 

})
