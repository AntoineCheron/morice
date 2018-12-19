import React from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { Layout } from 'antd';

import { TechnologyTypesEnum } from '../../model/technology';
import { CriteriaWeights } from './step-two';

import StepOne from'./step-one'
import StepTwo from'./step-two'
import StepThree from'./step-three'

const { Content } = Layout;

type Props = RouteComponentProps<{step: string}>
type State = {
  stepOne?: {
    selectedKinds: TechnologyTypesEnum[]
  },
  stepTwo?: {
    criteriaWeights: CriteriaWeights,
    requiredCriteria: string[]
  },
  results?: {}
}

class AppContent extends React.Component<Props, State> {

  public constructor(props: Props) {
    super(props)
    this.state = {};
  }

  public render() {
    return (
      <Content className='container'>
        { this.renderStep() }
      </Content>
    );
  }

  private renderStep(): JSX.Element {
    const stepNumber = Number.parseInt(this.props.match.params.step) || this.tryToGuessStep()
    switch (stepNumber) {
      case 1:
        return <StepOne onSave={this.onSaveStepOne.bind(this)} />
      case 2:
        return this.state.stepOne ? <StepTwo selectedKinds={this.state.stepOne.selectedKinds} onSave={this.onSaveStepTwo.bind(this)} /> : <Redirect to='/step/1' />
      case 3:
        return this.state.stepTwo ? <StepThree /> : <Redirect to='/step/2' />
      default:
        return <h3>Hey! Unfortunately, this step doesn't exist. Would you mind going back to step 1, 2 or 3?</h3>
    }
  }

  private tryToGuessStep(): number {
    if (this.state.stepTwo)
      return 3;
    else if (this.state.stepOne)
      return 2;
    else
      return 1;
  }

  private onSaveStepOne(selectedKinds: TechnologyTypesEnum[]) {
    this.setState((state) => { return { ...state, stepOne: {selectedKinds} }})
    this.props.history.push('/step/2')
  }

  private onSaveStepTwo(criteriaWeights: CriteriaWeights, requiredCriteria: string[]) {
    this.setState((state) => { return {
      ...state,
      stepTwo: {criteriaWeights, requiredCriteria}
    }})
    this.props.history.push('/step/3')
  }
  
}

export default AppContent;
