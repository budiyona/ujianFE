import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button, Text, TextArea, Date, Select } from "../input";
import Label from "../label";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama: "",
            tanggal: null,
            zatKimia: "",
            listKimia: [],
            efek: ""
        }
    }
    setValue = (el) => {
        console.log("Set VALUE");
        console.log(el.target.value);
        console.log(el.target.name);
        this.setState(
            {
                [el.target.name]: el.target.value
            }
        )
        console.log(this.state);
    }
    setListKimia = (el) => {
        console.log("CHECKED");
        let modArr = this.state.listKimia
        if (el.target.value) {
            let index = modArr.findIndex(str => str === el.target.value)
            console.log(index);
            if (index < 0) {
                modArr.push(el.target.value)
                this.setState(
                    {
                        listKimia: modArr
                    }
                )
            }
        }
        console.log(this.state.listKimia);
    }
    saveValue = () => {
        console.log("Masuk save");
        const {
            nama,
            tanggal,
            listKimia,
            efek } = this.state
        if (
            nama.length > 0 &&
            tanggal.length > 0 &&
            listKimia.length > 0 &&
            efek.length > 0
        ) {
            let formula = {
                nama,
                tanggal,
                listKimia,
                efek
            }
            if (!this.props.status) {
                console.log(formula);
                alert("data berhasil ditambahkan")
                this.props.setFormula(formula)
            } else {
                console.log("UPDATE");
                this.props.saveEdit(formula, this.props.idxEdit)
                this.props.toggleStat(false)


            }

        } else {
            alert("Harap isi semua data")
        }
        // reset state

        this.setState({
            nama: "",
            tanggal: null,
            zatKimia: "",
            listKimia: [],
            efek: ""
        })

    }
    render() {
        // if(this.state.user==="user"){
        //     return <Redirect to="/laporan"></Redirect>
        // }
        console.log("edit data di form", this.props.editobject);
        let stat = "Submit"
        if (this.props.status) {
            stat = "Update"

        }

        return (
            
            <div className="Form">
                <Label>Nama Formula</Label>
                <Text onChange={this.setValue} ></Text>
                <Label>Tanggal Dibuat</Label>
                <Date onChange={this.setValue} ></Date>
                <Label>Zat Kimia</Label>
                <Select onChange={this.setListKimia} />
                <Label >List Zat Kimia</Label>
                <div className="list-kimia">
                    {this.state.listKimia.toString()}
                </div>
                <Label>Efek</Label>
                <TextArea onChange={this.setValue} ></TextArea>
                <Label >Button</Label>
                <Button onClick={this.saveValue} value={stat}></Button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        formula: state.formula,
        editobject: state.objtoEdit,
        status: state.globEdit,
        idxEdit: state.idxEdit,
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setFormula: (obj) => dispatch({
            type: "SET_FORMULA"
            , formula: obj
        }),
        toggleStat: (stat) => dispatch({type: "TOGGLE_EDITSTAT", 
        editstat : stat}),
        saveEdit: (obj, idx) => dispatch({type: "SET_UPDATE", 
        dataBaru: obj, idx:idx})

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form);