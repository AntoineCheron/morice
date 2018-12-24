import React from 'react'
import { Tag, Tooltip } from 'antd'; 

import { allCriteria } from '../../services/maturity';

type Props = { criteria: string }

const CriteriaTag: React.SFC<Props> = ({ criteria }) =>
  <Tooltip title={allCriteria[criteria]}>
    <Tag color="blue" key={criteria}>
      {criteria}
    </Tag>
  </Tooltip>

export default CriteriaTag