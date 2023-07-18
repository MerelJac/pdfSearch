const saveKeyword = document.querySelector("#saveKeyword");
let keywordInput = document.querySelector("#keywordsInput");
const printSection = document.querySelector("#printKeywords");
const saveBtn = document.querySelector("#saveBtn");
const pdfToUpload = document.querySelector("#pdfUpload");

const api_key_cloudinary = '127717317775552';
const cloud_name = 'du1rn35uq';

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

// initalizes the widget in memory
var myWidget = cloudinary.createUploadWidget({
    cloudName: 'du1rn35uq',
    uploadPreset: 'pdfSearch'
}, (error, result) => {
if (!error && result && result.event === 'success'){
    console.log("Done! Here is the image info: ", result.info)
} else {console.error(error)}})

document.querySelector('.cloudinary-button').addEventListener('click', function() {
    myWidget.open()
}, false);

// saveBtn.addEventListener("click", function() {
//     let fileName = document.querySelector('input[type="file"]').value;

//     var saveBundle = {
//         fileName: fileName,
//         keywords: keywordArray
//     };

//     console.log(savedData)
//     savedData.push(saveBundle);
//     localStorage.setItem('savedFiles', JSON.stringify(savedData));

//     const options = {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(saveBundle)

//     };
    
//     // clear page
//     keywordArray = [];
//     printSection.innerHTML = ''; 

// })

