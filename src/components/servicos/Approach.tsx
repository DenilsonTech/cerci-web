import { approach } from "../../data/services";
import FeatureGrid from "../ui/FeatureGrid";
import SectionHeader from "../ui/SectionHeader";
import { section, wrap } from "../ui/styles";

export default function Approach() {
  return (
    <section className={`${section} section-tint`}>
      <div className={wrap}>
        <SectionHeader title={approach.title} lede={approach.lede} />
        <FeatureGrid items={approach.items} />
      </div>
    </section>
  );
}
