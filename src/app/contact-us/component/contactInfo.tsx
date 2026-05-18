import { FbIcon, IgIcon, TentIcon, TripIcon } from "@/utils/icons";
import { ReactNode } from "react";

type VisitData = {
  sectionLabel: string;

  title: {
    normal: string;
    highlighted: string;
  };
  links: {
    label: string;
    href: string;
    icon?: React.ElementType;
  }[];
};

type ReservationsData = {
  title: string;
  items: string[];
};

type Props = {
  visitData: VisitData;
  reservationsData: ReservationsData;
};

export default function ContactInfo({ visitData, reservationsData }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 text-secondary">
        <span className="h-px w-10 bg-current" />

        <p className="text-[14px] tracking-[3px] uppercase font-body">
          {visitData.sectionLabel}
        </p>
      </div>

      <h2 className="font-primary text-[48px] font-medium text-primary">
        {visitData.title.normal}{" "}
        <span className="font-primary italic font-normal text-secondary">
          {visitData.title.highlighted}
        </span>
      </h2>

      {/* Contact Links */}
      <ul className="flex flex-col gap-4">
        {visitData.links.map((item, i) => (

          <li key={i} className="font-body text-[18px] text-primary">

            <a href={item.href} className="flex items-center gap-3">
              {item.icon && <item.icon />}

              <span>{item.label}</span>
            </a>
          </li>
        ))}
        <TentIcon />
        <div className="mt-8 flex flex-col gap-10">
          <div className="flex items-center gap-3 text-secondary">
            <span className="h-px w-10 bg-current" />

            <p className="font-body text-[14px] tracking-[3px] uppercase">
              FOLLOW US ON
            </p>
          </div>

          <div className="flex items-center gap-8 text-secondary">
            <FbIcon />
            <IgIcon />
            <TripIcon />
          </div>
        </div>
      </ul>
    </div>
  );
}
