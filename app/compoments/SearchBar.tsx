'use client'
import React from 'react';
import { Select, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Flex, Tooltip } from 'antd';

const onChange = (value: string) => {
    console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
    console.log('search:', value);
};

// Filter `option.label` match the user type `input`
const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const SearchBar: React.FC<{ refresh: Function }> = ({ refresh }) => (
    <div className='flex flex-row justify-between'
        style={{ padding: '0 1rem 1rem', flex: 1 }}
    >
        <Input
            allowClear
            style={{ width: 120 }}
            placeholder="Applicant" />
        <Input
            allowClear
            style={{ width: 120 }}
            className='ml-2'
            placeholder="cnn" />

        <Input
            allowClear
            style={{ width: 120 }}
            className='ml-2'
            placeholder="address" />


        <Input
            allowClear
            style={{ width: 120 }}
            className='ml-2'
            placeholder="permit" />


        <Select
            showSearch
            allowClear
            placeholder="Select Status"
            optionFilterProp="Status"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={filterOption}
            className='ml-2'
            style={{ width: 120 }}
            options={[
                {
                    value: 'REQUESTED',
                    label: 'REQUESTED',
                },
                {
                    value: 'EXPIRED',
                    label: 'EXPIRED',
                },
                {
                    value: 'SUSPEND',
                    label: 'SUSPEND',
                },
            ]}
        />

        <span className='flex-1' />


        <Button ghost type="primary" onClick={()=>refresh()} >Search</Button>
    </div >
);

export default SearchBar;