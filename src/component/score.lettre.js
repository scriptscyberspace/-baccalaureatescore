import React, { Component } from 'react';

class ScoreLettre extends Component {
    constructor(props){
        super(props);
        this.onChangePhilosophie = this.onChangePhilosophie.bind(this);
        this.onChangeArabe = this.onChangeArabe.bind(this);
        this.onChangeMoyenneF = this.onChangeMoyenneF.bind(this);
        this.onChangeGeo = this.onChangeGeo.bind(this);
        this.onChangeFrançais = this.onChangeFrançais.bind(this);
        this.onChangeAnglais = this.onChangeAnglais.bind(this);
        this.onChangeResult = this.onChangeResult.bind(this);
        this.state={
            arabe:0.00,
            moyennef:0.00,
            geo:0.00,
            français:0.00,
            anglais:0.00,
            philosophie:0.00,
            result:0.00
        }
    }
    
    onChangePhilosophie(e) {
        this.setState({
            philosophie: e.target.value
        })
      }
      
    onChangeGeo(e) {
        this.setState({
          geo: e.target.value
        })
      }
      
    onChangeMoyenneF(e) {
        this.setState({
          moyennef: e.target.value
        })
      }
      onChangeArabe(e) {
        this.setState({
          arabe: e.target.value
        })
      }
      onChangeResult(e) {
        this.setState({
          result: e.target.value
        })
      }
      onChangeFrançais(e) {
        this.setState({
          français: e.target.value
        })
      }
      onChangeAnglais(e) {
        this.setState({
          anglais: e.target.value
        })
      }
      cal = () => {
        this.state.result=Number(this.state.moyennef)*4+Number(this.state.arabe)*1.5
        +Number(this.state.philosophie)*1.5+Number(this.state.geo)*1
        +Number(this.state.anglais)*1+Number(this.state.français)*1
        document.getElementById("result").value = this.state.result;
        return this.state.result;
      }
      onSubmit = (e) => {
        e.preventDefault();
        
      }

    render(){
        return (
            <div className="wrapperlettre">
            <div className="form-wrapper800">
            <a href="/" role="button" style={{fontSize:"20px"}}>
            <i className="fa fas-home"></i>
            Home
          </a>
                <center><p style={{fontSize:"40px"}}>Score Baccalauréat Lettre </p>
                        <table style={{width:"100%" }}>
                          
                        <tbody style={{ color: '#000000',fontSize: 24 }}>
                            <tr>

                                    <td><label htmlFor="moyennef">Moyenne finale </label></td> 
                                    <td><input 
                                        required
                                        type="text"  
                                        name="mayennef" 
                                        value={ this.state.moyennef}
                                        onChange={this.onChangeMoyenneF}
                                        />
                                    </td> 
                                    <td><label htmlFor="moyennef"> المعدل النهائي للبكالوريا</label></td> 
                       
                            </tr>
                            <tr>
                                <td><label htmlFor="arabe">Arabe </label></td>
                                <td><input 
                                  required   
                                  name="arabe" 
                                  value={ this.state.arabe}
                                  onChange={this.onChangeArabe}
                                  />
                                </td>
                                <td><label htmlFor="arabe"> العربية</label></td>
                            </tr>
                            <tr>
                                    <td><label htmlFor="geo">Histoire/Géographie </label></td>
                                    <td><input 
                                        required
                                        type="text"  
                                        name="geo" 
                                        value={ this.state.geo}
                                        onChange={this.onChangeGeo}
                                        />
                                    </td>
                                    <td><label htmlFor="geo"> الجغرافيا/التاريخ</label></td>
                                
                            </tr>
                            <tr>
                                <td><label htmlFor="philosophie">Philosophie </label></td>
                                <td><input 
                                  required   
                                  name="philosophie" 
                                  value={ this.state.philosophie}
                                  onChange={this.onChangePhilosophie}
                                  />
                                </td>
                                <td><label htmlFor="philosophie"> الفلسفة</label></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="français">Français </label></td>
                                <td><input 
                                  required   
                                  name="français" 
                                  value={ this.state.français}
                                  onChange={this.onChangeFrançais}
                                  />
                                </td>
                                <td><label htmlFor="français"> الفرنسية</label></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="anglais">Anglais </label></td>
                                <td><input 
                                  required   
                                  name="anglais" 
                                  value={ this.state.anglais}
                                  onChange={this.onChangeAnglais}
                                  />
                                </td>
                                <td><label htmlFor="anglais"> الانجليزية</label></td>
                            </tr>
                            </tbody>
                          </table>
                          <br/>
                        <button  onClick={this.cal} style={{backgroundColor:"grey" ,width:"12%"}}>Calculer</button>
                        <br/><br/>
                        <input name="result" id="result" type="text" style={{color:"red", fontSize:"26px"}}></input>

                    </center>
                    <br/>
                    <div className="req">
                      <p style={{color:"#ffffff", fontSize:"16px"}}>Formule de session contrôle :</p>
                      <p style={{color:"#ffffff", fontSize:"14px"}}>
                    *Moyenne finale = [(Moyenne de la session principale * 2)+(Moyenne de la session de contrôle)]/3
                    <br/>
                    *Note = [(Note de la session principale * 2)+(Note de la session de contrôle)]/3
                    </p></div>
                    </div>
            </div>
          );
        }
    }

export default ScoreLettre;
