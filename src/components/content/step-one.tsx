import React from 'react';
import { Row, Col } from 'antd';

import KindOfTechnologiesSelector from '../kind-of-technologies-selector';
import { TechnologyTypesEnum } from '../../model/technology';
import { classifiedKindOfTechnologies } from '../../services/technology-data';

type Props = {
  onSave: (selectedKinds: TechnologyTypesEnum[]) => void
}

class StepOne extends React.Component<Props> {

  public render() {
    return (
      <>
        <Row>
          <Col span={24}>
            <h1>1. Kind of technologies</h1>
            <p>Please select the kind of technologies you are looking for.</p>
          </Col>
        </Row>

        <KindOfTechnologiesSelector
          kinds={classifiedKindOfTechnologies}
          onSave={ this.props.onSave.bind(this) }
        />
      </>
    );
  }
  
}

export default StepOne;