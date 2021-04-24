let arr = [];

function clicklistner(e) {
  while (div.firstChild) {
    div.removeChild(div.lastChild);
  }
  console.log(e.target.dataset.ans);
  buttons(e.target.dataset.ans);
  arr.push(e.target.dataset.ans);
  console.log(arr);
  if(count === 6){
    heading.remove()
    document.getElementById("logo").remove()
    image.remove()
  }
}   

var object = {
  "Which room are you looking to put plants in?": {
    "Living Room": "",
    Bedroom: "",
    Hallway: "",
    Kitchen: "",
    "Child's Room": "",
    Bathroom: "",
    Office: "",
    Balcony: "",
  },
};

var object1 = {
  "What kind of light does this area get?": {
    "Bright direct sunlight 4-5 hours per day": "",
    "Indirect or filtered sunlight throughout the day": "",
    "Not a lot of natural sunlight": "",
    "I’m not sure": "",
  },
};

var object2 = {
    "What's your experience with plants?": {
      "Total plant savant and experienced plant-parent": "",
      "Green thumb with few houseplants": "",
      "First time budding plant mom/dad": "",
      "Most of my plants are dead :(": "",
    },
  };

  var object3 = {
    "Do you have any pets or children?": {
      "Yes": "",
      "No": "",
    },
  }; 

  var object4 = {
    "Do you travel often, or are you likely to forget watering your plants?": {
      "Yes": "",
      "No": "",
      "Sometimes": "",
    },
  };
let count = 0;

let div = document.getElementById("root");
let heading =  document.getElementById("h1");
let image = document.getElementById("myimg")
let n = [object[Object.keys(object)[0]], object1[Object.keys(object1)[0]], object2[Object.keys(object2)[0]],object3[Object.keys(object3)[0]], object4[Object.keys(object4)[0]]];
function buttons() {
  
  for (let que in n[count]) {
    if(count === 0){
      heading.innerHTML = Object.keys(object)[0];
      image.src = "./img/interior-poster-mock-up-with-plant-pot-flower-room-with-white-wall.jpg"
    }
   else if (count === 1) {
   heading.innerHTML = Object.keys(object1)[0];
   image.src = "./img/pepper-face-plant-small-pot-min.jpg"
   
  }else if(count === 2){
      heading.innerHTML = Object.keys(object2)[0];
      image.src = "./img/snake-plant-white-pot-min.jpg"
  }else if(count === 3){
      heading.innerHTML = Object.keys(object3)[0];
      image.src = "./img/pexels-ylanite-koppens-776656.jpg"
  }else if(count === 4){
     heading.innerHTML = Object.keys(object4)[0];
     image.src = "./img/green-houseplant-glass-jar-min (1).jpg"
  }
    let button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-dark");
    button.innerHTML = que;
    button.dataset.ans = que;
    button.onclick = clicklistner;
    div.appendChild(button);
  }

 
  count++;
 
}
buttons();

