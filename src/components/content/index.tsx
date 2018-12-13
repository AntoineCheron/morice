import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { Layout } from 'antd';

import { TechnologyTypesEnum } from '../../model/technology';

import StepOne from'./step-one'
import StepTwo from'./step-two'
import StepThree from'./step-three'

const { Content } = Layout;

type Props = RouteComponentProps<{step: string}>
type State = {
  selectedKinds?: TechnologyTypesEnum[]
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
        return <StepTwo selectedKinds={[]} />
      case 3:
        return <StepThree />
      default:
        return <h3>Hey! Unfortunately, this step doesn't exist. Would you mind going back to step 1, 2 or 3?</h3>
    }
  }

  private tryToGuessStep(): number {
    if (this.state.selectedKinds)
      return 2;
    else
      return 1;
  }

  private onSaveStepOne(selectedKinds: TechnologyTypesEnum[]) {
    this.setState((state) => { return { ...state, selectedKinds }})
    this.props.history.push('/step/2')
  }
  
}

export default AppContent;
