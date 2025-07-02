"use client"

import { useEffect } from "react"
import Script from "next/script"

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    hbspt: any
  }
}

export default function Analytics() {
  useEffect(() => {
    // HubSpot tracking code initialization
    if (typeof window !== "undefined" && window.hbspt) {
      window.hbspt.forms.create({
        region: "na1", // Update with your HubSpot region
        portalId: "YOUR_HUBSPOT_PORTAL_ID", // Replace with your actual Portal ID
        formId: "YOUR_HUBSPOT_FORM_ID", // Replace with your actual Form ID
      })
    }
  }, [])

  return (
    <>
      {/* Google Analytics 4 */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: document.title,
            page_location: window.location.href,
          });
          
          // Enhanced ecommerce tracking for form submissions
          function trackFormSubmission(formName, formLocation) {
            gtag('event', 'form_submit', {
              event_category: 'engagement',
              event_label: formName,
              form_location: formLocation,
              value: 1
            });
          }
          
          // Lead scoring events
          function trackLeadScoringEvent(action, category, value) {
            gtag('event', action, {
              event_category: category,
              value: value,
              custom_parameter_1: 'lead_scoring'
            });
          }
          
          // Make functions globally available
          window.trackFormSubmission = trackFormSubmission;
          window.trackLeadScoringEvent = trackLeadScoringEvent;
        `}
      </Script>

      {/* HubSpot Tracking Code */}
      <Script id="hubspot-analytics" strategy="afterInteractive" src="//js.hs-scripts.com/YOUR_HUBSPOT_PORTAL_ID.js" />
    </>
  )
}
