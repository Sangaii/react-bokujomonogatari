import React from 'react';
import { Button, Input, Form } from 'antd';
import FormItem from '../../components/FormItem';
import { connect } from 'react-redux';
import './StartMenu.css';

const layout = {
 labelCol: { span: 4 },
 wrapperCol: { span: 16 },
};
const initUserInfo = {
 userName: '',
 userPwd: '',
};
const footerLayout = {
 wrapperCol: { offset: 6, span: 16 },
};
const StartMenu = (props) => {
 const [userForm] = Form.useForm();
 const { setUserName } = props;
 const userFormFin = (val) => {
  setUserName(val.userName);
  props.history.push('/home');
 };
 const resetForm = () => userForm.resetFields();
 return (
  <div className="loginPage">
   <Form
    {...layout}
    className="startMenu"
    form={userForm}
    onFinish={userFormFin}
    initialValues={initUserInfo}
    // onPressEnter={userFormFin}
   >
    {FormItem('userName', '用户名', <Input />, {})}
    {FormItem('userPwd', '密码', <Input type="password" />, {})}
    <Form.Item {...footerLayout}>
     <Button type="primary" htmlType="submit" style={{ marginRight: 8 }}>
      登录
     </Button>
     <Button htmlType="button" onClick={resetForm}>
      重置
     </Button>
    </Form.Item>
   </Form>
  </div>
 );
};

const MapStateToProps = (state) => {
 console.log(state);
 return {
  userName: state.userName,
 };
};

const MapDispatchToProps = (dispatch) => {
 return {
  setUserName: (userName) => dispatch({ type: 'SET_USERNAME', userName }),
 };
};
export default connect(MapStateToProps, MapDispatchToProps)(StartMenu);
