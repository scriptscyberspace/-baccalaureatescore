import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Accueil from './component/accueil';

import ScoreMaths from './component/score.maths';
import ScoreTech from './component/score.tech';
import ScoreInfo from './component/score.info';
import ScoreSc from './component/score.sc';
import ScoreEcoGestion from './component/score.ecogest';
import ScoreLettre from './component/score.lettre';
import ScoreSport from './component/score.sport';




class App extends Component{
  render(){
    return (
      
      <Router>
        <Route  path="/" exact component={Accueil}/>
        <Route  path="/scoretech" exact component={ScoreTech}/>
        
        <Route  path="/scoregestion" exact component={ScoreEcoGestion}/>

        <Route  path="/scorescience" exact component={ScoreSc}/>

        <Route  path="/scorelettre" exact component={ScoreLettre}/>

        <Route  path="/scoresport" exact component={ScoreSport}/>

        <Route  path="/scoremaths" exact component={ScoreMaths}/>

        <Route  path="/scoreinfo" exact component={ScoreInfo}/>
        </Router>
    );
  }
  }
  

export default App;
