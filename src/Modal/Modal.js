import React from "react";

import { Tearsheet } from "@carbon/ibm-cloud-cognitive";

import EarthlyThingTile from "../EarthlyThingTile/EarthlyThingTile";

import _ from "lodash";

import "./styles.scss";

const Modal = (props) => {

  return (
      <Tearsheet
        actions={[
          { kind: "secondary", label: "Close", onClick: () => ({})},
          { kind: "primary", label: "Apply", onClick: () => ({})}
        ]}
        closeIconDescription="Close the tearsheet"
        onClose={() => props.setIsModalOpen(false)}
        open={(props.isModalOpen) === true}
        title="Earthly Things"
      >
        <section className="tearsheet-example__dummy-content-block">
          {/* Array of earthly things goes here */}
        </section>
      </Tearsheet>
  );
};

export default Modal;