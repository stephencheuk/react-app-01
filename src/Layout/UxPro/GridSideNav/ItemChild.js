
import { useState } from 'react';
import clsx from 'clsx';

const ItemChild = (props) => {

  console.log('ItemChild', props);

  return (
          <ul className={ clsx('subList', props.open || "subList--hidden") }>
            {
              props.param.map((o,i) => (<li key={i} className="subList__item">{o.title}</li>))
            }
          </ul>
    )

}

export default ItemChild;