import Card from "../Card";
import DomainDataListItem from "./DomainDataListItem";
interface SubRecord {
    registrant: {
        country: string;
        countryCode: string;
        organization: string;
        rawText: string;
        state: string;
    };
    domainName: string;
    nameServers: {
        hostNames: string[];
        ips: string[];
        rawText: string;
    };
}
interface DomainDataShape {
    domainData: {
        registrant: {
            country: string;
            countryCode: string;
            organization: string;
            rawText: string;
            state: string;
        };
        domainName: string;
        nameServers: {
            hostNames: string[];
            ips: string[];
            rawText: string;
        };
        subRecords: SubRecord[];
    }  
}

const DomainDataList = (props: DomainDataShape) => {
    const {
        domainData
    } = props;

    let subRecords = domainData.subRecords;
    let listItems: JSX.Element[] = [];
    if (subRecords && subRecords.length > 0) { 
        listItems = subRecords.map((record, idx) => {
            const {registrant: { country, organization, state}, domainName} = record;
            const hostNames = record.nameServers ? record.nameServers.hostNames : [];
            const ips = record.nameServers ? record.nameServers.ips : [];

            return <DomainDataListItem 
                        key={`domain-item-${idx + 1}`} 
                        country={country} 
                        organization={organization} 
                        state={state} 
                        domainName={domainName} 
                        hostNames={hostNames} 
                        ips={ips} 
                    />
        })
    }
    
    //Check if nameServers was returned as not all domains/ips have this available
    const nameServers = domainData.nameServers ? domainData.nameServers : null;

    const hostNames = nameServers ? nameServers.hostNames : [];
    const ips = nameServers ? nameServers.ips : [];
    return (
        <Card>
            {listItems.length > 0 
            ? listItems 
            : <DomainDataListItem 
                    country={domainData.registrant.country} 
                    organization={domainData.registrant.organization} 
                    state={domainData.registrant.state} 
                    domainName={domainData.domainName} 
                    hostNames={hostNames} 
                    ips={ips} 
                />}
        </Card>
    )
};

export default DomainDataList;