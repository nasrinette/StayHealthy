import background from "../assets/service.svg";
import AppHeading from "../components/AppHeading";
import GuideCard from "../components/GuideCard";
import water from "../assets/water.svg";
import food from "../assets/food.svg";
import sleep from "../assets/sleep.svg";
import exercise from "../assets/exercise.svg";

export default function Guide() {
  const tips = [
    {
      title: "Stay Hydrated",
      icon: water,
      des: "Drink plenty of water throughout tho day to keep your body hydrated ond maintain optimal body functions. wotet helps with digestion   circulation. temperature regukytion ark",
    },
    {
      title: "Eat a Balanced Diet",
      icon: food,
      des: "Drink plenty of water throughout tho day to keep your body hydrated ond maintain optimal body functions. wotet helps with digestion circulation. temperature regukytion ark' more.",
    },
    {
      title: "Exercise Regularly",
      icon: sleep,
      des: "Drink plenty of water throughout tho day to keep your body hydrated ond maintain optimal body functions. wotet helps with digestion circulation. temperature regukytion ark' more.",
    },
    {
      title: "Get Adequate Sleep",
      icon: exercise,
      des: "Drink plenty of water throughout tho day to keep your body hydrated ond maintain optimal body functions. wotet helps with digestion circulation. temperature regukytion ark' more.",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-light to-white relative min-h-screen w-full">
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="absolute inset-0 bg-cover bg-center z-10"
      ></div>
      <div className="relative z-10 xl:px-20 px-10 p-3">
        <div className="pt-16 flex flex-col items-center">
          <AppHeading className="text-mainBlue text-center">
            Find a doctor and Consult instantly{" "}
          </AppHeading>
          {tips.map((tip) => (
            <GuideCard title={tip.title} descr={tip.des} icon={tip.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
