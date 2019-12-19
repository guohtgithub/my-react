import React from 'react'
import {Switch,Form,Radio,Button} from 'antd'
import EditableTable from './EditableTable.js'

const FormItem = Form.Item

const expandedRowRender = record => <p>{record.description}</p>
const title = () => 'Here is Title'
const showHeader = true
const footer = () => 'Here is footer'
const scroll = {y:240}
const pagination = {position:'bottom'}

class TableComponent extends React.Component{
  constructor(props){
    super(props)
    let defaultState = {
      showEditTable:false,
      bordered:false,
      loding:false,
      pagination,
      size:'default',
      expandedRowRender:undefined,
      title:undefined,
      showHeader,
      footer,
      rowSelection:undefined,
      scroll:undefined,
      hasData:true,
      deleteIndex:-1,
      editingKey:undefined
    }
    this.state = {...defaultState,...this.props}
  }

  handleToggle = (prop) => {
    return enable => {
      this.setState({[prop]:enable})
    }
  }
  handleSizeChange = e => {
    this.setState({size:e.target.value})
  }
  handleExpandChange = enable =>{
    this.setState({
      expandedRowRender:enable?expandedRowRender:undefined
    })
  }
  handleTitleChange = enable => {
    this.setState({title:enable?title:undefined})
  }
  handleHeaderChange = enable => {
    this.setState({showHeader:enable?showHeader:false})
  }
  handleFooterChange = enable => {
    this.setState({footer:enable?footer:undefined})
  }
  handleRowSelectChange = enable => {
    this.setState({rowSelection:enable?{}:undefined})
  }
  handleScollChange = enable => {
    this.setState({scroll:enable?scroll:undefined})
  }
  handleDataChange = hasData => {
    this.setState({hasData})
  }
  handlePaginationChange = e => {
    const {value} = e.target
    this.setState({
      pagination:value === 'none'?false:{position:value}
    })
  }
  handleAdd = () => {
    typeof this.props.handleAdd === 'function' && this.props.handleAdd()
    let {data} = this.props
    this.setState({data:data})
  }

  render(){
    const state = {...this.state,...this.props}
    let {data,handleAdd,columns,deleteIndex,showEditTable} = state
    return (
      <div>
        {showEditTable && <div className="components-table-demo-control-bar">
          <Form layout='inline'>
            <FormItem label="Bordered">
              <Switch checked={state.bordered} onChange={this.handleToggle('bordered')}></Switch>
            </FormItem>
            <FormItem label='loading'>
              <Switch checked={state.loading} onChange={this.handleToggle('loading')}></Switch>
            </FormItem>
            <FormItem label='Title'>
              <Switch checked={!!state.title} onChange={this.handleTitleChange}></Switch>
            </FormItem>
            <FormItem label='Column Header'>
              <Switch checked={!!state.showHeader} onChange={this.handleHeaderChange}></Switch>
            </FormItem>
            <FormItem label='Footer'>
              <Switch checked={!!state.footer} onChange={this.handleFooterChange}></Switch>
            </FormItem>
            <FormItem label='Expandable'>
              <Switch checked={!!state.expandedRowRender} onChange={this.handleExpandChange}></Switch>
            </FormItem>
            <FormItem label='Checkbox'>
              <Switch checked={!!state.rowSelection} onChange={this.handleRowSelectionChange}></Switch>
            </FormItem>
            <FormItem label='Fixed Header'>
              <Switch checked={!!state.scoll} onChange={this.handleScollChange}></Switch>
            </FormItem>
            <FormItem label='size'>
              <Radio.Group size='default' value={state.size} onChange={this.handleSizeChange}>
                <Radio.Button value='default'>Default</Radio.Button>
                <Radio.Button value='middle'>Middle</Radio.Button>
                <Radio.Button value='small'></Radio.Button>
              </Radio.Group>
            </FormItem>
            <FormItem label='Pagination'>
              <Radio.Group 
                value={state.pagination ? state.pagination.position:'none'}
                onChange={this.handlePaginationChange}
              >
                <Radio.Button value='top'>Top</Radio.Button>
                <Radio.Button value='bottom'>Bottom</Radio.Button>
                <Radio.Button value='both'>Both</Radio.Button>
                <Radio.Button value='none'>None</Radio.Button>
              </Radio.Group>
            </FormItem>
          </Form>
        </div>}
        {typeof handleAdd === 'function' && <Button className='editable-add-btn mb-s' onClick={this.handleAdd}>Add</Button>}
        <EditableTable {...state} 
          columns={columns} 
          data={state.hasData?data:null}
          rowClassName={(record) => {
            if(deleteIndex === record.key) return 'animated zoomOutLeft min-black'
            return 'animated fadeInRight'
          }}
        ></EditableTable>
      </div>
    )
  }
}

export default TableComponent