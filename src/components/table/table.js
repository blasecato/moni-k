import React from 'react';
import { Table, Divider, Tag } from 'antd';

const { Column, ColumnGroup } = Table;

class Tableu extends React.Component {

  IMAGE_DEFAULT = "https://www.google.com/imgres?imgurl=http%3A%2F%2Fsaveabandonedbabies.org%2Fwp-content%2Fuploads%2F2015%2F08%2Fdefault.png&imgrefurl=http%3A%2F%2Fsaveabandonedbabies.org%2Ftestimonal%2Fsubmitted-by-one-of-our-dedicated-volunteers%2Fdefault%2F&docid=vIhAj0aQQGH79M&tbnid=SnP4az_cMMS8AM%3A&vet=10ahUKEwi65qSHh-PjAhXK1VkKHZwEBgcQMwhOKAMwAw..i&w=570&h=321&safe=active&bih=969&biw=841&q=image%20default&ved=0ahUKEwi65qSHh-PjAhXK1VkKHZwEBgcQMwhOKAMwAw&iact=mrc&uact=8";
  state = {
  }

  render() {
    const { image = this.IMAGE_DEFAULT, id, nombres } = this.props;
    const data = [
      {
          key: '1',
          firstName: 'John',
          lastName: 'Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
      },
      {
          key: '2',
          firstName: 'Jim',
          lastName: 'Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
      },
      {
          key: '3',
          firstName: 'Joe',
          lastName: 'Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
      },
  ];
    return (
      <Table dataSource={data}>
        <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={tags => (
            <span>
              {tags.map(tag => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </span>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <span>
              <a>Invite {record.lastName}</a>
              <Divider type="vertical" />
              <a>Delete</a>
            </span>
          )}
        />
      </Table>
    );
  }
}

export default Tableu;