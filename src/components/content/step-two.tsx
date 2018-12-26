import React from 'react';
import { Button, Col, Icon, Row } from 'antd';

import { CriteriaWeights } from '../../model/maturity';
import { TechnologyTypesEnum } from '../../model/technology';
import { filterCriteria } from '../../services/maturity';

import CriteriaForm from '../criteria-form'

type Props = {
  defaultState?: State,
  selectedKinds: TechnologyTypesEnum[],
  onSave: (state: State) => void
}
export type State = { criteriaWeights: CriteriaWeights, requiredCriteria: string[] }

export class StepTwo extends React.Component<Props, State> {

  public constructor(props: Props) {
    super(props);
    this.state = props.defaultState || { criteriaWeights: {}, requiredCriteria: [] };
  }

  public render() {
    return (
      <>
        <Row>
          <Col span={24}>
            <p>Please select the criteria the technologies you are looking for should meet, and the features they should implement.</p>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <CriteriaForm
              categories={filterCriteria(this.props.selectedKinds)}
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
    this.props.onSave(this.state);
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
  
}

export default StepTwo;
