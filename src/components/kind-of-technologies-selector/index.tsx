import React from 'react';
import { Row, Col } from 'antd';

import { TechnologyType, TechnologyTypesEnum } from '../../model/technology';
import Toggle from './toggle';

type Props = {
  kinds: TechnologyType[],
  isSelected: (kinds: TechnologyTypesEnum[]) => boolean,
  onSelect: (kinds: TechnologyTypesEnum[]) => void,
  onUnselect: (kinds: TechnologyTypesEnum[]) => void
};

class KindOfTechnologiesSelector extends React.Component<Props> {

  public render(): JSX.Element {
    return (
      <Row gutter={24}>
        {
          this.props.kinds.map(({ label, img, types }, i) => (
            <Col span={8} key={i}>
              <Toggle
                isSelected={this.props.isSelected(types)}
                label={label}
                kinds={types}
                img={img}
                onSelect={this.props.onSelect}
                onUnselect={this.props.onUnselect}
              />
            </Col>
          ))
        }
      </Row>
    )
  }

}

export default KindOfTechnologiesSelector;
