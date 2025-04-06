import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom';
import Main from './components/Main/Main';
import Error from './components/Error/Error';



export default class App extends React.Component {

  state = {
    loading: true
  };

  componentDidMount() {
    this.fakeRequest().then(() => {
      const el = document.querySelector(".loader-body");
      if (el) {
        el.remove();  
        this.setState({ loading: false }); 
      }
    });
  }

  fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 3000));
  };

  render() {

    if (this.state.loading) {
      return null; 
    }


    return (
      <>           
        <div className="App">
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path='*' element={<Error/>}/>  
          </Routes>
        </div>
      </>
    )
  }
}
