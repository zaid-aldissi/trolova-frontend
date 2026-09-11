import { ProductFrame } from "../../src/components/ProductFrame/ProductFrame";
import { StudentRepositoryProvider } from "../../src/students/student-repository-provider";
import { StudentsList } from "../../src/students/StudentsList/StudentsList";

export default function StudentsPage() {
  return (
    <ProductFrame>
      <StudentRepositoryProvider>
        <StudentsList />
      </StudentRepositoryProvider>
    </ProductFrame>
  );
}