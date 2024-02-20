import { parseISO, format } from "date-fns";
import ja from "date-fns/locale/ja";

export default function ConvertDate({ dateIOS }) {
  // if (!dateIOS) {
  //   return null; //  または、適切なデフォルト値を返す
  // }

  return (
    <time dateTime={dateIOS}>
      {format(parseISO(dateIOS), "yyyy年MM月dd日", {
        locale: ja,
      })}
    </time>
  );
}
