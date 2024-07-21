//song list
const All_song = [
  {
    name: "Đừng Làm Trái Tim Anh Đau",
    path: "https://files.catbox.moe/uttj7e.mp3",
    img: "https://i.imgur.com/x7BLTwp.jpg",
    singer: "Sơn Tùng M-TP"
  },
  {
    name: "Thiên Lý Ơi",
    path: "https://files.catbox.moe/m8b4hr.mp3",
    img: "https://i.imgur.com/e28b0dD.png",
    singer: "Jack (5 triệu)"
  },
  {
    name: "Đom Đóm",
    path: "https://files.catbox.moe/t2zl0l.mp3",
    img: "https://i.imgur.com/aVTLehn.jpeg",
    singer: "J97 (5 Củ)"
  },
  {
    name: "FRIENDSHIP",
    path: "https://files.catbox.moe/fj6ssd.mp3",
    img: "https://i.imgur.com/mta92pW.jpeg",
    singer: "Đen Vâu"
  },
  {
    name: "Harehare ya",
    path: "https://files.catbox.moe/1175cb.mp3",
    img: "https://i.imgur.com/r9owjFE.jpeg",
    singer: "Sou"
  },
  {
    name: "Hoa Cỏ Lau",
    path: "https://files.catbox.moe/acg0vl.mp3",
    img: "https://i.ibb.co/MDVY07s/619964de31327dbf8491d14d2c25533f.jpg",
    singer: "Phong Max"
  },
  {
    name: "Anh Đã Quen Với Cô Đơn",
    path: "https://files.catbox.moe/dvjckq.mp3",
    img: "https://i.ibb.co/VpFyXhS/ab44498b5b432879428719390baf1180-1490064587.jpg",
    singer: "Soobin Hoàng Sơn"
  },
  {
    name: "Chúng Ta Của Tương Lai",
    path: "https://files.catbox.moe/hkqk6x.mp3",
    img: "https://i.imgur.com/GEOKT8b.png",
    singer: "Sơn Tùng M-TP"
  },
  {
    name: "Thuỷ Triều",
    path: "https://files.catbox.moe/yrpft2.mp3",
    img: "https://i.imgur.com/DAaTklq.png",
    singer: "Quang Hùng MasterD"
  },
  {
    path: "https://files.catbox.moe/s8opab.mp3",
    img: "https://i.ibb.co/6R8V7S7/ed0741228ad36870e13624120474e50a.jpg",
    name: "Sau Lời Từ Khước",
    singer: "Phan Mạnh Quỳnh"
  },
  {
    path: "https://files.catbox.moe/gvqgma.mp3",
    img: "https://i.ibb.co/gvXHBqv/ab67616d0000b273ae85dfd27beee97a3a009f68.jpg",
    name: "Em Đã Xa Anh Remix",
    singer: "Như Việt"
  }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music" crossorigin="anonymous"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/