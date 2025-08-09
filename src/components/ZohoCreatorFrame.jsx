export default function ZohoCreatorFrame() {
  // Internal (authenticated) Zoho Creator report URL provided by you:
  const url =
    "https://creatorapp.zoho.com/nutreevit/property-management-system#Report:Draw_Schedule_Report1";

  return (
    <div className="w-full h-[80vh] rounded-2xl overflow-hidden shadow border border-gray-200 bg-white">
      <iframe
        title="Zoho Creator - Draw Schedule"
        src={url}
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
