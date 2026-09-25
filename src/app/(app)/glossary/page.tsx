import GlossaryLayout from "../Components/GlossaryLayout";
import { glossarySections } from "./GlossaryData";

export default function GlossaryPage() {
  return (
    <main>
      <GlossaryLayout
        title="Glossary of Medical Coding, Billing & Insurance Terminologies"
        sections={glossarySections}
      />
    </main>
  );
}
