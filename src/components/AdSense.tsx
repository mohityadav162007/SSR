import { useEffect } from "react";

interface AdSenseProps {
  adSlot: string;
  adFormat?: "auto" | "rectangle" | "horizontal" | "vertical";
  className?: string;
}

const AdSense = ({ adSlot, adFormat = "auto", className = "" }: AdSenseProps) => {
  useEffect(() => {
    try {
      // Push the ad when the component mounts
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with your publisher ID
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSense;

// Extend Window interface for TypeScript
declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}
