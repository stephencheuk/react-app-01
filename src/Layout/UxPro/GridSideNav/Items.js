
import { useState } from 'react';
import clsx from 'clsx';
import ItemChild from './ItemChild';

const Items = (props) => {

  const [open, setOpen] = useState(false);

  let o = props.param;

  console.log('Items', props, setOpen);

  return (
      <li for={ o.title }>
        <input id={ o.title } name='abc' type='checkbox' value="1" />
        <div className="navList__subheading row row--align-v-center">
          <span className="navList__subheading-icon">{ o.icon }</span>
          <span className="navList__subheading-title">{ o.title }</span>
        </div>
        {
          o.child?.length ? <ItemChild param={ o.child }/> : null
        }
      </li>

    )

}

export default Items;