import React from 'react';

import { CriteriaWeights } from '../../model/maturity';
import { TechnologyTypesEnum } from '../../model/technology';
import { filterTechnologies } from '../../services/technology';

type Props = {
  selectedKinds: TechnologyTypesEnum[],
  criteriaWeights: CriteriaWeights,
  requiredCriteria: string[]
}

class StepThree extends React.Component<Props> {

  public render() {
    const results = filterTechnologies(
      this.props.selectedKinds,
      this.props.criteriaWeights,
      this.props.requiredCriteria
    )

    return (
      <>
        <p>{JSON.stringify(results)}</p>
      </>
    );
  }
  
}

export default StepThree;