import Script from "next/script";
import React from "react";

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-V9QGWH07X8"
      />
      <Script id="gas">
        {`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments)}
					gtag('js', new Date());
					gtag('config', 'G-V9QGWH07X8');
				`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
