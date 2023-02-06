import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getContactById } from "../data/items";

const ContactRoute = () => {
  const params = useParams();

  const contact = useMemo(() => getContactById(params.contactId), [params.contactId]);

  if (!contact) {
    throw new Error('El contacto no existe');
  }

  return (
    <div>
      <label>name: {contact.name}</label>
      <label>phone: {contact.telephone}</label>
    </div>
  );
};

export default ContactRoute;