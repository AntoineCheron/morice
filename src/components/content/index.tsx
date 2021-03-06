import React from 'react';
import { Link, Redirect, RouteComponentProps } from 'react-router-dom';
import { Layout, Row, Steps } from 'antd';

import { appContentStatePersistor, StatePersistor } from '../../services/state-persistor';

import { StepOne, State as StepOneState } from'./step-one'
import StepTwo, { State as StepTwoState } from'./step-two'
import StepThree from'./step-three'

const { Content } = Layout;
const { Step } = Steps;
const steps = ['Kinds of technology', 'Criteria & features', 'Results']

type Props = RouteComponentProps<{step: string}>
export type State = {
  stepOne?: StepOneState,
  stepTwo?: StepTwoState
}

class AppContent extends React.Component<Props, State> {

  private statePersistor: StatePersistor<State>

  public constructor(props: Props) {
    super(props)
    this.statePersistor = appContentStatePersistor
    this.state = this.statePersistor.unpersist({});
  }

  componentDidUpdate() {
    window.scrollTo({ top: 0 })
  }

  public render() {
    if (!this.stepFromRoute()) {
      return <Redirect to={`/step/${this.tryToGuessStep()}`} />
    } else {
      return (
        <Content className='container'>
          <Row className='l-spacing-heigh'>
            <Steps current={this.currentStep() - 1}>
              { steps.map((item, index) => this.renderStepItem(item, index)) }
            </Steps>
          </Row>
          { this.renderStep() }
        </Content>
      );
    }
  }

  private renderStepItem(item: string, index: number): JSX.Element {
    return index < (this.currentStep() - 1)
      ? <Step key={item} title={<Link to={`/step/${index+1}`}>{item}</Link>} />
      : <Step key={item} title={item} />
  }

  private currentStep(): number {
    return this.stepFromRoute() || this.tryToGuessStep()
  }

  private stepFromRoute(): number | undefined {
    const stepFromRoute = Number.parseInt(this.props.match.params.step, 10)
    return isNaN(stepFromRoute) ? undefined : stepFromRoute
  }

  private renderStep(): JSX.Element {
    const stepNumber = this.currentStep()

    switch (stepNumber) {
      case 1:
        return <StepOne onSave={this.onSaveStepOne.bind(this)} defaultState={this.state.stepOne} />
      case 2:
        return this.state.stepOne
          ? <StepTwo selectedKinds={this.state.stepOne.selectedKinds} onSave={this.onSaveStepTwo.bind(this)} defaultState={this.state.stepTwo} />
          : <Redirect to='/step/1' />
      case 3:
        return this.state.stepTwo && this.state.stepOne
          ? <StepThree selectedKinds={this.state.stepOne.selectedKinds} criteriaWeights={this.state.stepTwo.criteriaWeights} requiredCriteria={this.state.stepTwo.requiredCriteria} />
          : <Redirect to='/step/2' />
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

  private onSaveStepOne(stepOneState: StepOneState) {
    this.setStateAndThenPersist((state) => { return { ...state, stepOne: stepOneState }})
    this.props.history.push('/step/2')
  }

  private onSaveStepTwo(stepTwoState: StepTwoState) {
    this.setStateAndThenPersist((state) => { return {
      ...state,
      stepTwo: stepTwoState
    }})
    this.props.history.push('/step/3')
  }

  private setStateAndThenPersist(updater: StateUpdater<State, Props>) {
    this.setState(updater, () => this.statePersistor.persist(this.state))
  }
  
}

type StateUpdater<S, P> = ((prevState: Readonly<S>, props: Readonly<P>) => (S | null)) | (S | null)

export default AppContent;
