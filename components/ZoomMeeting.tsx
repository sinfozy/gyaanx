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
  const meetingSDKElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent double initialization in React Strict Mode
    if (isInitialized.current) return;

    const startMeeting = async () => {
      // Check if Zoom script is loaded on window
      if (typeof window !== "undefined" && (window as any).ZoomMtgEmbedded) {
        try {
          const client = (window as any).ZoomMtgEmbedded.createClient();
          
          // 1. Initialize the client
          await client.init({
            zoomAppRoot: meetingSDKElementRef.current,
            language: "en-US",
            patchJsMedia: true,
            leaveUrl: window.location.origin + "/dashboard", // Redirects back after meeting ends
          });

          // 2. Join the meeting
          await client.join({
            sdkKey: sdkKey,
            signature: signature,
            meetingNumber: meetingNumber,
            password: passWord,
            userName: userName,
            userEmail: userEmail,
          });

          console.log("✅ GyaanX Neural Bridge Established");
          isInitialized.current = true;
        } catch (error: any) {
          console.error("❌ Zoom Connection Error:", error);
          // If signature is the issue, it usually fails here
          if (error.type === "INVALID_PARAMETERS") {
            alert("Meeting Details Invalid. Please try again from Dashboard.");
          }
        }
      }
    };

    // Small delay to ensure the DOM element ref is attached
    const timer = setTimeout(() => {
      startMeeting();
    }, 100);

    return () => clearTimeout(timer);
  }, [meetingNumber, passWord, userName, signature, sdkKey, userEmail]);

  return (
    <div className="w-screen h-screen bg-black overflow-hidden">
      {/* Zoom mounts the UI inside this div */}
      <div 
        ref={meetingSDKElementRef} 
        id="meetingSDKElement" 
        className="w-full h-full"
      ></div>
      
      {/* Critical CSS for Zoom Embedded SDK */}
      <style jsx global>{`
        /* Hide the legacy global root that causes black overlays */
        #zmmtg-root { 
          display: none !important; 
        } 
        
        /* Force the embedded container to fill the screen */
        .meeting-client-pro-container { 
          width: 100% !important; 
          height: 100% !important; 
          position: fixed !important;
          top: 0;
          left: 0;
        }

        /* Ensure the video canvas expands */
        canvas {
          width: 100% !important;
          height: 100% !important;
        }
      `}</style>
    </div>
  );
};

export default ZoomMeeting;