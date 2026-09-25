export default function PrivacyBreachNotificationSection() {
  return (
    <div>
      <h2 className="font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">
        Breach Notification Protocol
      </h2>

      <div className="mt-5 font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
        <p>Despite our best efforts, if a data breach affecting your PHI occurs, we will:</p>
        <p>Notify you in writing within 60 days of discovery</p>
        <p>Provide details about the nature of the breach, what information was involved, and the steps taken</p>
        <p>Report the breach to the HHS Office for Civil Rights, as required under the HIPAA Breach Notification Rule.</p>
        <p>We may also inform state or local authorities, depending on jurisdictional laws.</p>
      </div>
    </div>
  );
}
