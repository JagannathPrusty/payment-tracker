import { useEffect, useState } from "react";

function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPopup(true); // show popup automatically
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const installApp = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("App installed");
    }

    setDeferredPrompt(null);
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div style={popupStyle}>
      <div style={boxStyle}>
        <h3>Install Budget Tracker</h3>
        <p>Add this app to your device for a better experience.</p>

        <button onClick={installApp} style={installBtn}>
          Install
        </button>

        <button onClick={() => setShowPopup(false)} style={cancelBtn}>
          Cancel
        </button>
      </div>
    </div>
  );
}

const popupStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999
};

const boxStyle = {
  background: "white",
  padding: "30px",
  borderRadius: "10px",
  textAlign: "center"
};

const installBtn = {
  padding: "10px 20px",
  margin: "10px",
  background: "#d4af37",
  border: "none",
  color: "white",
  cursor: "pointer"
};

const cancelBtn = {
  padding: "10px 20px",
  margin: "10px",
  background: "gray",
  border: "none",
  color: "white",
  cursor: "pointer"
};

export default InstallButton;