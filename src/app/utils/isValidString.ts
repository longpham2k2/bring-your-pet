export default function isValidString(stringToCheck?: string) {
  return (
    !!stringToCheck &&
    typeof stringToCheck == "string" &&
    stringToCheck.length > 0
  );
}
