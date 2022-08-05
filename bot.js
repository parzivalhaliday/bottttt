const tmi = require("tmi.js");

const opts = {
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN,
  },
  channels: [process.env.CHANNEL_NAME],
};

const client = new tmi.client(opts);

client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);

client.connect();

const delay = 10 * 100;

const messages = [
  "Kaanım bi ara gp oynar mısın?",
  "Kaanım dövmeleri nerde yaptırdın?",
  "Kaanım darius oynar mısın?",
  "Kaanım stans nerde",
  "Kaanım spora gittin mi",
  "Kaanım 3lü çok mu gÜÇLÜ?",
  "Kaanım akşam ne yiyeceksin?",
  "oyyyyyyyyyyyyyyy elwindOy elwindOy elwindOy ",
  "oyyyyyyyyyy elwindOy elwindOy elwindOy ",
  "F",
  "ÇAR OP ",
  "elwindF  elwindF  flash ????",
  "Kaanım bu ay çekiliş var mı ?",
  "diğer el garen olur mu?",
  "First Pick Gnar güçlü mü?",
  "elwindKalp elwindKalp",
  "kaanım nasılsın? elwindKalp ",
  "parzivalhaliday NABER",
  "boş",
  "boş yapma abi ",
  "sıktı lol geç.",
  "Kaanım nasılsın? ",
  "Kaanım sana zargana diyolar mı?",
  "sa",
  "as",
  "settttt",
  "!rank",
  "!boy",
  "!yaş",
  "kaanım bi ara mid oynar mısın? ",
  "kaanım bi ara adc oynar mısın?",
  "kaanım keyifler nasıl?",
  "kaanım espor sahnesi geri açılır mı ",
  "kaanım abone vssi ne zaman olur?",
  "saç  bak",
  "irelia yenilmez daha op bence",
  "!yenge",
  "!bahane",
  "fffff",
  "evet",
  "hayır",
  "haklısın abi",
  "yine boş yapmaya başladın abi",
  "ben bot değilim bu arada",
  "@shzaki naber ? elwindS",
  "Trix abi nasılsın ? ZORT ",
  "Kaanım neden bu kadar kaslısın?",
  "!şeref",
  "!şampiyonpool",
  "!çekicilik",
  "!yenge	",
  "!reddit",
  "!promil	",
  "",
  "!saçmodeli	",
  "!saç",
  "!playlist	",
  "!nt	",
  "!nick	",
  "!leo",
  "!kilo	",
  "!kaccm	",
  "!hastalık	",
  "!gerçekyaş	",
  "!gerçekboy	",
  "!engerçekyaş	",
  "!döngü	",
  "!cannon	",
  "!ayyaş	",
  "süüü",
  "alo sarki adi ??",
  "Kaanım  bayrak duruşu yapabilion mu? @elwind ",
  "chat şarkı ne",
  "   <3   <3   <3   <3   <3   <3   <3   <3   <3   <3   <3   <3   <3   <3  ",
  "elwindU elwindU  ",
  "sea ",
  "ase ",
  "@stansfield  naber la fare XD  ",
  "banla ",
  "özlü sözler gecesi mi bu ",
  "oha ",
  "  ResidentSleeper ",
  "jfklasjkfşlsjaşkjlfdasd ",
  " felsefe yayını",
  "kaanım bu oynayışla t1 e gitsen sırıtmazsın ",
  "elwind op ",
  "kaanım sen iyi tp atmaya başladın",
  "kaanım irl yayınlar yapsana bi ara",
  "doru ",
  "yap",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "bu boş değil aq bomboş",
  "bizeneeeee",
  "blobDance   ",
  "PepoDance   ",
  "KEKWlaugh   ",
  "pressF  ",
  "Maklube aşkım burdaysan 1 yaz",
  "Yağmur aşkım burdaysan 5 yaz",
  "Büşra aşkım burdaysan 145 yaz",
  " elwindSut ",
  " elwindRat  elwindRat  elwindRat  elwindRat  elwindRat Lan bu revanç mı?",
  "  elwindFFF   elwindFFF   elwindFFF   elwindFFF   elwindFFF ",
  "  elwindY ",
  " elwindDbos ",
  " elwindMbos ",
  "  elwindDongu    ",
  "elwindFare bu stansdan daha çok revança benziyo",
  "cok ii",
  "BITMİSSSSS",
  "BITMİS",
  "bıtmis",
  "kaanım BAN itirazları yayınımız yok mu ?????",
  "beyler şarkı adı ne acil",
  "şarkı ismi nedir acaba?",
  "@cyaxota Hoşgeldin kardeş",
  "Donateleri okudu mu beyler",
  "Öngörü aç laaa",
  "Beyler bu öngörü şeyine nasıl puan basıyoz",
  "Kaanım sevgili yap acil",
  "Kaanım spor sağlığa zararlı diyolar",
  "Kaanım 3 çocuk yapacak mısın? @elwind",
  "Kaanım sıkboğaz etmiyorum demi?",
  "kaanım 31 demek ban sebebi mi",
  "widepeepoBlanket",
  "ne güzel bi şarkı bu ya her seferinde",
  "@MonkeyDTufan",
  "@f0cid nickin anlamı ne knk",
  "kaanım 1 gün yayın 5 gün tatil nasıl olacak bu iş?",
  "hasan hüseyin chatte isen 123 yaz aşkım",
  "kaanım seninle teke tek çıksak kim alır",
  "bu kas işleri falan boş tek yumruğuma bakarsın ",
  "1v1 kafes de kapışak kaybeden kafasına sıksın yer mi @elwind",
  "f0cid den zekiyim şakasız",
  "banane banane şimdi durcam",
  "Revanch sussana sen az",
  "saçlar bok gibi",
  "Kaanım araba markası neysi senin",
  " Hakan boş yaptı rogo pırt yaptı",
  "yaşasın gayler",
  "cyaxota senin ta amk",
  "Kaanımneden hep aynı çarları alıyorsun ama ya :( ",
  "şarkı helal olsun duman",
  "Kaanım <3",
  "lost ark oynamadığın için sağol kaan",
  "amk yayın bildirimi niye gelmiyo",
  " elwindYak elwindYak elwindYak",
  "ya yıl olmuş 2022 metin2 mi oynuyonuz ",
  " Lan hakana neden karşısınız",
  "intin güzelliğine bak adamın intleyişi bile şekil bide rogonun intlere bak düz nexusa tıklıyor amk ",
  " kesin evinde tavşan gibi zıplıyordur",
  "elwind beni mod yap chatte en çok mesaj atan benim",
  "velede benziyor saçların , götume benziyor oynayışların , elwin artık şu oyunu bırak , çocuk sahibi oluyor yaşıtların @elwind",
  "stans senin koyun gütmüşlüğün kadar benim çoban sikmişliğim vardır dediklerine dikkat etttt!!!!i",
  "Kaanım başına gelen ve kötü olduğunu düşündüğün bir olayın olumlu sonuçlandığı oldu mu?",
  "Kaanım şimdiye kadar en çok eğlendiğin parti hangisiydi?",
  "Kaanım ağlamana neden olan son film, kitap ya da şarkı ney?",
  "Kaanım başardığın en zor şey neydi?",
  "Kaanım seni daha güçlü bir insan yapan son deneyimin neydi?",
  "Kaanım büyürken, başını belaya sokan şey neydi?",
  "Kaanım en son ne zaman harika bir yemek yedin?",
  "Kaanım şimdiye kadar aldığın/verdiğin, en iyi/en kötü hediyeler nelerdi?",
  "Kaanım çocukluğun ile ilgili en çok özlediğin şey ne?",
  "Kaanım seni heyecanlandıran, hatırladığın en eski anın ne?",
  "Kaanım kendi paranla aldığın ilk şey neydi?",
  "Kaanım en son ne zaman, ne için gerildin?",
  "Kaanım geçen hafta öğrendiğin herhangi bir şey var mı?",
  "Kaanım ailenin sana sürekli anlattığı anı/hikaye var mıydı?",
  "Kaanım yetişkinliğe hangi yaşta adım attığını düşünüyorsun?",
];

