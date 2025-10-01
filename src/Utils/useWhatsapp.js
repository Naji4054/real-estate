import { useCallback } from "react";

const whatsappNumber = "919048415488";
// create a custom hook to resue useWhatsapp()

export default function useWhatsapp() {
    //inside the useCallback pass the parameters propertyId, propertyTiltle, propertyCategory
    const redirectToWhatsapp = useCallback((propertyId, propertyTiltle, propertyCategory) => {
        //use the parameters dynamically to be updated from the parent page
        const message = `Hello iam interested in the ${propertyTiltle} in the ${propertyCategory} category. Can you share more details? (PropertyID :${propertyId} )`;
        const encodedMessage = encodeURIComponent(message);
        //whatsapp url here
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        //opoen whatsapp in a new tab
        window.open(whatsappUrl,'_blank')
    },[])
    // return the usecallback function
    return redirectToWhatsapp;
}