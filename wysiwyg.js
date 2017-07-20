let famousPeeps = [
  {
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
      birth: 1747,
      death: 1797
    }
  },
  {
    title: "Major",
    name: "Winston Churchill",
    bio: "British politician and statesman who served as the Prime Minister of the United Kingdom from 1940 to 1945 and again from 1951 to 1955. As Prime Minister, Churchill led Britain to victory over Nazi Germany during World War II. Churchill was also an officer in the British Army, a non-academic historian, and a writer (as Winston S. Churchill). He won the Nobel Prize in Literature in 1953 for his overall, lifetime body of work.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/97/Churchill_HU_90973.jpg",
    lifespan: {
      birth: 1874,
      death: 1965
    }
  },
  {
    title: "Temüjin",
    name: "Genghis Khan",
    bio: "Founder of the Mongol Empire, which became the largest contiguous empire in history after his death, he came to power by uniting many of the nomadic tribes of Northeast Asia. After founding the Empire and being proclaimed 'Genghis Khan', he launched the Mongol invasions that conquered most of Eurasia.",
    image: "http://cdn-4.mrdowling.com/images/613kublaikhan.jpg",
    lifespan: {
      birth: 1162,
      death: 1227
    }
  },
  {
    title: "Crocodile Hunter",
    name: "Steve Irwin",
    bio: "An Australian nature expert and television personality, Irwin achieved worldwide fame from the television series The Crocodile Hunter, an internationally broadcast wildlife documentary series which he co-hosted with his wife Terri. Together, the couple also owned and operated Australia Zoo, founded by Irwin's parents in Beerwah, about 80 kilometres (50 mi) north of the Queensland state capital city of Brisbane.",
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/05/07/14/Steve-Irwin-cropped.jpg",
    lifespan: {
      birth: 1962,
      death: 2006
    }
  }
]

let index = 1;

famousPeeps.forEach(function(item){

  let totalContainer = document.createElement("div"); //Creat div to contain each card

  if (index % 2 === 0) { //Test for even / odd to determine background-color
    totalContainer.className = "wrapper yellow";
  } else {
    totalContainer.className = "wrapper blue";
  }

  let bioInput = document.createElement("input"); // Create input.
  bioInput.id = "input" + index; // Give input individual id using index counter


  let container = document.createElement("div");
  let person = document.createElement("person");
  person.className = "card"
  person.id = "person" + index;
  let header = document.createElement("header");
  let main = document.createElement("main");
  let paragraph = document.createElement("P");
  let images = document.createElement("img");
  let footer = document.createElement("footer");

  header.innerHTML += item.name + " - ";
  header.innerHTML += item.title;
  paragraph.innerHTML += item.bio;
  images.src = item.image;

  let newArr = item.lifespan;
  footer.innerHTML += newArr.birth + " - ";
  footer.innerHTML += newArr.death;

  main.appendChild(paragraph);
  main.appendChild(images);
  person.appendChild(header);
  person.appendChild(main);
  person.appendChild(footer);

  container.appendChild(person);
  totalContainer.appendChild(bioInput);
  totalContainer.appendChild(container);
  body.appendChild(totalContainer);

  let inputArea = document.getElementById(`input${index}`); //assign input to variable
  let personArea = document.getElementById(`person${index}`);

  function writeStuff(event){
    paragraph.innerHTML = inputArea.value;
    if(event.keyCode === 13) {
      inputArea.value = "";
    }
  }

  function doStuff(event) {
    personArea.classList.toggle("border");
    inputArea.focus();
  }

  inputArea.addEventListener("keyup", writeStuff);
  personArea.addEventListener("click", doStuff);

  index++;
})
