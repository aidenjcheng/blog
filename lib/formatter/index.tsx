type DateFormat = "YMD" | "MD" | "M" | "Y";

const date = (input: Date, format: DateFormat = "YMD"): string => {
  switch (format) {
    case "YMD":
      return new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(input);
    case "MD":
      return new Intl.DateTimeFormat("en", {
        month: "short",
        day: "numeric",
      }).format(input);
    case "M":
      return new Intl.DateTimeFormat("en", {
        month: "short",
      }).format(input);
    case "Y":
      return new Intl.DateTimeFormat("en", {
        year: "numeric",
      }).format(input);
    default:
      return new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(input);
  }
};

const number = (input: number): string => {
  return new Intl.NumberFormat("en", {
    style: "decimal",
  }).format(input);
};

const time = (value: number, unit: Intl.RelativeTimeFormatUnit): string => {
  return new Intl.RelativeTimeFormat("en", {
    numeric: "auto",
  }).format(value, unit);
};

export const formatter = {
  date,
  number,
  time,
};
