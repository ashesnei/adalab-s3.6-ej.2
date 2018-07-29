import React, { Component } from 'react';
import Content from './Content';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Content>
          <h1>Probando el Contenido que quiero mostrar</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quos dolor eveniet officia enim. Illum, nihil cupiditate quam eos itaque consequuntur laboriosam repudiandae laudantium voluptas voluptatum iusto magnam debitis ab!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus est corrupti tenetur sed amet ipsa officiis reiciendis repudiandae sint voluptatem, ipsam facere autem atque, laboriosam ad ullam numquam, iste sapiente.</p>
          <br/>
          <br/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates cupiditate voluptatem architecto ut, mollitia, voluptatum voluptas harum laboriosam cumque adipisci perspiciatis beatae. Voluptatibus labore harum in quam? Omnis, cumque aliquam.</p>
        </Content>
        <Content>
          <h1>Prueba 2 a ver que pasa</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quos dolor eveniet officia enim. Illum, nihil cupiditate quam eos itaque consequuntur laboriosam repudiandae laudantium voluptas voluptatum iusto magnam debitis ab!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus est corrupti tenetur sed amet ipsa officiis reiciendis repudiandae sint voluptatem, ipsam facere autem atque, laboriosam ad ullam numquam, iste sapiente.</p>
          <br/>
          <br/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates cupiditate voluptatem architecto ut, mollitia, voluptatum voluptas harum laboriosam cumque adipisci perspiciatis beatae. Voluptatibus labore harum in quam? Omnis, cumque aliquam.</p>
        </Content>
      </div>
    );
  }
}

export default App;
