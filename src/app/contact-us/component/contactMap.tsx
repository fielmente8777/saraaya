import LazyLoadedMap from "@/components/map/LazyLoadedMap";

type Props = {
  mapUrl: string;
};

export default function ContactMap({ mapUrl }: Props) {
  return (
    <div className="w-full md:aspect-4/2.25 aspect-[1.61] overflow-hidden">
      <LazyLoadedMap src={mapUrl} />
    </div>
  );
}