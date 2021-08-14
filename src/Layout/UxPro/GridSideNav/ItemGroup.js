
import { Fragment } from 'react';
import Items from './Items';

const ItemGroup = (props) => {

  return (
          <Fragment>
            { props?.param ? (<li className="navList__heading">{props.param.title}{props.param.icon}</li>) : null }

            {
              props?.param?.child?.length ? props.param.child.map((o, i) => <Items key={ i } param={ o } ></Items> ): null
            }
          </Fragment>
);
}

export default ItemGroup;