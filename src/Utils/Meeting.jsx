import { useEffect, useCallback, useState } from "react";

// The Calendly script needs to be loaded only once
const loadCalendlyScript = (setScriptLoaded) => {
  if (document.getElementById('calendly-widget-script')) {
    setScriptLoaded(true); // Already present
    return;
  }
  
  const script = document.createElement("script");
  script.id = 'calendly-widget-script'; 
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;

  // Add event listener for when the script finishes loading
  script.onload = () => {
    setScriptLoaded(true);
  };

  document.body.appendChild(script);
};

export default function useCalendlyPopup({ calendlyLink }) { // Renamed to a hook
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // 1. Load the script and set state when done
  useEffect(() => {
    loadCalendlyScript(setScriptLoaded);
  }, []);

  // 2. Function to open the Calendly popup
  const openPopup = useCallback(() => {
    if (scriptLoaded && window.Calendly) {
      window.Calendly.initPopupWidget({ url: calendlyLink });
    } else {
      // If still not loaded, fall back to opening in a new tab
      window.open(calendlyLink, '_blank');
      console.warn("Calendly script was not loaded yet, opened in new tab.");
    }
  }, [calendlyLink, scriptLoaded]); // Dependency on scriptLoaded state

  // Return the popup function
  return openPopup;
}