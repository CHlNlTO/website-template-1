import { formType } from "@/components/component/ContactCard";

export const sendContactForm = async (data: formType) => fetch("/api/route", {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});