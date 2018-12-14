import React from 'react';
import { Button, Icon, Row, Col } from 'antd';

import { TechnologyType, TechnologyTypesEnum } from '../../model/technology';
import Toggle from './toggle';

type Props = { kinds: TechnologyType[], onSave?: (selectedKinds: TechnologyTypesEnum[]) => void };
type State = { selectedKinds: TechnologyTypesEnum[] };

class KindOfTechnologiesSelector extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = { selectedKinds: [] };
  }

  public render(): JSX.Element {
    return (
      <>
        <Row gutter={24}>
          {
            this.props.kinds.map(({ label, img, types }, i) => (
              <Col span={8} key={i}>
                <Toggle
                  isSelected={this.isSelected(types)}
                  label={label}
                  kinds={types}
                  img={img}
                  onSelect={this.onSelect.bind(this)}
                  onUnselect={this.onUnselect.bind(this)}
                />
              </Col>
            ))
          }
        </Row>

        <Row>
          <Col span={24} className='text-right'>
            <Button type="primary" onClick={this.onSave.bind(this)} >
              Next <Icon type="right" />
            </Button>
          </Col>
        </Row>
      </>
    )
  }

  private onSave(): void {
    if (this.props.onSave) {
      this.props.onSave(this.state.selectedKinds)
    }
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

}

export default KindOfTechnologiesSelector;
