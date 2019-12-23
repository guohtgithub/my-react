import React from 'react'
import {Input,InputNumber,Form} from 'antd'
import EditableContext from './EditableContext'

const FormItem = Form.Item
class EditableCell extends React.Component{
  getInput = () => {
    if(this.props.inputType === 'number') return <InputNumber />
    return <Input />
  }

  render(){
    let {editing,dataIndex,title,inputType,record,index,...restProps} = this.props
    return (
      <EditableContext.Consumer>
        {form => {
          const {getFieldDecorator} = form
          return (
            <td {...restProps}>
              {editing?(
                <FormItem style={{margin:0}}>
                  {getFieldDecorator(dataIndex,{
                    initialValue:record[dataIndex]
                  })(this.getInput())}
                </FormItem>):restProps.children}
            </td>
          )
        }}
      </EditableContext.Consumer>
    )
  }
}

export default EditableCell