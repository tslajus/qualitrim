import useMediaQuery, { portSize } from "@/hooks/useMediaQuery";

function FooterContacts({ data }: NavData) {
  const isSmallScren = useMediaQuery(portSize.tabPort);

  return (
    <div className="footer__contacts paragraph paragraph--light color--primary">
      {!isSmallScren && (
        <h5 className="link link--no-hover">{data.contacts.heading}</h5>
      )}

      <span>{data.contacts.adress}</span>
      <div className="footer__contacts--links ">
        <a href={`tel:${data.contacts.number}`}>{data.contacts.number}</a>
        <a href={`mailto:${data.contacts.email}`}>{data.contacts.email}</a>
      </div>
    </div>
  );
}

export default FooterContacts;
