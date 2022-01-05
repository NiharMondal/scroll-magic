import {secondScreen} from '../../assets/secondScreenImg'
import { useImage } from "../../hooks";

const SecondScreenArray = () => {
  const [SC0, SC0S] = useImage(secondScreen[0]);
  const [SC1, SC1S] = useImage(secondScreen[1]);
  const [SC2, SC2S] = useImage(secondScreen[2]);
  const [SC3, SC3S] = useImage(secondScreen[3]);
  const [SC4, SC4S] = useImage(secondScreen[4]);
  const [SC5, SC5S] = useImage(secondScreen[5]);
  const [SC6, SC6S] = useImage(secondScreen[6]);
  const [SC7, SC7S] = useImage(secondScreen[7]);
  const [SC8, SC8S] = useImage(secondScreen[8]);
  const [SC9, SC9S] = useImage(secondScreen[9]);

  const [SC10, SC10S] = useImage(secondScreen[10]);
  const [SC11, SC11S] = useImage(secondScreen[11]);
  const [SC12, SC12S] = useImage(secondScreen[12]);
  const [SC13, SC13S] = useImage(secondScreen[13]);
  const [SC14, SC14S] = useImage(secondScreen[14]);
  const [SC15, SC15S] = useImage(secondScreen[15]);
  const [SC16, SC16S] = useImage(secondScreen[16]);
  const [SC17, SC17S] = useImage(secondScreen[17]);
  const [SC18, SC18S] = useImage(secondScreen[18]);
  const [SC19, SC19S] = useImage(secondScreen[19]);

  const [SC20, SC20S] = useImage(secondScreen[20]);
  const [SC21, SC21S] = useImage(secondScreen[21]);

  const secondImages = Array.of(
    [SC0, SC0S],
    [SC1, SC1S],
    [SC2, SC2S],
    [SC3, SC3S],
    [SC4, SC4S],
    [SC5, SC5S],
    [SC6, SC6S],
    [SC7, SC7S],
    [SC8, SC8S],
    [SC9, SC9S],
    [SC10, SC10S],
    [SC11, SC11S],
    [SC12, SC12S],
    [SC13, SC13S],
    [SC14, SC14S],
    [SC15, SC15S],
    [SC16, SC16S],
    [SC17, SC17S],
    [SC18, SC18S],
    [SC19, SC19S],
    [SC20, SC20S],
    [SC21, SC21S]
  );
  return secondImages;
};
export default SecondScreenArray;
