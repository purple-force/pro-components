import { FieldSwitch } from '@ant-design/pro-field';
import { ProConfigProvider } from '@ant-design/pro-provider';
import type { SwitchProps } from 'antd';
import React from 'react';
import type { ProFormFieldItemProps } from '../../typing';
import ProField from '../Field';

export type ProFormSwitchProps = Omit<
  ProFormFieldItemProps<SwitchProps, HTMLElement>,
  'emptyText'
> & {
  checkedChildren?: SwitchProps['checkedChildren'];
  unCheckedChildren?: SwitchProps['unCheckedChildren'];
};

/**
 * @zh-cn 单选 Switch
 * @en-us Single Choice Switch
 */
const ProFormSwitch: React.FC<ProFormSwitchProps> = React.forwardRef(
  (
    { fieldProps, unCheckedChildren, checkedChildren, proFieldProps, ...rest },
    ref: any,
  ) => {
    return (
      <ProConfigProvider
        valueTypeMap={{
          switch: {
            render: (text, props) => <FieldSwitch {...props} text={text} />,
            formItemRender: (text, props) => (
              <FieldSwitch {...props} text={text} />
            ),
          },
        }}
      >
        <ProField
          valueType="switch"
          fieldProps={{
            unCheckedChildren,
            checkedChildren,
            ...fieldProps,
          }}
          ref={ref}
          valuePropName="checked"
          proFieldProps={proFieldProps}
          filedConfig={{
            valuePropName: 'checked',
            ignoreWidth: true,
            customLightMode: true,
          }}
          {...rest}
        />
      </ProConfigProvider>
    );
  },
);

export default ProFormSwitch;
