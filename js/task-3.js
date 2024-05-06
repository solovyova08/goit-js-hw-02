function checkForSpam(message) {
  const hasSpam = message.toLowerCase().includes("spam");
  const hasSale = message.toLowerCase().includes("sale");
  if (hasSpam || hasSale) {
    return true;
  } else {
    return false;
  }
}
