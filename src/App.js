import React, {Component} from 'react';
import './multi_select.css'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

class App extends Component {

    constructor(props) {
        super();
        this.state = ({expanded: false,
            fields: [
                {name: "name", isView: true},
                {name: "price", isView: false},
                {name: "other", isView: false}
            ]});
    }

    showCheckboxes = () => {
        this.setState({expanded: !this.state.expanded})
    }


    changeStateIsVIew = index =>{
        index.isView = !index.isView;
        let result = this.state.fields.filter(e=>e.name !== index.name);
        result.push(index)
        result.sort(function (a, b) {
           return a.name.localeCompare(b.name)
        })
        this.setState({fields: result})
    }

    render() {
        const products = [
            {
                name: "name1",
                price: 300,
                other: "other"
            }, {
                name: "name2",
                price: 300,
                other: "other"
            }, {
                name: "name3",
                price: 300,
                other: "other"
            }, {
                name: "name4",
                price: 300,
                other: "other"
            },
        ];

        const fields = [
          {
                caption: "name",
                dataPrecision: null,
                dataSize: 3,
                mandatory: false,
                name: "name",
                refView: null,
                refViewType: null,
                type: "STRING",
            }, {
                caption: "price",
                dataPrecision: null,
                dataSize: 3,
                mandatory: false,
                name: "price",
                refView: null,
                refViewType: null,
                type: "STRING",
            }, {
                caption: "other",
                dataPrecision: null,
                dataSize: 3,
                mandatory: false,
                name: "other",
                refView: null,
                refViewType: null,
                type: "STRING",
            }]
        return (
            <div className="App">
                <div className="multiselect">
                    <div className="selectBox" onClick={this.showCheckboxes}>
                        <select>
                            <option>Select an option</option>
                        </select>
                        <div className="overSelect"></div>
                    </div>

                    {this.state.expanded === false ?
                        this.state.fields.map((element,index)=>
                            <div key={index} className={"checkboxes"}  style={{display: this.state.expanded ? "none": "block"}} >
                            <label htmlFor="one" >
                                <input type="checkbox" id={element.name} checked={element.isView} onChange={()=>this.changeStateIsVIew(element)} />{element.name}</label>
                            </div>) : null
                    }
                </div>

                <BootstrapTable data={ products }>
                    {fields.map((element,index)=>
                    <TableHeaderColumn dataField = {element.name} key={index} isKey ={ element.name === "name"} hidden={
                       !this.state.fields.filter(e => e.name === element.name)[0].isView
                    }>
                        {element.name}
                    </TableHeaderColumn>
                    )}
                </BootstrapTable>

            </div>
        );
    }
}

export default App;
