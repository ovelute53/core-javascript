import { isString } from "./typeOf.js";

const {
  localStorage: storage,
  JSON: { stringify: serialize, parse: deserialize },
} = globalThis;

const albums = [
  {
    id: "album_0zie",
    title: "Nightmare",
    artist: "오월오일 ( 五月五日 )",
    "release-date": "2022.10.08",
    like: 147,
    "song-count": 5,
    cover: {
      size: 640,
      quality: 100,
      src: "https://cdnimg.melon.co.kr/cm2/album/images/110/73/494/11073494_20221007160706_500.jpg/melon/resize/640/quality/100/optimize",
    },
  },
  {
    id: "album_9ipw",
    title: "흔들리지 않아 (Feat. 폴킴)",
    artist: "TRADE L",
    "release-date": "2022.10.07",
    like: 306,
    "song-count": 1,
    cover: {
      size: 640,
      quality: 100,
      src: "https://cdnimg.melon.co.kr/cm2/album/images/110/72/305/11072305_20221006135934_500.jpg/melon/resize/640/quality/100/optimize",
    },
  },
];

export function saveStorage(key, value) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      storage.setItem(key, serialize(value));
      resolve();
    } else {
      reject({ mesage: "key 값은 문자 타입이어야 합니다." });
    }
  });
}

saveStorage("name", albums).then(() => {});

export function loadStorage(key) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      resolve(deserialize(storage.getItem(key)));
    } else {
      reject({ mesage: "key 값은 문자 타입이어야 합니다." });
    }
  });
}
export function deleteStorage(key) {
  return new Promise((resolve, reject) => {
    !key ? storage.clear() : storage.removeItem(key);
    resolve();
  });
}

// loadStorage("name").then((res) => {
//   console.log(deserialize(res));
// });

// deleteStorage();
// storage.setItem("name", "saehan");
// console.log(storage.getItem("name"));
// storage.removeItem("name");
