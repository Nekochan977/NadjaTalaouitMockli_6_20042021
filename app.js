// HTML nodes

const header = document.querySelector('#main-header');
const logo = document.querySelector('.logo');

// Getting JSON data

fetch('./data.json')
.then(function(response){
    return response.json();
})
.then(function(jsonData){
    console.log(jsonData);
    console.log(jsonData['media']);
    console.log(jsonData['media'].length);

})
 
// fetch('./data.json').then(function(res){
//     return res.json();
// }).then(function(data){
//     console.log(data)
// })
// console.log(requestJson)

// let toto = fetch('./data.json').then(function(res){
//     return res.json();
// }).then(function(data){JSON.parse(data)})
// let toto;

// fetch('./data.json').then(function(res){
//     return res.json();
// }).then(function(json){
//     toto=json['photographers'][1]['id'];
// })

// console.log(toto)
// console.log(toto.data['photographers'][1]['id'])
    
// requestJson.open('get')
// Creating HTML elements through JavaScripts

// Header
    // Logo
document.querySelector('.logo').innerHTML = '<a href="#" class="main-page-link"></a>';
document.querySelector('.main-page-link').innerHTML = '<img src="./images/logo.png" alt="FishEye-logo">';

    // Navbar
document.querySelector('.nav-bar').innerHTML = '<div class="tag-list"></div>';


// document.querySelector('.tag-list').append.innerHTML = '<a href="#" class"photograph-tag">#nature</a>';

// document.querySelector('body').innerHTML = '<p>je suis un paragraphe venant de js</p>'
