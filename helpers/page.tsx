
import he from "he";
import striptags from "striptags";

export function cleanDescription(html: string) {
  return he.decode(striptags(html));
}


import striptags from "striptags";
import he from "he";


export function cleanDescription(html: string) {
    return he.decode(striptags(html));
  }

