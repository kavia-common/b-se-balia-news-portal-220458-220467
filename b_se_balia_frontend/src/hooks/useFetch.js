import { useEffect, useRef, useState } from 'react';

/**
 * PUBLIC_INTERFACE
 * useFetch abstracts async fetching with cancellation and retry.
 */
export function useFetch(asyncFn, deps = [], { retries = 0, initial = null } = {}) {
  const [data, setData] = useState(initial);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const abortRef = useRef();

  useEffect(() => {
    let active = true;
    const controller = new AbortController();
    abortRef.current = controller;
    let attempts = 0;

    const run = async () => {
      setLoading(true);
      setError(null);
      while (attempts <= retries) {
        try {
          const result = await asyncFn({ signal: controller.signal });
          if (!active) return;
          setData(result);
          setLoading(false);
          return;
        } catch (e) {
          if (!active) return;
          attempts += 1;
          if (controller.signal.aborted) {
            setLoading(false);
            return;
          }
          if (attempts > retries) {
            setError(e);
            setLoading(false);
            return;
          }
        }
      }
    };

    run();
    return () => {
      active = false;
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, error, loading, refetch: () => {} };
}
