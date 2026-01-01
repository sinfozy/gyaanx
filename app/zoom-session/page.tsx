// app/zoom-session/page.tsx
import Script from "next/script";
import ZoomMeeting from "@/components/ZoomMeeting";

export default function Page({ searchParams }: any) {
  return (
    <>
      {/* Strategy MUST be beforeInteractive or afterInteractive */}
      <Script 
        src="https://source.zoom.us/3.11.0/lib/embedded.min.js" 
        strategy="beforeInteractive" 
      />
      
      <main>
        <ZoomMeeting 
          meetingNumber={searchParams.id}
          passWord={searchParams.pass}
          signature={searchParams.sig}
          userName={searchParams.name}
          userEmail="student@gyaanx.eu"
          sdkKey={process.env.NEXT_PUBLIC_ZOOM_SDK_KEY!}
          role={parseInt(searchParams.role)}
        />
      </main>
    </>
  );
}