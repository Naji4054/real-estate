import { useCallback } from "react";

const whatsappNumber = "919048415488";
export default function useWhatsapp() {
    const redirectToWhatsapp = useCallback((propertyId, propertyTiltle, propertyCategory) => {
        const message = `Hello iam interested in the ${propertyTiltle} in the ${propertyCategory} category. Can you share more details? (PropertyID :${propertyId} )`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl,'_blank')
    },[])

    return redirectToWhatsapp;
}