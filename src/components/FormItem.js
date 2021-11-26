import React from "react";
import { Form } from "antd";
const FormItem = (name, label, input, rule) => {
  const options = { rules: [] };
  if (rule) {
    const mainRule = {
      label,
      notNull: true,
      validator: formValidator,
      ...rule
    };
    options.rules.push(mainRule);
  }

  return (
    <Form.Item label={label} name={name} rules={options.rules}>
      {input}
    </Form.Item>
  );
};

const formValidator = (rule, value) => {
  let error;
  if (rule.type === "email") {
    if (!/^[a-zA-Z0-9-_]+@[a-zA-Z0-9-_]+(\.[a-zA-Z0-9-_]+)+$/.test(value)) {
      error = `${rule.label}格式不正确`;
    }
  }
  if (rule.notNull && !value) {
    error = `${rule.label}不能为空`;
  }
  if (error) {
    return Promise.reject(error);
  } else {
    return Promise.resolve();
  }
};

export default FormItem;
