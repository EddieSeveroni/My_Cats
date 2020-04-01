// Write my JavaScript here
// alert("Hello from app.js");
// Variable pics with a list of data (array []) stored under the name pics
var pics = [
    "imgs/Cats1.jpeg",  // 0
    "imgs/Cats2.jpeg",  // 1
    "imgs/Cats3.jpeg",  // 2
    "imgs/Cats4.jpeg",  // 3
    "imgs/Cats5.jpeg",  // 4
    "imgs/Cats6.jpeg",  // 5
    "imgs/Cats7.jpeg",  // 6
    "imgs/Cats8.jpeg",  // 7
    "imgs/Cats9.jpeg",  // 8
    "imgs/Cats10.jpeg", // 9
    "imgs/Cats11.jpeg", // 10
    "imgs/Cats12.jpeg", // 11
    "imgs/Cats13.jpeg", // 12
    "imgs/Cats14.jpeg", // 13
    "imgs/Cats15.jpeg", // 14   
    "imgs/Cats16.jpeg", // 15
    "imgs/Cats17.jpeg", // 16
    "imgs/Cats18.jpeg", // 17
    "imgs/Cats19.jpeg", // 18
    "imgs/Cats20.jpeg"  // 19
                        // 20
];

// This code will search the html document and will look for the first instance of button
var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
    // This will allow the image counter to restart back to counter 0 after it reaches the last image on counter 20. 
    if(counter === 20){
        counter = 0;
    }
    img.src = pics[counter];
    counter = counter + 1;

});


