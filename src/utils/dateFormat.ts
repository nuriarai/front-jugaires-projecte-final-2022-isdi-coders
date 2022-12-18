const dateFormat = (dateTime: string) => {
  const newDate = new Date(dateTime);
  const date = newDate.toLocaleDateString("ca-CA");
  const time = newDate.toLocaleTimeString("ca-CA", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return `${date} - ${time}`;
};

export default dateFormat;
