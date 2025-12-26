"use client";
import React, { useEffect, useRef } from "react";

interface ZoomProps {
  meetingNumber: string;
  passWord: string;
  userName: string;
  userEmail: string;
  signature: string;
  sdkKey: string;
  role: number;
}

const ZoomMeeting = ({ meetingNumber, passWord, userName, userEmail, signature, sdkKey, role }: ZoomProps) => {
  const isInitialized = useRef(false);

  useEffect(() => {
    const initMeeting = async () => {
      if (isInitialized.current) return;

      const checkZoom = setInterval(async () => {
        // @ts-ignore
        if (typeof window !== "undefined" && window.ZoomMtgEmbedded) {
          clearInterval(checkZoom);
          
          try {
            // @ts-ignore
            const client = window.ZoomMtgEmbedded.createClient();
            const meetingSDKElement = document.getElementById("meetingSDKElement");

            if (!meetingSDKElement) return;

            await client.init({
              zoomAppRoot: meetingSDKElement,
              language: "en-US",
              patchJsMedia: true,
              leaveUrl: window.location.origin + "/dashboard",
            });

            // Join call with Error catching
            const joinResponse = await client.join({
              sdkKey: sdkKey,
              signature: signature,
              meetingNumber: meetingNumber,
              password: passWord,
              userName: userName,
              userEmail: userEmail,
            });

            console.log("✅ Joined Successfully:", joinResponse);
            isInitialized.current = true;

          } catch (error: any) {
            console.error("❌ Zoom Error Details:", error);
            // अगर कोई एरर आता है तो स्क्रीन पर अलर्ट दिखेगा
            alert(`Zoom Connection Error: ${error.reason || "Invalid Meeting ID or Signature"}`);
          }
        }
      }, 1000);
      return () => clearInterval(checkZoom);
    };

    initMeeting();
  }, [meetingNumber, passWord, userName, signature, sdkKey, userEmail, role]);

  return (
    <div className="w-full h-[650px] bg-black rounded-[2.5rem] overflow-hidden shadow-2xl relative border-4 border-slate-900">
      {/* Zoom specifically needs this wrapper to have 100% height */}
      <div id="meetingSDKElement" className="w-full h-full min-h-[600px]"></div>
      
      <style jsx global>{`
        #zmmtg-root { display: none; } /* Hide the default global root if it appears */
        .meeting-client-pro-container { width: 100% !important; height: 100% !important; position: relative !important; }
      `}</style>
    </div>
  );
};

export default ZoomMeeting;