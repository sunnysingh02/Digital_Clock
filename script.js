const time = document.querySelector("div");

setInterval(()=>{
    let currentTime = new Date();
    time.textContent=currentTime.toLocaleTimeString();
}, 1000);
