"use client";

import { useEffect } from "react";

export default function HubspotForm() {
  useEffect(() => {
    // Load HubSpot forms script once
    if (!document.querySelector('script[src="//js.hsforms.net/forms/embed/v2.js"]')) {
      const s = document.createElement("script");
      s.src = "//js.hsforms.net/forms/embed/v2.js";
      s.async = true;
      document.body.appendChild(s);

      s.onload = () => {
        if (window.hbspt?.forms?.create) {
          window.hbspt.forms.create({
            region: "na2",
            portalId: "244664666",
            formId: "5eaa0db6-40ef-43e3-b862-669a5c987224",
            target: "#hubspotForm",
          });
        }
      };
    } else {
      // Script already there; just create the form
      if (window.hbspt?.forms?.create) {
        window.hbspt.forms.create({
          region: "na2",
          portalId: "244664666",
          formId: "5eaa0db6-40ef-43e3-b862-669a5c987224",
          target: "#hubspotForm",
        });
      }
    }
  }, []);

  return <div id="hubspotForm" />;
}
