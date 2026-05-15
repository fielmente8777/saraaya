import Form3 from "@/components/forms/Form3";

type Props = {
  enquiryForm: {
    title: string;
    subtitle: string;
    privacyNote: string;
  };
};

export default function ContactForm({ enquiryForm }: Props) {
  return (
    <div className="w-full max-w-[1100px] rounded-[16px] border border-white/30 bg-background/70 p-10 md:p-14 backdrop-blur-sm flex flex-col gap-8">

      {/* Header */}
      <div className="flex flex-col gap-2">
       <div className="flex items-center gap-3 text-secondary">
  <span className="h-px w-10 bg-current" />
        <h2 className="font-body text-[14px] leading-[22px] tracking-[0.1em] uppercase text-secondary">
          
          {enquiryForm.title}
        </h2>
        </div>

        <p className="font-primary text-[40px] leading-[48px] text-primary">
          {enquiryForm.subtitle}
        </p>

      </div>

      {/* Form */}
      <Form3 />

    </div>
  );
}