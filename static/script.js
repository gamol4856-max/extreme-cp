
let images = [
    "static/img/hero1.jpg",
    "static/img/hero2.jpg",             /*here is we used list for collecting images*/
    "static/img/hero3.jpg"
                
            ];


            let i = 0;
            const hero =
            document.getElementById("hero");
            hero.style.backgroundImage = `url(${images[0]})`;


             setInterval(() => {
                i = (i + 1) % images.length;
                hero.style.backgroundImage = `url(${images[i]})`;
            
            }, 3000); 
