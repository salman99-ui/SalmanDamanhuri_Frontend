import { Table } from 'antd';
import React, { useState } from 'react';

type paginationType = {
  current: number;
  pageSize?: number;
  total?: number;
};

function TableC() {
  const [pagination, setPagination] = useState<paginationType>({
    current: 1,
    pageSize: 7,
    total: 20,
  });
  return (
    <div>
      <h3>{pagination.current}</h3>
      <div>
        <Table
          onChange={(value) => {
            setPagination(
              (prev): paginationType => ({ ...prev, current: Number(value.current) })
            );
          }}
          columns={[{ title: 'name' }]}
          dataSource={[]}
          pagination={pagination}
        />
      </div>
    </div>
  );
}

export default TableC;
