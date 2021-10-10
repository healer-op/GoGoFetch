function render(){
    alert("🧯Example Anime Name : death note");
    alert("🧯Example Chapter : 1");
    var link=prompt("⚡Anime Name");
    var link = link.replace(` `, "-");
    var name = link.toLowerCase();
    if(!name){
      name ="the-thorn-that-pierces-me";
    }
    var ch = prompt("⚡Enter Episode Number");
    alert("We Scrape Data from GogoAnime.Pe");
    alert("🐱‍💻Made By Healer");
    
    document.getElementById("name").innerHTML = `Displaying ${name} Episode ${ch}`
  
  fetch(`https://mapi.mrhealer.repl.co/anime/${name}/${ch}`)
  .then(res=> res.json())
  .then(data => {
       video = data.video;
       document.getElementById("bases").src = video[0];
  });
  
  }
  
