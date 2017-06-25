export function removeTags(s, opening, closing) {
  return s.replace(opening, '').replace(closing, '')
}
