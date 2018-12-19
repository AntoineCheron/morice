import React from 'react';
import { Input } from 'antd';

import { MaturityLevel } from '../../model/maturity';

import { CriteriaBindings } from './index';
import Criteria from './criteria'

interface Props extends CriteriaBindings { level: MaturityLevel }

const Level: React.SFC<Props> = ({level, getCriteriaValue, onCriteriaUpdate, getRequiredValue, onRequiredUpdate}) => 
  <div>
    <h4><b>{level.name}</b></h4>
    <Input.Group className='input-group'>
      { Object.entries(level.criteria).map((criteria, index) =>
          <Criteria key={index.toString()}
            criteria={criteria}
            getCriteriaValue={getCriteriaValue}
            onCriteriaUpdate={onCriteriaUpdate}
            getRequiredValue={getRequiredValue}
            onRequiredUpdate={onRequiredUpdate}
          />
        )
      }
    </Input.Group>
  </div>

export default Level;