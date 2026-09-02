type DateFormat = "YMD" | "MD" | "M" | "Y";

const dateFormatters: Record<DateFormat, Intl.DateTimeFormat> = {
  YMD: new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }),
  MD: new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
  }),
  M: new Intl.DateTimeFormat("en", {
    month: "short",
  }),
  Y: new Intl.DateTimeFormat("en", {
    year: "numeric",
  }),
};

const numberFormatter = new Intl.NumberFormat("en", {
  style: "decimal",
});

const relativeTimeFormatter = new Intl.RelativeTimeFormat("en", {
  numeric: "auto",
});

const date = (input: Date, format: DateFormat = "YMD"): string => {
  return dateFormatters[format].format(input);
};

const number = (input: number): string => {
  return numberFormatter.format(input);
};

const time = (value: number, unit: Intl.RelativeTimeFormatUnit): string => {
  return relativeTimeFormatter.format(value, unit);
};

export const formatter = {
  date,
  number,
  time,
};
