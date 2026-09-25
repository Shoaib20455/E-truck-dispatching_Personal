export type GlossaryTerm = {
  term: string;
  definition: string;
};

export type GlossarySection = {
  letter: string;
  terms: GlossaryTerm[];
};

export const glossarySections: GlossarySection[] = [
  {
    "letter": "A",
    "terms": [
      {
        "term": "Account",
        "definition": "The financial record for a patient encounter that tracks all charges, payments, adjustments, insurance activity, and the remaining balance for billing and collections. It is used to track insurance claims, reimbursements, and patient responsibility."
      },
      {
        "term": "Account Number",
        "definition": "A unique numeric or alphanumeric identifier assigned by a provider or facility to track a patient’s billing record and related financial transactions. This is the primary reference code used within the revenue cycle to associate all financial transactions with a specific patient account."
      },
      {
        "term": "Accounts Receivable (AR)",
        "definition": "The total outstanding revenue owed to a healthcare provider by insurance payers and patients for services already rendered and billed, which remains unpaid after the claim submission and is actively tracked for collection within the revenue cycle."
      },
      {
        "term": "Actual Charge",
        "definition": "The full amount billed by a healthcare provider for a medical service as listed on the claim, before any contractual adjustments, payer allowances, or negotiated discounts are applied."
      },
      {
        "term": "Adjustment",
        "definition": "A reduction applied to a billed charge under contractual agreements, payer policies, or non-covered amounts, which is not billable to the patient and does not represent expected reimbursement."
      },
      {
        "term": "Adjudication",
        "definition": "The systematic process by which a payer evaluates a healthcare claim against coverage policies, coding rules, and contractual terms to determine the allowable amount, payment responsibility, and any denials or adjustments."
      },
      {
        "term": "Admission Date (Admit Date)",
        "definition": "The calendar date on which a patient is formally registered as an inpatient or outpatient for the start of medical care, used for claim reporting, coverage validation, and billing timelines."
      },
      {
        "term": "Admission Hour",
        "definition": "The exact time a patient is admitted for inpatient or outpatient care is recorded for accurate claim reporting, length-of-stay calculation, and billing compliance."
      },
      {
        "term": "Admitting Diagnosis",
        "definition": "The initial clinical condition, sign, symptom, or any disease or injury documented by the provider at the time of patient admission is used to justify medical necessity and support claim submission and coding."
      },
      {
        "term": "Advance Beneficiary Notice (ABN)",
        "definition": "A written notice is provided to a Medicare beneficiary before services are rendered, informing them that Medicare may not cover the service based on medical necessity or coverage rules, outlining the estimated cost, and stating that they may be financially responsible if payment is denied."
      },
      {
        "term": "Advance Beneficiary Notice of Noncoverage (ABN)",
        "definition": "A required notice given to a Medicare beneficiary before a likely non-covered service, stating the reason, estimated cost, and the patient’s choice to accept financial responsibility or decline the service."
      },
      {
        "term": "Advance Directive (Healthcare)",
        "definition": "A legal document in which a patient records their preferences for medical treatment and decision-making in case they become unable to communicate, guiding providers and insurers on consent, authorization, and the scope of care to be delivered and billed."
      },
      {
        "term": "Aging",
        "definition": "The classification of outstanding accounts receivable by the number of days since the claim was billed is used to monitor delayed payments, prioritize follow-up, and manage collections within the revenue cycle."
      },
      {
        "term": "Aging Bucket / AR Aging",
        "definition": "The grouping of outstanding accounts receivable into time ranges (e.g., 0–30, 31–60, 61–90, 90+ days) to track payment delays, prioritize follow-up, and manage collections in the revenue cycle."
      },
      {
        "term": "All-Inclusive Rate",
        "definition": "A single predetermined payment that covers all services, supplies, and related costs provided during a patient encounter or defined period of care, instead of billing each service separately."
      },
      {
        "term": "Allowed Charge",
        "definition": "The maximum amount a payer approves for a covered service under the provider contract, used to calculate payment, adjustments, and patient responsibility."
      },
      {
        "term": "Allowable (Allowed Amount/Eligible Charges)",
        "definition": "The maximum reimbursable amount a payer recognizes for a covered service under the provider agreement, forming the basis for payment calculation, contractual adjustments, and patient cost-sharing."
      },
      {
        "term": "Ambulatory Care",
        "definition": "Medical services provided to patients on an outpatient basis without hospital admission, where treatment, billing, and discharge occur on the same day."
      },
      {
        "term": "Ambulatory Payment Classifications (APC)",
        "definition": "A Medicare hospital outpatient prospective payment system that groups related services into payment categories with fixed rates, where reimbursement for Hospital Outpatient Department (HOPD) claims is determined by the assigned APC code and its status indicator, not by individual service charges."
      },
      {
        "term": "Ambulatory Surgery",
        "definition": "A surgical procedure performed on an outpatient basis where the patient is admitted, treated, and discharged on the same day without an overnight hospital stay, billed under outpatient or ambulatory surgery payment rules."
      },
      {
        "term": "American Medical Association (AMA)",
        "definition": "The organization that develops and maintains the CPT® code set, which defines medical procedures and services used nationwide for standardized reporting, billing, and reimbursement."
      },
      {
        "term": "Amount Charged",
        "definition": "The total fee submitted by the provider for a medical service on a claim, before any payer-negotiated discounts, contractual adjustments, or coverage determinations are applied."
      },
      {
        "term": "Amount Not Covered",
        "definition": "The portion of a billed charge that a payer determines is not eligible for reimbursement under the patient’s plan, which may become the patient’s financial responsibility depending on coverage rules and notices such as an ABN."
      },
      {
        "term": "Amount Paid",
        "definition": "The portion of the allowed charge that the payer reimburses to the provider after applying contractual adjustments, deductibles, coinsurance, and coverage rules during claim adjudication."
      },
      {
        "term": "Amount Payable by Plan",
        "definition": "The portion of the allowed amount that the insurance payer is responsible to reimburse to the provider after applying contractual adjustments and the patient’s cost-sharing obligations (deductible, copay, and coinsurance) during adjudication."
      },
      {
        "term": "Ancillary Services",
        "definition": "Supplemental diagnostic, therapeutic, or support services provided in addition to primary medical care, billed separately when allowed, and used to support diagnosis, treatment, and medical necessity on a claim."
      },
      {
        "term": "Anesthesia",
        "definition": "The administration of agents to prevent pain during a procedure, billed using anesthesia CPT codes based on base units, time units, and modifiers, which determine reimbursement under payer anesthesia payment formulas."
      },
      {
        "term": "Appeal",
        "definition": "A formal request submitted by a provider or patient to a payer to review and reconsider a denied or underpaid claim based on corrected information, documentation, or coverage justification."
      },
      {
        "term": "Appeal Process",
        "definition": "The structured, time-bound procedure defined by a payer for reviewing and reconsidering a denied or underpaid claim through specific submission levels, required documentation, and formal determination steps."
      },
      {
        "term": "Applied to Deductible (ATD)",
        "definition": "The portion of the allowed amount that the payer assigns to the patient’s deductible during adjudication, indicating the patient must pay this amount before insurance payment applies."
      },
      {
        "term": "Application Service Provider (ASP)",
        "definition": "A third-party vendor that hosts and delivers medical billing or practice management software over a network, allowing providers to access billing, coding, and claims systems without maintaining on-site infrastructure."
      },
      {
        "term": "Approved Amount",
        "definition": "The amount a payer authorizes for reimbursement for a covered service after adjudication, based on the allowed amount, coverage rules, and contractual terms."
      },
      {
        "term": "Assignment",
        "definition": "An agreement by which a patient authorizes the insurance payer to send reimbursement directly to the provider for covered services, transferring payment rights from the patient to the provider."
      },
      {
        "term": "Assignment of Benefits (AOB)",
        "definition": "A signed authorization by the patient that permits the insurance payer to send payment directly to the healthcare provider for covered services, allowing the provider to bill, receive reimbursement, and pursue claims on the patient’s behalf."
      },
      {
        "term": "Attending Physician Name",
        "definition": "The name of the provider primarily responsible for the patient’s care during the encounter, reported on the claim to identify clinical responsibility and support billing, coding, and reimbursement."
      },
      {
        "term": "Authorization",
        "definition": "Approval obtained from a payer before specific services are rendered, confirming coverage eligibility and medical necessity to allow the claim to be reimbursed under plan rules."
      }
    ]
  },
  {
    "letter": "B",
    "terms": [
      {
        "term": "Balance",
        "definition": "The remaining amount on a patient’s account after payments and adjustments, representing the outstanding financial responsibility owed by the payer or the patient."
      },
      {
        "term": "Balance Bill",
        "definition": "The practice of billing a patient for the difference between the provider’s charge and the payer’s allowed amount when the provider is not contractually prohibited from doing so."
      },
      {
        "term": "Balance Billing",
        "definition": "Charging a patient for the difference between the provider’s billed amount and the payer’s allowed amount when permitted by contract and law, typically occurring with out-of-network services."
      },
      {
        "term": "Beneficiary (Insured’s Name/Beneficiary)",
        "definition": "The individual covered under a health insurance plan who is eligible to receive medical services and whose coverage, eligibility, and benefits determine how claims are processed and paid."
      },
      {
        "term": "Beneficiary Eligibility Verification",
        "definition": "The process of confirming a patient’s active insurance coverage, plan benefits, and cost-sharing details with the payer before services are rendered to ensure accurate billing and reimbursement."
      },
      {
        "term": "Beneficiary Liability",
        "definition": "The portion of the allowed charges that the insured patient is responsible to pay after the payer’s payment, including deductible, copay, coinsurance, and non-covered amounts."
      },
      {
        "term": "Benefits",
        "definition": "The covered healthcare services, payment rules, and cost-sharing terms are defined by an insurance plan. It determines how claims are reimbursed and what portion is the patient’s responsibility."
      },
      {
        "term": "Bill/Invoice/Statement",
        "definition": "A formal document issued by a healthcare provider that lists services rendered, charges, payments, adjustments, and the remaining balance owed by the payer or patient for billing and collection purposes."
      },
      {
        "term": "Billing Statement",
        "definition": "A summary document sent to a patient showing billed services, payments, adjustments, insurance activity, and the remaining balance due for collection."
      },
      {
        "term": "Birthday Rule",
        "definition": "A Coordination of Benefits (COB) standard used for dependents covered by two parents’ plans, where the plan of the parent whose birthday (month and day, not year) occurs earlier in the calendar year is designated as the primary payer; if both birthdays are the same, the plan that has been active longer becomes primary, and the rule does not apply in divorce/separation cases where court orders or custody rules determine payer order."
      }
    ]
  },
  {
    "letter": "C",
    "terms": [
      {
        "term": "Centers for Medicare & Medicaid Services (CMS)",
        "definition": "A U.S. federal agency that sets rules, coverage policies, and reimbursement standards for Medicare, Medicaid, and many private payer billing practices."
      },
      {
        "term": "Capitation",
        "definition": "A payment model in which a provider is paid a fixed amount per patient per month by a payer to cover defined services, regardless of the number of visits or procedures performed, shifting financial risk and care management responsibility to the provider."
      },
      {
        "term": "Cardiology Charges",
        "definition": "The billed amounts for cardiology diagnostic, interventional, and interpretive services, including procedures, tests, and professional components. It requires the correct use of professional and technical modifiers, proper global or split billing, and a strong cardiac diagnosis linkage to meet medical necessity and bundling rules for reimbursement."
      },
      {
        "term": "Case Management",
        "definition": "A coordinated process of assessing, planning, and monitoring a patient’s care to ensure medically necessary, cost-effective services, often required by payers to authorize treatment and support reimbursement."
      },
      {
        "term": "Cash Basis",
        "definition": "An accounting method in medical billing where revenue is recorded only when payment is received, not when services are billed or claims are submitted."
      },
      {
        "term": "Cash Price / PAY",
        "definition": "A provider-established, self-pay rate offered to patients who do not have an active insurance, collected at or before the time of service, and not governed by payer contracts, fee schedules, or claim submission."
      },
      {
        "term": "Certification",
        "definition": "A payer’s authorization confirming the medical necessity and covered status of an admission or ongoing level of care for a defined period, required to support reimbursement for facility-based services."
      },
      {
        "term": "Charge Entry",
        "definition": "The process of recording billable services, procedures, and supplies into the billing system using appropriate CPT/HCPCS codes, units, and modifiers based on clinical documentation to initiate claim generation."
      },
      {
        "term": "Charity Care",
        "definition": "Healthcare services provided without charge or at a reduced cost to patients who meet financial hardship criteria, recorded as a non-collectible adjustment and excluded from patient billing and insurance claims."
      },
      {
        "term": "Civilian Health and Medical Program of the Uniformed Services (CHAMPUS)",
        "definition": "It is the former U.S. Department of Defense healthcare program for military families, now replaced by TRICARE, referenced in billing as a legacy term related to military-sponsored health coverage and claim processing rules."
      },
      {
        "term": "Claim",
        "definition": "A standardized electronic or paper submission sent by a healthcare provider to a payer that details patient information, diagnoses, procedures, charges, and supporting data for the purpose of obtaining reimbursement for services rendered to their beneficiary."
      },
      {
        "term": "Claim Adjustment Reason Codes (CARCs)",
        "definition": "Standardized codes used on remittance advice to explain why a payer reduced, denied, or adjusted a claim line or payment amount during adjudication, guiding providers on financial responsibility and next actions."
      },
      {
        "term": "Claim Number",
        "definition": "A unique identifier assigned to a submitted claim by the payer or clearinghouse, used to track the claim’s status, processing history, and payment outcome within the revenue cycle."
      },
      {
        "term": "Claim Scrubbing",
        "definition": "The automated pre-submission review of a claim by billing software or a clearinghouse to detect coding errors, missing data, and rule violations, improving clean claim rates before the claim reaches the payer."
      },
      {
        "term": "Claims Review",
        "definition": "The payer’s evaluation of a submitted claim to verify accuracy, coverage, coding compliance, and medical necessity before determining payment, denial, or adjustment."
      },
      {
        "term": "Clean Claim",
        "definition": "A claim submitted with complete, accurate, and compliant information that meets payer requirements and can be processed for payment without rejection, delay, or manual intervention."
      },
      {
        "term": "Clinic",
        "definition": "A healthcare facility where outpatient medical services are provided and billed under physician or facility outpatient rules, without inpatient admission."
      },
      {
        "term": "Clearinghouse",
        "definition": "An intermediary entity that receives healthcare claims from providers, performs format and data validation, applies edits, and electronically forwards compliant claims to the appropriate payer while returning acknowledgments and rejections."
      },
      {
        "term": "CMS 1500",
        "definition": "The standardized paper (and electronic equivalent) claim form used by physicians and other professional providers to submit outpatient and professional services to payers, reporting patient data, diagnoses, procedures, charges, and provider information for reimbursement."
      },
      {
        "term": "CMS-1500 02/12 Form",
        "definition": "The standardized professional claim form used by physicians and outpatient providers to submit services to payers, designed for ICD-10-CM, aligned with the HIPAA 837P electronic claim, and containing critical billing fields such as POS, NPI, diagnosis pointers, modifiers, units, and charges that determine reimbursement; not used for hospital facility billing (UB-04)."
      },
      {
        "term": "Coding",
        "definition": "The process of translating clinical documentation into standardized diagnosis and procedure code sets (ICD-10-CM, CPT, HCPCS) used for claim submission, reimbursement, reporting, and compliance."
      },
      {
        "term": "Coding of Claims",
        "definition": "The application of accurate ICD-10-CM, CPT, and HCPCS codes to a patient encounter on a claim based on clinical documentation to support medical necessity, payer rules, and proper reimbursement."
      },
      {
        "term": "Co-insurance",
        "definition": "The percentage of the allowed amount that the patient is responsible to pay after the deductible is met, with the remaining portion paid by the insurer during claim adjudication."
      },
      {
        "term": "COBRA Insurance",
        "definition": "Consolidated Omnibus Budget Reconciliation Act (COBRA) Insurance, A federal provision that allows individuals to temporarily continue their employer-sponsored health insurance coverage after a qualifying event (e.g., job loss), with the individual responsible for paying the full premium, and claims processed under the same plan benefits and billing rules as active coverage."
      },
      {
        "term": "Coinsurance Days (Medicare)",
        "definition": "The specific inpatient hospital days under Medicare Part A for which the beneficiary is responsible for a daily coinsurance amount after the initial covered days are exhausted, affecting patient liability and claim payment during extended stays."
      },
      {
        "term": "Collection Agency",
        "definition": "A third-party organization engaged by a healthcare provider to recover unpaid patient balances after internal billing and follow-up efforts have failed, operating under debt collection and healthcare privacy regulations."
      },
      {
        "term": "Collection Ratio",
        "definition": "A revenue cycle performance metric, often called the Net Collection Ratio (NCR), calculated as payments divided by charges after contractual adjustments, used to measure how effectively a provider collects the amount legally collectible from payers and patients."
      },
      {
        "term": "Commercial Health Insurance",
        "definition": "Private health coverage offered by non-government insurers through employer-sponsored or individual plans, where claims are processed under the payer’s contracts, fee schedules, and benefit rules rather than federal programs like Medicare or Medicaid."
      },
      {
        "term": "Confidentiality",
        "definition": "The obligation to protect patient health and billing information from unauthorized access or disclosure, ensuring compliance with privacy regulations during documentation, coding, claim submission, and collections."
      },
      {
        "term": "Consent (for treatment)",
        "definition": "A patient’s documented authorization, obtained before services and kept on file, permitting the provider to deliver care and to release necessary information for coding, claim submission, and reimbursement."
      },
      {
        "term": "Contractual Adjustment",
        "definition": "The portion of a provider’s billed charge that is reduced based on the payer–provider contract and written off as non-billable, representing the difference between the charge and the allowed amount."
      },
      {
        "term": "Coordination of Benefits (COB)",
        "definition": "The process used by payers to determine the order of payment when a patient is covered by more than one insurance plan, ensuring the total reimbursement does not exceed the allowed amount and assigning primary and secondary responsibility for the claim."
      },
      {
        "term": "Copay Accumulator",
        "definition": "A plan design used by some insurers in which manufacturer copay assistance payments do not count toward the patient’s deductible or out-of-pocket maximum, increasing the patient’s financial responsibility once assistance funds are exhausted."
      },
      {
        "term": "Copay Assistance",
        "definition": "Financial support, typically provided by drug manufacturers or foundations, that helps cover a patient’s copayment for specific medications, reducing out-of-pocket cost without changing the plan’s allowed amount or claim adjudication."
      },
      {
        "term": "Copay Maximizer",
        "definition": "A benefit design used by some insurers that spreads a manufacturer’s copay assistance evenly across the plan year, keeping the patient’s out-of-pocket cost low while preventing the assistance from counting toward the deductible or out-of-pocket maximum."
      },
      {
        "term": "Co-payment (Co-pay)",
        "definition": "A fixed dollar amount the patient is required to pay for a covered service at the time of care, as defined by the insurance plan, separate from deductible and coinsurance."
      },
      {
        "term": "Cost Share",
        "definition": "The portion of the allowed amount that the patient is responsible to pay under their insurance plan, including deductible, copayment, and coinsurance determined during claim adjudication."
      },
      {
        "term": "Covered Benefit",
        "definition": "A healthcare service or supply included under an insurance plan’s terms for reimbursement when medical necessity and coverage rules are met."
      },
      {
        "term": "Covered Days",
        "definition": "The number of inpatient or facility care days that an insurance plan, such as Medicare, will pay for under the patient’s benefits, after which patient liability or noncoverage applies."
      },
      {
        "term": "Covered Entity",
        "definition": "A healthcare provider, health plan, or clearinghouse that transmits health information electronically and is therefore required to comply with HIPAA privacy, security, and transaction standards in billing, coding, and claims processing."
      },
      {
        "term": "Covered Services",
        "definition": "Medical services and supplies that an insurance plan agrees to reimburse when provided according to coverage rules, medical necessity, and benefit limitations."
      },
      {
        "term": "Covered Charges",
        "definition": "The portion of a provider’s billed services that an insurance plan recognizes as eligible for reimbursement after applying coverage rules and benefit limitations."
      },
      {
        "term": "Credit Balance",
        "definition": "An overpayment on a patient’s account where payments exceed the allowed charges, requiring refund or adjustment to comply with payer and accounting regulations."
      },
      {
        "term": "Crossover Claim",
        "definition": "A claim automatically forwarded from a primary payer (often Medicare) to a secondary insurer for additional payment after the primary adjudication is completed, reducing the need for manual secondary billing."
      },
      {
        "term": "CPT Codes",
        "definition": "CPT Codes are standardized procedure and service codes maintained by the AMA that describe medical, surgical, and diagnostic services for uniform reporting, claim submission, and reimbursement across payers."
      },
      {
        "term": "CT Scan",
        "definition": "A diagnostic imaging procedure that uses computed tomography technology to produce cross-sectional body images, billed using specific CPT codes and supported by appropriate diagnoses to establish medical necessity for reimbursement."
      }
    ]
  },
  {
    "letter": "D",
    "terms": [
      {
        "term": "Date of Bill",
        "definition": "The date on which a claim or patient statement is generated and issued for services rendered, used to track billing timelines and follow-up within the revenue cycle."
      },
      {
        "term": "Date of Birth (DOB)",
        "definition": "The patient’s recorded birth date used on claims to verify identity, determine eligibility, apply age-specific coding rules, and prevent claim rejections."
      },
      {
        "term": "Date of Service (DOS)",
        "definition": "The exact calendar date on which a medical service was provided to the patient, reported on the claim to determine coverage eligibility, coding accuracy, and timely filing compliance."
      },
      {
        "term": "Day Sheet",
        "definition": "A daily summary report of all patient encounters, services rendered, and charges entered, used to reconcile documentation with charge entry before claim submission."
      },
      {
        "term": "De-identified Maximum Negotiated Charge",
        "definition": "The highest rate a provider has negotiated with any payer for a service, published without payer identification to comply with price transparency rules, and not used directly for claim adjudication or reimbursement."
      },
      {
        "term": "De-identified Minimum Negotiated Charge",
        "definition": "The lowest rate a provider has negotiated with any payer for a service, published without payer identification for price transparency compliance, and not used for claim payment or adjudication."
      },
      {
        "term": "Deductible",
        "definition": "The fixed amount a patient must pay toward covered services within a benefit period before the insurance plan begins to contribute to claim payment."
      },
      {
        "term": "Demographic Data",
        "definition": "Patient identification and contact information (e.g., name, DOB, address, zip code, insurance details) collected at registration and used on claims to verify eligibility, prevent rejections, and ensure accurate billing."
      },
      {
        "term": "Denial Codes",
        "definition": "Denial Codes are standardized reason codes sent by payers on the EOB/ERA to explain why a medical claim was denied, reduced, or not paid. They appear as CARCs (Claim Adjustment Reason Codes) and often pair with RARCs (Remark Codes) to pinpoint the exact issue—such as eligibility, authorization, coding, medical necessity, or contract rules—so billing teams can correct, appeal, or prevent the error."
      },
      {
        "term": "Denied Claim",
        "definition": "A claim that a payer has determined is not payable after adjudication due to coverage, coding, eligibility, or policy issues, requiring correction or appeal for reimbursement."
      },
      {
        "term": "Denial or Denied",
        "definition": "A payer’s decision during adjudication that a claim or claim line is not payable under coverage, coding, eligibility, or policy rules, requiring correction, resubmission, or appeal for reimbursement."
      },
      {
        "term": "Department of Health and Human Services (DHHS)",
        "definition": "The federal department that oversees national health programs and regulations, including HIPAA, Medicare, and Medicaid policy frameworks that govern medical billing, coding, and claims processing."
      },
      {
        "term": "Determination",
        "definition": "A payer’s formal decision on a claim, service, or coverage request that defines payment approval, denial, or adjustment based on policy and medical necessity rules."
      },
      {
        "term": "Diagnosis Code (ICD-10)",
        "definition": "Standardized alphanumeric codes used on medical claims to represent a patient’s condition, illness, injury, or reason for visit, selected from an approved classification system (such as ICD-9, ICD-10, ICD-11) to establish medical necessity, support coverage decisions, enable reimbursement, and ensure uniform clinical reporting across payers and healthcare systems."
      },
      {
        "term": "Diagnosis-Related Groups (DRGs)",
        "definition": "An inpatient hospital payment system that classifies admissions into groups based on diagnoses, procedures, and patient factors to determine a single bundled reimbursement for the entire stay, regardless of individual services billed."
      },
      {
        "term": "Disclosure",
        "definition": "The authorized release of patient health or billing information to payers, clearinghouses, or other permitted parties for claim processing, payment, and healthcare operations in compliance with privacy regulations."
      },
      {
        "term": "Dis-Enroll",
        "definition": "The termination of a patient’s enrollment in a health insurance plan, ending coverage eligibility and affecting how subsequent claims are billed and paid."
      },
      {
        "term": "Discharge Hour",
        "definition": "The exact time a patient is released from inpatient or outpatient care, recorded on the claim to calculate length of stay and ensure accurate billing compliance."
      },
      {
        "term": "Discount",
        "definition": "A voluntary reduction applied to a provider’s billed charge, separate from contractual adjustments, typically offered for prompt payment, self-pay, or financial assistance purposes."
      },
      {
        "term": "Downcoding",
        "definition": "A payer’s reduction of the billed CPT/HCPCS code to a lower-paying code than what was actually performed during adjudication due to documentation, coverage, or coding review, resulting in decreased reimbursement."
      },
      {
        "term": "Drugs/Self-Administered Medications",
        "definition": "Drugs or medicationsthat patients can take on their own without provider administration, often not covered under medical benefits (e.g., Medicare Part B) and therefore not separately reimbursed on facility or professional claims."
      },
      {
        "term": "Due from Insurance",
        "definition": "The portion of the allowed amount that remains payable by the insurance payer after claim submission and adjudication, pending reimbursement to the provider."
      },
      {
        "term": "Due from Patient",
        "definition": "The portion of the allowed charges that remains the patient’s financial responsibility after insurance payment, including deductible, copay, coinsurance, and non-covered amounts."
      },
      {
        "term": "Durable Medical Equipment (DME)",
        "definition": "Reusable medical equipment prescribed for patient use in the home, billed with HCPCS codes and reimbursed under specific payer coverage rules when medical necessity criteria are met."
      },
      {
        "term": "Dx",
        "definition": "A common medical abbreviation for diagnosis, used in documentation and billing to reference the patient’s condition that supports medical necessity on a claim."
      }
    ]
  },
  {
    "letter": "E",
    "terms": [
      {
        "term": "EDI Enrollment",
        "definition": "The process of registering a provider with a payer or clearinghouse to electronically submit claims, receive remittances, and exchange HIPAA-compliant transactions for billing and payment."
      },
      {
        "term": "EEG (Electroencephalogram)",
        "definition": "A diagnostic test that records the brain’s electrical activity, billed using specific CPT codes and supported by neurological diagnoses to establish medical necessity for reimbursement."
      },
      {
        "term": "Effective Date",
        "definition": "The date on which a patient’s insurance coverage or provider contract becomes active, determining eligibility for claim submission and reimbursement."
      },
      {
        "term": "Eligibility",
        "definition": "The verification of a patient’s active insurance coverage and benefits for a specific date of service, determining whether a claim can be submitted and paid under the plan."
      },
      {
        "term": "Eligibility Date",
        "definition": "The specific date on which a patient’s insurance coverage is valid, used to confirm that services provided on the date of service are billable to the plan."
      },
      {
        "term": "Eligibility and Verification",
        "definition": "The process of confirming a patient’s active insurance coverage, benefits, and cost-sharing details with the payer before services are rendered to ensure accurate billing and reimbursement."
      },
      {
        "term": "Electronic Claim",
        "definition": "A healthcare claim transmitted digitally in a HIPAA-standard format (e.g., 837P/837I) through a clearinghouse or directly to a payer for faster processing, validation, and reimbursement."
      },
      {
        "term": "Electronic Claim 837P (Professional) Transaction",
        "definition": "The HIPAA-standard electronic format used by physicians and other professional providers to submit outpatient and professional service claims to payers, carrying patient data, ICD-10-CM diagnoses, CPT/HCPCS procedures, modifiers, units, and charges for adjudication and reimbursement."
      },
      {
        "term": "Electronic Data Interchange (EDI)",
        "definition": "The standardized electronic exchange of healthcare claim, payment, and eligibility information between providers, clearinghouses, and payers using HIPAA transaction formats for billing and reimbursement."
      },
      {
        "term": "Electronic Funds Transfer (EFT)",
        "definition": "The electronic payment method by which a payer deposits claim reimbursements directly into a provider’s bank account, linked to remittance details for accurate posting in the billing system."
      },
      {
        "term": "Electronic Medical Records (EMR)",
        "definition": "A digital system used by providers to document patient care, serving as the primary source of clinical information for coding, charge entry, and claim submission."
      },
      {
        "term": "Electronic Remittance Advice (ERA)",
        "definition": "The HIPAA-standard electronic payment report (835 transaction) sent by a payer that details claim payments, adjustments, denials, and patient responsibility for posting in the billing system."
      },
      {
        "term": "Elective Services",
        "definition": "Non-emergency medical services are often scheduled in advance, often requiring prior authorization or certification to meet coverage and reimbursement requirements."
      },
      {
        "term": "Eligible Payment Amount",
        "definition": "The portion of the allowed amount that qualifies for reimbursement by the payer after applying coverage rules, benefit limits, and patient cost-sharing during adjudication."
      },
      {
        "term": "Emergency Care",
        "definition": "Immediate medical treatment is provided for acute conditions that threaten life or health, billed without prior authorization and reimbursed under emergency coverage rules."
      },
      {
        "term": "Emergency Room",
        "definition": "A hospital department that provides immediate treatment for acute and life-threatening conditions, where services are billed under hospital outpatient or inpatient rules and reimbursed according to emergency coverage policies without prior authorization."
      },
      {
        "term": "Enroll",
        "definition": "The process of registering a patient or provider into an insurance plan or payer system, establishing eligibility or billing participation for claim submission, and reimbursement."
      },
      {
        "term": "Enrollee",
        "definition": "An individual who is registered and covered under a health insurance plan, whose eligibility and benefits determine how claims are processed and reimbursed."
      },
      {
        "term": "Explanation of Benefits",
        "definition": "A statement from the insurer showing how a claim was processed, including the allowed amount, payer payment, adjustments, and patient responsibility."
      },
      {
        "term": "Employer Identification Number (EIN)",
        "definition": "A unique federal tax identifier assigned to a healthcare provider or organization, used on claims and enrollment records for billing, reimbursement, and tax reporting purposes."
      },
      {
        "term": "ERISA",
        "definition": "A federal law that regulates employer-sponsored health plans, establishing rules for benefits, claims procedures, appeals, and fiduciary responsibilities that affect how medical claims are processed and disputed."
      },
      {
        "term": "Estimated Amount Due",
        "definition": "The projected patient balance calculated before or at the time of service based on eligibility verification, plan benefits, and expected insurance payment, used for upfront collection."
      },
      {
        "term": "Estimated Insurance",
        "definition": "The projected amount expected to be paid by the insurance payer for a service based on verified benefits, fee schedules, and coverage rules prior to claim adjudication."
      },
      {
        "term": "Evaluation and Management (E/M)",
        "definition": "CPT category or the section that defines physician and qualified provider services for assessing a patient’s condition and managing care, with code selection governed by documented medical decision making or total time for reimbursement."
      },
      {
        "term": "Evaluation and Management (E/M) Codes",
        "definition": "A specific CPT® code that represents a physician or qualified provider visit for assessing and managing a patient’s care, selected based on documented medical decision making or total time in accordance with CPT guidelines for reimbursement."
      },
      {
        "term": "Evidence of Coverage (EOC)",
        "definition": "The official insurance plan document that outlines covered services, exclusions, cost-sharing rules, and claim requirements used to determine how services are billed and reimbursed."
      },
      {
        "term": "External Cause of Injury Code",
        "definition": "A supplementary ICD-10 code that identifies how, where, and under what circumstances an injury occurred, used on claims to provide context for medical necessity, liability, and payer reporting requirements."
      }
    ]
  },
  {
    "letter": "F",
    "terms": [
      {
        "term": "Federal Tax ID Number",
        "definition": "A unique number issued by the Internal Revenue Service to a healthcare provider or organization, used on claims and payer records to identify the billing entity for reimbursement, enrollment, and tax reporting."
      },
      {
        "term": "Fee Schedule",
        "definition": "A payer-defined list of allowed amounts, charges and rates for CPT/HCPCS services that determines how much a provider will be reimbursed for each billed procedure under the contract."
      },
      {
        "term": "Fee for Service (FFS)",
        "definition": "A payment model in which providers are reimbursed for each individual service or procedure performed, based on a payer’s fee schedule, rather than a bundled or capitated rate."
      },
      {
        "term": "Financial Responsibility",
        "definition": "The portion of healthcare charges that the patient is obligated to pay after insurance processing, based on plan benefits, cost-sharing rules, and coverage determinations."
      },
      {
        "term": "Fiscal Intermediary (FI)",
        "definition": "A contractor responsible for receiving, reviewing, and adjudicating inpatient and facility claims, issuing payments, and providing billing guidance to providers, a role now performed by Medicare Administrative Contractors (MACs)."
      },
      {
        "term": "Flexible Spending Account",
        "definition": "A tax-advantaged account funded by an employee to pay for eligible healthcare expenses, used to cover patient cost-sharing amounts such as deductibles, copays, and coinsurance not paid by insurance."
      },
      {
        "term": "Formulary",
        "definition": "A payer-approved list of covered medications that determines which drugs are eligible for reimbursement and the patient’s cost-sharing under the pharmacy benefit."
      },
      {
        "term": "Fraud",
        "definition": "The intentional submission of false or misleading information on claims to obtain improper reimbursement, violating healthcare billing laws and regulations."
      },
      {
        "term": "Fraud and Abuse",
        "definition": "Improper billing practices where fraud involves intentional deception for financial gain and abuse involves practices that are inconsistent with accepted billing standards, both leading to incorrect reimbursement and regulatory penalties."
      }
    ]
  },
  {
    "letter": "G",
    "terms": [
      {
        "term": "Geographic Practice Cost Index",
        "definition": "A regional adjustment factor used in Medicare payments to reflect local differences in practice costs like rent, wages, and malpractice expenses."
      },
      {
        "term": "Global Period",
        "definition": "A defined timeframe assigned to certain procedures during which all routine follow-up care related to the surgery is included in the original payment and cannot be billed separately."
      },
      {
        "term": "Grant Assistance",
        "definition": "Financial support provided by government programs or organizations to help patients cover healthcare costs, applied to patient balances without involving insurance claim reimbursement."
      },
      {
        "term": "Gross Charge Amount",
        "definition": "The total amount a provider bills for services before any contractual adjustments, discounts, or payer allowances are applied."
      },
      {
        "term": "Group Health Plan (GHP)",
        "definition": "An employer-sponsored health insurance plan that covers employees and eligible dependents, where claims are processed under the plan’s contracted benefits, fee schedules, and coverage rules."
      },
      {
        "term": "Guarantor/Billing Addressee (Guarantor)",
        "definition": "The person financially responsible for paying the patient’s medical bills, identified on the account to receive statements and handle payment after insurance processing."
      },
      {
        "term": "Guarantor ID",
        "definition": "A unique identifier assigned in the billing system to the person financially responsible for the account, used to link patient charges, statements, and payments for collection."
      }
    ]
  },
  {
    "letter": "H",
    "terms": [
      {
        "term": "HCFA 1500 Form",
        "definition": "The former name of the standard professional claim form used by physicians and outpatient providers to submit services to payers, now known as the CMS-1500 form for reporting diagnoses, procedures, charges, and provider information for reimbursement."
      },
      {
        "term": "HCPC Codes",
        "definition": "A standardized coding system used on medical claims to report products, supplies, equipment, medications, ambulance services, and certain procedures not described by CPT, consisting of Level I (CPT codes maintained by the American Medical Association) and Level II (alphanumeric codes maintained by CMS), essential for accurate billing, coverage determination, and reimbursement across payers."
      },
      {
        "term": "Healthcare Financing Administration",
        "definition": "The former U.S. federal agency that administered Medicare and Medicaid and set billing standards, later renamed the Centers for Medicare & Medicaid Services, which now oversees coverage policies, payment systems, and claim regulation."
      },
      {
        "term": "Healthcare Financing Administration Common Procedure Coding System (HCPCS)",
        "definition": "The former name of the standardized coding system used on medical claims to report procedures, supplies, equipment, and services, now referred to as HCPCS and maintained by CMS for coverage determination and reimbursement across payers."
      },
      {
        "term": "Health Care Provider",
        "definition": "A licensed individual or organization that delivers medical services and submits claims to payers for reimbursement of those services."
      },
      {
        "term": "Healthcare Reform Act",
        "definition": "A federal law that expanded insurance coverage and established billing, coverage, and patient protection rules that affect how healthcare services are reimbursed and regulated. (Patient Protection and Affordable Care Act)"
      },
      {
        "term": "Health Insurance",
        "definition": "A financial coverage arrangement in which a payer agrees to reimburse or pay for covered medical services according to defined benefits, fee schedules, and cost-sharing rules used in claim processing."
      },
      {
        "term": "Health Insurance Claim",
        "definition": "A formal request submitted by a healthcare provider to an insurance payer containing patient, diagnosis, procedure, and charge information to obtain reimbursement for services rendered."
      },
      {
        "term": "Health Maintenance Organization (HMO)",
        "definition": "A managed care insurance plan that requires patients to receive care from in-network providers and obtain referrals from a primary care physician, with claims reimbursed under strict network and authorization rules."
      },
      {
        "term": "Health Plan",
        "definition": "An insurance arrangement that defines covered services, payment rules, network requirements, and patient cost-sharing used to process and reimburse medical claims."
      },
      {
        "term": "HIPAA Health Insurance Portability and Accountability Act (HIPAA)",
        "definition": "A federal law that protects the privacy and security of patient health information and establishes national standards for electronic healthcare transactions, governing how providers, payers, and clearinghouses handle patient data across clinical care, billing, coding, claims processing, and communication."
      },
      {
        "term": "Home Health Agency",
        "definition": "A certified provider that delivers skilled nursing and therapeutic services in a patient’s home, billing payers under home health coverage rules based on medical necessity and plan of care."
      },
      {
        "term": "Hospice",
        "definition": "A specialized program that provides palliative care for terminally ill patients, billed under hospice-specific coverage rules where most services are included in a bundled payment rather than billed separately."
      },
      {
        "term": "Hospital Inpatient Prospective Payment System (PPS)",
        "definition": "A Medicare payment system that reimburses hospitals a fixed amount for an inpatient stay based on the assigned Diagnosis-Related Group (DRG), regardless of the individual services provided during the admission."
      }
    ]
  },
  {
    "letter": "I",
    "terms": [
      {
        "term": "ICD Codes",
        "definition": "ICD Codes (International Classification of Diseases codes) are standardized diagnosis codes used worldwide to report diseases, symptoms, injuries, and health conditions in a uniform format."
      },
      {
        "term": "ICD-10 Codes",
        "definition": "Standardized diagnosis codes are used on medical claims to report patient conditions, establish medical necessity, and support reimbursement and healthcare reporting."
      },
      {
        "term": "ICD-9 Codes",
        "definition": "A diagnosis coding system previously used on medical claims to report patient conditions for reimbursement and reporting, replaced in the U.S. by ICD-10-CM in 2015."
      },
      {
        "term": "In-Network",
        "definition": "A provider or facility that has a contract with a health plan to deliver services at negotiated rates, allowing claims to be reimbursed under the plan’s highest benefit level and limiting patient cost-sharing."
      },
      {
        "term": "In-network provider",
        "definition": "A healthcare professional or facility that has a contractual agreement with a health plan to provide services at negotiated rates, enabling claims to be paid at preferred benefit levels with lower patient cost-sharing."
      },
      {
        "term": "Incremental Nursing Charge",
        "definition": "An additional charge applied for higher levels of nursing care intensity beyond routine services, used in facility billing to reflect increased resource utilization during a patient’s stay."
      },
      {
        "term": "Indemnity",
        "definition": "A type of health insurance plan that reimburses providers or patients for covered services based on a fee schedule without network restrictions, allowing care from any provider."
      },
      {
        "term": "Independent Practice Association (IPA)",
        "definition": "A network of independent healthcare providers who contract collectively with health plans to deliver services at negotiated rates while maintaining separate practices for billing and patient care."
      },
      {
        "term": "Inpatient (IP)",
        "definition": "A patient formally admitted to a hospital for overnight care or longer, where services are billed under inpatient facility payment systems and reimbursement rules."
      },
      {
        "term": "Insurance Company Name",
        "definition": "The name of the payer listed on a patient’s coverage, used on claims to identify the responsible insurer for claim submission and reimbursement."
      },
      {
        "term": "Insurance Copay",
        "definition": "The fixed dollar amount a patient must pay for a covered service at the time of care, as defined by the insurance plan’s cost-sharing rules."
      },
      {
        "term": "Insurance Deductible",
        "definition": "The set amount a patient must pay for covered services within a benefit period before the insurance plan begins contributing to claim payments."
      },
      {
        "term": "Insured Group Name",
        "definition": "The name of the employer or organization through which a patient receives group health insurance coverage, used on claims to identify the correct plan for reimbursement."
      },
      {
        "term": "Insured Group Number",
        "definition": "The identifier assigned to an employer-sponsored health plan, used on claims to route billing to the correct insurance plan for reimbursement."
      },
      {
        "term": "Intensive Care",
        "definition": "A hospital service providing continuous, high-level monitoring and treatment for critically ill patients, billed under inpatient facility rules with higher resource utilization and reimbursement considerations."
      },
      {
        "term": "Internal Control Number (ICN)",
        "definition": "A unique reference number assigned by a payer to a claim for tracking its processing history, status, adjustments, and payment actions within the adjudication system."
      },
      {
        "term": "International Classification of Diseases (ICD) codes",
        "definition": "A global diagnosis coding system used to classify patient conditions on claims, supporting medical necessity, reimbursement, public health reporting, and standardized clinical documentation across healthcare systems."
      },
      {
        "term": "IV Therapy",
        "definition": "The administration of fluids or medications directly into a patient’s vein, billed using specific CPT/HCPCS codes with time, drug, and diagnosis documentation to support medical necessity and reimbursement."
      },
      {
        "term": "Itemized statement",
        "definition": "A detailed billing document listing each service, charge, payment, and adjustment on a patient’s account, used for patient review, insurance clarification, and collections."
      }
    ]
  },
  {
    "letter": "J",
    "terms": [
      {
        "term": "Justification (medical necessity justification)",
        "definition": "The documented clinical reason that supports why a service, test, or procedure was needed for coverage/payment."
      },
      {
        "term": "Joint and Several Liability",
        "definition": "An insurance/legal term sometimes seen in payer or contract language, meaning more than one party can be held responsible for the full amount owed."
      }
    ]
  },
  {
    "letter": "K",
    "terms": [
      {
        "term": "KX Modifier",
        "definition": "Medicare modifier showing documentation supports medical necessity for certain services."
      }
    ]
  },
  {
    "letter": "L",
    "terms": [
      {
        "term": "LCD (Local Coverage Determination)",
        "definition": "Medicare MAC policy describing coverage rules for specific services in a region."
      },
      {
        "term": "Lien",
        "definition": "A legal claim against settlement/asset for unpaid medical bills."
      },
      {
        "term": "LON (Letter of Necessity)",
        "definition": "Provider letter supporting medical necessity for coverage/authorization/appeals."
      },
      {
        "term": "Laboratory",
        "definition": "A clinical service that performs diagnostic testing on patient specimens, billed using CPT/HCPCS codes and appropriate diagnosis codes to establish medical necessity and qualify for reimbursement."
      },
      {
        "term": "Lifetime Reserve Days (Medicare)",
        "definition": "A limited number of additional inpatient hospital days (60 total) available to a beneficiary after regular covered days are exhausted, subject to a daily coinsurance amount and affecting patient liability and claim payment."
      },
      {
        "term": "Local Coverage Determination (LCD)",
        "definition": "A policy issued by a Medicare Administrative Contractor that defines when specific services are considered medically necessary within its jurisdiction, guiding coding, documentation, and claim payment decisions."
      },
      {
        "term": "Long-Term Care",
        "definition": "Ongoing medical and personal support services provided to patients with chronic illness or disability over an extended period, billed under facility or home-based coverage rules according to payer benefits and level-of-care requirements."
      }
    ]
  },
  {
    "letter": "M",
    "terms": [
      {
        "term": "Medical Coding",
        "definition": "The process of translating diagnoses, procedures, services, and equipment documented by providers into standardized codes (ICD-10-CM, CPT®, HCPCS) for clinical reporting and reimbursement. It ensures accurate documentation mapping so payers, regulators, and analytics systems understand exactly what care was delivered."
      },
      {
        "term": "Medical Billing",
        "definition": "The process of converting coded clinical services into insurance claims, submitting them to payers, and managing payment through adjudication, follow-up, and reconciliation. It connects clinical documentation to revenue by handling eligibility, claim submission, denials, payments, and patient balances."
      },
      {
        "term": "MPFS (Medicare Physician Fee Schedule)",
        "definition": "Medicare’s pricing system that assigns payment rates to CPT services using RVUs, GPCI adjustments, and a yearly conversion factor."
      },
      {
        "term": "Magnetic Resonance Imaging (MRI)",
        "definition": "A non-invasive imaging test that uses strong magnets and radio waves to create detailed images of organs, tissues, and structures inside the body."
      },
      {
        "term": "M62.81 Diagnosis Code",
        "definition": "M62.81 is an ICD code for generalized muscle weakness, defined as a reduction in the strength of muscles across multiple anatomic sites."
      },
      {
        "term": "Medical Group Management Association (MGMA)",
        "definition": "A U.S. professional association that collects and publishes benchmarking data on medical practice operations, revenue cycle performance, staffing, and financial trends."
      },
      {
        "term": "Machine Readable File",
        "definition": "A publicly posted digital file required under price transparency rules that lists a provider’s negotiated rates, minimum and maximum charges, and cash prices in a standardized format for public access, not used for claim adjudication or reimbursement."
      },
      {
        "term": "Managed Care",
        "definition": "A healthcare delivery and payment model in which insurers control costs and quality through network restrictions, authorization requirements, and contracted reimbursement rules for claims."
      },
      {
        "term": "Managed Care Plan",
        "definition": "A type of health insurance plan that manages cost and care through provider networks, authorization rules, and negotiated reimbursement rates that govern how claims are paid."
      },
      {
        "term": "Managed Care Organization (MCO)",
        "definition": "An insurance entity that administers managed care plans by contracting with providers, enforcing authorization and network rules, and processing claims under negotiated reimbursement terms."
      },
      {
        "term": "Managed Healthcare",
        "definition": "A system of delivering and financing medical services where insurers coordinate care through provider networks, authorization controls, and contracted payment rules that determine how claims are reimbursed."
      },
      {
        "term": "Maximum Out of Pocket",
        "definition": "The highest total amount a patient is required to pay for covered services in a benefit period, after which the insurance plan pays 100% of the allowed charges."
      },
      {
        "term": "Medicaid",
        "definition": "A joint federal and state health insurance program for eligible low-income individuals, where claims are reimbursed under state-specific coverage rules, fee schedules, and billing guidelines administered in accordance with CMS standards."
      },
      {
        "term": "Medicaid (Title XIX)",
        "definition": "The section of the Social Security Act that authorizes the Medicaid program, providing state-administered health coverage for eligible low-income individuals with claims paid under state-specific rules aligned to CMS standards."
      },
      {
        "term": "Medicaid MCO",
        "definition": "A Managed Care Organization contracted by a state Medicaid program to administer benefits, manage provider networks, and process claims under Medicaid coverage and reimbursement rules."
      },
      {
        "term": "Medicare",
        "definition": "A federal health insurance program primarily for individuals aged 65 and older and certain disabled persons, where claims are reimbursed under nationally defined coverage policies, fee schedules, and billing regulations."
      },
      {
        "term": "Medicare (Title XVIII)",
        "definition": "The section of the Social Security Act that establishes the Medicare program, defining federal coverage, payment systems, and billing rules for eligible beneficiaries."
      },
      {
        "term": "Medicare + Choice",
        "definition": "The former name for Medicare managed care plans that allowed beneficiaries to receive Medicare benefits through private health plans, now known as Medicare Advantage (Part C), where claims follow plan-specific network and reimbursement rules."
      },
      {
        "term": "Medicare Administrative Contractor (MAC)",
        "definition": "A private contractor assigned by CMS to process, review, and adjudicate Medicare claims, provide billing guidance, and issue coverage policies (LCDs) within a specific geographic jurisdiction."
      },
      {
        "term": "Medicare Approved",
        "definition": "A designation indicating that a service, provider, or supplier meets Medicare coverage and participation requirements, allowing claims to be reimbursed under Medicare rules."
      },
      {
        "term": "Medicare Assignment",
        "definition": "An agreement by a provider to accept Medicare’s allowed amount as full payment for covered services, limiting the patient’s responsibility to deductible and coinsurance only."
      },
      {
        "term": "Medicare Beneficiary Identifier (MBI)",
        "definition": "A unique alphanumeric ID assigned to each Medicare beneficiary, used on claims in place of the Social Security Number to identify the patient for eligibility and reimbursement."
      },
      {
        "term": "Medicare Coinsurance Days",
        "definition": "The inpatient hospital days under Medicare Part A for which the beneficiary must pay a daily coinsurance amount after the initial fully covered days, affecting patient liability and claim payment during extended stays."
      },
      {
        "term": "Medicare Donut Hole",
        "definition": "The coverage gap in Medicare Part D prescription drug benefits where the beneficiary temporarily pays a higher share of medication costs after initial coverage limits are reached, until catastrophic coverage begins."
      },
      {
        "term": "Medicare Nonassignment",
        "definition": "A billing situation where a provider does not accept Medicare’s allowed amount as full payment, requiring the patient to pay the provider upfront and seek partial reimbursement directly from Medicare, often with higher patient financial responsibility."
      },
      {
        "term": "Medicare Number",
        "definition": "The unique beneficiary identifier (now the MBI) used on claims to verify a patient’s Medicare eligibility and process reimbursement for covered services."
      },
      {
        "term": "Medicare Paid",
        "definition": "The amount Medicare reimburses to the provider for covered services after claim adjudication, calculated from the allowed amount after applying the beneficiary’s deductible, coinsurance, and coverage rules, and paid either directly to the provider (with assignment) or to the patient (without assignment)."
      },
      {
        "term": "Medicare Paid Provider",
        "definition": "A provider who receives Medicare reimbursement directly from Medicare for covered services, typically by accepting Medicare assignment on claims"
      },
      {
        "term": "Medicare Part A",
        "definition": "The hospital insurance portion of Medicare that covers inpatient hospital stays, skilled nursing facility care, hospice, and limited home health services, reimbursed under facility-based payment systems such as DRG and related coverage rules."
      },
      {
        "term": "Medicare Part B",
        "definition": "The medical insurance portion of Medicare that covers physician services, outpatient care, preventive services, durable medical equipment, and certain drugs, reimbursed under professional and outpatient payment systems such as the Medicare Physician Fee Schedule (MPFS) and APC rules."
      },
      {
        "term": "Medicare Secondary Payer",
        "definition": "A Medicare rule that requires Medicare to pay after another primary insurance when a beneficiary has additional coverage, determining claim order and preventing duplicate payment beyond the allowed amount."
      },
      {
        "term": "Medicare Sequestration",
        "definition": "A mandatory 2% reduction taken from Medicare payments to providers after a claim is processed, without changing the patient’s share or the allowed amount."
      },
      {
        "term": "Medicare Summary Notice",
        "definition": "A statement sent to Medicare beneficiaries that lists services billed, amounts Medicare approved and paid, and the patient’s responsibility after claim processing."
      },
      {
        "term": "Medically Necessary Services",
        "definition": "or supplies required to diagnose or treat a patient’s condition according to accepted clinical standards, forming the basis for coverage approval and reimbursement by the payer."
      },
      {
        "term": "Medical Assistant",
        "definition": "A trained healthcare professional who performs both clinical and administrative duties in a medical setting, such as patient intake, vital signs, documentation support, scheduling, and coordination of care to ensure smooth day-to-day operations."
      },
      {
        "term": "Medical Billing Specialist",
        "definition": "A healthcare professional responsible for preparing, submitting, tracking, and resolving insurance claims, managing payments, denials, and patient balances to ensure accurate reimbursement within the revenue cycle."
      },
      {
        "term": "Medical Coder",
        "definition": "A healthcare professional responsible for reviewing clinical documentation and translating medical diagnoses, procedures, and equipment into universal alphanumeric codes (such as ICD-10, CPT, and HCPCS)."
      },
      {
        "term": "Medical Necessity",
        "definition": "A standard used by health plans to determine if a specific service, treatment, or supply is required to diagnose or treat an illness or injury according to established clinical guidelines."
      },
      {
        "term": "Medical Record Number",
        "definition": "A unique identifier assigned by a healthcare facility to a specific patient. This number links all of the patient’s clinical data, including lab results, imaging, and visit notes, within that specific provider’s system."
      },
      {
        "term": "Medical Savings Account (MSA)",
        "definition": "A tax-advantaged financial account often associated with high-deductible health plans (HDHPs) or Medicare Advantage. Funds are used to pay for qualified healthcare expenses, and unused balances typically roll over year to year."
      },
      {
        "term": "Medical Transcription",
        "definition": "The process of converting voice-recorded reports dictated by physicians or other healthcare professionals into formal, written text."
      },
      {
        "term": "Medical/Surgical Supplies",
        "definition": "Consumable items used for treatment or diagnosis that are typically disposable and not intended for repeated use (e.g., gauze, catheters, syringes, and surgical gloves)."
      },
      {
        "term": "Medigap Medicare",
        "definition": "Supplemental health insurance sold by private companies to fill “gaps” in Original Medicare coverage. It helps pay for costs that Medicare doesn’t cover, such as copayments, coinsurance, and deductibles."
      },
      {
        "term": "Member",
        "definition": "An individual who is enrolled in and covered by a specific health insurance plan. This includes the primary policyholder and any covered dependents."
      },
      {
        "term": "Modifier",
        "definition": "A two-digit code (alphabetic or numeric) added to a CPT or HCPCS code to provide additional information about a service without changing the core definition of the code. For example modifier 25"
      },
      {
        "term": "Monthly Statement of Account",
        "definition": "A summary issued once a month that lists all transactions, including services rendered, payments made by insurance, and the remaining balance the patient owes to the provider."
      }
    ]
  },
  {
    "letter": "N",
    "terms": [
      {
        "term": "No Surprises Act (NSA)",
        "definition": "A U.S. federal law that protects patients from unexpected balance bills for emergency and certain out-of-network services."
      },
      {
        "term": "National Correct Coding Initiative (NCCI) Edits",
        "definition": "A set of automated “checks” developed by CMS (Centers for Medicare & Medicaid Services) to prevent improper payment when incorrect code combinations are reported on a claim."
      },
      {
        "term": "National Coverage Determination (NCD)",
        "definition": "A nationwide policy set by Medicare that grants or denies coverage for specific medical services, procedures, or technologies across the entire United States."
      },
      {
        "term": "National Provider Identifier (NPI)",
        "definition": "A unique, 10-digit identification number issued to healthcare providers in the United States by the Centers for Medicare & Medicaid Services."
      },
      {
        "term": "Network",
        "definition": "A group of doctors, hospitals, and other healthcare providers that have entered into a contract with a specific insurance company to provide services to its members at pre-negotiated, discounted rates."
      },
      {
        "term": "Network Provider",
        "definition": "An individual healthcare professional or facility that is part of a health insurance company’s network. Also referred to as an “In-Network Provider.”"
      },
      {
        "term": "Non-Covered Charge (N/C)",
        "definition": "A non-covered charge is a billed amount for a medical service, procedure, or supply that the insurance plan does not reimburse. The patient is responsible for paying the full cost out-of-pocket, as it falls outside the plan’s approved benefits or contract terms."
      },
      {
        "term": "Non-Covered Service",
        "definition": "A non-covered service is a healthcare service, procedure, or treatment that is not included in the patient’s insurance plan benefits, meaning the payer will not provide any reimbursement. Patients must pay for these services entirely themselves."
      },
      {
        "term": "Non-Participation",
        "definition": "The status of a healthcare provider who has not signed a contract with a particular insurance plan or Medicare."
      },
      {
        "term": "Non-Participating Provider",
        "definition": "A provider/physician who does not have a contractual agreement with a specific insurance payer or Medicare. These providers may “balance bill” the patient for the difference between what the insurance pays and their actual total charges. It is also known as an OUT OF NETWORK Provider/physician."
      },
      {
        "term": "Not Elsewhere Classifiable (NEC)",
        "definition": "A term used in ICD-10 coding when the medical record provides a high level of detail, but the coding system itself does not have a specific code that matches that level of detail."
      },
      {
        "term": "Not Otherwise Specified (NOS)",
        "definition": "A term used in ICD-10 coding when the medical documentation is non-specific or vague, preventing the coder from assigning a more detailed code."
      },
      {
        "term": "Nurse Practitioner",
        "definition": "A registered nurse (RN) with advanced clinical training and education (usually a Master’s or Doctorate). NPs can diagnose illnesses, treat conditions, and prescribe medications."
      },
      {
        "term": "Nursery",
        "definition": "A specialized department within a hospital designed to provide care for newborns who do not require intensive monitoring."
      }
    ]
  },
  {
    "letter": "O",
    "terms": [
      {
        "term": "Observation",
        "definition": "A status used by hospitals to evaluate patients for a short period (usually less than 48 hours) to determine if they need to be formally admitted as an inpatient or can be safely sent home."
      },
      {
        "term": "Office of Inspector General (OIG)",
        "definition": "A government agency responsible for protecting the integrity of Department of Health and Human Services (HHS) programs, primarily by fighting waste, fraud, and abuse in Medicare and Medicaid."
      },
      {
        "term": "Open Enrollment",
        "definition": "A specific period during the year when individuals can sign up for health insurance, switch plans, or add/drop dependents without needing a “qualifying life event” (like a marriage or birth)."
      },
      {
        "term": "Operating Room",
        "definition": "A sterile environment within a hospital or surgical center where surgical procedures are performed. Oncology The branch of medicine dedicated to the study, diagnosis, treatment, and prevention of cancer."
      },
      {
        "term": "Out-of-Pocket Costs",
        "definition": "The total expenses for medical care that individual must pay because they are not reimbursed by insurance. This includes deductible, copayments, and coinsurance."
      },
      {
        "term": "Out-of-Pocket Maximum",
        "definition": "The most the indivdual/beneficiary will have to pay for covered medical services in a plan year. Once this amount is spend as deductibles, copayments, and coinsurance, the health plan pays 100% of the costs for covered benefits."
      },
      {
        "term": "Outpatient",
        "definition": "An outpatient is a patient who receives medical care, treatment, or diagnostic services at a healthcare facility without being admitted overnight."
      },
      {
        "term": "Outpatient Service",
        "definition": "Medical procedures or tests that can be done in a medical center without an overnight stay. This includes wellness visits, lab tests, and even some surgeries."
      },
      {
        "term": "Over-the-Counter Drug",
        "definition": "Medicines that can be sold directly to a consumer without a prescription from a healthcare professional."
      }
    ]
  },
  {
    "letter": "P",
    "terms": [
      {
        "term": "Palmetto GBA",
        "definition": "Palmetto GBA is a Medicare Administrative Contractor (MAC) in the U.S. responsible for processing and adjudicating Medicare claims, ensuring provider compliance, issuing payments, and handling appeals for Medicare Part A and Part B services."
      },
      {
        "term": "Participating Provider",
        "definition": "A participating supplier is a healthcare provider or vendor who has a contract with an insurance plan or Medicare to accept the payer’s approved amount (allowed amount) as full payment for covered services. Patients typically pay only applicable deductibles, coinsurance, or copays."
      },
      {
        "term": "Patient Amount Due",
        "definition": "The final amount shown on a medical bill or Explanation of Benefits (EOB) that is the patient’s legal responsibility to pay the provider after insurance has processed the claim."
      },
      {
        "term": "Patient Responsibility",
        "definition": "The portion of a medical bill that a patient is legally required to pay. This includes deductibles, copayments, and coinsurance, as determined by their insurance plan’s summary of benefits."
      },
      {
        "term": "Patient Type",
        "definition": "A classification used by hospitals and clinics to categorize patients based on the level of care required (e.g., Inpatient, Outpatient, Emergency, or Observation)."
      },
      {
        "term": "Pay This Amount",
        "definition": "A clear statement found on a medical bill indicates the total balance currently due from the patient after all insurance payments and adjustments have been applied."
      },
      {
        "term": "Payer",
        "definition": "The entity, typically an insurance company, government program (like Medicare), or self-insured employer, that is responsible for processing and paying for healthcare services."
      },
      {
        "term": "Payer-specific Negotiated Rate",
        "definition": "The specific dollar amount that a provider has agreed to accept from a particular insurance company for a specific service or procedure."
      },
      {
        "term": "Per Diem",
        "definition": "A payment method where a provider is paid a fixed daily rate for a patient’s care, regardless of the actual costs or specific services provided on that day."
      },
      {
        "term": "Physician Practice Management",
        "definition": "The administrative and business operations of a medical office, including scheduling, billing, human resources, and financial reporting."
      },
      {
        "term": "Place of Service (POS)",
        "definition": "POS is a standardized code used on healthcare claims to indicate the location where a medical service or procedure was performed, such as an office, hospital outpatient department, skilled nursing facility, or home."
      },
      {
        "term": "Place of Service Code",
        "definition": "A two-digit code used on medical claims to indicate where a service was performed (e.g., 11 for an office, 21 for inpatient hospital, 12 for home)."
      },
      {
        "term": "Point of Service Plans",
        "definition": "A type of managed care health insurance plan that combines features of HMOs and PPOs. Members usually have a primary care doctor but can use out-of-network providers for a higher cost."
      },
      {
        "term": "Policy Number",
        "definition": "A unique identifier assigned by an insurance company to an individual’s specific health insurance contract."
      },
      {
        "term": "Practice Management Software",
        "definition": "Software used by medical offices to manage daily operations, such as scheduling appointments, maintaining patient demographics, and generating financial reports."
      },
      {
        "term": "Pre-Admission Approval or Certification",
        "definition": "A process used before an inpatient hospital admission where the insurance payer reviews and approves the necessity, dates, and coverage for the planned admission. It ensures the hospitalization is medically necessary and covered under the patient’s policy."
      },
      {
        "term": "Pre-Determination",
        "definition": "An optional process where a provider submits a treatment plan to an insurer to find out if a service is covered and how much the insurer will pay before the service is rendered."
      },
      {
        "term": "Pre-existing Condition (PEC)",
        "definition": "A health condition or illness that a patient had before their new health insurance coverage started."
      },
      {
        "term": "Pre-existing Condition Exclusion",
        "definition": "A pre-existing condition exclusion is a policy clause in health insurance that limits or denies coverage for medical conditions that existed before the insurance coverage began. It allows insurers to avoid paying for treatment related to conditions diagnosed, treated, or known prior to the policy’s effective date."
      },
      {
        "term": "Prepayments",
        "definition": "A payment made by a patient toward their estimated out-of-pocket costs before a medical service is actually performed, as deposits, copays, or estimated patient responsibility. They help providers manage cash flow and reduce the risk of unpaid balances."
      },
      {
        "term": "Pre-Service Payment",
        "definition": "A pre-service payment is any payment made or required before the delivery of a healthcare service, typically by the patient or payer, to guarantee coverage or confirm eligibility. It ensures that the service will be reimbursed and the provider is protected financially."
      },
      {
        "term": "Premium",
        "definition": "The amount you pay every month to an insurance company to keep the health coverage active, regardless of whether medical services are used or not."
      },
      {
        "term": "Prevailing Charge",
        "definition": "The prevailing charge is the standard or typical fee that healthcare providers in a specific geographic area charge for a particular service or procedure."
      },
      {
        "term": "Preventive Care",
        "definition": "Preventive care includes medical services, screenings, immunizations, and counseling aimed at preventing illnesses, detecting conditions early, and maintaining overall health."
      },
      {
        "term": "Primary Care",
        "definition": "Primary care refers to ongoing, comprehensive healthcare provided by a physician or provider who serves as the first point of contact. It includes routine check-ups, management of chronic conditions, preventive services, and referrals to specialists when needed."
      },
      {
        "term": "Primary Care Network (PCN)",
        "definition": "A PCN is a structured group or network of primary care providers who collaborate to deliver coordinated healthcare services."
      },
      {
        "term": "Primary Care Physician (PCP)",
        "definition": "A PCP is a licensed healthcare provider who serves as the first point of contact for patients, managing routine care, preventive services, chronic conditions, and coordinating referrals to specialists."
      },
      {
        "term": "Primary Insurance Company",
        "definition": "The primary insurance company is the health plan responsible for paying claims first when a patient has multiple coverages. It determines the initial allowed amount, and any secondary or supplemental insurance may cover remaining patient responsibility."
      },
      {
        "term": "Prospective Payment System (PPS)",
        "definition": "A method of reimbursement where Medicare payment is made based on a predetermined, fixed amount rather than the actual costs incurred."
      },
      {
        "term": "Protected Health Information (PHI)",
        "definition": "Any individually identifiable health data (medical, billing, or personal) protected under HIPAA from unauthorized access or disclosure."
      },
      {
        "term": "Provider Transaction Access Number (PTAN)",
        "definition": "A unique number assigned to a provider upon enrollment with Medicare. It is used to authenticate the provider when they call Medicare or use their systems."
      },
      {
        "term": "Psychiatric/Psychological Treatments",
        "definition": "Medical or therapeutic services aimed at diagnosing, treating, and managing mental health conditions, including therapy, counseling, medication management, and behavioral interventions, provided by licensed psychiatrists, psychologists, or mental health professionals."
      }
    ]
  },
  {
    "letter": "Q",
    "terms": [
      {
        "term": "Qualified Health Plan (QHP)",
        "definition": "An ACA marketplace health insurance plan that meets required coverage standards."
      },
      {
        "term": "Query (Coding Query)",
        "definition": "A formal question sent to a provider to clarify documentation so the correct ICD-10/CPT code can be assigned."
      },
      {
        "term": "Quality Measure (Quality Reporting)",
        "definition": "The standardized performance metrics used in programs like MIPS to track outcomes and sometimes impact reimbursement."
      }
    ]
  },
  {
    "letter": "R",
    "terms": [
      {
        "term": "Relative Value Units (RVUs)",
        "definition": "Numeric values assigned to CPT services that represent the work, practice expense, and malpractice cost used to calculate reimbursement."
      },
      {
        "term": "Radiology",
        "definition": "The medical specialty that uses imaging techniques, such as X-rays, CT scans, and MRIs, to diagnose and treat diseases."
      },
      {
        "term": "Reasonable and Customary (R & C)",
        "definition": "A standard used by insurers to determine the typical charge for a medical service in a specific geographic area. It sets the maximum amount a payer will reimburse, ensuring payments align with local norms."
      },
      {
        "term": "Rejected Claim",
        "definition": "A claim that is returned by the insurance company because it contains errors (Rejected) or because the service is not covered (Denied)."
      },
      {
        "term": "Registration",
        "definition": "The process of collecting and recording a patient’s personal, demographic, and insurance information before receiving healthcare services."
      },
      {
        "term": "Release of Information",
        "definition": "A patient-authorized consent that allows a healthcare provider to share medical records or health information with third parties, such as insurers, other providers, or legal entities, while complying with privacy laws."
      },
      {
        "term": "Remittance Advice (R/A)",
        "definition": "A document from an insurance payer that details how a claim was processed, including payments, denials, adjustments, and patient responsibility."
      },
      {
        "term": "Remittance Advice Remark Codes (RARCs)",
        "definition": "Standardized codes included on an R/A that explain why a claim was paid, denied, or adjusted, providing clarity for providers to take action or appeal."
      },
      {
        "term": "Respiratory Therapy",
        "definition": "Medical services aimed at evaluating and treating breathing or cardiopulmonary disorders, including oxygen therapy, inhalation treatments, and ventilator management."
      },
      {
        "term": "Responsible Party",
        "definition": "The individual or entity legally accountable for payment of a patient’s medical bills, often the patient, a parent/guardian, or a secondary insurance plan."
      },
      {
        "term": "Retinal Health Screening/Imaging Consent Form",
        "definition": "A patient-signed document that authorizes the provider to perform retinal exams or imaging, ensuring informed consent for the procedure and compliance with privacy and medical standards."
      },
      {
        "term": "Revenue Code",
        "definition": "A four-digit code used on hospital bills to identify the specific department or type of service provided (e.g., 0250 for Pharmacy)."
      },
      {
        "term": "Revenue Cycle Management (RCM)",
        "definition": "The entire financial process used by healthcare facilities to track patient care episodes from registration and appointment scheduling to the final payment of a balance."
      },
      {
        "term": "Relative Value Amount (RVA)",
        "definition": "A value assigned to a medical service based on the resources required to provide it, including the physician’s time, intensity of work, and overhead costs."
      }
    ]
  },
  {
    "letter": "S",
    "terms": [
      {
        "term": "Secondary Insurance",
        "definition": "An additional insurance policy that covers healthcare expenses not paid for by the primary insurance. Secondary Insurance Claim A claim submitted to a secondary insurance plan after the primary payer has processed the claim. It is used to cover remaining patient responsibility between multiple insurers."
      },
      {
        "term": "Self-Insurance",
        "definition": "A health coverage arrangement in which an individual, employer or organization assumes the financial risk of providing medical benefits to employees or members, paying claims directly rather than purchasing a fully insured plan from an insurance company."
      },
      {
        "term": "Self-Pay",
        "definition": "A status where a patient is responsible for paying the full cost of their medical services, either because they do not have insurance or because they are choosing not to use it."
      },
      {
        "term": "Signature on File (SOF)",
        "definition": "A notation on a medical claim indicating that the provider has the patient’s written permission on file to bill the insurance company and receive payment directly."
      },
      {
        "term": "Skilled Nursing Facility",
        "definition": "A healthcare facility that provides 24-hour nursing care and rehabilitation services for patients recovering from illness, injury, or surgery, often requiring skilled nursing, physical therapy, or occupational therapy, typically after a hospital stay."
      },
      {
        "term": "Software as a Service (SAAS)",
        "definition": "Cloud-based software used by medical offices for billing or records that is accessed via the internet rather than being installed on local computers."
      },
      {
        "term": "Source of Admission",
        "definition": "A code used on hospital claims to indicate where the patient was before being admitted (e.g., from the Emergency Room, a transfer from another hospital, or a physician referral)."
      },
      {
        "term": "Supplemental Insurance",
        "definition": "An extra insurance policy that covers expenses that your primary insurance does not, such as “Medigap” for Medicare users or specific “Accident” or “Cancer” policies."
      },
      {
        "term": "Supplemental or Secondary Claim Form",
        "definition": "A supplemental claim form is the document used to request payment from tsecondary insurance policy designed to pay for costs not covered by a primary plan"
      }
    ]
  },
  {
    "letter": "T",
    "terms": [
      {
        "term": "Telehealth",
        "definition": "The delivery of healthcare services, including consultations and diagnosis, via remote telecommunications technology (such as video calls or secure messaging) rather than an in-person visit."
      },
      {
        "term": "Termination Date",
        "definition": "The specific date on which a patient’s insurance coverage ends."
      },
      {
        "term": "Third Party Administrator (TPA)",
        "definition": "An organization that processes insurance claims and manages employee benefit plans for a separate entity, such as a self-insured company."
      },
      {
        "term": "Type of Service (TOS)",
        "definition": "Type of Service (TOS) is a claim-level classification that identifies the category of healthcare service provided (such as inpatient, outpatient, emergency, laboratory, or pharmacy services) and is used to apply benefit coverage, pricing logic, and reimbursement rules during claims adjudication."
      }
    ]
  },
  {
    "letter": "U",
    "terms": [
      {
        "term": "Usual, Customary, and Reasonable (UCR)",
        "definition": "A benchmark amount insurers use for out-of-network claims based on typical charges for a service in a geographic area."
      },
      {
        "term": "UB-92",
        "definition": "UB-92 is a standardized institutional claim form (also known as CMS-1450) formerly used to bill hospital and facility-based services to Medicare, Medicaid, and commercial payers, and served as the predecessor to the UB-04, which is the current required form."
      },
      {
        "term": "Unbundling",
        "definition": "The illegal or incorrect practice of billing multiple codes for parts of a procedure that should be grouped together under a single “comprehensive” code."
      },
      {
        "term": "Uncovered Charges",
        "definition": "Services or items that insurance does not pay for, so the patient is responsible for the cost. Uninsured patient A patient who does not have health insurance, making them responsible for the full cost of care."
      },
      {
        "term": "Units of Service",
        "definition": "The count of how many times a service or procedure was provided (e.g., number of lab tests, therapy sessions, or injections)."
      },
      {
        "term": "Upcoding",
        "definition": "An unethical practice where a provider submits a code for a more complex or expensive service than what was actually performed in order to receive a higher payment."
      },
      {
        "term": "Unique Physician Identification Number (UPIN)",
        "definition": "A unique ID assigned to each physician in the U.S. (used by Medicare) to track services and claims."
      },
      {
        "term": "Utilization Limit",
        "definition": "The maximum number of times a service or procedure will be covered by insurance within a set period"
      },
      {
        "term": "Utilization Review (UR)",
        "definition": "A review conducted by insurance companies to determine if the use of medical services is necessary, appropriate, and efficient. Utilization limits are caps on how many times a service (like physical therapy) can be used."
      }
    ]
  },
  {
    "letter": "V",
    "terms": [
      {
        "term": "V-Codes",
        "definition": "Codes (from ICD-9) used to report reasons for healthcare visits that are not illnesses or injuries, like routine checkups or vaccinations."
      },
      {
        "term": "Visit Number",
        "definition": "A unique number assigned to each patient encounter to track services, billing, and medical records."
      }
    ]
  },
  {
    "letter": "W",
    "terms": [
      {
        "term": "Worker’s Compensation",
        "definition": "A form of insurance providing wage replacement and medical benefits to employees injured in the course of employment."
      },
      {
        "term": "Write-Off / Adjustment Amount",
        "definition": "The portion of a medical bill that the provider agrees to “cancel” or not collect, usually due to a contract with an insurance company or a financial assistance policy."
      }
    ]
  },
  {
    "letter": "X",
    "terms": [
      {
        "term": "X-modifier (X{EPSU} modifiers)",
        "definition": "Medicare’s HCPCS modifiers XE, XS, XP, XU used to explain why services should be paid separately instead of bundled."
      },
      {
        "term": "X-ray (Diagnostic Radiology Service)",
        "definition": "Often billed with CPT imaging codes (e.g., 7xxxx series) and commonly requires correct diagnosis linkage, modifier use (-TC / -26), and documentation for medical necessity."
      }
    ]
  },
  {
    "letter": "Y",
    "terms": [
      {
        "term": "Yearly Deductible",
        "definition": "The Deductible is the amount the patient pays before insurance starts paying."
      },
      {
        "term": "Yearly Out-of-Pocket Maximum",
        "definition": "The Out-of-Pocket Maximum is the absolute limit a patient will pay in a year before insurance covers everything at 100%."
      }
    ]
  },
  {
    "letter": "Z",
    "terms": [
      {
        "term": "Z-Codes",
        "definition": "The ICD-10 equivalent of V-Codes, used to document encounters for preventive care, screenings, or other non-disease reasons, that is the purpose of visit."
      }
    ]
  }
];
