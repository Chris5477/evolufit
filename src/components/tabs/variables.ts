import profil from "../../assets/icons/profil.svg";
import cardio from "../../assets/icons/cardio.svg";
import muscu from "../../assets/icons/muscu.svg";
import planning from "../../assets/icons/planning.svg";

interface TabsLinkType {
  id: number;
  txtAlt: string;
  url: string;
  picture: string;
}

export const tabsLink = (): TabsLinkType[] => [
  {
    id: 0,
    txtAlt: "profil",
    url: "/evolufit/profil",
    picture: profil,
  },
  {
    id: 1,
    txtAlt: "cardio",
    url: "/evolufit/cardio",
    picture: cardio,
  },
  {
    id: 2,
    txtAlt: "training",
    url: "/evolufit/training",
    picture: muscu,
  },
  {
    id: 3,
    txtAlt: "planning",
    url: "/evolufit/planning",
    picture: planning,
  },
];
