import './App.css';

function App() {

  const users = [

    {
      fullName:'Metul Romel',
      age : 23,

      phone : [
      {home:'01304284953'},
      {office :'92301133'}
      ]
      
    },
    {
      fullName:'Zahurul Islam',
      age : 20,

      phone : [
      {home:'01304284953'},
      {office :'92301133'}
      ]
      
    }

  ]
  return (
    <div className="App">
     <h1 className='heading'>nested-mapping</h1>

      {
        users.map((user,index) => <article key={index}>
          <h1>FullName:{user.fullName}</h1>
          <p> Age:{user.age}</p>
          {
            user.phone.map((phone,index)=> <div key={index}>
              <p> Home:{phone.home}</p>
              <p> Office: {phone.office}</p>
            </div>)
          }
        </article>)
      }

    </div>
  );
}

export default App;
