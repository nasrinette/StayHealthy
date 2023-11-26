import { useNavigate } from "react-router-dom";
import background from "../assets/BACKGROUND.svg";
import image from "../assets/OBJECTS.svg";
import AppButton from "../components/AppButton";
import AppHeading from "../components/AppHeading";
export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 xl:px-20 px-10 p-3 w-full h-full md:h-screen bg-gradient-to-r from-mainBlue to-lightBlue">
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="fixed inset-0 bg-cover bg-center"
      ></div>

      <div className="flex mt-20  md:mt-32 flex-wrap justify-center xl:justify-between items-center">
        <div className="bg-white p-10 py-20 bg-opacity-20 z-10 w-[50rem] ">
          {/* <div className="absolute w-[40rem] top-28 mx-20 my-10 inset-6 bg-white opacity-20"></div> */}
          <AppHeading className="text-white">
            Your Health Our Responsibility
          </AppHeading>
          <p className="font-body md:text-lg font-light text-light mb-10">
            "Embrace the art of self-care, for a healthy mind and body forge the
            foundation of a vibrant life, Wellness is not just a destination;
            it's a journey of mindful choices and daily transformations. Nurture
            your health with love, and watch it bloom into a beacon of joy and
            vitality.”
          </p>
          <AppButton
            onClick={() => {
              navigate("/services");
            }}
            className="px-10 py-2"
            white
          >
            Get started
          </AppButton>
        </div>
        <div>
          <img className="z-20 w-[28rem]" src={image} alt=" " />
        </div>
      </div>
    </div>
  );
}
