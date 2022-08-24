import React, { Component } from 'react';

class ScoreInfo extends Component {
    constructor(props){
        super(props);
        this.onChangeMathematiques = this.onChangeMathematiques.bind(this);
        this.onChangePhysique = this.onChangePhysique.bind(this);
        this.onChangeMoyenneF = this.onChangeMoyenneF.bind(this);
        this.onChangeAlgo = this.onChangeAlgo.bind(this);
        this.onChangeBD = this.onChangeBD.bind(this);
        this.onChangeTic = this.onChangeTic.bind(this);
        this.onChangeFrançais = this.onChangeFrançais.bind(this);
        this.onChangeAnglais = this.onChangeAnglais.bind(this);
        this.onChangeResult = this.onChangeResult.bind(this);
        this.state={
            mathematiques:0.00,
            physique:0.00,
            moyennef:0.00,
            algo:0.00,
            tic:0.00,
            db:0.00,
            français:0.00,
            anglais:0.00,
            result:0.00
        }
    }
    onChangeMathematiques(e) {
        this.setState({
          mathematiques: e.target.value
        })
      }
      onChangeResult(e) {
        this.setState({
          result: e.target.value
        })
      }
      
    onChangePhysique(e) {
        this.setState({
          physique: e.target.value
        })
      }
      
    onChangeMoyenneF(e) {
        this.setState({
          moyennef: e.target.value
        })
      }
      onChangeAlgo(e) {
        this.setState({
          algo: e.target.value
        })
      }
      onChangeTic(e) {
        this.setState({
          tic: e.target.value
        })
      }
      onChangeBD(e) {
        this.setState({
          db: e.target.value
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
        this.state.result=Number(this.state.moyennef)*4+Number(this.state.physique)*0.5
        +Number(this.state.tic)*0.25+Number(this.state.db)*0.25
        +Number(this.state.mathematiques)*1.5+Number(this.state.algo)*1.5
        +Number(this.state.anglais)*1+Number(this.state.français)*1
        document.getElementById("result").value = this.state.result;
        return this.state.result;
      }
      onSubmit = (e) => {
        e.preventDefault();
        
      }

    render(){
        return (
          <div className="wrapperinfo">
            <div className="form-wrapper800">
            <a href="/" role="button" style={{fontSize:"20px",marginTop:"40px"}}>
            <i className="fa fas-home"></i>
            Home
          </a>
                <center><p style={{fontSize:"40px"}}>Score Baccalauréat Sciences Informatique </p>
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
                                <td><label htmlFor="algo">Algorithmes </label></td>
                                <td><input 
                                  required   
                                  name="algo" 
                                  value={ this.state.algo}
                                  onChange={this.onChangeAlgo}
                                  />
                                </td>
                                <td><label htmlFor="algo"> الخوارزميات</label></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="tic">TIC </label></td>
                                <td><input 
                                  required   
                                  name="tic" 
                                  value={ this.state.tic}
                                  onChange={this.onChangeTic}
                                  />
                                </td>
                                <td><label htmlFor="sciences"> تكنولوجيات المعلومات و الإتصالات</label></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="db">Base de données </label></td>
                                <td><input 
                                  required   
                                  name="db" 
                                  value={ this.state.db}
                                  onChange={this.onChangeBD}
                                  />
                                </td>
                                <td><label htmlFor="db"> قاعدة بيانات</label></td>
                            </tr>
                            <tr>

                                    <td><label htmlFor="mathematiques">Mathématiques </label></td> 
                                    <td><input 
                                        required
                                        type="text"  
                                        name="mathematiques" 
                                        value={ this.state.mathematiques}
                                        onChange={this.onChangeMathematiques}
                                        />
                                    </td> 
                                    <td><label htmlFor="mathematiques"> الرياضيات</label></td> 
                       
                            </tr>
                            <tr>
                                    <td><label htmlFor="physique">Science physique </label></td>
                                    <td><input 
                                        required
                                        type="text"  
                                        name="physique" 
                                        value={ this.state.physique}
                                        onChange={this.onChangePhysique}
                                        />
                                    </td>
                                    <td><label htmlFor="physique"> العلوم الفيزيائية</label></td>
                                
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

export default ScoreInfo;
