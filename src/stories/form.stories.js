import Form from "../components/form/Form";

export default {
  title: "Bootstrap - UI Components/Form",
  component: Form,
  argTypes: { onSubmit: { action: "onSubmit" } },
};

const Template = (args) => <Form {...args} />;

export const InputForm = Template.bind({});

InputForm.args = {
  size: "lg",
  width: "lg",
  type: "text",
  name: "Large Input",
  label: "Large Input",
};
