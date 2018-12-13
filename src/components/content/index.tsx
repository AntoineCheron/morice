import React from 'react';
import { Layout } from 'antd';

import { TechnologyTypesEnum } from '../../model/technology';

import StepOne from'./step-one'
import StepTwo from'./step-two'
import StepThree from'./step-three'

const { Content } = Layout;

type State = {
  step: number,
  selectedKinds?: TechnologyTypesEnum[]
}

class AppContent extends React.Component<{}, State> {

  public constructor(props: {}) {
    super(props)
    this.state = { step: 1 };
  }

  public render() {
    return (
      <Content className='container'>
        { this.renderStep() }
      </Content>
    );
  }

  private renderStep(): JSX.Element {
    console.log(this)
    switch (this.state.step) {
      case 1:
        return <StepOne onSave={this.onSaveStepOne.bind(this)} />
      case 2:
        return <StepTwo selectedKinds={[]} />
      case 3:
        return <StepThree />
      default:
        return <h3>Oops, an unknown error happened. Please refresh.</h3>
    }
  }

  private onSaveStepOne(selectedKinds: TechnologyTypesEnum[]) {
    this.setState((state) => { return { ...state, step: 2, selectedKinds }})
  }
  
}

export default AppContent;