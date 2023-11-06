import { Tabs } from 'antd';
import React, { useState } from 'react';

function TabsC() {
  const [menu, setMenu] = useState<string>('1');
  return (
    <div>
      <h3>{menu}</h3>
      <Tabs
        onChange={(value) => setMenu(String(value))}
        defaultActiveKey={menu}
        items={[
          {
            label: `Tab 1`,
            key: '1',
            children: `Content of Tab Pane 1`,
          },
          {
            label: `Tab 2`,
            key: '2',
            children: `Content of Tab Pane 2`,
          },
          {
            label: `Tab 3`,
            key: '3',
            children: `Content of Tab Pane 3`,
          },
        ]}
      />
    </div>
  );
}

export default TabsC;
