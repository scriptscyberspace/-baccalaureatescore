import React, { Component } from 'react';
class Accueil extends Component {
    constructor(props){
        super(props);
          this.onChangeSpecialite = this.onChangeSpecialite.bind(this);
          this.handleChange = this.handleChange.bind(this);
          this.state={
              specialites:["---","Mathématiques","Sciences informatique","Lettre","Sciences expérimentales","Sport",
              "Téchniques","Economie et Gestion"],
              specialite:'',
              maths:'',
              informatique:'',
              lettre:'',
              sciences:'',
              sport:'',
              téchniques:'',
              gestion:'',


    }}
    onChangeSpecialite(e) {
        this.setState({
          specialite: e.target.value
        })
      }
      

      onSubmit = (e) => {
        e.preventDefault();
        switch (this.state.value) {
          case 'maths':
            { 
              window.location = '/scoremaths';
              break;
            }
          case 'informatique':
            {
              window.location = '/scoreinfo';
              break;
            }
          case 'lettre':
            {              
              window.location = '/scorelettre';
              break;
            }
          case 'sciences':
            {
              window.location = '/scorescience';
              break;
            }

          case 'sport':
            {
              window.location = '/scoresport';
              break;
            }
          case 'téchniques':
            {
              window.location = '/scoretech';
              break;
            }

          case 'gestion':
            {
              window.location = '/scoregestion';
              break;
            }
            
          default:
            console.log('si aucune condition n\'est vraie');
        }
        
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }
    render(){

        return (
          <div className="wrapperacc">
            <div className="form-wrapper600">
                <center><p style={{fontSize:"50px"}}>Bienvenue </p>
                  <form onSubmit={this.onSubmit} style={{fontSize:"30px",color:"#000000"}}>
                  <label htmlFor="specialites">Specialites :</label>
                  <button>
                  <select value={this.state.value} onChange={this.handleChange}
                  style={{backgroundColor:"#ffffff",opacity:"0.8"}}>
                    <option >---</option>
                    <option value="gestion">Economie et Gestion</option>                    
                    <option value="lettre">Lettre</option>
                    <option value="maths">Mathématiques</option>
                    <option value="sciences">Sciences expérimentales</option>
                    <option value="informatique">Sciences informatique</option>  
                    <option value="sport">Sport</option>
                    <option value="téchniques">Téchniques</option>
                  </select></button></form>
                    </center>
                    </div>
            </div>
          );
        }
    }

export default Accueil;



/*<button><select 
                          className="form-control"
                          onChange={this.onChangeSpecialite}
                          value={this.state.specialite}  
                          name="specialite" 
                          
                        >
                          {
                            this.state.specialites.map((specialite ,index)=>{
                              return <option key={index} value={ specialite }>{specialite}</option>
                            })
                          }
                        </select></button>*/