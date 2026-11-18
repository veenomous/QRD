// Choices on the quote form. The form renders them; the API uses the labels in the lead summary.
export const mailTypeOptions = [
  { value: "bills", label: "Bills and invoices" },
  { value: "statements", label: "Statements" },
  { value: "collections", label: "Collection letters" },
  { value: "rent", label: "Rent bills and notices" },
  { value: "other", label: "Something else" },
] as const;

export const volumeOptions = [
  { value: "under-5k", label: "Under 5,000" },
  { value: "5k-25k", label: "5,000 – 25,000" },
  { value: "25k-100k", label: "25,000 – 100,000" },
  { value: "100k-500k", label: "100,000 – 500,000" },
  { value: "500k-plus", label: "500,000+" },
] as const;

export const frequencyOptions = [
  { value: "one-time", label: "One-time" },
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "bi-weekly", label: "Bi-weekly" },
  { value: "monthly", label: "Monthly" },
] as const;

export function optionLabel(
  options: readonly { value: string; label: string }[],
  value: string
) {
  return options.find((o) => o.value === value)?.label ?? value;
}
