import { escapehtml } from "./utils.js";

export function renderSongs(
  element,
  songs
) {
  element.innerHTML = songs
    .map(song => {
      const allowed =
        song["불허/허용"];

      return `
      <article class="card">
        <div class="card-top">
          <div>
            <div class="title">
              ${escapehtml(song.이름)}
            </div>

            <div class="composer">
              ${escapehtml(song.작곡)}
            </div>
          </div>

          <div class="
            badge
            ${
              allowed
                ? "allowed"
                : "disallowed"
            }
          ">
            ${
              allowed
                ? "허용"
                : "불허"
            }
          </div>
        </div>

        <div class="info">
          <div class="label">
            장르
          </div>
          <div class="value">
            ${escapehtml(
              song.장르 || "-"
            )}
          </div>

          <div class="label">
            사유
          </div>
          <div class="value">
            ${escapehtml(
              song.사유 || "-"
            )}
          </div>

          <div class="label">
            비고
          </div>
          <div class="value">
            ${escapehtml(
              song.비고 || "-"
            )}
          </div>
        </div>
      </article>
      `;
    })
    .join("");
}