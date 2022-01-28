// @ts-nocheck
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';


function ScrollToTop({ history, body }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      if (body?.current) { body.current.scrollTo(0, 0); }
    });
    return () => {
      unlisten();
    };
  }, [body, history]);

  return null;
}

export default withRouter(ScrollToTop);
