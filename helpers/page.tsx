import he from "he";
import striptags from "striptags";

export function cleanDescription(html: string) {
  return he.decode(striptags(html));
}