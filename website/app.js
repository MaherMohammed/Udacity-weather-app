/* Global Variables */
const baseURL = 'http://api.openweathermap.org/geo/1.0/zip?zip=';
const apiKey = 'e3782a4dd6b0412bda125cbd7b365830';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const getData = async(baseURL , key)=>{
    const zipCode = document.querySelector('#zip').value;
    console.log(zipCode);
    const res = await fetch(baseURL+zipCode+'&appid='+apiKey);
    try {
        const allData = await res.json();
        console.log(allData);
    } catch (error) {
        console.log(error);
    }
}


document.querySelector('#generate').addEventListener('click' , function() {
    getData(baseURL , apiKey);
});



