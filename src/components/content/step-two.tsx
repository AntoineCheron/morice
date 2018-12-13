import React from 'react';

import { TechnologyTypesEnum } from '../../model/technology';

type Props = {
  selectedKinds: TechnologyTypesEnum[]
}

class StepTwo extends React.Component<Props> {

  public render() {
    return (
      <>
        <p>Step two is in building</p>
      </>
    );
  }
  
}

export default StepTwo;