function sendRandomMessage(client, channel) {
  const message = messages[Math.floor(Math.random() * messages.length)];
  client.say(channel, message);
}

let loop = false;

function onMessageHandler(channel, context, msg, self) {
  if (self) {
    return;
  }

  const commandName = msg.trim();

  if (commandName === "sa") {
    if (loop) return;

    sendRandomMessage(client, channel);
    setInterval(sendRandomMessage, delay, client, channel);
    loop = true;
  } else {
    console.log(`* Unknown command ${commandName}`);
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("message", (channel, tags, message, self) => {
  if (self) return;

  if (message.toLowerCase() === "selam") {
    client.say(channel, `@${tags.username}, as kankam`);
  }
});


client.on("message", (channel, tags, message, self) => {
  if (self) return;

  if (message.toLowerCase() === "sa") {
    client.say(channel, `@${tags.username}, as kankam`);
  }
});

client.on("message", (channel, tags, message, self) => {
  if (self) return;

  if (message.toLowerCase() === "enes sus") {
    client.say(channel, `enes TwitchUnity`);
  }
});

// kızlar 1 yazsın tarzı şeylerin cevabı
client.on("message", (channel, tags, message, self) => {
  if (self) return;
  let re = /^(\d+) yaz$/gi.exec(message);
  if (re) {
    client.say(channel, re[1]);
  }
});

client.on("message", (channel, tags, message, self) => {
  if (self) return;

  let re = /^(\d+) yaz$/gi.exec(message);
  if (re) {
    client.say(channel, re[1]);
  }
});

// içinde oyy geçenlere oy yazıyo y sayısı fark etmeden

client.on("message", (channel, tags, message, self) => {
  if (self) return;

  if (message.includes("oyy")) {
    client.say(channel, `oyyyyyyyyy`);
  }
});

//shz

client.on("message", (channel, tags, message, self) => {
  if (self) return;

  if (message.includes("@belkibotumdur MrDestructoid")) {
    client.say(channel, `@${tags.username} ya ben bot değilim tagleme artık`);
  }
});

//bok  tp atarsa

client.on("message", (channel, tags, message, self) => {
  if (self) return;

  if (message.includes("elwindTP ")) {
    client.say(channel, `tp atma sen`);
  }
});

// şarkı soranlara cevap

client.on("message", (channel, tags, message, self) => {
  if (self) return;

  if (message.includes("şarkı adı?")) {
    client.say(channel, `@${tags.username} shazam kullansana enayi misin?`);
  }
});

client.on("message", (channel, tags, message, self) => {
  if (self) return;

  if (message.includes("droppp")) {
    client.say(channel, `çok fena drop varrr`);
  }
});

client.on("message", (channel, tags, message, self) => {
  if (self) return;

  if (message.includes("675578457655467")) {
    client.say(channel, `çok fena drop varrr`);
  }
});

client.on("message", (channel, tags, message, self) => {
  if (self) return;

  if (message.includes("belkibotumdur MrDestructoid")) {
    client.say(channel, `ben bot değilim`);
  }
});

client.on("message", (channel, tags, message, self) => {
  if (self) return;

  if (message.includes("bugece")) {
    client.say(
      channel,
      `bu gece elwind i düşünerek 31 çekecek olanlar 123 yazabilir mi lütfen`
    );
  }
});

client.on("message", (channel, tags, message, self) => {
  if (self) return;

  if (message.includes("cannon")) {
    client.say(channel, `ya şu cannonları kaçırmasan faker olursun`);
  }
});

client.on("message", (channel, tags, message, self) => {
  if (self) return;

  if (message.includes("@belkibotumdur down")) {
    client.say(channel, `bu gnülük mesai bitti ben kaçar`);
  }
});

client.on("message", (channel, tags, message, self) => {
  if (self) return;

  if (message.includes("hakan sus")) {
    client.say(channel, `hakanın sus lan sus sus sus`);
  }
});

function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
