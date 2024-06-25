export const GA_TRACKING_ID = 'G-2W6RTZ05CJ';

export const initGA = () => {

    if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
    
        function gtag() {
          window.dataLayer.push(arguments);
        }
    
    window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_TRACKING_ID);

    }
};