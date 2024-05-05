export function formatDateToDayMonth(date: Date): string {
  const day: number = date.getDate();
  const month: number = date.getMonth() + 1; // Month is zero-based, so add 1
  const formattedDay: string = day < 10 ? `0${day}` : `${day}`; // Add leading zero if needed
  const formattedMonth: string = month < 10 ? `0${month}` : `${month}`; // Add leading zero if needed
  return `${formattedDay}/${formattedMonth}`;
}

export function formatDateToDayMonthYear(date: Date): string {
  const day: number = date.getDate();
  const month: number = date.getMonth() + 1; // Month is zero-based, so add 1
  const year: number = date.getFullYear();
  const formattedDay: string = day < 10 ? `0${day}` : `${day}`; // Add leading zero if needed
  const formattedMonth: string = month < 10 ? `0${month}` : `${month}`; // Add leading zero if needed
  const formattedYear: string = `${year}`; // Year as string
  return `${formattedDay}/${formattedMonth}/${formattedYear}`;
}