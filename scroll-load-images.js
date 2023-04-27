 
 const imageAddresses = [    
  "https://preview.redd.it/old-execution-site-by-v0-yuyhcwe322f91.jpg?width=640&crop=smart&auto=webp&s=ad00994eef5d50894e7cb643686f04cf2980763e",
  "https://pbs.twimg.com/media/EjHYWTVWsAEHjU0.jpg",
  "https://i.redd.it/wt6xllfp66z71.jpg",
  "https://pbs.twimg.com/media/FLHNg6iXIAgIB2U.jpg:large",
  "https://pbs.twimg.com/media/FgBj5VlXoAAZr1X.jpg",
  "https://i.redd.it/t2cygfdrt6o81.jpg",  
  "https://i.pinimg.com/originals/eb/73/30/eb73304f6aa84ea04d0ae5e9abd200ec.png",
    "https://i.pinimg.com/736x/a8/26/c5/a826c548b66625862170fc702fa4c515.jpg",
    "https://i.redd.it/cyg23qqdamt41.jpg",
    "https://i.pinimg.com/originals/49/2b/50/492b5006209ccafb9341b819e96b9c80.jpg",
    "https://swosh-x.com/news/images/joomgrabber/2021-04/7157d136ce.jpeg",
    "https://i.pinimg.com/originals/13/06/cd/1306cd0cef29d81dd5085cef080355e7.jpg",
    "https://th.bing.com/th/id/OIP.7WCk8X7er-XLuUTB7ftogAHaJ0?pid=ImgDet&rs=1",
    "https://i.pinimg.com/originals/e1/8d/89/e18d89cd003040dcc409f342ae00d545.jpg",
    "https://cdn.80.lv/api/upload/meta/17736/images/61922ef52ab83/contain_1200x630.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/disp/640216102389087.5f35461116924.png",
    "https://i.pinimg.com/736x/fb/88/c1/fb88c16cd48053020169b56dd06d36e2.jpg",
    "https://www.videogameschronicle.com/files/2022/11/Disco-Elysium-g.jpg",
    "https://i.kym-cdn.com/photos/images/original/002/114/165/a93",
    "https://cs14.pikabu.ru/post_img/big/2022/07/22/10/165851131519395947.jpg",
    "https://pbs.twimg.com/media/EPiD2BhU4AA7285.jpg",
    "https://pbs.twimg.com/media/EjTEuu6WAAI3Q70?format=jpg&name=large",
    "https://i.kym-cdn.com/photos/images/original/002/288/327/c8c",
    "https://64.media.tumblr.com/af4eff0012518b1fe54d3817d0d78502/134df8f875075ef2-8a/s1280x1920/4bca69ea9b1e52f59b9b7d60e617faa2dfb80129.jpg",
    "https://i.pinimg.com/originals/24/b9/29/24b929c9df1b140d0f7b5831061bee8d.jpg",
    "https://i.kym-cdn.com/photos/images/original/002/304/618/e42",
    "https://i.kym-cdn.com/photos/images/original/002/256/875/920",
    "https://img2.joyreactor.cc/pics/post/Disco-Elysium-%D0%98%D0%B3%D1%80%D1%8B-Harrier-Du-Bois-Klaasje-Amandou-7543929.jpeg",
    "https://img2.joyreactor.cc/pics/post/Disco-Elysium-%D0%98%D0%B3%D1%80%D1%8B-%D0%98%D0%B3%D1%80%D0%BE%D0%B2%D0%BE%D0%B9-%D0%B0%D1%80%D1%82-thefoolish-7553169.png",
    "https://img2.joyreactor.cc/pics/post/Disco-Elysium-%D0%98%D0%B3%D1%80%D1%8B-%D0%98%D0%B3%D1%80%D0%BE%D0%B2%D0%BE%D0%B9-%D0%B0%D1%80%D1%82-thefoolish-7553168.png",
    "https://img2.joyreactor.cc/pics/post/Disco-Elysium-%D0%98%D0%B3%D1%80%D1%8B-Harrier-Du-Bois-Kim-Kitsuragi-7906462.jpeg",
    "https://img2.joyreactor.cc/pics/post/%D0%98%D0%B3%D1%80%D1%8B-Harrier-Du-Bois-Disco-Elysium-7919596.jpeg",
    "https://img2.joyreactor.cc/pics/post/Cuno-%28Disco-Elysium%29-Disco-Elysium-%D0%98%D0%B3%D1%80%D1%8B-%D0%98%D0%B3%D1%80%D0%BE%D0%B2%D0%BE%D0%B9-%D0%B0%D1%80%D1%82-7431438.jpeg",
    "https://img2.joyreactor.cc/pics/post/Disco-Elysium-%D0%98%D0%B3%D1%80%D1%8B-Harrier-Du-Bois-Kim-Kitsuragi-7796511.jpeg",
    "https://img2.joyreactor.cc/pics/post/Disco-Elysium-%D0%98%D0%B3%D1%80%D1%8B-Jean-Vicquemare-%D0%98%D0%B3%D1%80%D0%BE%D0%B2%D0%BE%D0%B9-%D0%B0%D1%80%D1%82-7721635.jpeg"
    
  ];    /*36*/
  function chooseRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageAddresses.length);
    return imageAddresses[randomIndex];
  }    
  window.addEventListener("load", () => {
    const maxImages = 100;
    let loadedImages = 0;
        while (loadedImages < maxImages) {
        const img = new Image();
        img.src = chooseRandomImage();
        document.querySelector(".container").appendChild(img);
        loadedImages++;
        }  
    window.addEventListener("scroll", () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        const img = new Image();
        img.src = chooseRandomImage();
        document.querySelector(".container").appendChild(img);
        loadedImages++;
        if (loadedImages >= maxImages) {          
          window.removeEventListener("scroll");
        }
      }
    });
  });