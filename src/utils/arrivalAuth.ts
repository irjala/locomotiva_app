export function setArrivalAuthForToday() {
  const now = new Date();
  const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
  localStorage.setItem(
    "arrivalAuth",
    JSON.stringify({ expires: endOfDay.getTime() })
  );
}

export function hasValidArrivalAuth() {
  const item = localStorage.getItem("arrivalAuth");
  if (!item) return false;
  try {
    const { expires } = JSON.parse(item);
    return Date.now() < expires;
  } catch {
    return false;
  }
}