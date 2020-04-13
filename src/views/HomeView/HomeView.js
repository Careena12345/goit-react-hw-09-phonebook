import React from "react";
import withAuth from "../../components/hoc/withAuth";
import Section from "../../components/Section";
import PropTypes from "prop-types";

const HomeView = ({ name }) => (
  <>
    <Section title="MakeUp">
      <p>
        Der Onlineshop MakeUp hat sich sehr schnell zu einem der führenden auf
        dem europäischen Markt entwickelt. Wir möchten Ihnen nicht nur das
        schnelle und bequeme Einkaufen erleichtern, sondern auch eine neue Welt
        der Parfums und Kosmetik speziell für Sie eröffnen. Wir wissen, dass
        unsere Kunden die Qualität und Authentizität der von uns angebotenen
        Produkte schätzen. Und wir garantieren es! MakeUp arbeitet direkt mit
        den offiziellen Markenvertretern in der Europäischen Union zusammen, um
        die besten Preise zu erzielen.
      </p>
    </Section>
  </>
);

HomeView.propTypes = {
  name: PropTypes.string,
};

export default withAuth(HomeView);
