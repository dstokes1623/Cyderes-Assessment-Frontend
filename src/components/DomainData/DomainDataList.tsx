import Card from "../Card";
import DomainDataListItem from "./DomainDataListItem";
import styled from "styled-components";

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

const ListItem = styled.li`
    font-size: 16px;
    margin: 8px 0px 8px 0px;
`
const DomainDataList = (props: DomainDataShape) => {
    const {
        domainData
    } = props;

    let subRecords = domainData.subRecords;
    let listItems: JSX.Element[] = [];
    if (subRecords && subRecords.length > 0) { 
        listItems = subRecords.map((record, idx) => {
            const {registrant: { country, organization, state}, domainName, nameServers} = record;
            const hostNames = nameServers.hostNames ? nameServers.hostNames : [];
            const ips = nameServers.ips ? nameServers.ips : [];

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
    return (
        <Card>
            {listItems.length > 0 
            ? listItems 
            : <DomainDataListItem 
                    country={domainData.registrant.country} 
                    organization={domainData.registrant.organization} 
                    state={domainData.registrant.state} 
                    domainName={domainData.domainName} 
                    hostNames={domainData.nameServers.hostNames} 
                    ips={domainData.nameServers.ips} 
                />}
        </Card>
    )
};

export default DomainDataList;