"use client";
import React, { useState } from "react";
import { Badge, Flex, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { TableData } from "@/types";

type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"];

interface TableComponentProps<T extends TableData> {
  data: T[];
}

const DataTable = <T extends TableData>({ data }: TableComponentProps<T>) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<T> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const columns: TableColumnsType<T> = [];

  if (data?.length) {
    const firstRow = data[0];

    Object.keys(firstRow as object).forEach((key) => {
      if (key !== "key") {
        columns.push({
          title: key,
          dataIndex: key,
          key,
          onCell: (record) => ({
            children:
              key === "Primary investor" ? (
                <Badge>{record[key]}</Badge>
              ) : (
                record[key]
              ),
          }),
        });
      }
    });
  }

  return (
    <Flex gap="middle" vertical>
      <Table<T>
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        rowKey="key"
        pagination={false}
      />
    </Flex>
  );
};

export default DataTable;
