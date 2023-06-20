const saveKeyword = document.querySelector("#saveKeyword");
let keywordInput = document.querySelector("#keywordsInput");
const printSection = document.querySelector("#printKeywords");

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

