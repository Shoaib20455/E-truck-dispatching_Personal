import CareerApplicationForm from "../Components/CareerApplicationForm";

const departments = [
  { label: "Sales", value: "sales" },
  { label: "Marketing", value: "marketing" },
  { label: "Admin", value: "admin" },
  { label: "IT", value: "it" },
  { label: "Business Development", value: "business-development" },
  { label: "HR", value: "hr" },
  { label: "Medical Billing", value: "medical-billing" },
  { label: "Medical Coding", value: "medical-coding" },
  { label: "Credentialing", value: "credentialing" },
  { label: "A/R Specialist", value: "ar-specialist" },
  { label: "Team Lead", value: "team-lead" },
  { label: "Management", value: "management" },
  { label: "Others", value: "others" },
];

const countries = [
  { label: "United States", value: "united-states" },
  { label: "Canada", value: "canada" },
  { label: "United Kingdom", value: "united-kingdom" },
  { label: "Pakistan", value: "pakistan" },
];

export default function CarrierPage() {
  return (
    <main>
      <CareerApplicationForm
        copy={{
          nameLabel: "Name *",
          firstNameHelper: "First",
          lastNameHelper: "Last",
          emailLabel: "Email *",
          addressLabel: "Address",
          addressLine1Helper: "Address Line 1",
          addressLine2Helper: "Address Line 2",
          cityHelper: "City",
          stateHelper: "State / Province / Region",
          postalCodeHelper: "Postal Code",
          countryHelper: "Country",
          countryPlaceholder: "----Select Country----",
          phoneLabel: "Phone *",
          phonePlaceholder: "+92   310-6286275",
          departmentsHeading: "Departments of Interest *",
          uploadHeading: "Upload Resume *",
          uploadHint: "Drag & Drop Files Choose Files to Upload",
          submitLabel: "Submit",
        }}
        departments={departments}
        countries={countries}
      />
    </main>
  );
}
