/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = 'e3782a4dd6b0412bda125cbd7b365830';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const getData = async(baseURL , key)=>{
    const zipCode = document.querySelector('#zip').value;
    const res = await fetch(baseURL+zipCode+'&appid='+apiKey);
    try {
        const allData = await res.json();
        return allData.main.temp;
    } catch (error) {
        console.log(error);
    }
}



const postData = async(temp)=>{
    const feeling = document.querySelector('#feelings').value;
    const res = await fetch('/addNewData',{
        method:"POST",
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            date:newDate,
            temperature:temp,
            userResponse:feeling
        })
    })

    try {
        const projectData = await res.json();
        console.log(projectData);
        return projectData;
    } catch (error) {
        console.log(error);
    }
}


const updateUI = async(data)=>{
    console.log(data);
}

document.querySelector('#generate').addEventListener('click' , function() {
    getData(baseURL , apiKey)
    .then((data)=>{
        postData(data)
    })
    // .then((projectData)=>{
    //     updateUI(projectData);
    // })
});



