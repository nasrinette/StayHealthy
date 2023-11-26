interface GuideProps {
  title: string;
  descr: string;
  icon: string;
}
export default function GuideCard({ title, descr, icon }: GuideProps) {
  return (
    <div className="bg-light my-2 rounded-md flex shadow-lg p-6">
      <img src={icon} className="pr-6" alt="hydra" />
      <div>
        <h3 className="text-dark text-2xl">{title}</h3>
        <p className="text-gray font-body font-light">{descr}</p>
      </div>
    </div>
  );
}
