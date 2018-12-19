import React from 'react';
import { Button, Col, Icon, Row } from 'antd';

import { MaturityCategory, MaturityLevel } from '../../model/maturity';
import { TechnologyTypesEnum } from '../../model/technology';
import { maturityCategories } from '../../services/maturity';
import { getTechnologies } from '../../services/technology';

import CriteriaForm from '../criteria-form'

type Props = {
  selectedKinds: TechnologyTypesEnum[],
  onSave?: (criteriaWeights: CriteriaWeights, requiredCriteria: string[]) => void
}
type State = { criteriaWeights: CriteriaWeights, requiredCriteria: string[] }
export type CriteriaWeights = { [criteriaName: string]: number }

class StepTwo extends React.Component<Props, State> {

  public constructor(props: Props) {
    super(props);
    this.state = { criteriaWeights: {}, requiredCriteria: [] };
  }

  public render() {
    return (
      <>
        <Row>
          <Col span={24}>
            <h1>2. Criteria and features</h1>
            <p>Please select the criteria the technologies you are looking for should meet, and the features they should implement.</p>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <CriteriaForm
              categories={this.filterCriteriaToNote()}
              getCriteriaValue={this.getCriteriaValue.bind(this)}
              onCriteriaUpdate={this.updateCriteria.bind(this)}
              getRequiredValue={this.getRequiredValue.bind(this)}
              onRequiredUpdate={this.updateRequired.bind(this)}
            />
          </Col>
        </Row>

        <Row>
          <Col span={24} className='text-right'>
            <Button type="primary" onClick={this.onSave.bind(this)} >
              Next <Icon type="right" />
            </Button>
          </Col>
        </Row>
      </>
    );
  }

  private onSave(): void {
    if (this.props.onSave) {
      this.props.onSave(this.state.criteriaWeights, this.state.requiredCriteria);
    }
  }

  private updateCriteria(criteriaName: string): (value: number) => void {
    return (value: number) => this.setState((state) => {
      return { 
        ...state,
        criteriaWeights: {
          ...state.criteriaWeights,
          [criteriaName]: value
        }
      }
    });
  }

  private getCriteriaValue(criteriaName: string): number | undefined {
    return this.state.criteriaWeights[criteriaName]
  }

  private updateRequired(criteriaName: string): (value: boolean) => void {
    return (value: boolean) => this.setState((state) => {
      const updatedRequiredCriteria = value
        ? state.requiredCriteria.concat([criteriaName])
        : state.requiredCriteria.filter((el) => el !== criteriaName)
      
        return { 
          ...state,
          requiredCriteria: updatedRequiredCriteria
        }
    });
  }

  private getRequiredValue(criteriaName: string): boolean {
    return this.state.requiredCriteria.indexOf(criteriaName) !== -1
  }

  private filterCriteriaToNote(): MaturityCategory[] {
    const criteria = getTechnologies(this.props.selectedKinds)
      .map(technology => technology.checkedCriteria)
      .reduce((acc, el) => acc.concat(el), [])

    return maturityCategories.map(category => {
      const newLevels = Object.entries(category.levels)
        .reduce<{ [n:string]: MaturityLevel }>((acc, [levelName, level]) => {
          acc[levelName] = {
            ...level,
            criteria: Object.entries(level.criteria)
              .filter(([name, unused]) => criteria.includes(name))
              .reduce<{[k: string]: string}>((acc, [name, description]) => { acc[name] = description; return acc; }, {})
          };
          return acc;
        }, {});

      return {
        ...category,
        levels: newLevels
      }
    })
  }
  
}

export default StepTwo;
