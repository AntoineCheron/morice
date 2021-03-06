import React from 'react';
import { Collapse, Form } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
const Panel = Collapse.Panel;

import { MaturityCategory } from '../../model/maturity';

import Level from './level'
import './criteria-form.css'

interface CriteriaFormProps extends FormComponentProps, CriteriaBindings {
  categories: MaturityCategory[]
}

export interface CriteriaBindings {
  getCriteriaValue: (criteriaName: string) => number | undefined,
  onCriteriaUpdate: (criteriaName: string) => (value: number) => void
  getRequiredValue: (criteriaName: string) => boolean,
  onRequiredUpdate: (criteriaName: string) => (value: boolean) => void
}

class CriteriaForm extends React.Component<CriteriaFormProps> {

  public render() {
    return (
      <Form layout='vertical'>
        <Collapse bordered={false} defaultActiveKey={['0']}>
          { this.props.categories
            .filter(c => (numberOfCriteriaInCategory(c)) !== 0)
            .map((category, index) => (
              <Panel header={category.name} key={index.toString()}>
                { Object.values(category.levels).map((level, index) => 
                    Object.keys(level.criteria).length === 0
                      ? <div key={level.name + '-' + index.toString()}></div>
                      : <Level key={level.name + '-' + index.toString()}
                          level={level}
                          getCriteriaValue={this.props.getCriteriaValue}
                          onCriteriaUpdate={this.props.onCriteriaUpdate}
                          getRequiredValue={this.props.getRequiredValue}
                          onRequiredUpdate={this.props.onRequiredUpdate}
                        />
                  )
                }
              </Panel>
            ))
          }
        </Collapse>
      </Form>
    );
  }
   
}

function numberOfCriteriaInCategory(category: MaturityCategory): number {
  return Object.values(category.levels)
    .map(level => Object.keys(level.criteria))
    .reduce((acc, el) => acc.concat(el), [])
    .length
}

export default Form.create()(CriteriaForm);