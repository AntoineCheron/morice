import React, { SFC } from 'react';
import { Layout } from 'antd';

import { TechnologyTypesEnum } from '../../model/technology';

import './toggle.css';

type Props = {
  isSelected: boolean,
  label: string,
  kinds: TechnologyTypesEnum[],
  img: string,
  onSelect: (kinds: TechnologyTypesEnum[]) => void,
  onUnselect: (kinds: TechnologyTypesEnum[]) => void
}

const Toggle: SFC<Props> = ({ isSelected, label, kinds, img, onSelect, onUnselect }) => (
  <Layout
    className='center l-high-padding-top is-clickable'
    onClick={ () => isSelected ? onUnselect(kinds) : onSelect(kinds) }  
  >
    <div className={ isSelected ? '' : 'opacity-lighter' }>
      <div className='technology-icon-container is-centered'>
        <img className='img-eighty-percent' src={img} />
      </div>
      <h3 className={ isSelected ? 'text-bold text-primary' : '' }>{label}</h3>
    </div>
  </Layout>
)

export default Toggle;