import { load } from "./api.js";
import { renderSongs } from "./render.js";

const search = document.getElementById("search");
const status = document.getElementById("status");
const list = document.getElementById("song-list");
let songs = [];

function update() {
    const q = search.value.trim().toLowerCase();
    const filtered = 
        songs.filter(song => {
      const text = [
        song.이름,
        song.작곡,
        song.장르,
        song.사유,
        song.비고
      ]
        .join(" ")
        .toLowerCase();

      const ok =
        status.value === "all" ||
        (
          status.value ===
          "allowed" &&
          song["불허/허용"]
        ) ||
        (
          status.value ===
          "disallowed" &&
          !song["불허/허용"]
        );

      return (
        text.includes(q) &&
        ok
      );
    });

    renderSongs(list, filtered);
}

async function init() {
    songs = await load();
    update();
}

search.addEventListener("input", update);
status.addEventListener("change", update);
init();