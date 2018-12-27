import React from 'react';
import { Button, Icon, Row, Col } from 'antd';

import KindOfTechnologiesSelector from '../kind-of-technologies-selector';
import { TechnologyTypesEnum } from '../../model/technology';
import { classifiedKindOfTechnologies } from '../../data/technology';

type Props = {
  defaultState?: State,
  onSave: (state: State) => void
}

export type State = { selectedKinds: TechnologyTypesEnum[] };

export class StepOne extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = props.defaultState || { selectedKinds: [] };
  }

  public render() {
    return (
      <>
        <Row>
          <Col span={24}>
            <p>Please select the kind of technologies you are looking for.</p>
          </Col>
        </Row>

        <KindOfTechnologiesSelector
          kinds={classifiedKindOfTechnologies}
          isSelected={this.isSelected.bind(this)}
          onSelect={this.onSelect.bind(this)}
          onUnselect={this.onUnselect.bind(this)}
        />

        <Row>
          <Col span={24} className='text-right'>
            <Button
              type="primary" onClick={this.onSave.bind(this)}
              disabled={this.state.selectedKinds.length === 0}
            >
              Next <Icon type="right" />
            </Button>
          </Col>
        </Row>
      </>
    );
  }

  private isSelected(kinds: TechnologyTypesEnum[]): boolean {
    return kinds.map(kind => this.state.selectedKinds.indexOf(kind) > -1)
      .indexOf(false) === -1
  }

  private onSelect(kinds: TechnologyTypesEnum[]): void {
    this.setState((state) => {
      return { selectedKinds: state.selectedKinds.concat(kinds) };
    });
  }

  private onUnselect(kinds: TechnologyTypesEnum[]): void {
    this.setState((state) => {
      return { selectedKinds: state.selectedKinds
        .filter((kind) => kinds.indexOf(kind) < 0)
      };
    });
  }

  private onSave(): void {
    this.props.onSave(this.state)
  }
  
}

export default StepOne;