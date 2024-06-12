import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import './SignaturePad.css';

const SignaturePad = () => {
  const sigCanvas = useRef(null);

  const clearCanvas = () => {
    sigCanvas.current.clear();
  };

  const isCanvasEmpty = () => {
    return sigCanvas.current.isEmpty();
  };

  const saveSignature = () => {
    if (isCanvasEmpty()) {
      alert("First Draw Your Sign Then Save It");
      return;
    }
    const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "signature.png";
    link.click();
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 bg-white">
      <div className="text-3xl mb-4 font-mono text-black">
        Signature App
      </div>
      <div className="border-2 border-black w-full max-w-4xl h-64 sm:h-auto" style={{ aspectRatio: '2 / 1' }}>
        <SignatureCanvas
          penColor="black"
          canvasProps={{ className: "w-full h-full" }}
          ref={sigCanvas}
        />
      </div>
      <div className="flex flex-col sm:flex-row w-full max-w-4xl gap-3 mt-4">
        <button
          onClick={clearCanvas}
          className="bg-gray-200 text-black text-lg py-2 sm:py-3 w-full sm:w-auto sm:flex-1"
        >
          Clear
        </button>
        <button
          onClick={saveSignature}
          className="bg-blue-600 text-white text-lg py-2 sm:py-3 w-full sm:w-auto sm:flex-1"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SignaturePad;
