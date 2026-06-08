import { useEffect, useRef, useState } from 'react';
import { BrowserMultiFormatReader } from '@zxing/browser';

const BarcodeScanner = ({ onDetected }) => {
  const videoRef = useRef(null);
  const [error, setError] = useState('');
  const controlsRef = useRef(null);
  const hasScanned = useRef(false);

  useEffect(() => {
    let active = true;
    const codeReader = new BrowserMultiFormatReader();

    const start = async () => {
      try {
        controlsRef.current = await codeReader.decodeFromVideoDevice(
          null,
          videoRef.current,
          (result, err) => {
            if (!active) return;
            if (err) return; // ignore les erreurs normales
            if (result && !hasScanned.current) {
              const text = result.getText();
              if (text && text.trim()) {
                hasScanned.current = true;
                onDetected(text);
                // Arrêter le flux après un scan
                if (controlsRef.current && typeof controlsRef.current.stop === 'function') {
                  controlsRef.current.stop();
                }
              }
            }
          }
        );
      } catch (err) {
        console.error(err);
        setError('Impossible d’accéder à la caméra');
      }
    };

    start();

    return () => {
      active = false;
      if (controlsRef.current && typeof controlsRef.current.stop === 'function') {
        controlsRef.current.stop();
      }
    };
  }, [onDetected]);

  if (error) return <div className="error">{error}</div>;

  return (
    <video
      ref={videoRef}
      style={{ width: '100%', maxWidth: '400px', border: '1px solid #ccc' }}
    />
  );
};

export default BarcodeScanner;