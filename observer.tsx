import React, { useContext, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

type IndicatorContextType = {
  setLoading: (isLoading: boolean) => void;
};

const IndicatorContext = React.createContext<IndicatorContextType | undefined>(undefined);

function IndicatorProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setLoading] = React.useState(false);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const indicatorNode = indicatorRef.current;

    if (indicatorNode) {
      if (isLoading) {
        indicatorNode.style.display = 'block';
      } else {
        indicatorNode.style.display = 'none';
      }
    }
  }, [isLoading]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      ReactDOM.flushSync(() => {
        const indicatorNode = indicatorRef.current;

        if (indicatorNode) {
          if (isLoading) {
            indicatorNode.style.display = 'block';
          } else {
            indicatorNode.style.display = 'none';
          }
        }
      });
    });

    observer.observe(indicatorRef.current, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <IndicatorContext.Provider value={{ setLoading }}>
      {children}
      <div ref={indicatorRef} className="indicator" />
    </IndicatorContext.Provider>
  );
}

function Indicator() {
  return <div className="indicator" />;
}

function Page1() {
  const { setLoading } = useContext(IndicatorContext)!;

  const heavyProcess = async () => {
    // 模拟耗时操作
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  useEffect(() => {
    setLoading(true);
    heavyProcess().finally(() => {
      setLoading(false);
    });
  }, [setLoading]);

  return <div>Page1</div>;
}

function App() {
  return (
    <IndicatorProvider>
      <Page1 />
    </IndicatorProvider>
  );
}

export default App;
