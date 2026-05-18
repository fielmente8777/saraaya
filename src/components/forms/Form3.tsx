"use client";

import useBookingForm from "@/hooks/useBookingForm";
import { countries } from "@/utils/constent";
import { ArrowUpIcons, FromDropDown } from "@/utils/icons";

const Form3 = () => {
  const {
    isSubmitting,
    errors,
    handleSubmit,
    formData,
    handleChange,
    setFieldValue,
  } = useBookingForm({
    includeMessage: true,
    onSubmitSuccess: () => {},
  });
  const formFields = [
    {
      name: "name",
      label: "Full Name*",
      type: "text",
      value: formData.name,
      onChange: handleChange,
    },
    {
      name: "phone",
      label: "Mobile Number",
      type: "tel",
      value: formData.phone,
      onChange: handleChange,
    },
    {
      name: "email",
      label: "Email ID",
      type: "email",
      value: formData.email,
      onChange: handleChange,
    },
    {
      name: "message",
      label: "Tell us something about your enquiry!",
      type: "textarea",
      value: formData.message,
      onChange: handleChange,
    },
  ];
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {formFields.map((field, index) => (
        <>
          {field.type === "textarea" ? (
            <textarea
              key={index}
              name={field.name}
              placeholder={field.label}
              rows={4}
              className="p-4 border border-[#D7D7D7] rounded-lg w-full placeholder:text-[#7F7F7F] focus:outline-none text-p2 resize-none"
              value={field.value}
              onChange={field.onChange}
            ></textarea>
          ) : field.type === "tel" ? (
            <div className="flex w-full" key={index}>
              <div className="relative">
                <select
                 className="h-full min-w-[110px] py-4 ps-4 border-y border-x rounded-l-lg cursor-pointer border-[#D7D7D7] appearance-none focus:outline-none"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={(e) => setFieldValue("countryCode", e.target.value)}
                  style={{ width: `${formData.countryCode.length * 3}ch` }}
                  aria-label="Country Code"
                >
                  {countries.map((country, index) => (
                    <option
                      key={index}
                      value={country.code}
                      className="rounded-lg"
                    >
                      {country.code} {country.name}
                    </option>
                  ))}
                </select>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  <FromDropDown />
                </span>
              </div>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.label}
                className="p-4 border-y border-r border-[#D7D7D7] rounded-r-lg w-full placeholder:text-[#7F7F7F] focus:outline-none text-p2"
                value={field.value}
                onChange={field.onChange}
              />
            </div>
          ) : (
            <input
              key={index}
              type={field.type}
              name={field.name}
              placeholder={field.label}
              className="p-4 border border-[#D7D7D7] rounded-lg w-full placeholder:text-[#7F7F7F] focus:outline-none text-p2"
              value={field.value}
              onChange={field.onChange}
            />
          )}

          {errors[field.name] && (
            <p className="text-red-500">{errors[field.name]}</p>
          )}
        </>
      ))}
      <button
        type="submit"
        className="w-full rounded-lg bg-secondary py-5 text-white"
      >
        {isSubmitting ? (
          "Submitting..."
        ) : (
          <span className="flex w-full items-center justify-center gap-2.5">
            GET A CALL BACK{" "}
            <span>
              <ArrowUpIcons />
            </span>{" "}
          </span>
        )}
      </button>
    </form>
  );
};

export default Form3;
