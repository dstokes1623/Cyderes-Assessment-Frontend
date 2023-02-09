import Form, { FormData } from "./components/Form";
import Header from "./components/Header";
import DomainDataList from "./components/DomainData/DomainDataList";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import Card from "./components/Card";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [ domainData, setDomainData ] = useState(null);
  
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setError('');
    setDomainData(null);
    setIsLoading(true);

    const apiUrl = `https://stokes-cyderes-api.herokuapp.com/v1/whois/${data.domain}`
    const domainData = await fetch(apiUrl);
    if(domainData.status !== 200) {
      setIsLoading(false)
      setError('Unable to retrieve domain data');

      return;
    }
    const jsonResponse = await domainData.json();

    setDomainData(jsonResponse);

    setIsLoading(false);
  };
  return (
    <>
      <Header>
        <h1>Domain Lookup</h1>
      </Header>
      <main>
        <section>
            <Form onSubmit={onSubmit}/>
        </section>
        <section>
          {!isLoading && domainData && <DomainDataList domainData={domainData} />}
          {isLoading && <Card><p>Loading...</p></Card>}
          {!isLoading && error.length > 0 && <Card><p>{error}</p></Card>}
        </section>
        
      </main>
    </>
  );
}

export default App;
