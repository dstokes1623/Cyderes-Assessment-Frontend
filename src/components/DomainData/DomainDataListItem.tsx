import styled from "styled-components";

interface ListItemProps {
    organization: string;
    country: string;
    state: string;
    domainName: string;
    hostNames: string[];
    ips: string[];
}


const ListItem = styled.li`
    font-size: 16px;
    margin: 8px 0px 8px 0px;
`

const DomainDataListItem = (props: ListItemProps) => {
    const { organization, country, state, domainName, hostNames, ips } = props;
    
    return (
        <ul>
                <ListItem>Organization: {organization}</ListItem>
                <ListItem>Country: {country}</ListItem>
                <ListItem>State: {state}</ListItem>
                <ListItem>Domain Name: {domainName}</ListItem>
                <ListItem>Host Names: {hostNames.length > 0 ? hostNames.toString() : "None"}</ListItem>
                <ListItem>IP Addresses: {ips.length > 0 ? ips.toString() : "None"}</ListItem>
            </ul>
    )
};

export default DomainDataListItem;