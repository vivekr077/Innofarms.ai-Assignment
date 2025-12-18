import OurProduceBanner from "./_components/OurProduceBanner";
import LeafyGreens from "./_components/LeafyGreens";
import BabyGreens from "./_components/BabyGreens";
import MicroGreens from "./_components/MicroGreens";
import SpecialtyHerbs from "./_components/SpecialtyHerbs";
import EdibleFlowers from "./_components/EdibleFlowers";
import Customized from "./_components/Customized";
import GetInTouch from "@/components/GetInTouch";

export default function OurProducePage() {
  return (
    <main>
      <OurProduceBanner />
      <LeafyGreens />
      <BabyGreens />
      <MicroGreens />
      <Customized />
      <SpecialtyHerbs />
      <EdibleFlowers />
      <GetInTouch />
    </main>
  );
}
