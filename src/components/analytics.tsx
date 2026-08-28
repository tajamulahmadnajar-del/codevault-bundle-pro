import { GOOGLE_ANALYTICS_ID, META_PIXEL_ID } from "@/lib/codevault";

/**
 * Analytics loader. Replace META_PIXEL_ID / GOOGLE_ANALYTICS_ID in
 * src/lib/codevault.ts with real IDs — the scripts activate automatically.
 */
export function Analytics() {
  const gaReady = GOOGLE_ANALYTICS_ID !== "GOOGLE_ANALYTICS_ID";
  const pixelReady = META_PIXEL_ID !== "META_PIXEL_ID";

  if (!gaReady && !pixelReady) return null;

  return (
    <>
      {gaReady && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GOOGLE_ANALYTICS_ID}');`,
            }}
          />
        </>
      )}
      {pixelReady && (
        <>
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      )}
    </>
  );
}
