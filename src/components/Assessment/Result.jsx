import React from "react";
import { useSelector } from "react-redux";
import { selectDetails } from "../../store/userSlice"; 
import './assessment.css';

const Result = () => {
  const details = useSelector(selectDetails); 

  return (
    <div className="container mt-5 p-4 border rounded shadow mbcont">
      <h2 className="mb-4">Zusammenfassung</h2>

      <div className="row gy-4">
        {details.salutation && (
          <div className="col-md-6">
            <strong>Anrede:</strong> {details.salutation}
          </div>
        )}

        {details.firstName && (
          <div className="col-md-6">
            <strong>Vorname/n:</strong> {details.firstName}
          </div>
        )}

        {details.lastName && (
          <div className="col-md-6">
            <strong>Nachname:</strong> {details.lastName}
          </div>
        )}

        {details.otherNames && (
          <div className="col-md-6">
            <strong>Andere Name/n:</strong> {details.otherNames}
          </div>
        )}

        {details.documentType && (
          <div className="col-md-6">
            <strong>Ausweiss- oder Aufenthaltsdokument:</strong> {details.documentType}
          </div>
        )}

        {details.documentNumber && (
          <div className="col-md-6">
            <strong>Nummer des Dokuments:</strong> {details.documentNumber}
          </div>
        )}

        {details.nationality && (
          <div className="col-md-6">
            <strong>Staatsangehörigkeit:</strong> {details.nationality}
          </div>
        )}

        {details.ethnicity && (
          <div className="col-md-6">
            <strong>Ethnische Zugehörigkeit:</strong> {details.ethnicity}
          </div>
        )}

        {details.religion && (
          <div className="col-md-6">
            <strong>Religion:</strong> {details.religion}
          </div>
        )}

        {details.bornInGermany && (
          <div className="col-md-6">
            <strong>Bist du in Deutschland geboren?</strong> {details.bornInGermany === "ja" ? "Ja" : "Nein"}
          </div>
        )}

        {details.hasBirthCertificate && (
          <div className="col-md-6">
            <strong>Hast du eine Geburtsurkunde?</strong> {details.hasBirthCertificate === "ja" ? "Ja" : "Nein"}
          </div>
        )}

        {details.geburtsort && (
          <div className="col-md-6">
            <strong>Geburtsort:</strong> {details.geburtsort}
          </div>
        )}

        {details.birthDocumented && (
          <div className="col-md-6">
            <strong>Wurde die Geburt dokumentiert?</strong> {details.birthDocumented === "ja" ? "Ja" : "Nein"}
          </div>
        )}

        {details.currentNationality && (
          <div className="col-md-6">
            <strong>Hast du gerade eine Staatsangehörigkeit?</strong> {details.currentNationality === "ja" ? "Ja" : "Nein"}
          </div>
        )}

        {details.attributedNationality && (
          <div className="col-md-6">
            <strong>Wurde dir eine Staatsangehörigkeit zugeschrieben?</strong> {details.attributedNationality === "ja" ? "Ja" : "Nein"}
          </div>
        )}

        {details.everHadNationality && (
          <div className="col-md-6">
            <strong>Hattest du jemals eine Staatsangehörigkeit?</strong> {details.everHadNationality}
          </div>
        )}

        {details.revokedNationalityDetails && (
          <div className="col-md-6">
            <strong>Wenn ja, warum wurde sie dir entzogen?</strong> {details.revokedNationalityDetails}
          </div>
        )}

        {details.applicationCountry && (
          <div className="col-md-6">
            <strong>Land des Antrags:</strong> {details.applicationCountry}
          </div>
        )}

        {details.applicationDate && (
          <div className="col-md-6">
            <strong>Datum des Antrags:</strong> {details.applicationDate}
          </div>
        )}

        {details.decision && (
          <div className="col-md-6">
            <strong>Entscheidung:</strong> {details.decision}
          </div>
        )}

        {details.statelessInOtherCountry && (
          <div className="col-md-6">
            <strong>Gilst du in einem anderen Land als staatenlos?</strong> {details.statelessInOtherCountry === "ja" ? "Ja" : "Nein"}
          </div>
        )}

        {details.hasDocument && (
          <div className="col-md-6">
            <strong>Hast du ein Dokument, das deine Staatenlosigkeit nachweist?</strong> {details.hasDocument === "ja" ? "Ja" : "Nein"}
          </div>
        )}

        {details.triedToObtainProof && (
          <div className="col-md-6">
            <strong>Hast du bereits versucht, einen Nachweis zu erlangen?</strong> {details.triedToObtainProof === "ja" ? "Ja" : "Nein"}
          </div>
        )}

        {details.statelessReason && (
          <div className="col-md-12">
            <strong>Warum bist du staatenlos?</strong> {details.statelessReason}
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
