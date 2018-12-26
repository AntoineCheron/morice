import React from 'react';
import { Table, Tag, Row } from 'antd';
import { ColumnProps } from 'antd/lib/table' 

import CriteriaTag from '../criteria-tag'
import { CriteriaWeights } from '../../model/maturity';
import { TechnologyTypesEnum, ComparedTechnologyScored } from '../../model/technology';
import { filterTechnologies } from '../../services/technology';
import { separateWordsWithSpaces } from '../../utils/string';

type Props = {
  selectedKinds: TechnologyTypesEnum[],
  criteriaWeights: CriteriaWeights,
  requiredCriteria: string[]
}

class StepThree extends React.Component<Props> {

  columns: ColumnProps<ComparedTechnologyScored>[]

  constructor(props: Props) {
    super(props);

    this.columns = [
      { title: 'Name', dataIndex: 'name', key: 'name', width: 300 },
      { title: 'Score', dataIndex: 'score', key: 'score', width: 80 },
      { title: 'Features & properties', dataIndex: 'checkedCriteria', key: 'checkedCriteria',
        render: (criteria: string[]) => criteria.map(c => <CriteriaTag key={c} criteria={c} />),
      }
    ];
  }

  public render() {
    const results = filterTechnologies(
      this.props.selectedKinds,
      this.props.criteriaWeights,
      this.props.requiredCriteria
    )

    return (
      <>
        <Row>
          <p>There are the technologies that match the criteria you selected at the previous step.</p>
          <p>Hover criteria acronyms to get their description.</p>
        </Row>

        { Object.entries(results).map(([category, results], index) => 
            <Row key={category + index}>
              <h2>{separateWordsWithSpaces(category)}</h2>
              <Table columns={this.columns} dataSource={results.reverse()} rowKey={result => result.name} />
            </Row>
        )}
      </>
    );
  }
  
}

export default StepThree;