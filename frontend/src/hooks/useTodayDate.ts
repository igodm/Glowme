import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

export function useTodayDate(locale: string = "en") {
  const [date, setDate] = useState("");

  useEffect(() => {
    dayjs.locale(locale === "zh" ? "zh-cn" : "en");
    const formatted =
      locale === "zh"
        ? dayjs().format("YYYY年M月D日 dddd")
        : dayjs().format("dddd, MMMM D");

    setDate(formatted);
  }, [locale]);

  return date;
}
