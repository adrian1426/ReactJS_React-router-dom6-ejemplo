import { useParams } from "react-router-dom";

const ContactRoute = () => {
  const params = useParams();

  return (
    <div>
      Contact {params.contactId}
    </div>
  );
};

export default ContactRoute;