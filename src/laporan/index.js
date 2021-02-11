import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

class Laporan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: [
                "No",
                "Formula",
                "Tanggal dibuat",
                "Zat-Zat",
               
                "efek",
                "Action"
            ],
            edit: false
        }
    }
    delFormula = (idx)=>{
        this.props.delFormula(idx)
        //refresh state
        this.setState({})
    }
    putFormula = (idx)=>
    {
        this.props.putFormula(idx)
        this.props.toggleStat(true)
        this.setState({edit: true})
    }
    render() {
        console.log("edit", this.state.edit);
        if(this.state.edit===true){
            return <Redirect to="/form"></Redirect>
        }
        let headerTable = this.state.header
        let datahead = headerTable.map((isidata, i) => {
            return (<th className="center" key={i}>{isidata}</th>)
        })
        let isiData = this.props.formulas.map(
            (formula, idx) => {
                return (
                    <tr key={idx}>
                        <td className="center" >{idx + 1}</td>
                        <td className="center" >{formula.nama}</td>
                        <td className="center" >{formula.tanggal}</td>
                        <td className="center" >{formula.listKimia}</td>
                        <td className="center" >{formula.efek}</td>
                        <td className="center" >
                            <button onClick={() => this.putFormula(idx)}> Ubah </button>
                            <button onClick={() => this.delFormula(idx)}>Hapus </button>
                        </td>

                    </tr>
                )
            })
        // console.log("data di table",isiData); 
        console.log("data terbaru formula",this.props.formulas);
        return (
            <table cellPadding="5" border="1" cellSpacing="0">
                <thead>
                    <tr>
                        {datahead}
                    </tr>
                </thead>
                <tbody>
                    {isiData}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        formulas: state.formula,
        edit: state.objtoEdit
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        delFormula: (idx) => dispatch({type: "DEL_FORMULA"
        ,idxFormula: idx
        }),
        putFormula: (idx) => dispatch({type: "PUT_FORMULA"
        ,idxFormula: idx 
        }),
        toggleStat: (stat) => dispatch({type: "TOGGLE_EDITSTAT", 
        editstat : stat})
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Laporan);