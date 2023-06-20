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

saveBtn.addEventListener("click", function() {
    const formData = new FormData();
    for(var k = 0; k < keywordArray.length; k++) {
        formData.append("keywords", keywordArray[k]);
    }

    formData.append("file", pdfToUpload.value)
    console.log(...formData)

    fetch('http://localhost:5500/server/uploads', {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(data => console.log(data))
})

