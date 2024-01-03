export const removeWhitespaces = (string) => {
  // remove the next escapes too
  const removeEscChars = ['\n', '\t'];
  let sanitizedString = string.replaceAll(' ', '');
  removeEscChars.forEach((escChar) => {
    sanitizedString = sanitizedString.replaceAll(escChar, '');
  });
  return sanitizedString;
};
