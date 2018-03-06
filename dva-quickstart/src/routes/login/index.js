import React from "react"
import { connect } from "dva"
import {Form,Icon,Input,Button} from "antd";
import styles from "./login.less"
import PropTypes from "prop-types"
const FormItem = Form.Item


const Login = ({
  dispatch,
  history,
  form:{
    getFieldDecorator,
    validateFieldsAndScroll
  }
})=> {
  const handlelogin = function(){
    validateFieldsAndScroll((errors,values) => {
      console.log(values);
      if(errors){
        return
      }
      dispatch({
        type:"login/login",
        payload:values
      })

    })

  }
  return  (
    <div className = {styles.form}>
       <Form >
         <FormItem>
           {
             getFieldDecorator('userName',{
               rules:[{
                 required:true,
                 message:"Please input your username!",

               },{
                 min:3,
                 message:"min lenght 3"
               },{
                 max:10,
                 message:"max length 10"
               }]
             })(
               <Input prefix={
                 <Icon type="user" style={{color:'rgba(0,0,0,.25)'}} />
               }
               placeholder = "Username"
               />
             )
           }
         </FormItem>

         <FormItem>
         {getFieldDecorator('password',{
           rules:[{
             required:true,
             help:'Please input your Password!'
           }]
         })(
           <Input prefix = {<Icon type="lock" style={{color:'rgba(0,0,0,.25)'}} />}
           type = "password"
           placeholder = "Password"
           />
         )
       }
         </FormItem>
         <FormItem>
            <Button type="primary" onClick = {handlelogin} htmlType="submit" className={styles.loginButton}>
             Log in
            </Button>
         </FormItem>
       </Form>
    </div>
  )
}

Login.propTypes = {
  dispatch:PropTypes.func,
  history:PropTypes.object,
  form:PropTypes.object
}
const WrappedNormalLoginForm = Form.create()(Login);



// <Mylogin add={"div"}/>
export default connect()(WrappedNormalLoginForm)
