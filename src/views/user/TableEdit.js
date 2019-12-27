import React from 'react'
import {Table,Input,InputNumber,Popconfirm,Form} from 'antd'

const data = []
for(let i = 0;i<5;i++){
    data.push({
        key:i.toString(),
        name:`username ${i}`,
        age:`1${i}`,
        address:`London Park no.${i}`
    })
}

const EditableContext = React.createContext()

class EditableCell extends React.Component{
    getInput = () => {
        if(this.props.inputType === 'number') return <InputNumber />
        return <Input />
    }

    renderCell = ({getFieldDecorator}) => {
        const {editing,dataIndex,title,inputType,record,index,children,...restProps} = this.props
        return (
            <td {...restProps}>
                {editing?(
                    <Form.Item>
                        {getFieldDecorator(dataIndex,{
                            rules:[{required:true,message:`Please Input ${title}!`}],
                            initialValue:record[dataIndex]
                        })(this.getInput())}
                    </Form.Item>
                ):(children)}
            </td>
        )
    }
    render(){
        return <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
    }
}

class EditableTable extends React.Component {
    constructor(props){
        super(props)
        this.state = {data,editingKey:''}
        this.columns = [
            {
                title:'name',
                dataIndex:'name',
                width:'25%',
                editable:true
            },{
                title:'age',
                dataIndex:'age',
                width:'15%',
                editable:true
            },{
                title:'address',
                dataIndex:'address',
                width:'40%',
                editable:true
            },{
                title:'operation',
                dataIndex:'operation',
                render:(text,record) =>{
                    const {editingKey} = this.state
                    const editable = this.isEditing(record)
                    return editable?(
                        <span>
                            <EditableContext.Consumer>
                                {form => (
                                    <a onClick={() => this.save(form,record.key)} style={{marginRight:8}}>保存</a>
                                )}
                            </EditableContext.Consumer>
                            <Popconfirm title='确认取消？' onConfirm={() => this.cancel(record.key)}>
                                <a>取消</a>
                            </Popconfirm>
                        </span>
                    ):(
                        <a disabled={editingKey != ''} onClick={() => this.edit(record.key)}>编辑</a>
                    )
                }
            }
        ]
    }
    isEditing = record => record.key === this.state.editingKey
    cancel = () => {this.setState({editingKey:''})}
    save(form,key){
        form.validateFields((err,row) =>{
            if(err) return
            const newData = [...this.state.data]
            const index = newData.findIndex(item => key === item.key)
            if(index > -1){
                const item = newData[index]
                newData.splice(index,1,{
                    ...item,
                    ...row
                })
            }else{
                newData.push(row)
            }
            this.setState({data:newData,editingKey:''})
        })
    }
    edit = key => {this.setState({editingKey:key})}
    render(){
        const components = {
            body:{
                cell:EditableCell
            }
        }
        const columns = this.columns.map(col => {
            if(!col.editable) return col
            return{
                ...col,
                onCell:record => ({
                    record,
                    inputType:col.dataIndex === 'age' ?'number':'text',
                    dataIndex:col.dataIndex,
                    title:col.title,
                    editing:this.isEditing(record)
                })
            }
        })
        return (
            <EditableContext.Provider value={this.props.form}>
                <Table 
                    components={components}
                    bordered
                    dataSource={this.state.data}
                    columns={columns}
                    rowClassName="editable-row"
                    pagination = {{
                        onChange:this.cancel
                    }}
                />
            </EditableContext.Provider>
        )
    }
}

const TableEdit = Form.create()(EditableTable)

export default TableEdit