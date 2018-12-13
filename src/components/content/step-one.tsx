import React from 'react';

import KindOfTechnologiesSelector from '../kind-of-technologies-selector'
import { TechnologyTypesEnum } from '../../model/technology';
import { classifiedKindOfTechnologies } from '../../services/technology'

type Props = {
  onSave: (selectedKinds: TechnologyTypesEnum[]) => void
}

class StepOne extends React.Component<Props> {

  public render() {
    return (
      <KindOfTechnologiesSelector
        kinds={classifiedKindOfTechnologies}
        onSave={ this.props.onSave.bind(this) }
      />
    );
  }
  
}

export default StepOne;