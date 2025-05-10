
import striptags from "striptags";
import he from "he";


export function cleanDescription(html: string) {
    return he.decode(striptags(html));
  }