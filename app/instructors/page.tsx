import { ProductFrame } from "../../src/components/ProductFrame/ProductFrame";
import { InstructorsPage } from "../../src/instructors/InstructorsPage/InstructorsPage";

export default function InstructorsRoute() {
  return (
    <ProductFrame>
      <InstructorsPage />
    </ProductFrame>
  );
}