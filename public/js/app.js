//Isso aqui é um componente do react, herdeiro de React.Component.
//O unico método obrigatório é o render().
class Foobar extends React.Component {
  render() {
    return (
      <div className='ui unstackable items'>
        Hello World
      </div>
    );
  }
}
//É a renderizaçaõ do DOM do react na página. O componte Foobar, definido pela
//classe Foobar será renderizado no componente de id = content.
ReactDOM.render(
  <Foobar />,
  document.getElementById('content')
);
