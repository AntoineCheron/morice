import React from 'react';
import { Col, Checkbox, Input, Row } from 'antd';

import { CriteriaBindings } from './index'

interface CriteriaProps extends CriteriaBindings {criteria: string[] }

const Criteria: React.SFC<CriteriaProps> = 
  ({ criteria, getCriteriaValue, onCriteriaUpdate, getRequiredValue, onRequiredUpdate }: CriteriaProps) => {
    const shortName = criteria[0];
    const description = criteria[1];
    const updateRequiredValue = onRequiredUpdate(shortName)
    const updateCriteriaValue = onCriteriaUpdate(shortName)

    return (
      <Row className='form-item'>
        <Col span={14}><p style={{paddingRight: '6px'}}>{description}</p></Col>
        <Col span={4}><Checkbox onChange={(e) => updateRequiredValue(e.target.checked)} checked={getRequiredValue(shortName)}>Required</Checkbox></Col>
        <Col span={6}>
          <Input
            value={getCriteriaValue(shortName)}
            onChange={(e) => updateCriteriaValue(parseInt(e.target.value, 10) || 0)}
            placeholder='value for classification'
          />
        </Col>
      </Row>
    )
  }

export default Criteria;