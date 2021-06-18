import { useState } from 'react';
import styles from './index.less';
import { Menu } from 'antd';

const { SubMenu } = Menu;

export default function IndexPage() {
  const [key, setKey] = useState<string>('all');

  function handleClick(e: any) {
    console.log('click ', e);
    setKey(e.key);
  };
  return (
    <div>
      <Menu className={styles.menuWrap} onClick={handleClick} selectedKeys={[key]} mode="horizontal">
        <Menu.Item key="all">
          全部
        </Menu.Item>
        <Menu.Item key="portrait">
          人像
        </Menu.Item>
        <Menu.Item key="still">
          静物
        </Menu.Item>
        <SubMenu key="SubMenu" >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="Scenery">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            风光
          </a>
        </Menu.Item>
      </Menu>
    </div>
  );
}
