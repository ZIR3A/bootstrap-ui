import { InputFields } from "../components/inputFields/InputFields";

export default {
  title: "Bootstrap - UI Components/InputField",

  component: InputFields,
  argTypes: { onChange: { action: "onChange" } },
};

const Template = (args) => <InputFields {...args} />;

export const Large = Template.bind({});

Large.args = {
  width: "lg",
  type: "text",
  name: "Large Input",
  label: "Large Input",
};

export const Medium = Template.bind({});
Medium.args = {
  width: "md",
  type: "text",
  name: "Medium Input",
  label: "Medium Input",
};

export const Small = Template.bind({});
Small.args = {
  width: "sm",
  type: "number",
  name: "Small Input",
  label: "Small Input",
};
