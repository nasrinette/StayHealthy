import self from "../assets/self.svg";
import background from "../assets/service.svg";
import AppHeading from "../components/AppHeading";
import termo from "../assets/termo.svg";
import AppButton from "../components/AppButton";

export default function Checkup() {
  return (
    <div className="bg-gradient-to-r from-light to-white relative min-h-screen w-full">
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="absolute inset-0 bg-cover bg-center z-10"
      ></div>
      <div className="relative z-10 xl:px-20 px-10 p-3">
        <div className="pt-20 md:pt-26 flex flex-col items-center">
          <AppHeading className="text-mainBlue text-center">
            Self Checkup{" "}
          </AppHeading>

          <div className="flex flex-col items-center md:flex-row p-3 pt-6 rounded-xl shadow-lg bg-light">
            <img src={self} alt="img" />

            <p className="text-center md:text-left pl-6 font-body font-extralight  text-base p-3 text-gray">
              Self-health checkup is an essential practice that empowers
              individuals to take charge of their well-boing. By routinely
              evaluating various aspects of their physical and mental health,
              people can identify potential issues early on and make informed
              decisions about seeking professional medical advice. A
              comprehensive self-health checkup may involve monitoring vital
              signs like blood pressure, heart rate, and body temperature, as
              well as assessing factors such as weight. diet. exercise, and
              sloop patterns. Additionally, boing attuned to one's emotional
              state, stress levels, ond overoil mood con help detect signs of
              mental health concerns, Engaging in o regular self-health checkup
              not only promotes o proactive opprooch to personal healthcare but
              also fosters o greater understanding of one's body, loading to a
              more balanced ond healthier lifestyle.
            </p>
          </div>
          <div className="flex self-start mt-8 md:w-1/2 rounded-xl p-3 shadow-lg bg-gradient-to-r from-mainBlue to-lightBlue">
            <div className="p-3 ">
              <h3 className="text-white text-2xl pb-2">
                Check Your Temperature
              </h3>

              <p className="font-body font-extralight text-base pt-1 pb-3 text-light">
                Checking your temperature can help you monitor your health and
                detect fever or other potential illnesses. It's essential to use
                an accurate thermometer and follow the proper procedure for
                measuring body temperature...
              </p>
              <AppButton className="px-7 py-1.5" white>
                Read more
              </AppButton>
            </div>

            <img src={termo} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}
