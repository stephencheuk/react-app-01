import ItemGroup from './ItemGroup';

const Lists = (props) => {

  return (
        <div className="row row--align-v-center row--align-h-center">
          <ul className="navList">

            <ItemGroup header='Just Do It'
              param = {
                {
                  'title' : 'Nike',
                  'icon' : (<i className="far fa-angry"></i>),
                  'child' : [
                    {
                      'title' : 'Insurance',
                      'icon' : (<i className="fas fa-briefcase-medical"></i>),
                      'child' : [
                        {
                          'title' : 'Medical',
                        },
                        {
                          'title' : 'Vision',
                        },
                        {
                          'title' : 'Dental',
                        },
                      ]
                    },
                    {
                      'title' : 'Travel',
                      'icon' : (<i className="fas fa-plane-departure"></i>),
                    },
                    {
                      'title' : 'Taxes',
                      'icon' : (<i className="fas fa-angry"></i>),
                    },
                  ]
                }
              }
            />

          </ul>
        </div>
    );
}

export default Lists;